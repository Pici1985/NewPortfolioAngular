import { Component } from '@angular/core';
import { FormControl,FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { env } from '../../../environments/environment.development';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  exampleForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    subject: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required),
  });
  
  
  errorMessage = 'This field is required, please enter a value!';
  
  constructor(private http: HttpClient){   
  }
  
  get name(){
    return this.exampleForm.get('name');
  }
  get subject(){
    return this.exampleForm.get('subject');
  }
  get message(){
    return this.exampleForm.get('message');
  }
  
  onSubmit(formDirective: FormGroupDirective){ 
    
    const EMAILTO = env.email;
    const LOCALURL =  env.url;
  
    let contact = {
      to: EMAILTO,
      subject: this.exampleForm.value.subject,
      body: this.exampleForm.value.message
    }

    this.http.post(LOCALURL, contact).subscribe((response: any) => {
      console.log(response);
    });

    formDirective.resetForm();
    this.exampleForm.reset();
  }
}

