import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-pensiones-dialog2',
  templateUrl: './pensiones-dialog2.component.html',
  styleUrls: ['./pensiones-dialog2.component.css']
})
export class PensionesDialog2Component {

  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];

  fondoEmpleados2: boolean = false;
  fondoEmpleados3: boolean = false;


  contactForm= this.fb.group({
    aportesFondoEmpleados:[''],
    ahorrosFondoEmpleados:[''],
    CDTFondoEmpleados:[''],
    interesesPagarAhorrosFondoEmpleados:[''],
    creditosFondoEmpleados:[''],
    interesesCobrarCreditosFondoEmpleados:[''],
    interesesAbonadosFondoEmpleados:[''],
    rendimientosCDT:[''],
    retencionRendimientosFondoEmpleados:[''],
    GMFFondoEmpleados:[''],  
    
    aportesFondoEmpleados_1:[''],
    ahorrosFondoEmpleados_1:[''],
    CDTFondoEmpleados_1:[''],
    interesesPagarAhorrosFondoEmpleados_1:[''],
    creditosFondoEmpleados_1:[''],
    interesesCobrarCreditosFondoEmpleados_1:[''],
    interesesAbonadosFondoEmpleados_1:[''],
    rendimientosCDT_1:[''],
    retencionRendimientosFondoEmpleados_1:[''],
    GMFFondoEmpleados_1:[''],    
    
    aportesFondoEmpleados_2:[''],
    ahorrosFondoEmpleados_2:[''],
    CDTFondoEmpleados_2:[''],
    interesesPagarAhorrosFondoEmpleados_2:[''],
    creditosFondoEmpleados_2:[''],
    interesesCobrarCreditosFondoEmpleados_2:[''],
    interesesAbonadosFondoEmpleados_2:[''],
    rendimientosCDT_2:[''],
    retencionRendimientosFondoEmpleados_2:[''],
    GMFFondoEmpleados_2:[''],     

     });
 
     fondoEmpleados(event: Event){
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
  
  
  eventoFondoEmpleados(evento){
    if(evento.value == 2){
      this.fondoEmpleados2 = true
      this.fondoEmpleados3 = false;
    }else if(evento.value == 3)
      {
       this.fondoEmpleados2 = true;
       this.fondoEmpleados3 = true;
      }else{
      this.fondoEmpleados2 = false;
      this.fondoEmpleados3 = false;
    }
   }



  
  
 

  
}
