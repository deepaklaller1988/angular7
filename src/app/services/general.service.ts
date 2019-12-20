import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {
  apiurl = 'http://149.129.181.20:5050/api/v1/GetProductInfo?ProductID=4';
  constructor(private http: HttpClient) { }

  GetProductInfo() {
    return this.http.get(this.apiurl);
  }
}
