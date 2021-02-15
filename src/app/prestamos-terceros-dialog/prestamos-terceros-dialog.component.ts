import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-prestamos-terceros-dialog',
  templateUrl: './prestamos-terceros-dialog.component.html',
  styleUrls: ['./prestamos-terceros-dialog.component.css']
})
export class PrestamosTercerosDialogComponent {

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

  prestamosTerceros: boolean = false;
  prestamosTerceros1: boolean = false;
  prestamosTerceros2: boolean = false;

  
  contactForm= this.fb.group({
    saldoPrestamos:['',],
    interesesPrestamos:['',],
    retencionPrestamos:['',],
    saldoDeudas:['',]
    })
    
    prestamos(event: Event){
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







    
  eventoPrestamosTerceros(evento){
    if(evento.value == 1){
      this.prestamosTerceros = true;
    }else{
      this.prestamosTerceros = false;
    }
   }
   eventoPrestamosTerceros1(evento){
    if(evento.value == 1){
      this.prestamosTerceros1 = true;
    }else{
      this.prestamosTerceros1 = false;
    }
   }
   eventoPrestamosTerceros2(evento){
    if(evento.value == 1){
      this.prestamosTerceros2 = true;
    }else{
      this.prestamosTerceros2 = false;
    }
   }
  



}
