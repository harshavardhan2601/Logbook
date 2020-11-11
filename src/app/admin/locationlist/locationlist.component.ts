import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { locationModal } from '../models/location';

@Component({
  selector: 'app-locationlist',
  templateUrl: './locationlist.component.html',
  styleUrls: ['./locationlist.component.css']
})
export class LocationlistComponent implements OnInit {

  locationdata:locationModal[] = new Array
  constructor(private auth : AuthService) { }

  ngOnInit(): void {
    this.auth.locationlist().subscribe(res =>{
      console.log(res)
      this.locationdata = res
    })
  }

  delete(id) {
    console.log(id)
    this.auth.deletelocation(id).subscribe(res =>{
      if (res) {
        window.location.reload()
      }
    })
  }

}
