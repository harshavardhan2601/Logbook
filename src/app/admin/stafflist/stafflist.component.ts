import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { staffModal } from '../models/staffmodal';

@Component({
  selector: 'app-stafflist',
  templateUrl: './stafflist.component.html',
  styleUrls: ['./stafflist.component.css']
})
export class StafflistComponent implements OnInit {

  staffdata:staffModal[] = new Array
  constructor(private auth:AuthService) { }

  ngOnInit(): void {
    this.auth.stafflist().subscribe(res => {
      console.log(res)
      this.staffdata = res
    });
  }

  delete(id) {
    console.log(id)
    this.auth.deletestaff(id).subscribe(res => {
      if (res) {
        window.location.reload();
      }
    })
  }

}
