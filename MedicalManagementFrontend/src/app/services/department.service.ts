import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private _http:HttpClient) { }
  //load all the categories
  public departments(){
    return this._http.get(`${baseUrl}/department/`);
  }
  //add new category
  public addDepartment(department){
    return this._http.post(`${baseUrl}/department/`,department);
  }
  public deleteDepartment(did){
    return this._http.delete(`${baseUrl}/department/${did}`);
  }
  public updateDepartment(did){
    return this._http.put(`${baseUrl}/department/`,did)
  }
  public getDepartment(did){
    return this._http.get(`${baseUrl}/department/${did}`);
  }
}
