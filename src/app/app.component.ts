import {Component, OnInit} from '@angular/core'
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms'
import { identityRevealedValidator, MyValidators } from './my.validators';

interface CompType {
  value: string;
  viewValue: string;
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    //setTimeout(() => this.def_form_value = 'email@ema11il' , 1000);
    
  }
  //form = new FormGroup({})
  //def_form_value = '123'
  def_form_json = {
      "account": {
          "email": "1@ex.com",
          "password": "123456",
          "re_password": "123456"
      },
      "profile": {
          "name": "vvv",
          "tel": "8(999)9999999",
          "city": "vvv"
      },
      "company": {
          "org_name": "vvv",
          "own_type": "option1",
          "inn": "123",
          "kpp": "123",
          "okpo": "123",
          "date": "2021-12-18"
      },
      "contacts": [
          {
              "contact_name": "123",
              "duty": "123",
              "contact_tel": "123"
          }
      ]
  }
  /*t = setTimeout(() => {
    this.def_form_value =  'email@ema11il';
  }, 5000);*/
  def_form_value = JSON.stringify(this.def_form_json)
  selectedValue: string = 'option1';
  comptypes: CompType[] = [
    {value: 'option1', viewValue: 'Юр. лицо'},
    {value: 'option2', viewValue: 'ИП'},
  ];
}

