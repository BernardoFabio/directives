import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-predial',
  templateUrl: './predial.component.html',
  styleUrls: ['./predial.component.css']
})
export class PredialComponent {

  
  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  
  predialUno: boolean = false; 
  predialDos: boolean = false;  
  predialTres: boolean = false; 
 
  numeroPredial2: boolean = false;
  numeroPredial3: boolean = false;


  contactForm= this.fb.group({
    vivirBienRaizPredial:['',Validators.required],
    titularBienRaizPredial:['',Validators.required],
    porcentajeBienRaizPredial:['',],
    avaluoPredial:['',Validators.required],

    vivirBienRaizPredial2:['',],
    titularBienRaizPredial2:['',],
    porcentajeBienRaizPredial2:['',],
    avaluoPredial2:['',],

    vivirBienRaizPredial3:['',],
    titularBienRaizPredial3:['',],
    porcentajeBienRaizPredial3:['',],
    avaluoPredial3:['',],

    });
    
    predial(event: Event){
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







  eventoNumeroPredial(evento){
    if(evento.value == 2){
      this.numeroPredial2 = true
    }else if(evento.value == 3)
      {
       this.numeroPredial2 = true;
       this.numeroPredial3 = true;
      }else{
      this.numeroPredial2 = false;
      this.numeroPredial3 = false;
    }
   }



    
  eventoPredialUno(evento){
    if(evento.value == 2){
      this.predialUno = true;
    }else{
      this.predialUno = false;
    }
   }
  


   eventoPredialDos(evento){
    if(evento.value == 2){
      this.predialDos = true;
    }else{
      this.predialDos = false;
    }
   }
  


   eventoPredialTres(evento){
    if(evento.value == 2){
      this.predialTres = true;
    }else{
      this.predialTres= false;
    }
   }
  

   

  

}
