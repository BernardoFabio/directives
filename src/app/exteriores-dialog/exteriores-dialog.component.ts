import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-exteriores-dialog',
  templateUrl: './exteriores-dialog.component.html',
  styleUrls: ['./exteriores-dialog.component.css']
})
export class ExterioresDialogComponent {

 
  contactForm= this.fb.group({
    exteriores:['',Validators.required],
     
     });
 
     exterioresForm(event: Event){
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
