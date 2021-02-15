import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-corriente-dialog',
  templateUrl: './corriente-dialog.component.html',
  styleUrls: ['./corriente-dialog.component.css']
})
export class CorrienteDialogComponent{

  
  contactForm= this.fb.group({
    saldoCorriente:['',Validators.required],
    interesesCorriente:['',Validators.required],
    retencionCorriente:['',Validators.required],
    GMFCorriente:['',]
    })
    corriente(event: Event){
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
