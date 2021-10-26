import { Router } from '@angular/router';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageService } from '@core/services/storage.service';
import { IonSlides, NavController, AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from '@modules/users/services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit, AfterViewInit {

  @ViewChild('slides') slides: IonSlides;
  options = { initialSlide: 0, };
  loginForm: FormGroup;
  forgotPasswordForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private nav: NavController,
    private router: Router,
    private storage: StorageService,
    private alertCtrl: AlertController,
    private loadCtrl: LoadingController,
  ) { }

  ngOnInit() {
    this.loadForm();
  }

  ngAfterViewInit() {
    this.slides.lockSwipes(true);
  };

  onSubmit = async () => {
    if (this.loginForm.invalid) { return; }
    const load = await this.loadCtrl.create({message: 'Loading...'});
    await load.present();
    this.auth.signIn(this.loginForm.value)
    .then(async (res) => {
      await load.dismiss();
    })
    .catch(async (err) => {
      await load.dismiss();
      console.log(err);
    });
  };

  onForgotPassword = () => console.log('óoSubmit');

  loadForm = () => {
    this.loginForm = this.fb.group({
      email: ['knaimero@gmail.com', [Validators.required, Validators.email]],
      password: ['meka123', [Validators.required, Validators.minLength(4)]],
    });
    this.forgotPasswordForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  };

  goToSlides = (slide: number) => {
    this.slides.lockSwipes(false);
    this.slides.slideTo(slide);
    this.slides.lockSwipes(true);
  };

  onRegister = () => this.nav.navigateForward('/user/signUp');
}
