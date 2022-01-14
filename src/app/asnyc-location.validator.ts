import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { debounceTime, map, Observable, of, switchMap } from 'rxjs';
import { BackendCallService } from './backend-call.service';

export function locationValidator(
  backend: BackendCallService
): AsyncValidatorFn {
  return (
    control: AbstractControl
  ): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> => {
    if (control.value) {
      return backend.getGeocode(control.value).pipe(
        debounceTime(100),
        switchMap((value) => {
          if (value && value.hasOwnProperty('length') && value.length > 0) {
            const lat = value[0].lat;
            const lon = value[0].lon;
            backend.position.next({lat: lat, lon:lon});
            return backend.getWeather({
              lat: lat,
              lon: lon,
              part: 'minutely,alerts',
            });
          } else {
            return of({ locationError: true });
          }
        }),
        map((weatherRes) => {
          if (weatherRes.hasOwnProperty('locationError')) {
            return { locationError: true };
          } else {
            //here use current property to see if this is a success call
            if (weatherRes.hasOwnProperty('current')) {
              // transport the result to service.ts
              backend.weatherResult.next(weatherRes);
              return null;
            } else {
              return { weatherError: true };
            }
          }
        })
      );
    } else {
      return of(null);
    }
  };
}
