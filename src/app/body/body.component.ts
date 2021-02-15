import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../dialog.service';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  title:any; 

  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  opciones:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}]; 

  numbers: any =[{"codigo": 1, "texto":"1"},{"codigo":2, "texto": "2"}, {"codigo":3, "texto":"3"},{"codigo":4, "texto":"4"}];

  form:FormGroup;
  form2:FormGroup;
  form3:FormGroup;
  form4:FormGroup;
  form5: FormGroup;
  form6: FormGroup;
  form7: FormGroup;
  form8:FormGroup;
  form9: FormGroup;
  form10: FormGroup;
  form11: FormGroup;
  form12: FormGroup;
  form13: FormGroup;
  form14: FormGroup;
  form15: FormGroup;
  form16: FormGroup;
  form17: FormGroup;
  form18: FormGroup;
  form19: FormGroup;
  form20: FormGroup;
  form21: FormGroup;

   
  ///////////////////////////Información Personal Reactive Forms
  private buildForm(){
    this.form = this.formBuilder.group({
      personalPrimera: ['',[Validators.required]],
      personalSegunda: [''],
      personalTercera: [''],
      personalCuarta: ['',[Validators.required]],
    });
  }
  personal(event:Event){
    event.preventDefault();  
    if(this.form.valid){
      const value = this.form.value;
      console.log(value);      
    }else{
      this.form.markAllAsTouched();
    }
  }

  /////////////////////////// Bienes Reactive Forms
  private buildForm2(){
    this.form2 = this.formBuilder.group({
      bienRaiz: ['',[Validators.required]],
    });
  }
  bienRaizForm(event: Event){
    event.preventDefault();
    if(this.form2.valid){
      const value = this.form2.value;
      console.log(value);      
    }
  }
//////////
 private buildForm3(){
   this.form3 = this.formBuilder.group({
     vehiculos:['',Validators.required]
   });
 }
 vehiculosForm(event: Event){
   event.preventDefault();
   if(this.form3.valid){
     const value = this.form3.value;
     console.log(value);     
   }
 }
