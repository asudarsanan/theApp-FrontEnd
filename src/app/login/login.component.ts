import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user!: User;
  loginForm!: FormGroup;
  errorMessage!:any;
  successMessage!:any;
  tryToLogin!: boolean;
  thisIsError!:boolean;
  user1!:User;
  
  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {

   }

  ngOnInit(): void {
    this.user = new User();
    this.createForm();
  }
  createForm() {
    this.loginForm = this.fb.group({
      username: [this.user.username,[Validators.required],null],
      password: [this.user.password, [Validators.required], null]
    });
  }

  login(){
    this.tryToLogin = true;
    this.errorMessage = null;
    this.successMessage = null;
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    this.user = this.loginForm.value as User;

    this.loginService.login(this.user).subscribe(
      (response) => {
        this.user = response
        sessionStorage.setItem("user", JSON.stringify(response));
        console.log("this is username from response "+ this.user.username);
        // localStorage.setItem('username',this.user.username);
        // localStorage.setItem('email',this.user.email);

        this.tryToLogin = false;
        this.router.navigate(['/userhome']);
      },
      (error) => {
        this.tryToLogin = false;
        this.thisIsError = true;
        this.errorMessage = <any> error;
      }
    )


  }

}
