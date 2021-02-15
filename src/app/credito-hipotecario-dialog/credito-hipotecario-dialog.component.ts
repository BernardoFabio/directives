import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-credito-hipotecario-dialog',
  templateUrl: './credito-hipotecario-dialog.component.html',
  styleUrls: ['./credito-hipotecario-dialog.component.css']
})
export class CreditoHipotecarioDialogComponent {

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  opcionCreditoHipotecario: boolean = false;

  contactForm= this.fb.group({
    titularHipotecarios:['',Validators.required],
    porcentajeHipotecarios:['',Validators.required],
    saldoHipotecarios:['',Validators.required],
    deduciblesHipotecarios:['',Validators.required],
    GMFHipotecarios:['',]
    })
    hipotecarios(event: Event){
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




    
  eventoCreditoHipotecario(evento){
    if(evento.value == 2){
      this.opcionCreditoHipotecario = true;
    }else{
      this.opcionCreditoHipotecario = false;
    }
   }
 


}
