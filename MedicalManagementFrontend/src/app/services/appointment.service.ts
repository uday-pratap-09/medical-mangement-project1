import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private _http:HttpClient) { }
  public getopd(opdid){
    return this._http.get(`${baseUrl}/opdSchedule/${opdid}`);
  }
  //add opdSchedule
  public bookAppointment(app){
    return this._http.post(`${baseUrl}/appointment/`,app);
   }
}
