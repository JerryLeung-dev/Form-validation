import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validators } from '@angular/forms';
import { createPasswordStrengthValidator } from '../validators/createPasswordStrengthValidator';
@Directive({
  selector: '[passwordStrength]',
  providers: [{
    provide: NG_VALIDATORS, //this is an alias oof PasswordStrengthDirective
    useExisting:PasswordStrengthDirective,
    multi:true
  }]
})
export class PasswordStrengthDirective implements Validators{

  validate(control:AbstractControl):ValidationErrors | null {
    return createPasswordStrengthValidator()(control);
  }
}
