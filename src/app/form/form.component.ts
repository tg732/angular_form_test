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
  
  form = new FormGroup({
    account: new FormGroup({
      email: new FormControl(null, [
        Validators.email, 
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.minLength(6), 
        Validators.required
      ]),
      re_password: new FormControl(null, [
        Validators.minLength(6), 
        Validators.required
      ]),
    }, { validators: identityRevealedValidator }),
    
    profile: new FormGroup({
      name: new FormControl(null, [
      ]),
      tel: new FormControl(null, [
        Validators.pattern("^8[(][0-9]{3}[)]{0,1}[\s0-9]*$")
      ]),
      city: new FormControl(null, [
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

  
  @Input() set formDataValue(value: object) {
    if (value){
      this.form.patchValue(value)
    }
  }
  // TODO enum, option1->individual
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

  
  ngOnInit() {
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
