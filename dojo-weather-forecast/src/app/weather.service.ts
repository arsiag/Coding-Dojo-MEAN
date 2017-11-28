import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
// import 'rxjs';
// import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {

  constructor(private _http: Http) { }

  getWeather1(city: string) {
    return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=946590f1772fcc1b6b22af23928ecc29`)
    .map( data => data.json() )
    .toPromise();
  }

  getWeather2(city: string, callback) {
    this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=946590f1772fcc1b6b22af23928ecc29`)
      .subscribe(
        (response) => { callback(response.json()); },
        (error) => { console.log(error); callback(false); }
      );
  }

}
