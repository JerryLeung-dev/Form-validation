import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { passwordConfirmValidator } from '../validators/passwordConfirmValidator';

@Directive({
  selector: '[passwordConfirm]',
  providers: [{
    provide: NG_VALIDATORS,
    useExisting: PasswordConfirmDirective,
    multi:true
  }]
})
export class PasswordConfirmDirective implements Validators {

  validate(control: AbstractControl):ValidationErrors |null {
    return passwordConfirmValidator()(control);
  }

}
