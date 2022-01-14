import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { debounceTime, map, Observable, Subject } from 'rxjs';
import { apikey } from '../api-key';

@Injectable()
export class BackendCallService {
  private weatherApi = `https://api.openweathermap.org/data/2.5/onecall?lat=`;
  private geocodeApi = `https://api.openweathermap.org/geo/1.0/direct?q=`;
  private apiKey = apikey;
  public weatherResult = new Subject();
  public position = new Subject();
  constructor(private http: HttpClient) {}
  // TODO; typecast return object
  getWeather(requestData: {
    lat: string;
    lon: string;
    part: string;
  }): Observable<any> {
    return this.http.get(
      this.weatherApi +
        requestData.lat +
        '&lon=' +
        requestData.lon +
        '&exclude=' +
        requestData.part +
        '&appid=' +
        this.apiKey +
        '&units=imperial'
    );
  }

  //TODO: here we only take first result, but as we know there are many places that has the same name, a dropdown is needed to show all the results
  getGeocode(locationName: string): Observable<any> {
    return this.http.get(
      this.geocodeApi + locationName + '&limit=1&appid=' + this.apiKey
    );
  }
  getHourlyWeather(location:{lat: number, lon: number}): Observable<any> {
    return this.http.get(`pro.openweathermap.org/data/2.5/forecast/hourly?lat=${location.lat}&lon=${location.lon}&appid=${this.apiKey}`)
  }
}
