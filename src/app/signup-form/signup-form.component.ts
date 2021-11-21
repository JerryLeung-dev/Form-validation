import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class CrossFieldErrorMatcher implements ErrorStateMatcher {
  isErrorState(control: AbstractControl | null, form: NgForm | null): boolean {

    let isValid:boolean | null=false;
      if(control && form){
        isValid = control.dirty && form.invalid;
      }
      if(isValid == null){
        isValid = false;
      }
      return isValid;

  }
}

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit {
  errorMatcher = new CrossFieldErrorMatcher();
  constructor() { }

  ngOnInit(): void {
  }

  signup(form:any):void{
    console.log(form);
  }

}
