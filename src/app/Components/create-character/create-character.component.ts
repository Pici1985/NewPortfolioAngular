import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-character',
  templateUrl: './create-character.component.html',
  styleUrls: ['./create-character.component.css']
})
export class CreateCharacterComponent {
  exampleForm: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    class: new FormControl('', Validators.required),
    level: new FormControl('', Validators.required),
    ke: new FormControl('', Validators.required),
    te: new FormControl('', Validators.required),
    ve: new FormControl('', Validators.required),
    fp: new FormControl('', Validators.required),
    ep: new FormControl('', Validators.required),
    sfe: new FormControl('', Validators.required),
    spj: new FormControl('', Validators.required),
    spb: new FormControl('', Validators.required),
  });
  
  errorMessage = 'This field is required, please enter a value!';

  constructor(){ }

  get name(){
    return this.exampleForm.get('name');
  }
  get class(){
    return this.exampleForm.get('class');
  }
  get level(){
    return this.exampleForm.get('level');
  }
  get ke(){
    return this.exampleForm.get('ke');
  }
  get te(){
    return this.exampleForm.get('te');
  }
  get ve(){
    return this.exampleForm.get('ve');
  }
  get fp(){
    return this.exampleForm.get('fp');
  }
  get ep(){
    return this.exampleForm.get('ep');
  }
  get sfe(){
    return this.exampleForm.get('sfe');
  }
  get spj(){
    return this.exampleForm.get('spj');
  }
  get spb(){
    return this.exampleForm.get('spb');
  }
  
  onSubmit(){ 
    console.log(this.exampleForm.value)
    this.exampleForm.reset();
  } 
}
