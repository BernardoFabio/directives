import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta-vehiculo-dialog',
  templateUrl: './venta-vehiculo-dialog.component.html',
  styleUrls: ['./venta-vehiculo-dialog.component.css']
})
export class VentaVehiculoDialogComponent {

    
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  
  vehiculoUno: boolean = false;   
  vehiculoDos: boolean = false;  
  vehiculoTres: boolean = false; 
    
  numeroVehiculo2: boolean = false;
  numeroVehiculo3: boolean = false;

  
  contactForm= this.fb.group({
    titularVehiculo:['',Validators.required],
    porcentaje:[''],
    valorVenta:['',Validators.required],
    retencionVenta:[''],
    fechaVenta:['',Validators.required],

    titularVehiculo_1:[''],
    porcentaje_1:[''],
    valorVenta_1:[''],
    retencionVenta_1:[''],
    fechaVenta_1:[''],

    titularVehiculo_2:[''],
    porcentaje_2:[''],
    valorVenta_2:[''],
    retencionVenta_2:[''],
    fechaVenta_2:[''],

    })
    vehiculosForm(event: Event){
      event.preventDefault();
      if(this.contactForm.valid){
        const value = this.contactForm.value;
        console.log(value);    
      }else{
        this.contactForm.markAllAsTouched();
      }
    }
  
    constructor(private fb:FormBuilder) {
  
      this.contactForm;
        
    }  



 


  eventoNumeroVehiculos(evento){
    if(evento.value == 2){
      this.numeroVehiculo2 = true;
      this.numeroVehiculo3 = false;
    }else if(evento.value == 3)
      {
       this.numeroVehiculo2 = true;
       this.numeroVehiculo3 = true;
      }else{
      this.numeroVehiculo2 = false;
      this.numeroVehiculo3 = false;
    }
   }

  
   
   eventoVehiculoUno(evento){
    if(evento.value == 2){
      this.vehiculoUno = true;
    }else{
      this.vehiculoUno = false;
    }
   }
   

   eventoVehiculoDos(evento){
    if(evento.value == 2){
      this.vehiculoDos = true;
    }else{
      this.vehiculoDos = false;
    }
   }
   


   eventoVehiculoTres(evento){
    if(evento.value == 2){
      this.vehiculoTres = true;
    }else{
      this.vehiculoTres= false;
    }
   }
  
  

}
