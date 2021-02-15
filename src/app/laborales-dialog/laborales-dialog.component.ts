import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-laborales-dialog',
  templateUrl: './laborales-dialog.component.html',
  styleUrls: ['./laborales-dialog.component.css']
})
export class LaboralesDialogComponent {

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  laboralUno: boolean = false; 
  laboralDos: boolean = false;  
  laboralTres: boolean = false; 
 
  numeroLaboral2: boolean = false;
  numeroLaboral3: boolean = false;
   

  contactForm= this.fb.group({
    casilla30:['',Validators.required],
    casilla31:['',Validators.required],
    casilla37:['',Validators.required],
    casilla38:[''],
    casilla39:[''],
    casilla40:[''],
    casilla41:[''],
    casilla42:[''],
    casilla43:[''],
    casilla44:[''],
    casilla45:[''],
    casilla46:[''],
    casilla47:[''],
    casilla48:[''],
    casilla49:[''],
    casilla50:[''],
    casilla51:[''],
    casilla52:[''],
    casilla53:[''],

    casilla30_1:[''],
    casilla31_1:[''],
    casilla37_1:[''],
    casilla38_1:[''],
    casilla39_1:[''],
    casilla40_1:[''],
    casilla41_1:[''],
    casilla42_1:[''],
    casilla43_1:[''],
    casilla44_1:[''],
    casilla45_1:[''],
    casilla46_1:[''],
    casilla47_1:[''],
    casilla48_1:[''],
    casilla49_1:[''],
    casilla50_1:[''],
    casilla51_1:[''],
    casilla52_1:[''],
    casilla53_1:[''],

    casilla30_2:[''],
    casilla31_2:[''],
    casilla37_2:[''],
    casilla38_2:[''],
    casilla39_2:[''],
    casilla40_2:[''],
    casilla41_2:[''],
    casilla42_2:[''],
    casilla43_2:[''],
    casilla44_2:[''],
    casilla45_2:[''],
    casilla46_2:[''],
    casilla47_2:[''],
    casilla48_2:[''],
    casilla49_2:[''],
    casilla50_2:[''],
    casilla51_2:[''],
    casilla52_2:[''],
    casilla53_2:[''],
      
    })
    laborales(event: Event){
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





  eventoNumeroLaboral(evento){
    if(evento.value == 2){
      this.numeroLaboral2 = true
    }else if(evento.value == 3)
      {
       this.numeroLaboral2 = true;
       this.numeroLaboral3 = true;
      }else{
      this.numeroLaboral2 = false;
      this.numeroLaboral3 = false;
    }
   }



  

}
