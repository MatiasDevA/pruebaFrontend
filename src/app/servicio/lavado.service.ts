import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LavadoI } from '../model/lavado';

@Injectable({
  providedIn: 'root'
})
export class LavadoService {
  base_url  = 'http://localhost:8080/lavado'
  constructor(private http:HttpClient) { }


  getAllLavados():Observable<LavadoI[]>{
    return this.http.get<LavadoI[]>(`${this.base_url}/all`)
  }
}
