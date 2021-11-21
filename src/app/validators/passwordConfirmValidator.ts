import { AbstractControl, ValidationErrors, ValidatorFn } from "@angular/forms";

export function passwordConfirmValidator():ValidatorFn {
  return (control:AbstractControl):ValidationErrors|null => {
    let isMatched = false;
    const value = control.value;
    if(!value) {
      return null;
    }
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    if(password?.value == confirmPassword?.value) {
      isMatched = true
    }
    // console.log(password?.value,confirmPassword?.value, isMatched);

    return password && confirmPassword && password.value !== confirmPassword.value ? { passwordNotMatched: true } : null;
  }
}
