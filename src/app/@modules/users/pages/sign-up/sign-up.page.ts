import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@core/services/storage.service';
import { TablesService } from '@core/services/tables.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '@modules/users/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage implements OnInit {

  registerForm: FormGroup;

  countries: any = [];
  idioma = [
    { name: 'Ingles (USA)', iso: 'en' },
    { name: 'Español (Latinoamerica)', iso: 'es' },
    { name: 'Portugues (Brasil)', iso: 'po' }
  ];

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private storage: StorageService,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
    private tablesService: TablesService,
  ) { }

  async ngOnInit() {
    this.loadForm();
    const { access } = await this.auth.getRootToken();
    console.log(access);
    this.countries = await this.tablesService.getCountries(access);
  }

  onSubmit = async () => {
    if(this.registerForm.invalid) { return; }
    const load = await this.loadCtrl.create({message: 'Loading...'});
    load.present();
    const value = this.registerForm.value;
    console.log(value);
    const data = {
      email: value.email, country: value.country,
      password: value.password, last_name: value.lastname,
      fist_name: value.firstname, phone: value.phone
    };
    console.log(data);
    this.auth.signUp(data).then(async (res) => {
      load.dismiss();
      await this.storage.setStorage('language', value.language);
      this.auth.signIn({ email: res.email, password: value.password });
    }).catch((err) => console.log(err));
  };

  loadForm = () => {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', Validators.required],
      phone: ['', Validators.required],
      country: ['', Validators.required],
      language: ['en']
    });
  };
}
