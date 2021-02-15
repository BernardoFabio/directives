import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-colciencias-dialog',
  templateUrl: './colciencias-dialog.component.html',
  styleUrls: ['./colciencias-dialog.component.css']
})
export class ColcienciasDialogComponent {

  colciencias: boolean = false;

  
  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];

 
    contactForm= this.fb.group({
    colciencias:['',Validators.required],
    valorColciencias:[''],

     });
 
     colcienciasForm(event: Event){
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
  

  
  eventoColciencias(evento){
    if(evento.value == 2){
      this.colciencias = true;
    }else{
      this.colciencias = false;
    }
   }

 

}
