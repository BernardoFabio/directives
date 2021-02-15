import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-fuerzas-armadas-dialog',
  templateUrl: './fuerzas-armadas-dialog.component.html',
  styleUrls: ['./fuerzas-armadas-dialog.component.css']
})
export class FuerzasArmadasDialogComponent {

 
  contactForm= this.fb.group({
    fuerzasArmadas:['',Validators.required],
     
     });
 
     fuerzasArmadasForm(event: Event){
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
