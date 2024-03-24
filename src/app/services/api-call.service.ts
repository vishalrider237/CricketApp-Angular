import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private httpclient:HttpClient) { }

  getAllMatches(){
      return this.httpclient.get(`${environment.apiUrl}`)
  }
  getLiveMatches(){
    return this.httpclient.get(`${environment.apiUrl}/live`)
  }
  getPointTable(){
    return this.httpclient.get(`${environment.apiUrl}/point-table`)
  }
}