///////////
private buildForm4(){
  this.form4 = this.formBuilder.group({
    otrosBienes:['',Validators.required]
  });
}
otrosBienesForm(event: Event){
  event.preventDefault();
  if(this.form4.valid){
    const value = this.form4.value;
    console.log(value);    
  }
}
//////////////////////Ingresos Laborales y Pensionales Reactive Forms
private buildForm5(){
  this.form5 = this.formBuilder.group({
    alimentacion: ['',Validators.required],
    fondoEmpleados: ['',Validators.required],
   // indemnizaciones: ['',Validators.required],
    //entidadPublica: ['',Validators.required],
  });
}
laboralesForm(event: Event){
  event.preventDefault();
  if(this.form5.valid){
    const value = this.form5.value;
    console.log(value);    
  }
}
//////////
private buildForm6(){
this.form6 = this.formBuilder.group({
  negocioPropio: ['', Validators.required]
 });
}
negocioPropioForm(event: Event){
  event.preventDefault();
  if(this.form6.valid){
    const value = this.form6.value;
    console.log(value);    
  }
}
///////////
private buildForm7(){
  this.form7 = this.formBuilder.group({
    pensiones1:['', Validators.required],
    pensiones2:['', Validators.required]
  });
}
pensionesForm(event:Event){
 event.preventDefault();
 if(this.form7.valid){
   const value = this.form7.value;
   console.log(value);   
 }
}
///////////////// Ingresos por arrendamiento Reactive Forms
private buildForm8(){
  this.form8 = this.formBuilder.group({
    arrendamientoBienRaiz:['', Validators.required],
  });
}
arrendamientoBienRaizForm(event:Event){
 event.preventDefault();
 if(this.form8.valid){
   const value = this.form8.value;
   console.log(value);   
 }
}
//////////////
private buildForm9(){
  this.form9 = this.formBuilder.group({
    arrendamientoVehiculos:['', Validators.required],
  });
}
arrendamientoVehiculosForm(event:Event){
 event.preventDefault();
 if(this.form9.valid){
   const value = this.form9.value;
   console.log(value);   
 }
}
//////////////
private buildForm10(){
  this.form10 = this.formBuilder.group({
    arrendamientoMaquinaria:['', Validators.required],
  });
}
arrendamientoMaquinariaForm(event:Event){
 event.preventDefault();
 if(this.form10.valid){
   const value = this.form10.value;
   console.log(value);   
 }
}
///////////////
private buildForm11(){
  this.form11 = this.formBuilder.group({
    arrendamientoOtrosBienes:['', Validators.required],
  });
}
arrendamientoOtrosBienesForm(event:Event){
 event.preventDefault();
 if(this.form11.valid){
   const value = this.form11.value;
   console.log(value);   
 }
}
/////////////////Ingresos por ventas Reactive Forms
private buildForm12(){
  this.form12 = this.formBuilder.group({
    ventaVehiculos:['', Validators.required],
  });
}
ventaVehiculosForm(event:Event){
 event.preventDefault();
 if(this.form12.valid){
   const value = this.form12.value;
   console.log(value);   
 }
}
////////////////
private buildForm13(){
  this.form13 = this.formBuilder.group({
    ventaBienRaiz1:['', Validators.required],
    ventaBienRaiz2:['', Validators.required],
    ventaBienRaiz3:['', Validators.required],
    ventaBienRaiz4:['', Validators.required]
  });
}
ventaBienRaizForm(event:Event){
 event.preventDefault();
 if(this.form13.valid){
   const value = this.form13.value;
   console.log(value);   
 }
}
/////////////////
private buildForm14(){
  this.form14 = this.formBuilder.group({
    ventaAcciones:['', Validators.required]
  });
}
ventaAccionesForm(event:Event){
 event.preventDefault();
 if(this.form14.valid){
   const value = this.form14.value;
   console.log(value);   
 }
}
/////////////////
private buildForm15(){
  this.form15 = this.formBuilder.group({
    ventaOtrosBienes:['', Validators.required]
  });
}
ventaOtrosBienesForm(event:Event){
 event.preventDefault();
 if(this.form15.valid){
   const value = this.form15.value;
   console.log(value);   
 }
}
//////////////Ingresos Ocasionales Reactive Forms
private buildForm16(){
  this.form16 = this.formBuilder.group({
    herencia:['', Validators.required]
  });
}
herenciaForm(event:Event){
 event.preventDefault();
 if(this.form16.valid){
   const value = this.form16.value;
   console.log(value);   
 }
}
//////////////
private buildForm17(){
  this.form17 = this.formBuilder.group({
    conyugal:['', Validators.required]
  });
}
conyugalForm(event:Event){
 event.preventDefault();
 if(this.form17.valid){
   const value = this.form17.value;
   console.log(value);   
 }
}
////////////
private buildForm18(){
  this.form18 = this.formBuilder.group({
    seguros:['', Validators.required]
  });
}
segurosForm(event:Event){
 event.preventDefault();
 if(this.form18.valid){
   const value = this.form18.value;
   console.log(value);   
 }
}

//////////////////Deducciones Reactive Forms

