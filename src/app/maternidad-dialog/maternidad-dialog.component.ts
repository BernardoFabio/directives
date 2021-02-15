import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-maternidad-dialog',
  templateUrl: './maternidad-dialog.component.html',
  styleUrls: ['./maternidad-dialog.component.css']
})
export class MaternidadDialogComponent {

  
  contactForm= this.fb.group({
    maternidad:['',Validators.required],
     
     });
 
     maternidadForm(event: Event){
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
