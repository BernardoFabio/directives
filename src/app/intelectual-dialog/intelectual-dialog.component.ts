import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-intelectual-dialog',
  templateUrl: './intelectual-dialog.component.html',
  styleUrls: ['./intelectual-dialog.component.css']
})
export class IntelectualDialogComponent  {

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  intelectual2: boolean = false;
  intelectual3: boolean = false;

  gastosNomina: boolean = false;
  honorarios: boolean = false;
  predial: boolean = false;
  ICA: boolean = false;
  avisosTableros: boolean = false;
  arrendamientoTrabajo: boolean = false;
  segurosTrabajo: boolean = false;
  otrosGastos: boolean = false;

  gastosNomina_1: boolean = false;
  honorarios_1: boolean = false;
  predial_1: boolean = false;
  ICA_1: boolean = false;
  avisosTableros_1: boolean = false;
  arrendamientoTrabajo_1: boolean = false;
  segurosTrabajo_1: boolean = false;
  otrosGastos_1: boolean = false;

  gastosNomina_2: boolean = false;
  honorarios_2: boolean = false;
  predial_2: boolean = false;
  ICA_2: boolean = false;
  avisosTableros_2: boolean = false;
  arrendamientoTrabajo_2: boolean = false;
  segurosTrabajo_2: boolean = false;
  otrosGastos_2: boolean = false;


  contactForm= this.fb.group({
    valorHonorariosIntelectual:['',Validators.required],
    valorRetencion:['',Validators.required],
    interesesNomina:[''],
    honorariosGasto:[''],
    predial:[''],
    ICA:[''],
    AyT:[''],
    arrendamientoTrabajo:[''],
    seguros:[''],
    otrosGastos:[''],
    colciencias:[''],
    ONU:[''],
    noventaDias:[''],

    valorHonorarios_1:[''],
    valorRetencion_1:[''],
    interesesNomina_1:[''],
    honorariosGasto_1:[''],
    predial_1:[''],
    ICA_1:[''],
    AyT_1:[''],
    arrendamientoTrabajo_1:[''],
    seguros_1:[''],
    otrosGastos_1:[''],
    colciencias_1:[''],
    ONU_1:[''],
    noventaDias_1:[''],

    valorHonorarios_2:[''],
    valorRetencion_2:['',],
    interesesNomina_2:[''],
    honorariosGasto_2:[''],
    predial_2:[''],
    ICA_2:[''],
    AyT_2:[''],
    arrendamientoTrabajo_2:[''],
    seguros_2:[''],
    otrosGastos_2:[''],
    colciencias_2:[''],
    ONU_2:[''],
    noventaDias_2:[''],
     
     });
 
     intelectualForm(event: Event){
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





  



  eventoContratosIntelectual(evento){
    if(evento.value == 2){
      this.intelectual2 = true;
      this.intelectual3 = false;
    }else if(evento.value == 3)
      {
       this.intelectual2 = true;
       this.intelectual3 = true;
      }else{
      this.intelectual2 = false;
      this.intelectual3 = false;
    }
   }


}