private buildForm19(){
  this.form19 = this.formBuilder.group({
    prepagada:['', Validators.required]
  });
}
prepagadaForm(event:Event){
 event.preventDefault();
 if(this.form19.valid){
   const value = this.form19.value;
   console.log(value);   
 }
}
//////////
private buildForm20(){
  this.form20 = this.formBuilder.group({
    dependientes:['', Validators.required]
  });
}
dependientesForm(event:Event){
 event.preventDefault();
 if(this.form20.valid){
   const value = this.form20.value;
   console.log(value);   
 }
}
////////////////////
private buildForm21(){
  this.form21 = this.formBuilder.group({
    seguridadSocial:['', Validators.required]
  });
}
seguridadSocialForm(event:Event){
 event.preventDefault();
 if(this.form21.valid){
   const value = this.form21.value;
   console.log(value);   
 }
}




 
 //Section Información Personal
 rentaPrimeraVez:boolean = false;
 renta2018: boolean = false;
 rentaOtrosPeriodos: boolean = false;

 //Section Bienes
 cambioTabBienes: boolean = true;

  certificadoCuentaAhorro: boolean = false;
  certificadoCuentaCorriente: boolean = false;
  certificadoFiduciaria: boolean = false;
  CDT: boolean = false;
  tarjetaCredito: boolean = false;
  creditoHipotecario: boolean = false;
  otrosCreditos: boolean = false;
  accionesPrivadas: boolean = false;
  prestamosTerceros: boolean = false;
  efectivo:boolean = false;  

  casaLoteInterno: boolean = false;
  carroMotoInterno: boolean = false;
  otrosBienesInterno: boolean = false;

  ventaInmueblesInterno: boolean = false;

  //section Ingresos  
  laboralesPrincipal: boolean = false;
  alimentacion: boolean = false;
  fondoEmpleados: boolean = false;
  maternidad: boolean =false;
  accidenteLaboral: boolean = false;
  cajaCompensacion: boolean = false;
  funerarios: boolean = false;
  exteriores: boolean = false;
  fuerzasArmadas:boolean = false;
  planRetiro: boolean = false;
  retiroReserva: boolean = false;
  compensacionMuerte: boolean = false;
  apoyosEconomicos: boolean = false;
  colciencias: boolean = false;
  employee: boolean = false; 
  publicSalary: boolean = false;

  intelectual: boolean = false;
  manual: boolean = false;
  honorariosDesconocidos: boolean = false; 

  propioNegocio: boolean =false;  

  pensiones: boolean = false;
  pensiones2: boolean = false;

  arrendamientoBienRaiz: boolean = false;

  arrendamientoVehiculos: boolean = false;

  arrendamientoMaquinaria: boolean = false;

  arrendamientoOtrosBienes: boolean = false;

  ventaVehiculos: boolean = false;

  ventaInmueblesInterno2: boolean = false;

  ventaAcciones: boolean = false;

  ventaOtrosBienes: boolean = false;

  herencia: boolean = false;

  conyugal: boolean = false;

  seguros: boolean = false;

  //Deducciones
  prepagada: boolean = false;
  dependientes: boolean = false;
  seguridadSocial: boolean = false;
  voluntarios: boolean = false;
  AFC: boolean = false;

  
  
  public salary: boolean;
  public honorarios: boolean;
  public ownBussiness: boolean;
  public retirement: boolean;
  public leaseRealEstate: boolean;
  public leaseCar: boolean;
  public leaseMachinery: boolean;
  public leaseOthersGoods: boolean;
  public salesCar: boolean;
  public salesRealEstate: boolean;
  public salesShares: boolean;
  public salesOthersGoods: boolean;
  public heritage: boolean;
  public divorce: boolean;
  public indemnization: boolean;
  public insurances: boolean;
  public healthCare: boolean;
  public dependencies: boolean;
  public socialSecurity: boolean;
  public donations: boolean;
  public financial: boolean;
  public casaLote: boolean;
  public carroMoto: boolean;
  public otrasInversiones: boolean;
  public pensionesVoluntarias: boolean;
  public ahorrosAFC: boolean;


  public incomeAllContainer: boolean = true;
  public leaseAllContainer: boolean = true;
  public salesAllContainer: boolean = true;
  public ocasionalesAllContainer: boolean = true;
  public deductionsAllContainer: boolean = true;
  public bienesAllContainer: boolean = true;

  public honorariosMarco: boolean = true;
  public ownBussinessMarco: boolean = true;
  public retirementMarco: boolean = true;
  public salariosMarco: boolean = true;  
  public leaseRealEstateMarco: boolean = true;
  public leaseCarMarco: boolean = true;
  public leaseMachineryMarco: boolean =true;
  public leaseOthersGoodsMarco: boolean = true;
  public salesCarMarco: boolean = true;
  public salesRealEstateMarco: boolean = true;
  public salesSharesMarco: boolean = true;
  public salesOthersGoodsMarco: boolean = true;
  public heritageMarco: boolean = true;
  public divorceMarco: boolean = true;
  public indemnizationMarco: boolean = true;
  public insurancesMarco: boolean = true;
  public healthCareMarco: boolean = true;
  public dependenciesMarco: boolean = true;
  public socialSecurityMarco: boolean = true;
  public donationsMarco: boolean = true;
  public financialMarco: boolean = true;
  public casaLoteMarco: boolean = true;
  public carroMotoMarco: boolean = true;
  public otrasInversionesMarco: boolean = true;
  public pensionesVoluntariasMarco: boolean = true;
  public ahorrosAFCMarco: boolean = true;

  
  indemnization1: boolean = false;

   
  constructor(public dialog: MatDialog, private dialogService:DialogService,
    private formBuilder:FormBuilder) {  


      this.buildForm();
      this.buildForm2();
      this.buildForm3();
      this.buildForm4();
      this.buildForm5();
      this.buildForm6();
      this.buildForm7();
      this.buildForm8();
      this.buildForm9();
      this.buildForm10();
      this.buildForm11();
      this.buildForm12();
      this.buildForm13();
      this.buildForm14();
      this.buildForm15();
      this.buildForm16();
      this.buildForm17();
      this.buildForm18();
      this.buildForm19();
      this.buildForm20();
      this.buildForm21();

    this.salary==false;
    this.honorarios == false;
    this.ownBussiness == false;
    this.retirement == false;
    this.leaseCar == false;
    this.leaseMachinery == false;
    this.leaseOthersGoods == false;
    this.salesCar == false;
    this.salesRealEstate == false;
    this.salesShares == false;
    this.salesOthersGoods == false;
    this.heritage == false; 
    this.divorce == false;
    this.indemnization == false;
    this.insurances == false;  
    this.healthCare == false;
    this.dependencies == false;
    this.socialSecurity == false;
    this.donations == false;  
    this.financial == false;
    this.casaLote == false;
    this.carroMoto== false;
    this.otrasInversiones == false;
    this.ahorrosAFC == false;
    this.pensionesVoluntarias == false;

    
    this.incomeAllContainer == false;
    this.leaseAllContainer == false;
    this.salesAllContainer == false;
    this.ocasionalesAllContainer == false;
    this.healthCareMarco == false;
    this.bienesAllContainer == false;

    this.honorariosMarco == false;
    this.ownBussinessMarco == false; 
    this.retirementMarco == false;
    this.salariosMarco == false;
    this.leaseRealEstateMarco == false;
    this.leaseCarMarco == false;
    this.leaseMachineryMarco == false;
    this.leaseOthersGoodsMarco == false;
    this.salesCarMarco == false;
    this.salesRealEstateMarco == false;
    this.salesRealEstateMarco == false;
    this.salesOthersGoodsMarco == false;
    this.heritageMarco == false;
    this.divorceMarco == false;
    this.indemnizationMarco == false;
    this.insurancesMarco == false;
    this.healthCareMarco == false;
    this.dependencies == false;
    this.socialSecurityMarco == false;
    this.donationsMarco == false;
    this.financialMarco == true;
    this.casaLoteMarco == false;
    this.carroMotoMarco == false;
    this.otrasInversionesMarco == false;
    this.pensionesVoluntariasMarco == false;
    this.ahorrosAFCMarco == false;
  
 
   }


   cambioTabBienesEvent(){
     this.cambioTabBienes = true;
   }   
   
  showSalary(){
    this.salary=true;
  }
  showSalary2(){
    this.salariosMarco = true;
  }
  showHonorarios(){
    this.honorarios=true;
  }  
  showHonorarios2(){
    this.honorariosMarco = true;
  }
  showOwnBussiness(){
    this.ownBussiness = true;  
  }
  showOwnBussiness2(){
    this.ownBussinessMarco = true;
  }
  showRetirement(){
    this.retirement = true;
  }
  showRetirement2(){
    this.retirementMarco = true;
  }
  showLeaseRealEstate(){ 
    this.leaseRealEstate = true;
  }
  showLeaseRealEstate2(){
    this.leaseRealEstateMarco = true;
  }  
  showLeaseCar(){
    this.leaseCar = true;
  }
  showLeaseCar2(){
    this.leaseCarMarco = true;
  }
  showLeaseMachinery(){
    this.leaseMachinery = true;
  }
  showLeaseMachinery2(){
    this.leaseMachineryMarco = true;
  }
  showLeaseOthersGoods(){
    this.leaseOthersGoods = true;
  }
  showLeaseOthersGoods2(){
    this.leaseOthersGoodsMarco = true;
  }
  showSalesCar(){
    this.salesCar = true;
  }
  showSalesCar2(){
    this.salesCarMarco = true;
  }
  showSalesRealEstate(){
    this.salesRealEstate = true;
  }
  showSalesRealEstate2(){
    this.salesRealEstateMarco = true;
  }
  showSalesShare(){
    this.salesShares = true;
  }
  showSalesShare2(){
    this.salesSharesMarco = true;
  }
  showSalesOthersGoods(){
    this.salesOthersGoods = true;
  }
  showSalesOthersGoods2(){
    this.salesOthersGoodsMarco = true;
  }
  showHeritage(){
    this.heritage = true;
  }
  showHeritage2(){
    this.heritageMarco = true;
  }
  showDivorce(){
    this.divorce = true;
  }
  showDivorce2(){
    this.divorceMarco = true;
  }
  showIndemnization(){
    this.indemnization = true;
  }
  showIndemnization2(){
    this.indemnizationMarco = true;
  }
  showInsurances(){
    this.insurances = true;
  }
  showInsurances2(){
    this.insurancesMarco = true;
  }
  showHealthCare(){
    this.healthCare = true;
  }
  showHealthCare2(){
    this.healthCareMarco = true;
  }
  showDependencies(){
    this.dependencies = true;
  }
  showDependencies2(){
    this.dependenciesMarco = true;
  }
  showSocialSecurity(){
    this.socialSecurity = true;    
  }
  showSocialSecurity2(){
    this.socialSecurityMarco = true;
  }
  showDonations(){
    this.donations = true;
  }
  showDonations2(){
    this.donationsMarco = true;
  }
  showFinancial(){
  this.financial = true;
  }
  showFinancial2(){
  this.financialMarco = true;
  }
  showCasaLote(){
  this.casaLote = true;
  }
  showCasaLote2(){
  this.casaLoteMarco = true;
  }
  showCarroMoto(){
   this.carroMoto = true;
  }
  showCarroMoto2(){
  this.carroMotoMarco = true;
  }
  showOtrasInversiones(){
  this.otrasInversiones = true;
  }
  showOtrasInversiones2(){
  this.otrasInversionesMarco = true;
  }
  showPensionesVoluntarias(){
    this.pensionesVoluntarias = true;
  }
  showPensionesVoluntarias2(){
    this.pensionesVoluntariasMarco = true;
  }
  showAhorrosAFC(){
    this.ahorrosAFC = true;
  }
  showAhorrosAFC2(){
    this.ahorrosAFCMarco = true;
  }


  showIncomeAllContainer(){
    this.incomeAllContainer = true;
  }
  showLeaseAllContainer(){
    this.leaseAllContainer = true;
  }
  showSalesAllContainer(){
    this.salesAllContainer = true;
  }
  showOcasionalesAllContainer(){
    this.ocasionalesAllContainer = true;
  }
  showDectionsAllContainer(){
    this.deductionsAllContainer = true;
  }


  hideIncomeAllContainer(){
    this.incomeAllContainer = false;
  }
  hideLeaseAllContainer(){
    this.leaseAllContainer = false;
  } 
  hideSalesAllContainer(){
    this.salesAllContainer = false;
  }
  hideOcasionalesAllContainer(){
    this.ocasionalesAllContainer = false;
  }
  hideDeductionsAllContainer(){
    this.deductionsAllContainer = false;
  }


  hideSalary(){
    this.salary=false;
    this.salariosMarco = false;
  }
  hideHonorarios(){
    this.honorarios=false;
    this.honorariosMarco = false;
  }  
  hideOwnBussiness(){
    this.ownBussiness = false;
    this.ownBussinessMarco =false;
  }  
  hideRetirement(){
    this.retirement = false;
    this.retirementMarco = false;
  }
  hideLeaseRealEstate(){
    this.leaseRealEstate = false;
    this.leaseRealEstateMarco = false;
  }
  hideLeaseCar(){
    this.leaseCar = false;
    this.leaseCarMarco =false;
  }
  hideLeaseMachinery(){
    this.leaseMachinery = false;
    this.leaseMachineryMarco = false;
  }
  hideLeaseOthersGoods(){
    this.leaseOthersGoods = false;
    this.leaseOthersGoodsMarco = false;
  }
  hideSalesCar(){
    this.salesCar = false;
    this.salesCarMarco = false;
  }
  hideSalesRealEstate(){
    this.salesRealEstate = false;
    this.salesRealEstateMarco = false;
  }
  hideSalesShare(){
    this.salesShares = false;
    this.salesSharesMarco = false;
  }
  hideSalesOthersGoods(){
    this.salesOthersGoods = false;
    this.salesOthersGoodsMarco = false;
  }
  hideHeritage(){
    this.heritage = false;
    this.heritageMarco = false;
  }
  hideDivorce(){
    this.divorce = false;
    this.divorceMarco =false;
  }
  hideIndemnization(){
    this.indemnization = false;
    this.indemnizationMarco = false;
  }
  hideInsurances(){
    this.insurances = false;
    this.insurancesMarco = false;
  }
  hideHealthCare(){
    this.healthCare = false;
    this.healthCareMarco = false;
  }
  hideDependencies(){
    this.dependencies = false;
    this.dependenciesMarco = false;
  }
  hideSocialSecurity(){
    this.socialSecurity = false;
    this.socialSecurityMarco = false;
  }
  hideDonations(){
    this.donations = false;
    this.donationsMarco = false;
  }
  hideFinancial(){
    this.financial = false;
    this.financialMarco = false;
  }
  hideCasaLote(){
    this.casaLote = false;
    this.casaLoteMarco = false;
  }
  hideCarroMoto(){
    this.carroMoto = false;
    this.carroMotoMarco = false;
  }
  hideOtrasInversiones(){
    this.otrasInversiones = false;
    this.otrasInversionesMarco = false;
  }
  hidePensionesVoluntarias(){
    this.pensionesVoluntarias = false;
    this.pensionesVoluntariasMarco = false;
  }
  hideAhorrosAFC(){
    this.ahorrosAFC = false;
    this.ahorrosAFCMarco = false;
  }


  showRenta2018(){  
    this.renta2018 = true;
    }
  hideRenta2018(){
    this.renta2018 = false;
  }
  showRentaOtrosPeriodos(){
    this.rentaOtrosPeriodos = true;
  }
  hideRentaOtrosPeriodos(){
    this.rentaOtrosPeriodos = false;
  }

  //Información Personal
  eventoRentaPrimeraVez(evento){
   if(evento.value == 2){
     this.rentaPrimeraVez = true;
   }else{
     this.rentaPrimeraVez = false;
   }
  }

  //Bienes
    casaLoteEvent(evento){
      if(evento.value==1){   
        this.casaLoteInterno = true;
        } else{     
         this.casaLoteInterno = false;          
        }
      } 
      carroMotoEvent(evento){
        if(evento.value==1){   
          this.carroMotoInterno = true;
          } else{     
           this.carroMotoInterno = false;          
          }
        }  
        otrosBienesEvent(evento){
          if(evento.value==1){   
            this.otrosBienesInterno = true;
            } else{     
             this.otrosBienesInterno = false;          
            }
          } 
  //Ingresos

  showLaboralesPrincipal(){
    this.laboralesPrincipal = true;
  }
    alimentacionEvent(evento){
      if(evento.value==1){   
        this.alimentacion = true;
        } else{     
         this.alimentacion = false;          
        }
      } 
      fondoEmpleadosEvent(evento){
        if(evento.value==1){   
          this.fondoEmpleados = true;
          } else{     
           this.fondoEmpleados = false;          
          }
        } 
        propioNegocioEvent(evento){
          if(evento.value==1){   
            this.propioNegocio = true;
            } else{     
             this.propioNegocio = false;          
            }
          }  
          pensionesEvent(evento){
            if(evento.value==1){   
              this.pensiones = true;
              } else{     
               this.pensiones = false;          
              }
            } 

            pensionesEvent2(evento){
              if(evento.value==1){   
                this.pensiones2 = true;
                } else{     
                 this.pensiones2 = false;          
                }
              }

              arrendamientoBienRaizEvent(evento){
                if(evento.value==1){   
                  this.arrendamientoBienRaiz = true;
                  } else{     
                   this.arrendamientoBienRaiz = false;          
                  }
                }

                arrendamientoVehiculosEvent(evento){
                  if(evento.value==1){   
                    this.arrendamientoVehiculos = true;
                    } else{     
                     this.arrendamientoVehiculos = false;          
                    }
                  }

                  arrendamientoMaquinariaEvent(evento){
                    if(evento.value==1){   
                      this.arrendamientoMaquinaria = true;
                      } else{     
                       this.arrendamientoMaquinaria = false;          
                      }
                    }

                    arrendamientoOtrosBienesEvent(evento){
                      if(evento.value==1){   
                        this.arrendamientoOtrosBienes = true;
                        } else{     
                         this.arrendamientoOtrosBienes = false;          
                        }
                      }

                      ventaInmueblesEvent(evento){
                        if(evento.value==1){   
                          this.ventaInmueblesInterno = true;
                          } else{     
                           this.ventaInmueblesInterno = false;          
                          }
                        } 
                        ventaInmueblesEvent2(){
                          this.ventaInmueblesInterno2 = true;            
                          } 

                      ventaVehiculosEvent(evento){
                        if(evento.value==1){   
                          this.ventaVehiculos = true;
                          } else{     
                           this.ventaVehiculos = false;          
                          }
                        }
                       ventaAccionesEvent(evento){
                          if(evento.value==1){   
                            this.ventaAcciones = true;
                            } else{     
                             this.ventaAcciones = false;          
                            }
                          }

