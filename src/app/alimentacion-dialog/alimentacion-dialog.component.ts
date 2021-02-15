import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-alimentacion-dialog',
  templateUrl: './alimentacion-dialog.component.html',
  styleUrls: ['./alimentacion-dialog.component.css']
})
export class AlimentacionDialogComponent {

  alimentacion: boolean = false; 
  
  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

 
  contactForm= this.fb.group({
   alimentacion:['',Validators.required],
   alimentacionValue:[''],

    
    });

    alimentacionForm(event: Event){
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




  eventoAlimentacion(evento){
    if(evento.value == 1){
      this.alimentacion = true;
    }else{
      this.alimentacion = false;
    }
   }

  
}
