import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { from } from 'rxjs';


@Component({
  selector: 'app-venta-otros-bienes-dialog',
  templateUrl: './venta-otros-bienes-dialog.component.html',
  styleUrls: ['./venta-otros-bienes-dialog.component.css']
})
export class VentaOtrosBienesDialogComponent {

  contactForm= this.fb.group({
    valorVentaOtrosBienes:['',Validators.required],
    retencion:[''],
       
    })
    ventaOtrosBienesForm(event: Event){
      //event.preventDefault();
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
