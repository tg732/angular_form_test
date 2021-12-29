import {Component, OnInit} from '@angular/core'

export interface FormDataJson {
  account: {
    email: string;
    password: string;
    re_password: string;
  };
  profile: {
      name: string;
      tel: string;
      city: string;
  },
  company: {
      org_name: string,
      own_type: string,
      inn: string,
      kpp: string,
      okpo: string,
      date: string
  },
  contacts: [{
      contact_name: string,
      duty: string,
      contact_tel: string
  }]
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  defFormValue: FormDataJson


  ngOnInit(): void {
    setTimeout(() => {
      this.defFormValue = {
            account: {
                email: "1@ex.com",
                password: "123456",
                re_password: "123456"
            },
            profile: {
                name: "vvv",
                tel: "8(999)9999999",
                city: "vvv"
            },
            company: {
                org_name: "vvv",
                own_type: "Entity",
                inn: "123",
                kpp: "123",
                okpo: "123",
                date: "2021-12-18"
            },
            contacts: [
                {
                    contact_name: "123",
                    duty: "123",
                    contact_tel: "123"
                }
            ]
        }
     } , 5000);
    
  }
}

