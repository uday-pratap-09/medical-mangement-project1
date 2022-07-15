import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class LoadopdscheduleService {

  constructor(private _http:HttpClient) { }
  public getopd(opdid){
    return this._http.get(`${baseUrl}/opdSchedule/${opdid}`);
  }
  public opds(){
    return this._http.get(`${baseUrl}/opdSchedule/`);
  }
}
