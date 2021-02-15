import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-herencia-dialog',
  templateUrl: './herencia-dialog.component.html',
  styleUrls: ['./herencia-dialog.component.css']
})
export class HerenciaDialogComponent {

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  tipos:any=[{"codigo":1, "texto":"Urbano"}, {"codigo":2,  "texto": "Rural"}];

  opcionHerencia: boolean = false;
  opcionHerencia2: boolean = false;
  opcionHerencia3: boolean = false;
  opcionHerencia4: boolean = false;

  
  contactForm= this.fb.group({
    inmueblesHerencia:['',Validators.required],
    conyugeSupersite:[''],
    inmuebleUrbanoRural:[''],
    porcentajeInmueble:[''],
    valorInmueble:[''],
    tipoBienRaiz:[''],
    bienesDistintos:['',Validators.required],
    valorBienesDistintos:[''],
    donaciones:[''],
    valorDonaciones:[''],
    valorRetencion:[''],    
    })
    herenciaForm(event: Event){
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

    
  eventoHerenciaDialog(evento){
    if(evento.value == 1){
      this.opcionHerencia = true;
    }else{
      this.opcionHerencia = false;
    }
   }
   eventoHerenciaDialog2(evento){
    if(evento.value == 1){
      this.opcionHerencia2 = true;
    }else{
      this.opcionHerencia2 = false;
    }
   }
   eventoHerenciaDialog3(evento){
    if(evento.value == 1){
      this.opcionHerencia3 = true;
    }else{
      this.opcionHerencia3 = false;
    }
   }
   eventoHerenciaDialog4(evento){
    if(evento.value == 1){
      this.opcionHerencia4 = true;
    }else{
      this.opcionHerencia4 = false;
    }
   }


}
