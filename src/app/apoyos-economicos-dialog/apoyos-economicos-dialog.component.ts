import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-apoyos-economicos-dialog',
  templateUrl: './apoyos-economicos-dialog.component.html',
  styleUrls: ['./apoyos-economicos-dialog.component.css']
})
export class ApoyosEconomicosDialogComponent {

  
  contactForm= this.fb.group({
    apoyosEconomicos:['',Validators.required],
     
     });
 
     apoyosEconomicosForm(event: Event){
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
