import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-accidente-laboral-dialog',
  templateUrl: './accidente-laboral-dialog.component.html',
  styleUrls: ['./accidente-laboral-dialog.component.css']
})
export class AccidenteLaboralDialogComponent {

  contactForm= this.fb.group({
    accidenteLaboral:['',Validators.required],
     
     });
 
     accidenteLaboralForm(event: Event){
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
