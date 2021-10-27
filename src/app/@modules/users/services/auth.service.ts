import { AlertController, NavController } from '@ionic/angular';
import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { environment } from 'src/environments/environment';
import jwt_decode from 'jwt-decode';
import * as moment from 'moment';

import { StorageService } from '@core/services/storage.service';
import { Router } from '@angular/router';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HTTP,
    private router: Router,
    private navCtrl: NavController,
    private storage: StorageService,
    private alertCtrl: AlertController,
  ) {
    this.decoded();
  }

  /** Tokens */
  signIn = async (data: any): Promise<any> => {
    try {
      const result = await this.http.post(`${api.url}/${api.version}/setting/token/`, data, api.headers);
      console.log(result.data);
      if (!result.data || !result.data.length) { return []; }
      this.setStorage(result.data);
      this.router.navigate(['pages', 'home']);
      this.getTokenRefresh();
    } catch (err) {
      const error = JSON.parse(err);
      const alert = await this.alertCtrl.create({header: 'Error', message: error.detail });
      await alert.present();
      return [];
    }
  };

  getRootToken = async (): Promise<any> => {
    const data = api.admin;
    try {
      const result = await this.http.post(`${api.url}/${api.version}/setting/token/`, data, api.headers);
      this.handle(result);
    } catch (err) {
      console.error('An error occurred loading all customers:', err);
      return [];
    }
  };

  signUp = async (data: any): Promise<any> =>{
    try {
      const result = await this.http.post(`${api.url}/${api.version}/user/add/`, data, api.headers);
      this.handle(result);
    } catch (err) {
      console.error('An error occurred loading all customers:', err);
      return []; }
  };

  signOut = async () => {
    await this.storage.removeStorage('token');
    return this.navCtrl.navigateRoot('/user/signIn');
  };

  decoded = async () => {
    const token = await this.storage.getStorage('token');
    if (token) {
      const { exp } = jwt_decode(token) as any;
      const hour = moment.unix(exp).diff(moment(), 'hours');
      if (hour === 1) {
        this.getTokenRefresh();
      }
    }
  };
  private setStorage = async (result: any) => {
    const user = JSON.parse(result);
    await this.storage.setStorage('token', { access: user.access, refresh: user.refresh });
    delete user.access;
    delete user.refresh;
    await this.storage.setStorage('user', user);
    await this.storage.getStorage('token');
  };
  private getTokenRefresh = async (token?: string): Promise<any> => {
    try {
      if (!token) {
        const  tok = await this.storage.getStorage('token');
        token = tok.refresh;
      };
      const result = await this.http.post(`${api.url}/${api.version}/setting/token/refresh/`, { refresh: token }, api.headers);
      const user = this.handle(result);
      await this.storage.setStorage('token', user.access);
    } catch (err) {
      console.error('An error occurred loading all customers:', err);
      return [];
    }
  };

  private handle = (result: any) => {
    if (!result.data || !result.data.length) { return []; }
    return JSON.parse(result.data);
  };
}
