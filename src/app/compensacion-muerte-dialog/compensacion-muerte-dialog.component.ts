import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-compensacion-muerte-dialog',
  templateUrl: './compensacion-muerte-dialog.component.html',
  styleUrls: ['./compensacion-muerte-dialog.component.css']
})
export class CompensacionMuerteDialogComponent {

  
  contactForm= this.fb.group({
    compensacionMuerte:['',Validators.required],
     
     });
 
    compensacionMuerteForm(event: Event){
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
