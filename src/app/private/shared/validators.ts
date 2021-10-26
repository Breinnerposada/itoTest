import { AbstractControl } from '@angular/forms';

export function UserValidator(control: AbstractControl) {
  if (control.value?.match(/^\d/) ) {
    return { userInvalid: true };
  }
  return null;
}
