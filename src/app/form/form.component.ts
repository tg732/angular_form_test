import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { identityRevealedValidator } from '../my.validators';

interface CompType {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  form = new FormGroup({})
  @Input() _formDataValue = '';
  get formDataValue(): string {
    return this._formDataValue;
  }
  @Input() set formDataValue(value: string) {
      this._formDataValue = value;
  }
  selectedValue: string = 'option1';
  comptypes: CompType[] = [
    {value: 'option1', viewValue: 'Юр. лицо'},
    {value: 'option2', viewValue: 'ИП'},
  ];
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  parsedValue: any;

  
  //console.log(this.form)
  ngOnInit() {
    this.parsedValue = JSON.parse(this.formDataValue)
    this.form = new FormGroup({
      account: new FormGroup({
        email: new FormControl(this.parsedValue.account.email, [
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
        tel: new FormControl(this.parsedValue.profile.tel, [
          Validators.pattern("^8[(][0-9]{3}[)]{0,1}[\s0-9]*$")
        ]),
        city: new FormControl(this.parsedValue.profile.city, [
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
  }

  submit(){
    console.log(this.form.value)
  }

  //contacts = this.form.get('contacts') as FormArray;
  get contacts()
  {
      return this.form.get('contacts') as FormArray
  }

  con() {
    //console.log(this.form.get('account')?.get('email'))
    //console.log(this.form.get('contacts'))
    console.log(this.form);
  }
  
  //contacts = this.form.get("contacts") as FormArray;
  addContacts() {
    //const control = new FormControl('', Validators.required);
    const control = new FormGroup({
      contact_name: new FormControl(''),
      duty: new FormControl(''),
      contact_tel: new FormControl('')
    })
    //<FormArray>this.form.get('contacts').push()
    //(this.form.get('contacts') as FormArray).push(control)
    this.contacts.push(control)
  }

}
