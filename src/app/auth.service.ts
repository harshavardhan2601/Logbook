import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { staffModal } from './admin/models/staffmodal';
import { locationModal } from './admin/models/location';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  uri = 'http://localhost:3000';

  constructor(private http: HttpClient,private router: Router) { }


  logindata(data) {
    console.log(data)
    var obj ={
      email:data.email,
      password: data.password
    }
    return this.http.post(`${this.uri}/login`, obj)
    // .subscribe(res => console.log('Done'));
  }

  addlocation(data) {
    console.log(data)
    return this.http.post(`${this.uri}/addLocationData`, data)
  }

  locationlist(): Observable<locationModal[]>{
    return this.http.get<locationModal[]>(`${this.uri}/LocationList`)
  }

  locationview(id) {
    console.log(id)
    return this.http.get(`${this.uri}/listLocationview/${id}`)
  }

  updatelocation(data) {
    console.log(data)
    return this.http.post(`${this.uri}/updateLocationData`,data)
  }

  deletelocation(id) {
    return this.http.get(`${this.uri}/locationdelete/${id}`)
  }


  addstaff(data) {
    console.log(data)
    return this.http.post(`${this.uri}/addStaffdata`, data)
  }

  stafflist(): Observable<staffModal[]>{
    return this.http.get<staffModal[]>(`${this.uri}/staffList`)
  }

  staffview(id) {
    console.log(id)
    return this.http.get(`${this.uri}/staffview/${id}`)
  }

  updatestaff(data,id) {
    console.log(id)
    return this.http.post(`${this.uri}/staffupdate`,data)
  }

  deletestaff(id) {
    return this.http.get(`${this.uri}/staffdelete/${id}`)
  }


  logout() {
    window.localStorage.removeItem('usertoken')
    return this.http.get(`${this.uri}/logout`)
  }
}
