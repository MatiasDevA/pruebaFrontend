import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteI } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  base_url  = 'http://localhost:8080/cliente'

  constructor(private http:HttpClient) { }


  getClientes():Observable<ClienteI[]>{
    return this.http.get<ClienteI[]>(`${this.base_url}/all`)
  }


  addClientes(cliente:ClienteI):Observable<ClienteI>{
    return this.http.post<ClienteI>(`${this.base_url}/save`,cliente);
  }

}
