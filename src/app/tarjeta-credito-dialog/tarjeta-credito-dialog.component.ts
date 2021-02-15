import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-tarjeta-credito-dialog',
  templateUrl: './tarjeta-credito-dialog.component.html',
  styleUrls: ['./tarjeta-credito-dialog.component.css']
})
export class TarjetaCreditoDialogComponent {

  contactForm= this.fb.group({
    saldoTarjeta:['',Validators.required],
    interesesTarjeta:['',Validators.required],
    GMFTarjeta:['',]
    })
    tarjeta(event: Event){
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
