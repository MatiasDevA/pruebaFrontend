import { Component, OnInit } from '@angular/core';
import { ClienteI } from '../model/cliente';
import { ClienteService } from '../servicio/cliente.service';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.css']
})
export class HistorialComponent implements OnInit {
  clienteLista: ClienteI[] = []
  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
    this.getClientes()
  }


  getClientes(){
    this.clienteService.getClientes().subscribe( resp => {
      this.clienteLista = resp
    })
  }

}
