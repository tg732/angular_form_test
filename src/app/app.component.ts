import {Component, OnInit} from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { identityRevealedValidator, MyValidators } from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent /*implements OnInit*/ {
  //form = new FormGroup({})
  selected = 'option1';
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  form = new FormGroup({
    account: new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.minLength(6), 
        Validators.required
      ]),
      re_password: new FormControl('', [
        Validators.minLength(6), 
        Validators.required
      ]),
    }, { validators: identityRevealedValidator }),
    
    profile: new FormGroup({
      name: new FormControl('', [
      ]),
      tel: new FormControl('', [
        Validators.pattern("^8[(][0-9]{3}[)]{0,1}[\s0-9]*$")
      ]),
      city: new FormControl('', [
      ]),
    }),
    
    company: new FormGroup({
      org_name: new FormControl('', [
        Validators.required
      ]),
      own_type: new FormControl('', [
        Validators.required
      ]),
      inn: new FormControl('', [
        Validators.required
      ]),
      kpp: new FormControl('', [
        Validators.required
      ]),
      okpo: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
    }),
    
    contacts: new FormArray([
      new FormGroup({
        contact_name: new FormControl(''),
        duty: new FormControl(''),
        contact_tel: new FormControl('')
      })
    ]),
  })
  //console.log(this.form)
  /*ngOnInit() {
    
  }*/

  submit(){
    console.log(this.form.value)
  }

  //contacts = this.form.get('contacts') as FormArray;
  get contacts()
  {
      return this.form.get('contacts') as FormArray
  }

  con() {
    console.log(this.form.get('account')?.get('email'))
  }
}

