import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { locationModal } from '../models/location';

@Component({
  selector: 'app-location-view',
  templateUrl: './location-view.component.html',
  styleUrls: ['./location-view.component.css']
})
export class LocationViewComponent implements OnInit {

  locationdata = <locationModal>{}
  constructor(private auth: AuthService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.auth.locationview(params['id']).subscribe((res:locationModal) =>{
        this.locationdata = res
      })
      
  });
  }

}
