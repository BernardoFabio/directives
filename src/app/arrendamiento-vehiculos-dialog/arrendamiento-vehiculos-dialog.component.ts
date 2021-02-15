import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-arrendamiento-vehiculos-dialog',
  templateUrl: './arrendamiento-vehiculos-dialog.component.html',
  styleUrls: ['./arrendamiento-vehiculos-dialog.component.css']
})
export class ArrendamientoVehiculosDialogComponent {
  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  arrendamientoVehiculos2: boolean = false;
  arrendamientoVehiculos3: boolean = false;

  conductor: boolean = false;
  combustible: boolean = false;
  reparaciones: boolean = false;
  rodamiento: boolean = false;
  ICA: boolean = false;
  avisosTableros: boolean = false;
  administracion: boolean = false;
  seguros: boolean = false;
  SOAT: boolean = false;
  mantenimiento: boolean = false;
  

  conductor_1: boolean = false;
  combustible_1: boolean = false;
  reparaciones_1: boolean = false;
  rodamiento_1: boolean = false;
  ICA_1: boolean = false;
  avisosTableros_1: boolean = false;
  administracion_1: boolean = false;
  seguros_1: boolean = false;
  SOAT_1: boolean = false;
  mantenimiento_1: boolean = false;


  conductor_2: boolean = false;
  combustible_2: boolean = false;
  reparaciones_2: boolean = false;
  rodamiento_2: boolean = false;
  ICA_2: boolean = false;
  avisosTableros_2: boolean = false;
  administracion_2: boolean = false;
  seguros_2: boolean = false;
  SOAT_2: boolean = false;
  mantenimiento_2: boolean = false;

  
  contactForm= this.fb.group({
    ingresosArrendamientoVehiculo:['',Validators.required],
    retencionArrendamiento:[''],
    conductor:[''],
    combustible:[''],
    reparaciones:[''],
    impuestoRodamiento:[''],
    ICA:[''],
    AyT:[''],
    administracion:[''],
    seguros:[''],
    SOAT:[''],
    mantenimiento:[''],

    ingresosArrendamientoVehiculo_1:[''],
    retencionArrendamiento_1:[''],
    conductor_1:[''],
    combustible_1:[''],
    reparaciones_1:[''],
    impuestoRodamiento_1:[''],
    ICA_1:[''],
    AyT_1:[''],
    administracion_1:[''],
    seguros_1:[''],
    SOAT_1:[''],
    mantenimiento_1:[''],

    ingresosArrendamientoVehiculo_2:[''],
    retencionArrendamiento_2:[''],
    conductor_2:[''],
    combustible_2:[''],
    reparaciones_2:[''],
    impuestoRodamiento_2:[''],
    ICA_2:[''],
    AyT_2:[''],
    administracion_2:[''],
    seguros_2:[''],
    SOAT_2:[''],
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



  eventoArrendamientoVehiculos(evento){
    if(evento.value == 2){
      this.arrendamientoVehiculos2 = true;
      this.arrendamientoVehiculos3 = false;
    }else if(evento.value == 3)
      {
       this.arrendamientoVehiculos2 = true;
       this.arrendamientoVehiculos3 = true;
      }else{
      this.arrendamientoVehiculos2 = false;
      this.arrendamientoVehiculos3 = false;
    }
   }



}
