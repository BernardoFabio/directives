import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-pensiones-dialog',
  templateUrl: './pensiones-dialog.component.html',
  styleUrls: ['./pensiones-dialog.component.css']
})
export class PensionesDialogComponent { 
  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}, {"codigo":4, "texto":"4"}];

  pensiones2: boolean = false;
  pensiones3: boolean = false;
  pensiones4: boolean = false;

  
  contactForm= this.fb.group({
    ingresosPensiones:['',Validators.required],
    aportesSaludPensiones:[''],
    contribucionesSolidaridadPensiones:[''],
    otrasDeduccionesPensiones:[''],

    ingresosPensiones_1:[''],
    aportesSaludPensiones_1:[''],
    contribucionesSolidaridadPensiones_1:[''],
    otrasDeduccionesPensiones_1:[''],

    ingresosPensiones_2:[''],
    aportesSaludPensiones_2:[''],
    contribucionesSolidaridadPensiones_2:[''],
    otrasDeduccionesPensiones_2:[''],

    ingresosPensiones_3:[''],
    aportesSaludPensiones_3:[''],
    contribucionesSolidaridadPensiones_3:[''],
    otrasDeduccionesPensiones_3:[''],

    });
    pensiones(event: Event){
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



  eventoNumeroPensiones(evento){
    if(evento.value == 2){
      this.pensiones2 = true;
      this.pensiones3 = false;
      this.pensiones4 = false;

    }else if(evento.value == 3)
      {
       this.pensiones2 = true;
       this.pensiones3 = true;
       this.pensiones4 = false;

      }else if(evento.value == 4)
      {
        this.pensiones2 = true;
        this.pensiones3 = true;
        this.pensiones4 = true;
      }   
      else{
      this.pensiones2 = false;
      this.pensiones3 = false;
      this.pensiones4 = false;
    }
   }


}
