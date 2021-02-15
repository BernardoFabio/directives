import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-otros-bienes-dialog',
  templateUrl: './otros-bienes-dialog.component.html',
  styleUrls: ['./otros-bienes-dialog.component.css']
})
export class OtrosBienesDialogComponent {

  contactForm= this.fb.group({
    valorCompraOtrosBienes:[''],
    valorBienesPlanos:['']

    })
    otrosBienes(event: Event){
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
