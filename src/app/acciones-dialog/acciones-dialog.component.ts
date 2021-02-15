import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-acciones-dialog',
  templateUrl: './acciones-dialog.component.html',
  styleUrls: ['./acciones-dialog.component.css']
})
export class AccionesDialogComponent {

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  opcionAcciones: boolean = false;

  contactForm= this.fb.group({
    valorCompraAcciones:['',Validators.required],
    fechaCompraAcciones:['',Validators.required],
    dividendosAcciones:['',Validators.required],
    valorDividendosAcciones:['',Validators.required],
    retencionDividendos:['',]
    })
    acciones(event: Event){
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

 
    
  eventoAccionesDialog(evento){
    if(evento.value == 1){
      this.opcionAcciones = true;
    }else{
      this.opcionAcciones = false;
    }
   }

}
