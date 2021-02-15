import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-plan-retiro-dialog',
  templateUrl: './plan-retiro-dialog.component.html',
  styleUrls: ['./plan-retiro-dialog.component.css']
})
export class PlanRetiroDialogComponent {

  
  contactForm= this.fb.group({
    retiroEntidadPublica:['',Validators.required],
     
     });
 
     retiroEntidadPublicaForm(event: Event){
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