ventaOtrosBienesEvent(evento){
  if(evento.value == 1){
    this.ventaOtrosBienes = true;
  }else{
    this.ventaOtrosBienes = false;
  }
}

herenciaEvent(evento){
  if(evento.value == 1){
    this.herencia = true;
  }else{
    this.herencia = false;
  }
}

conyugalEvent(evento){
  if(evento.value == 1){
    this.conyugal = true;
  }else{
    this.conyugal = false;
  }
}

segurosEvent(evento){
  if(evento.value == 1){
    this.seguros = true;
  }else{
    this.seguros = false;
  }
}

prepagadaEvent(evento){
  if(evento.value == 1){
    this.prepagada = true;
  }else{
    this.prepagada = false;
  }
}


dependientesEvent(evento){
  if(evento.value == 1){
    this.dependientes = true;
  }else{
    this.dependientes = false;
  }
}

seguridadSocialEvent(evento){
  if(evento.value == 1){
    this.seguridadSocial = true;
  }else{
    this.seguridadSocial = false;
  }
}

            
   

    publicSalaryEvent(evento){
          if(evento.value==1){   
            this.publicSalary = true;
            } else{     
             this.publicSalary = false;          
            }
          } 
   fundEmployee(evento){
            if(evento.value==1){   
              this.employee = true;
            } else{     
               this.employee = false;          
            }
          }     

          indemnizationEvent(evento){
            if(evento.value==1){   
              this.indemnization1= true;
            } else{     
               this.indemnization1= false;          
            }
          }
         
    
     
  //Documents bar//
    step: any= 0;
  
    setStep(index: number) {
      this.step = index;
    }
  
    nextStep() {
      this.step++;
    }
  
    prevStep() {
      this.step--;
    }


 
  
  ngOnInit(): void {
  }
  openDialog() {
    const dialogRef = this.dialogService.openDialog();
  }
  corrienteDialog(){
    const dialogRef = this.dialogService.corrienteDialog();
  } 
  fondoInversionDialog(){
    const dialogRef = this.dialogService.fondoInversionDialog();
  } 
  CDTDialog(){
    const dialogRef = this.dialogService.CDTDialog();
  }
  tarjetaCreditoDialog(){    
  const dialogRef = this.dialogService.tarjetaCreditoDialog();
  }
  creditoHipotecarioDialog(){
    const dialogRef = this.dialogService.creditoHipotecarioDialog();
  }
  otrosCreditosDialog(){
    const dialogRef = this.dialogService.otrosCreditosDialog();
  }
  accionesDialog(){
   const dialogRef = this.dialogService.accionesDialog();
  }
  prestamosTercerosDialog(){
    const dialogRef = this.dialogService.prestamosTercerosDialog();
  }
  efectivoDialog(){
    const dialogRef = this.dialogService.efectivoDialog();
  }
  bienRaizDialog(){
    const dialogRef = this.dialogService.bienRaizDialog();
  }
  predialDialog(){
    const dialogRef = this.dialogService.predialDialog();
  }
  vehiculosDialog(){
    const dialogRef = this.dialogService.vehiculosDialog();
  }
  otrosBienesDialog(){
    const dialogRef = this.dialogService.otrosBienesDialog();
  }
  laboralesDialog(){
    const dialogRef = this.dialogService.laboralesDialog();
  }
  alimentacionDialog(){
    const dialogRef = this.dialogService.alimentacionDialog();
  }
  fondoEmpleadosDialog(){
    const dialogRef = this.dialogService.fondoEmpleadosDialog();
  }
  maternidadDialog(){
    const dialogRef = this.dialogService.maternidadDialog();
  }
  accidenteLaboralDialog(){
    const dialogRef = this.dialogService.accidenteLaboralDialog();
  }
  cajaCompensacionDialog(){
    const dialogRef = this.dialogService.cajaCompensacionDialog();
  }
  funerariosDialog(){
    const dialogRef = this.dialogService.funerariosDialog();       
  }
  exterioresDialog(){
    const dialogRef = this.dialogService.exterioresDialog();
  }
  fuerzasArmadasDialog(){
    const dialogRef = this.dialogService.fuerzasArmadasDialog();
  }
  planRetiroDialog(){
    const dialogRef = this.dialogService.planRetiroDialog();
  }
  retiroReservaDialog(){
    const dialogRef = this.dialogService.retiroReservaDialog();
  }
  compensacionMuerteDialog(){
    const dialogRef = this.dialogService.compensacionMuerteDialog();
  }
  apoyosEconomicosDialog(){
    const dialogRef = this.dialogService.apoyosEconomicosDialog();
  }
  colcienciasDialog(){
    const dialogRef = this.dialogService.colcienciasDialog();
  }
  intelectualDialog(){
    const dialogRef = this.dialogService.intelectualDialog();
  }
  manualDialog(){
    const dialogRef = this.dialogService.manualDialog();
  }
  negocioPropioDialog(){
    const dialogRef = this.dialogService.negocioPropioDialog();
  }
  pensionesDialog(){
    const dialogRef = this.dialogService.pensionesDialog();
  } 
  pensionesDialog2(){
    const dialogRef = this.dialogService.pensionesDialog2();
  }
  arrendamientoBienRaizDialog(){
    const dialogRef = this.dialogService.arrendamientoBienRaizDialog();
  }
  arrendamientoVehiculosDialog(){
    const dialogRef = this.dialogService.arrendamientoVehiculosDialog();
  }
  arrendamientoMaquinariaDialog(){
    const dialogRef = this.dialogService.arrendamientoMaquinariaDialog();
  }
  arrendamientoOtrosBienesDialog(){
    const dialogRef = this.dialogService.arrendamientoOtrosBienesDialog();
  }
  ventaVehiculosDialog(){
    const dialogRef = this.dialogService.ventaVehiculosDialog();
  }
  ventaBienRaizDialog(){
    const dialogRef = this.dialogService.ventaBienRaizDialog();
  }
  ventaAccionesDialog(){
    const dialogRef = this.dialogService.ventaAccionesDialog();
  }
  ventaOtrosBienesDialog(){
    const dialogRef = this.dialogService.ventaOtrosBienesDialog();
  }
  herenciaDialog(){
    const dialogRef = this.dialogService.herenciaDialog();
  }
  conyugalDialog(){
    const dialogRef = this.dialogService.conyugalDialog();
  }
  segurosDialog(){
    const dialogRef = this.dialogService.segurosDialog();
  }
  prepagadaDialog(){
    const dialogRef = this.dialogService.prepagadaDialog();
  }
  dependientesDialog(){
    const dialogRef = this.dialogService.dependientesDialog();
  }
  seguridadSocialDialog(){
    const dialogRef = this.dialogService.seguridadSocialDialog();
  }
  voluntariasDialog(){
    const dialogRef = this.dialogService.voluntariasDialog();
  }
  AFCDialog(){
    const dialogRef = this.dialogService.AFCDialog();
  }  
 

}
