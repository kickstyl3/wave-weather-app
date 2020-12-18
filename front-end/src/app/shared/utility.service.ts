import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  weatherConditionIconUrl: string;

  constructor() { }

  weatherConditionHandler(description) {
    const dateNow = new Date();
    const timeNow = +moment(dateNow).format("k");

    if (description === 'Clear' && timeNow <= 17) {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += 'clear-sun.svg';
    } else if (description === 'Clear' && timeNow >= 17) {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += 'clear-moon.svg';
    } else if (description === 'Rain') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Snow') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Clouds') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    } else if (description === 'Thunderstorm') {
      this.weatherConditionIconUrl = "../../../assets/img/weather-conditions/";
      this.weatherConditionIconUrl += description.toLowerCase() + '.svg';
    }
    return this.weatherConditionIconUrl;
  }
}
