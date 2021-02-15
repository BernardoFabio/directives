import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-bien-raiz-dialog',
  templateUrl: './bien-raiz-dialog.component.html',
  styleUrls: ['./bien-raiz-dialog.component.css']
})
export class BienRaizDialogComponent  {

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"}];


  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  bienRaiz1: boolean = false;
  bienRaiz2: boolean = false;
  bienRaiz3: boolean = false;
  bienRaiz4: boolean = false;
  bienRaiz5: boolean = false;

  bienRaizDos1: boolean = false;
  bienRaizDos2: boolean = false;
  bienRaizDos3: boolean = false;
  bienRaizDos4: boolean = false;
  bienRaizDos5: boolean = false;

  bienRaizTres1: boolean = false;
  bienRaizTres2: boolean = false;
  bienRaizTres3: boolean = false;
  bienRaizTres4: boolean = false;
  bienRaizTres5: boolean = false;


  inmueble2: boolean = false;
  inmueble3: boolean = false;

  contactForm= this.fb.group({
    vivirBienRaiz:['',Validators.required],
    titularBienRaiz:['',Validators.required],
    porcentajeBienRaiz:['',],
    adquisicionBienRaiz:['',Validators.required],
    fechaAdquisicionBienRaiz:['',],
    precioCompraBienRaiz:['',Validators.required],
    mejorasBienRaiz:['',],
    valorMejorasBienRaiz:['',],
    valorDeclaracionBienRaiz:['',],
    mejoras2019BienRaiz:['',],

    vivirBienRaiz2:[''],
    titularBienRaiz2:[''],
    porcentajeBienRaiz2:['',],
    adquisicionBienRaiz2:[''],
    fechaAdquisicionBienRaiz2:['',],
    precioCompraBienRaiz2:['',],
    mejorasBienRaiz2:['',],
    valorMejorasBienRaiz2:['',],
    valorDeclaracionBienRaiz2:['',],
    mejoras2019BienRaiz2:['',],

    vivirBienRaiz3:[''],
    titularBienRaiz3:[''],
    porcentajeBienRaiz3:[''],
    adquisicionBienRaiz3:[''],
    fechaAdquisicionBienRaiz3:['',],
    precioCompraBienRaiz3:['',],
    mejorasBienRaiz3:['',],
    valorMejorasBienRaiz3:['',],
    valorDeclaracionBienRaiz3:['',],
    mejoras2019BienRaiz3:['',],

    });
    
    bienRaiz(event: Event){
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




  eventoNumeroInmuebles(evento){
    if(evento.value == 2){
      this.inmueble2 = true
    }else if(evento.value == 3)
      {
       this.inmueble2 = true;
       this.inmueble3 = true;
      }else{
      this.inmueble2 = false;
      this.inmueble3 = false;
    }
   }



    
  eventoBienRaiz1(evento){
    if(evento.value == 2){
      this.bienRaiz1 = true;
    }else{
      this.bienRaiz1 = false;
    }
   }
   eventoCompraBienRaiz2(evento){
    if(evento.value == 1){
      this.bienRaiz2 = true;
    }else{
      this.bienRaiz2 = false;
    }
   }
   eventoCompraBienRaiz3(evento){
    if(evento.value == 1){
      this.bienRaiz3 = true;
    }else{
      this.bienRaiz3 = false;
    }
   }
   eventoCompraBienRaiz4(evento){
    if(evento.value == 1){
      this.bienRaiz4 = true;
    }else{
      this.bienRaiz4 = false;
    }
   }
   eventoCompraBienRaiz5(evento){
    if(evento.value == 1){
      this.bienRaiz5 = true;
    }else{
      this.bienRaiz5 = false;
    }
   }





   eventoBienRaizDos1(evento){
    if(evento.value == 2){
      this.bienRaizDos1 = true;
    }else{
      this.bienRaizDos1 = false;
    }
   }
   eventoCompraBienRaizDos2(evento){
    if(evento.value == 1){
      this.bienRaizDos2 = true;
    }else{
      this.bienRaizDos2 = false;
    }
   }
   eventoCompraBienRaizDos3(evento){
    if(evento.value == 1){
      this.bienRaizDos3 = true;
    }else{
      this.bienRaizDos3 = false;
    }
   }
   eventoCompraBienRaizDos4(evento){
    if(evento.value == 1){
      this.bienRaizDos4 = true;
    }else{
      this.bienRaizDos4 = false;
    }
   }
   eventoCompraBienRaizDos5(evento){
    if(evento.value == 1){
      this.bienRaizDos5 = true;
    }else{
      this.bienRaizDos5 = false;
    }
   }



   eventoBienRaizTres1(evento){
    if(evento.value == 2){
      this.bienRaizTres1 = true;
    }else{
      this.bienRaizTres1 = false;
    }
   }
   eventoCompraBienRaizTres2(evento){
    if(evento.value == 1){
      this.bienRaizTres2 = true;
    }else{
      this.bienRaizTres2 = false;
    }
   }
   eventoCompraBienRaizTres3(evento){
    if(evento.value == 1){
      this.bienRaizTres3 = true;
    }else{
      this.bienRaizTres3 = false;
    }
   }
   eventoCompraBienRaizTres4(evento){
    if(evento.value == 1){
      this.bienRaizTres4 = true;
    }else{
      this.bienRaizTres4 = false;
    }
   }
   eventoCompraBienRaizTres5(evento){
    if(evento.value == 1){
      this.bienRaizTres5 = true;
    }else{
      this.bienRaizTres5 = false;
    }
   }







   

 



}
