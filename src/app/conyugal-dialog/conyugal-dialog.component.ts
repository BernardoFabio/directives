import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-conyugal-dialog',
  templateUrl: './conyugal-dialog.component.html',
  styleUrls: ['./conyugal-dialog.component.css']
})
export class ConyugalDialogComponent{
 
  contactForm= this.fb.group({
    valorLiquidacionConyugal:['',Validators.required],
      
    })
    conyugalForm(event: Event){
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
