import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendamiento-bien-raiz-dialog',
  templateUrl: './arrendamiento-bien-raiz-dialog.component.html',
  styleUrls: ['./arrendamiento-bien-raiz-dialog.component.css']
})
export class ArrendamientoBienRaizDialogComponent {
  
  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  arrendamientoBienRaiz2: boolean = false;
  arrendamientoBienRaiz3: boolean = false;

  agencia: boolean = false;
  limpieza: boolean = false;
  reparaciones: boolean = false;
  predial: boolean = false;
  ICA: boolean = false;
  avisosTableros: boolean = false;
  administracion: boolean = false;
  seguros: boolean = false;

  agencia_1: boolean = false;
  limpieza_1: boolean = false;
  reparaciones_1: boolean = false;
  predial_1: boolean = false;
  ICA_1: boolean = false;
  avisosTableros_1: boolean = false;
  administracion_1: boolean = false;
  seguros_1: boolean = false;
  
  agencia_2: boolean = false;
  limpieza_2: boolean = false;
  reparaciones_2: boolean = false;
  predial_2: boolean = false;
  ICA_2: boolean = false;
  avisosTableros_2: boolean = false;
  administracion_2: boolean = false;
  seguros_2: boolean = false;
  

  contactForm= this.fb.group({
    ingresosArrendamiento:['',Validators.required],
    retencionArrendamiento:[''],
    honorariosAgencia:[''],
    gastosLimpieza:[''],
    reparaciones:[''],
    predial:[''],
    ICA:[''],
    AyT:[''],
    administracion:[''],
    seguros:[''],

     });
  arrendamientoForm(event: Event){
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


  eventoArrendamientoBienRaiz(evento){
    if(evento.value == 2){
      this.arrendamientoBienRaiz2 = true;
      this.arrendamientoBienRaiz3 = false;
    }else if(evento.value == 3)
      {
       this.arrendamientoBienRaiz2 = true;
       this.arrendamientoBienRaiz3 = true;
      }else{
      this.arrendamientoBienRaiz2 = false;
      this.arrendamientoBienRaiz3 = false;
    }
   }


}
