import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { locationModal } from '../models/location';

@Component({
  selector: 'app-location-edit',
  templateUrl: './location-edit.component.html',
  styleUrls: ['./location-edit.component.css']
})
export class LocationEditComponent implements OnInit {

  locationdata = <locationModal>{};
  constructor(private auth: AuthService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.auth.locationview(params['id']).subscribe((res:locationModal) =>{
        this.locationdata = res
        console.log(this.locationdata)
      })
      
  });
  }

  submitForm() {
    console.log(this.locationdata)
    this.auth.updatelocation(this.locationdata).subscribe(res =>{
      if (res) {
        window.location.href='/admin/locationList';
      }
    })
  }

}
