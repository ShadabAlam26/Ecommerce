import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators,FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { SnackBarPositionExample } from '../common-moda';
import { AuthService } from '../service/auth.service';
import { loginLabel } from '../label-externalisation/login-externalisation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  hide= true;

  public label:loginLabel;

  public loginForm:FormGroup;
  loginAlert: boolean = false;
  loginFail: boolean = false;


  constructor(private fb:FormBuilder,private router:Router,private auth:AuthService,private app:AppComponent) { }

  ngOnInit(): void {

    this.loginForm = this.fb.group({
      username:['',[Validators.required,Validators.minLength(3)]],
      password:['',Validators.required]
    })

    /* Label Externalisation */
    this.label = new loginLabel()
  }

    /* 
      login() used for authenticate user.
      *@user store the data of user by checking if user is present or not.
      *If user is present then it store a token in localStorage & navigate to '/store' route succesfuuly.
   */

  login(){
  
    this.auth.loginUser().subscribe(
      res=>{
       console.log(res);
       
        const user = res.find((x:any)=>{
          return x.username === this.loginForm.get('username').value && x.password === this.loginForm.get('password').value
        });

        if(user)
        {
          this.loginForm.reset();
          this.router.navigate(['/store']);

          //This token is hardcoded.
          localStorage.setItem('token','abcdefghijklmnopqrstuvwxyz');
          localStorage.setItem('name',user.username)
        
          this.app.setSuccessMessage(`Welcome ${user.username} to e-commerce website`)

        }else{
          this.app.setErrorMessage('Invalid Login Credential!! Try again.')
        }
      },
      err=>{
        this.app.setErrorMessage('API Failed, Try again!!')
      }
    )
  } 
}
