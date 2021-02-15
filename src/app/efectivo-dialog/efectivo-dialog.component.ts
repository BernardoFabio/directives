import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-efectivo-dialog',
  templateUrl: './efectivo-dialog.component.html',
  styleUrls: ['./efectivo-dialog.component.css']
})
export class EfectivoDialogComponent{

  contactForm= this.fb.group({
    saldoEfectivo:['',Validators.required],
  
    })
    efectivo(event: Event){
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
