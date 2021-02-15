import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-seguridad-social-dialog',
  templateUrl: './seguridad-social-dialog.component.html',
  styleUrls: ['./seguridad-social-dialog.component.css']
})
export class SeguridadSocialDialogComponent {

  seguridadSocial1: boolean = false; 
  seguridadSocial2: boolean = false; 
  seguridadSocial3: boolean = false; 
  seguridadSocial4: boolean = false; 
  seguridadSocial5: boolean = false; 


  contactForm= this.fb.group({
    
    salud:[''],
    pension:[''],
    ARL:[''],
    cajaCompensacionFamiliar:[''],
    cesantias:[''], 
  
    })
    seguridadSocialForm(event: Event){
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
