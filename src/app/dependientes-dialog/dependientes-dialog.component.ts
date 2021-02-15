import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-dependientes-dialog',
  templateUrl: './dependientes-dialog.component.html',
  styleUrls: ['./dependientes-dialog.component.css']
})
export class DependientesDialogComponent {

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"},
  {"codigo":4, "texto":"4"},{"codigo":5, "texto":"5"},{"codigo":6, "texto":"6"},{"codigo":7, "texto":"7"}];

  options:any=[{"codigo":1, "texto":"Hijo(a)"}, {"codigo":2,  "texto": "Cónyuge permantente"},{"codigo":3,  "texto": "Madre"},
  {"codigo":4,  "texto": "Padre"},{"codigo":5,  "texto": "hermano(a)"}];


  contactForm= this.fb.group({
    dependiente1:['', Validators.required],
    dependiente_1:['', Validators.required],

    dependiente2:[''],
    dependiente_2:[''],

    dependiente3:[''],
    dependiente_3:[''],

    dependiente4:[''],
    dependiente_4:[''],

    dependiente5:[''],
    dependiente_5:[''],
    
    dependiente6:[''],
    dependiente_6:[''],

    dependiente7:[''],
    dependiente_7:[''],
      
    })
    dependientesForm(event: Event){
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
 


  
  dependiente2: boolean = false;
  dependiente3: boolean = false;
  dependiente4: boolean = false;
  dependiente5: boolean = false;
  dependiente6: boolean = false;
  dependiente7: boolean = false;

  
  eventoDependientes(evento){
    if(evento.value == 2){
      this.dependiente2 = true;
      this.dependiente3 = false;
      this.dependiente4 = false;
      this.dependiente5 = false;
      this.dependiente6 = false;      
      }
      else if(evento.value == 3)
      {
       this.dependiente2 = true;
       this.dependiente3 = true;
       this.dependiente4 = false;
       this.dependiente5 = false;
       this.dependiente6 = false;
       this.dependiente7 = false;
      }
      else if(evento.value == 4)
      {
      this.dependiente2 = true;
      this.dependiente3 = true;
      this.dependiente4 = true;
      this.dependiente5 = false;
      this.dependiente6 = false;
      this.dependiente7 = false;
    }
    else if(evento.value == 5){
      this.dependiente2 = true;
      this.dependiente3 = true;
      this.dependiente4 = true;
      this.dependiente5 = true;
      this.dependiente6 = false;
      this.dependiente7 = false;
    }
    else if(evento.value == 6){
      this.dependiente2 = true;
      this.dependiente3 = true;
      this.dependiente4 = true;
      this.dependiente5 = true;
      this.dependiente6 = true;
      this.dependiente7 = false;
    }
    else if(evento.value ==7){
      this.dependiente2 = true;
      this.dependiente3 = true;
      this.dependiente4 = true;
      this.dependiente5 = true;
      this.dependiente6 = true;
      this.dependiente7 = true;
    }
   }


}
