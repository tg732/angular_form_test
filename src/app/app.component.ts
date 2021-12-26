import {Component, OnInit} from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // TODO interface с описанием всех полей, добавить в Input, избавиться от any
  defFormValue: any = null


  ngOnInit(): void {
    setTimeout(() => {
      this.defFormValue = {
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
     } , 5000);
    
  }
}

