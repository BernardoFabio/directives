import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-otros-creditos-dialog',
  templateUrl: './otros-creditos-dialog.component.html',
  styleUrls: ['./otros-creditos-dialog.component.css']
})
export class OtrosCreditosDialogComponent {

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  opcionOtrosCreditos: boolean = false;

  contactForm= this.fb.group({
    titularOtrosCreditos:['',Validators.required],
    porcentajeOtrosCreditos:['',Validators.required],
    saldoOtrosCreditos:['',Validators.required],
    deduciblesOtrosCreditos:['',Validators.required],
    GMFOtrosCreditos:['',]
    })
    otrosCreditos(event: Event){
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

    
  eventoOtrosCreditos(evento){
    if(evento.value == 2){
      this.opcionOtrosCreditos = true;
    }else{
      this.opcionOtrosCreditos = false;
    }
   }

 
}
