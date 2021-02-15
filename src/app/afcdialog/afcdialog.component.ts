import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-afcdialog',
  templateUrl: './afcdialog.component.html',
  styleUrls: ['./afcdialog.component.css']
})
export class AFCDialogComponent {
  
  contactForm= this.fb.group({
    AFC1:[''],
    AFC2:[''],
    AFC3:[''],
    AFC4:[''],
    AFC5:[''],
    AFC6:[''],
    AFC7:[''],
    AFC8:[''],
    AFC9:[''],
    AFC10:[''],
    AFC11:[''],
    AFC12:[''],     
     });
 
     AFCForm(event: Event){
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
