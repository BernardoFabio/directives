import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-ahorro-dialog',
  templateUrl: './ahorro-dialog.component.html',
  styleUrls: ['./ahorro-dialog.component.css']
})
export class AhorroDialogComponent {

  contactForm= this.fb.group({
  saldoAhorros:['',Validators.required],
  interesesAhorros:['',Validators.required],
  retencionAhorros:['',Validators.required],
  GMFAhorros:['',]
  })
  ahorros(event: Event){
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
