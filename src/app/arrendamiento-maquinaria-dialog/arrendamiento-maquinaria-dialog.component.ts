import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendamiento-maquinaria-dialog',
  templateUrl: './arrendamiento-maquinaria-dialog.component.html',
  styleUrls: ['./arrendamiento-maquinaria-dialog.component.css']
})
export class ArrendamientoMaquinariaDialogComponent {

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  arrendamientoMaquinaria2: boolean = false;
  arrendamientoMaquinaria3: boolean = false;

  reparaciones: boolean = false;
  ICA: boolean = false;
  avisosTableros: boolean = false;
  administracion: boolean = false;
  seguros: boolean = false;
  mantenimiento: boolean = false;

  reparaciones_1: boolean = false;
  ICA_1: boolean = false;
  avisosTableros_1: boolean = false;
  administracion_1: boolean = false;
  seguros_1: boolean = false;
  mantenimiento_1: boolean = false;

  reparaciones_2: boolean = false;
  ICA_2: boolean = false;
  avisosTableros_2: boolean = false;
  administracion_2: boolean = false;
  seguros_2: boolean = false;
  mantenimiento_2: boolean = false;


  
  contactForm= this.fb.group({
    ingresosArrendamientoMaquinaria:['',Validators.required],
    retencionArrendamiento:[''],
    reparaciones:[''],
    ICA:[''],
    AyT:[''],
    administracion:[''],
    seguros:[''],
    mantenimiento:[''],

    ingresosArrendamientoMaquinaria_1:[''],
    retencionArrendamiento_1:[''],
    reparaciones_1:[''],
    ICA_1:[''],
    AyT_1:[''],
    administracion_1:[''],
    seguros_1:[''],
    mantenimiento_1:[''],

    ingresosArrendamientoMaquinaria_2:[''],
    retencionArrendamiento_2:[''],
    reparaciones_2:[''],
    ICA_2:[''],
    AyT_2:[''],
    administracion_2:[''],
    seguros_2:[''],
    mantenimiento_2:[''],

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



  eventoArrendamientoMaquinaria(evento){
    if(evento.value == 2){
      this.arrendamientoMaquinaria2 = true;
      this.arrendamientoMaquinaria3 = false;
    }else if(evento.value == 3)
      {
       this.arrendamientoMaquinaria2 = true;
       this.arrendamientoMaquinaria3 = true;
      }else{
      this.arrendamientoMaquinaria2 = false;
      this.arrendamientoMaquinaria3 = false;
    }
   }


}
