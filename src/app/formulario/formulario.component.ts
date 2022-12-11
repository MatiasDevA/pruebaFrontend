import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AceiteI } from '../model/Aceite';
import { AlineacionI } from '../model/alineacion';
import { ClienteI } from '../model/cliente';
import { LavadoI } from '../model/lavado';
import { AceiteService } from '../servicio/aceite.service';
import { AlineacionService } from '../servicio/alineacion.service';
import { ClienteService } from '../servicio/cliente.service';
import { LavadoService } from '../servicio/lavado.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  errorMensaje: Array<String> | undefined
  precioReferencia:number = 0;
  cliente:ClienteI = {
    id: '',
    nombre: '',
    vehiculo: '',
    precio: Number(''),
    fecha: '',
    lavado: {
      id : ''
    },
    alineacion: {
      id: ''
    },
    aceite: {
      id: ''
    }

  }

  clienteLista: ClienteI[] = []
  aceiteLista:AceiteI[] = []
  alineacionLista:AlineacionI[] = []
  lavadoLista:LavadoI[] = []
  constructor(private clienteService:ClienteService,
    private aceiteService:AceiteService,
    private lavadoService:LavadoService,
    private alineacionService:AlineacionService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
   console.log(this.getAllClientes());
   console.log(this.getAlineacion());
   console.log(this.getLavado());
   console.log(this.getAceite());
  }

  getAllClientes(){
     this.clienteService.getClientes().subscribe( (res) => {
      this.clienteLista = res
  })
}

  getAceite(){
    this.aceiteService.getAllAceite().subscribe((res) => {
      this.aceiteLista = res
    })
  }

  getAlineacion(){
    this.alineacionService.getAllAlineacion().subscribe((res) => {
      this.alineacionLista = res
    })
  }
  getLavado(){
    this.lavadoService.getAllLavados().subscribe((res) => {
      this.lavadoLista = res
    })
  }




  guardar(form:NgForm){
    const data = this.cliente
    this.clienteService.addClientes(data).subscribe( () =>{
      this.toastr.success('Se ha agendado exitosamente');
    }, 
    (err) => {
      this.errorMensaje = err.error
     console.log(this.errorMensaje);
    }
    )
    console.log(form);
    console.log(form.value);
}

  precioDeReferencia(precio:Number){
    if(this.cliente.lavado.id == "1" && this.cliente.aceite.id == "1" && this.cliente.alineacion.id == "1"){
      precio
    }
  }


}
