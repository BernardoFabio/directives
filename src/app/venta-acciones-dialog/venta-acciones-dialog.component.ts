import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-venta-acciones-dialog',
  templateUrl: './venta-acciones-dialog.component.html',
  styleUrls: ['./venta-acciones-dialog.component.css']
})
export class VentaAccionesDialogComponent {

  
  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  opcionAcciones: boolean = false;

  
  contactForm= this.fb.group({
    valorVentaAcciones:['',Validators.required],
    fechaVenta:['',Validators.required],
    retencion:[''],
       
    })
    ventaAccionesForm(event: Event){
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
