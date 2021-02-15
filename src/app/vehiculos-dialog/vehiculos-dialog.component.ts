import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-vehiculos-dialog',
  templateUrl: './vehiculos-dialog.component.html',
  styleUrls: ['./vehiculos-dialog.component.css']
})
export class VehiculosDialogComponent {
  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  
  vehiculoUno: boolean = false; 
  vehiculoUno_1: boolean = false;
  vehiculoUno_2: boolean = false;

  vehiculoDos: boolean = false; 
  vehiculoDos_1: boolean = false;
  vehiculoDos_2: boolean = false; 

  vehiculoTres: boolean = false; 
  vehiculoTres_1: boolean = false;
  vehiculoTres_2: boolean = false;  
 

  numeroVehiculo2: boolean = false;
  numeroVehiculo3: boolean = false;


  
  contactForm= this.fb.group({
    titularVehiculo:['',Validators.required],
    porcentajeVehiculo:[''],
    facturaCompraVehiculo:['',Validators.required],
    avaluoVehiculo:[''],
    valorCompraAproxVehiculo:['',],
    fechaCompraVehiculo:['',Validators.required],

    titularVehiculo2:[''],
    porcentajeVehiculo2:[''],
    facturaCompraVehiculo2:[''],
    avaluoVehiculo2:[''],
    valorCompraAproxVehiculo2:['',],
    fechaCompraVehiculo2:[''],

    titularVehiculo3:[''],
    porcentajeVehiculo3:[''],
    facturaCompraVehiculo3:[''],
    avaluoVehiculo3:[''],
    valorCompraAproxVehiculo3:['',],
    fechaCompraVehiculo3:[''],

    });
    
    vehiculos(event: Event){
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
      this.numeroVehiculo2 = true
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
   eventoVehiculoUno_1(evento){
    if(evento.value == 1){
      this.vehiculoUno_1 = true;
      this.vehiculoUno_2 = false;
    }else{
      this.vehiculoUno_1 = false;
      this.vehiculoUno_2 = true;
    }
   }
  


   eventoVehiculoDos(evento){
    if(evento.value == 2){
      this.vehiculoDos = true;
    }else{
      this.vehiculoDos = false;
    }
   }
   eventoVehiculoDos_1(evento){
    if(evento.value == 1){
      this.vehiculoDos_1 = true;
      this.vehiculoDos_2 = false;
    }else{
      this.vehiculoDos_1 = false;
      this.vehiculoDos_2 = true;
    }
   }
  


   eventoVehiculoTres(evento){
    if(evento.value == 2){
      this.vehiculoTres = true;
    }else{
      this.vehiculoTres= false;
    }
   }
   eventoVehiculoTres_1(evento){
    if(evento.value == 1){
      this.vehiculoTres_1 = true;
      this.vehiculoTres_2 = false;
    }else{
      this.vehiculoTres_1 = false;
      this.vehiculoTres_2 = true;
    }
   }
  

   


}
