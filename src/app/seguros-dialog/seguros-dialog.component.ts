import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguros-dialog',
  templateUrl: './seguros-dialog.component.html',
  styleUrls: ['./seguros-dialog.component.css']
})
export class SegurosDialogComponent {

  seguroVida: boolean = false; 
  seguroDano: boolean = false;
  seguroDano2: boolean = false;
  seguroDano3: boolean = false;

  contactForm= this.fb.group({
    valorSegurosVida:[''],
    amparosAdicionales:[''],
    retencionVida:[''],
    valorSeguroDano:[''],
    montoReparar:[''],
    retencionDano:[''],
    montoLucroCesante:[''],
    retencionLucroCesante:[''],
      
    })
    segurosForm(event: Event){
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

}
