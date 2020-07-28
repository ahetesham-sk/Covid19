import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Covid19Service {

  BASEURL: string = 'https://api.covid19api.com/';
  countryID : string ='';

  constructor(private http:HttpClient) { }

  getAllCountries(){
    return this.http.get(`${this.BASEURL}/countries`);
  }

  getSummary(){
    return this.http.get(`${this.BASEURL}/summary`)
  }

  getSummaryByCountry(countryID){
    return this.http.get(`${this.BASEURL}/country/${countryID}`)
  }
}
