import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AceiteI } from '../model/Aceite';

@Injectable({
  providedIn: 'root'
})
export class AceiteService {
  base_url  = 'http://localhost:8080/aceite'
  constructor(private http:HttpClient) { }


  getAllAceite():Observable<AceiteI[]>{
    return this.http.get<AceiteI[]>(`${this.base_url}/all`)
  }
}
