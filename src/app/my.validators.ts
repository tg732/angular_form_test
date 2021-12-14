import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export const identityRevealedValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const re_password = control.get('re_password');
  
    return password?.value !== re_password?.value ? { identityRevealed: true } : null;
  };

export class MyValidators {
    static confirmPassword(control: FormGroup): {[key: string]: boolean} {
        /*if (true){
            return {
                'restrintedEmail': true
            }
        }
        return null*/
        console.log(control)
        if (control.get('password')?.value > control.get('re_password')?.value) {
            control.controls['re_password'].setErrors({ 'value2GreaterThanValue1': true });
            /*return {
                'value2GreaterThanValue1': true
            }*/
        }
         return {
            'value2GreaterThanValue1': false
        }
    }
}