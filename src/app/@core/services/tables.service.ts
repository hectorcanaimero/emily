import { StorageService } from '@core/services/storage.service';
import { HTTP } from '@ionic-native/http/ngx';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const api = environment.api;

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  headers: any = api.headers;
  constructor(
    private http: HTTP,
    private storage: StorageService
  ) { }

  getCountries = async (token: string): Promise<any> => {
    this.headers.Authorization = `Bearer ${token}`;
    try {
      const result = await this.http.get(`${api.url}/${api.version}/master/countries/`, {},api.headers);
      if (!result.data || !result.data.length) {
        console.log(`Did not find any customers.`);
        return [];
      }
      return JSON.parse(result.data);
    } catch (err) {
      console.error('An error occurred loading all customers:', err);
      return [];
    }
  };

  getMasterTable = async (name: string): Promise<any> => {
    const token = await this.storage.getStorage('token');
    this.headers.Authorization = `Bearer ${token}`;
    try {
      const result = await this.http.get(`${api.url}/${api.version}/master/${name}/`, {},api.headers);
      if (!result.data || !result.data.length) {
        console.log(`Did not find any customers.`);
        return [];
      }
      return JSON.parse(result.data);
    } catch (err) {
      console.error('An error occurred loading all customers:', err);
      return [];
    }
  };

}
