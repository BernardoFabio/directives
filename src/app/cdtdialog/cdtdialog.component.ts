import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-cdtdialog',
  templateUrl: './cdtdialog.component.html',
  styleUrls: ['./cdtdialog.component.css']
})
export class CDTDialogComponent {

  contactForm= this.fb.group({
    saldoCDT:['',Validators.required],
    interesesCDT:['',Validators.required],
    retencionCDT:['',Validators.required],
    GMFCDT:['',]
    })
    CDT(event: Event){
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
