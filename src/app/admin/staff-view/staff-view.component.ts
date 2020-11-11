import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { staffModal } from '../models/staffmodal';

@Component({
  selector: 'app-staff-view',
  templateUrl: './staff-view.component.html',
  styleUrls: ['./staff-view.component.css']
})
export class StaffViewComponent implements OnInit {

  staffdata = <staffModal>{}
  constructor(private auth: AuthService, private route: ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      console.log(params['id'])
      this.auth.staffview(params['id'])
      .subscribe((res:staffModal) =>{
        this.staffdata =res
        console.log(this.staffdata)
      })
  });


  }

}
