import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-retiro-reserva-dialog',
  templateUrl: './retiro-reserva-dialog.component.html',
  styleUrls: ['./retiro-reserva-dialog.component.css']
})
export class RetiroReservaDialogComponent {
  
  contactForm= this.fb.group({
    retiroReservaArmada:['',Validators.required],
     
     });
 
     retiroReservaArmadaForm(event: Event){
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
