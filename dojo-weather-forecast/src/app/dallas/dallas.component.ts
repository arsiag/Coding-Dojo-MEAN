import { Component, OnInit } from '@angular/core';
import { WeatherService } from './../weather.service';

@Component({
  selector: 'app-dallas',
  templateUrl: './dallas.component.html',
  styleUrls: ['./dallas.component.css']
})
export class DallasComponent implements OnInit {
  weather;
  temp;
  maxTemp;
  minTemp;
  humidity;
  wind;
  status;

  constructor(private _weatherService: WeatherService) { }

  ngOnInit() {
    // this.weather = this._weatherService.getWeather1('dallas')
    // .then( weather => {
    //   // console.log('weather: ' , weather);
    //   this.humidity = weather.main.humidity;
    //   this.temp = weather.main.temp;
    //   this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
    //   this.maxTemp = weather.main.temp_max;
    //   this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
    //   this.minTemp = weather.main.temp_min;
    //   this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
    //   this.wind = weather.wind.speed;
    //   this.status = weather.weather[0].description;
    // });

    this.weather = this._weatherService.getWeather2('dallas', (weather) => {
      if (! weather) {
        console.log('weather error: ' , weather);
      } else {
        // console.log('weather success: ' , weather);
        this.humidity = weather.main.humidity;
        this.temp = weather.main.temp;
        this.temp = Math.floor(this.temp * (9 / 5) - 459.67);
        this.maxTemp = weather.main.temp_max;
        this.maxTemp = Math.floor(this.maxTemp * (9 / 5) - 459.67);
        this.minTemp = weather.main.temp_min;
        this.minTemp = Math.floor(this.minTemp * (9 / 5) - 459.67);
        this.wind = weather.wind.speed;
        this.status = weather.weather[0].description;
      }
    });
  }

}
