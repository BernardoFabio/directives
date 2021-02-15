import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-negocio-propio-dialog',
  templateUrl: './negocio-propio-dialog.component.html',
  styleUrls: ['./negocio-propio-dialog.component.css']
})
export class NegocioPropioDialogComponent{

  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  negocioPropio2: boolean = false;
  negocioPropio3: boolean = false;

  inventarios: boolean = false;
  gastosNomina: boolean = false;
  honorarios: boolean = false;
  predial: boolean = false;
  ICA: boolean = false;
  avisosTableros: boolean = false;
  arrendamientoTrabajo: boolean = false;
  segurosTrabajo: boolean = false;
  otrosGastos: boolean = false;

  inventarios_1: boolean = false;
  gastosNomina_1: boolean = false;
  honorarios_1: boolean = false;
  predial_1: boolean = false;
  ICA_1: boolean = false;
  avisosTableros_1: boolean = false;
  arrendamientoTrabajo_1: boolean = false;
  segurosTrabajo_1: boolean = false;
  otrosGastos_1: boolean = false;

  inventarios_2: boolean = false;
  gastosNomina_2: boolean = false;
  honorarios_2: boolean = false;
  predial_2: boolean = false;
  ICA_2: boolean = false;
  avisosTableros_2: boolean = false;
  arrendamientoTrabajo_2: boolean = false;
  segurosTrabajo_2: boolean = false;
  otrosGastos_2: boolean = false;

  

  contactForm= this.fb.group({
    ingresosNegocioPropio:['',Validators.required],
    devolucionesNegocioPropio:['',Validators.required],
    valorRetencion:['',Validators.required],
    inventarioUno:[''],
    inventarioDos:[''],
    inventarioTres:[''],
    gastosNomina:[''],
    honorariosGasto:[''],
    predial:[''],
    ICA:[''],
    AyT:[''],
    arrendamientoTrabajo:[''],
    seguros:[''],
    otrosGastos:[''],
    

    ingresosNegocioPropio_1:[''],
    devolucionesNegocioPropio_1:[''],
    valorRetencion_1:[''],
    inventarioUno_1:[''],
    inventarioDos_1:[''],
    inventarioTres_1:[''],    
    gastosNomina_1:[''],
    honorariosGasto_1:[''],
    predial_1:[''],
    ICA_1:[''],
    AyT_1:[''],
    arrendamientoTrabajo_1:[''],
    seguros_1:[''],
    otrosGastos_1:[''],
   

    ingresosNegocioPropio_2:[''],
    devolucionesNegocioPropio_2:['',],
    valorRetencion_2:[''],
    inventarioUno_2:[''],
    inventarioDos_2:[''],
    inventarioTres_2:[''],    
    gastosNomina_2:[''],
    honorariosGasto_2:[''],
    predial_2:[''],
    ICA_2:[''],
    AyT_2:[''],
    arrendamientoTrabajo_2:[''],
    seguros_2:[''],
    otrosGastos_2:[''],
 
     });
 
     negocioPropioForm(event: Event){
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
 


  eventoNegocioPropio(evento){
    if(evento.value == 2){
      this.negocioPropio2 = true;
      this.negocioPropio3 = false;
    }else if(evento.value == 3)
      {
       this.negocioPropio2 = true;
       this.negocioPropio3 = true;
      }else{
      this.negocioPropio2 = false;
      this.negocioPropio3 = false;
    }
   }


  }
