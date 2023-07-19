import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormControl,FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../environments/environment.development';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });  

  errorMessage = 'This field is required!';

  constructor(private http: HttpClient){   
  }

  get email(){
    return this.loginForm.get('email');
  }
  get password(){
    return this.loginForm.get('password');
  }

  onSubmit(formDirective: FormGroupDirective){
    const LIVEURL =  env.loginURL;

    let user = {
      username: this.loginForm.value.email,
      password: this.loginForm.value.password
    }
    
    this.http.post(LIVEURL, user).subscribe((response: any) => {
      // ez necces
      console.log(response);
    });
    
    formDirective.resetForm();
    this.loginForm.reset();
  }

}
