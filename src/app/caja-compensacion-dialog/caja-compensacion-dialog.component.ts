import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-caja-compensacion-dialog',
  templateUrl: './caja-compensacion-dialog.component.html',
  styleUrls: ['./caja-compensacion-dialog.component.css']
})
export class CajaCompensacionDialogComponent {
  
  contactForm= this.fb.group({
    cajaCompensacion:['',Validators.required],
    retencionCajaCompensacion:[''],
     
     });
 
     cajaCompensacionForm(event: Event){
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
