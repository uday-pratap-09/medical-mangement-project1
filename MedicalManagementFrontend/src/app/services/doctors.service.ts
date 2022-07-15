import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService {

  constructor(private _http:HttpClient) { }
  public getDoctorsOfOpd(dId){
    return this._http.get(`${baseUrl}/doctors/doctor/${dId}`);
  }
}
