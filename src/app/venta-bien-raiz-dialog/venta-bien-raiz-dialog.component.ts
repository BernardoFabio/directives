import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta-bien-raiz-dialog',
  templateUrl: './venta-bien-raiz-dialog.component.html',
  styleUrls: ['./venta-bien-raiz-dialog.component.css']
})
export class VentaBienRaizDialogComponent  {
  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  inmuebleUno: boolean = false;   
  inmuebleDos: boolean = false;  
  inmuebleTres: boolean = false; 
     
  numeroInmueble2: boolean = false;
  numeroInmueble3: boolean = false;


  contactForm= this.fb.group({
    titularBienRaiz:['',Validators.required],
    porcentaje:[''],
    valorVenta:['', Validators.required],
    fechaVenta:['',Validators.required],
    retencion:[''],
    otrosGastos:[''],
    avaluoPredial:['', Validators.required],

    titularBienRaiz_1:[''],
    porcentaje_1:[''],
    valorVenta_1:[''],
    fechaVenta_1:[''],
    retencion_1:[''],
    otrosGastos_1:[''],
    avaluoPredial_1:[''],

    titularBienRaiz_2:[''],
    porcentaje_2:[''],
    valorVenta_2:[''],
    fechaVenta_2:[''],
    retencion_2:[''],
    otrosGastos_2:[''],
    avaluoPredial_2:[''], 
    
    })
    ventaBienRaizForm(event: Event){
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


  eventoNumeroInmueble(evento){
    if(evento.value == 2){
      this.numeroInmueble2 = true;
      this.numeroInmueble3 = false;
    }else if(evento.value == 3)
      {
       this.numeroInmueble2 = true;
       this.numeroInmueble3 = true;
      }else{
      this.numeroInmueble2 = false;
      this.numeroInmueble3 = false;
    }
   }

  
   
   eventoInmuebleUno(evento){
    if(evento.value == 2){
      this.inmuebleUno = true;
    }else{
      this.inmuebleUno = false;
    }
   }
   

   eventoInmuebleDos(evento){
    if(evento.value == 2){
      this.inmuebleDos = true;
    }else{
      this.inmuebleDos = false;
    }
   }
   

     eventoInmuebleTres(evento){
    if(evento.value == 2){
      this.inmuebleTres = true;
    }else{
      this.inmuebleTres= false;
    }
   }

  

}
