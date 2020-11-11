import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from  '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

interface TokenResponse {
  token: string
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title: string;
  loginForm: FormGroup;
  private token: string
  constructor(private formBuilder: FormBuilder,private authService: AuthService,private router: Router) {
    this.createForm();
   }

   createForm() {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  ngOnInit(): void {
    this.title = 'Administrator Login';
  }

  onSubmit() {
    console.log(this.loginForm.value)
    var data = this.loginForm.value
    this.authService.logindata(data).subscribe(res =>{
      // console.log(res)
      this.resultfile(res);
      
    });
    // this.router.navigateByUrl('/backend/dashboard');
  }

  resultfile(e) {
    console.log(e);
    localStorage.setItem('usertoken', e)
    if (e.role_id == 0) {
      console.log(true)
      window.location.href='/admin/dashboard';
    }
    
  } 

}
