import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@core/services/storage.service';
import { TablesService } from '@core/services/tables.service';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '@modules/users/services/auth.service';

@Component({
  selector: 'app-get-profile',
  templateUrl: './get-profile.page.html',
  styleUrls: ['./get-profile.page.scss'],
})
export class GetProfilePage implements OnInit {

  registerForm: FormGroup;
  user: any = [];
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
    this.user = await this.storage.getStorage('user');
    console.log(this.user);
    const { access } = await this.auth.getRootToken();
    this.countries = await this.tablesService.getCountries(access);
  }

  onSubmit = async () => {
    if(this.registerForm.invalid) { return; }
    const load = await this.loadCtrl.create({message: 'Loading...'});
    load.present();
    const value = this.registerForm.value;
    const data = {
      email: value.email, country: value.country,
      password: value.password, last_name: value.lastname,
      fist_name: value.firstname, phone: `+${value.country + value.phone}`
    };
    this.auth.signUp(data).then((res) => {
      load.dismiss();
      this.auth.signIn({ email: res.email, password: value.password });
    }).catch((err) => console.log(err));
  };

  loadForm = () => {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      firstname: ['', [Validators.required, Validators.minLength(4)]],
      lastname: ['', [Validators.required, Validators.minLength(4)]],
      phone: ['', Validators.required],
      country: ['', Validators.required]
    });
  };
}
