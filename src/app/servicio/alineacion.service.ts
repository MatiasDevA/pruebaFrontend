import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AlineacionI } from '../model/alineacion';

@Injectable({
  providedIn: 'root'
})
export class AlineacionService {
  base_url  = 'http://localhost:8080/alineacion'
  constructor(private http:HttpClient) { }


  getAllAlineacion():Observable<AlineacionI[]>{
    return this.http.get<AlineacionI[]>(`${this.base_url}/all`)
  }
}
