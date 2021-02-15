import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-funerarios-dialog',
  templateUrl: './funerarios-dialog.component.html',
  styleUrls: ['./funerarios-dialog.component.css']
})
export class FunerariosDialogComponent{
  
  contactForm= this.fb.group({
    funerarios:['',Validators.required],
     
     });
 
     funerariosForm(event: Event){
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
