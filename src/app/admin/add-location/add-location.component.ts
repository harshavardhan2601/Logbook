import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { locationModal } from '../models/location';

@Component({
  selector: 'app-add-location',
  templateUrl: './add-location.component.html',
  styleUrls: ['./add-location.component.css']
})
export class AddLocationComponent implements OnInit {

  locationdata = <locationModal>{};
  constructor(private fb: FormBuilder, private router: Router, private auth :AuthService) { }

  ngOnInit(): void {
    
  }



  submitForm() {
    console.log(this.locationdata)
    this.auth.addlocation(this.locationdata).subscribe(res =>{
      if (res) {
        window.location.href='/admin/locationList';
      }
    })
  }
}
