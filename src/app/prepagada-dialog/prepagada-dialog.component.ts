import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-prepagada-dialog',
  templateUrl: './prepagada-dialog.component.html',
  styleUrls: ['./prepagada-dialog.component.css']
})
export class PrepagadaDialogComponent {

  contactForm= this.fb.group({
    valorMedicinaPrepagada:['', Validators.required],
        
    })
    prepagadaForm(event: Event){
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
