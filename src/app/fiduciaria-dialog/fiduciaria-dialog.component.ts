import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-fiduciaria-dialog',
  templateUrl: './fiduciaria-dialog.component.html',
  styleUrls: ['./fiduciaria-dialog.component.css']
})
export class FiduciariaDialogComponent {

  contactForm= this.fb.group({
    saldoFiduciaria:['',Validators.required],
    interesesFiduciaria:['',Validators.required],
    retencionFiduciaria:['',Validators.required],
    GMFFiduciaria:['',]
    })
    fiduciaria(event: Event){
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
