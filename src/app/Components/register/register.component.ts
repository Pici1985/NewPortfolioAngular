import { Input, Component, Output, EventEmitter } from '@angular/core';
import { FormControl,FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../environments/environment.development';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });  

  errorMessage = 'This field is required!';

  constructor(private http: HttpClient){   
  }

  get username(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }

  onSubmit(formDirective: FormGroupDirective){
    const REGISTERURL =  env.registerURL;

    let user = {
      username: this.registerForm.value.username,
      password: this.registerForm.value.password
    }
    
    this.http.post(REGISTERURL, user).subscribe((response: any) => {
      // ez necces
      console.log(response);
    });
    
    formDirective.resetForm();
    this.registerForm.reset();
  }
}
