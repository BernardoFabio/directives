import { Component, OnInit } from '@angular/core';
import{ FormGroup, FormBuilder,FormsModule, FormControl,Validators} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-voluntarias-dialog',
  templateUrl: './voluntarias-dialog.component.html',
  styleUrls: ['./voluntarias-dialog.component.css']
})
export class VoluntariasDialogComponent {

  pension: boolean = false;
  cesantias: boolean = false;

  
  contactForm= this.fb.group({
    
    saldoPensionesVoluntarias:[''],
    aportesRetencionContingente:[''],
    aportesSinRetencionContingente:[''],
    aportesAnosAnterioresSinRetencionContingente:[''],
    aporteInstitucionalRetencion:[''],
    aporteInstitucionalSinRetencion:[''],
    aportesAno:[''],
    aportesConsolidadosAno:[''],
    retirosVivienda:[''],
    retirosPension:[''],
    retirosSinRetencionContingente:[''],
    retirosLegales2019sinRetencionContingente:[''],
    retirosLegalesAntes2019sinRetencionContingente:[''],
    retiroAportesConRetencionContingente:[''],
    retiros2019SinRequisitosLegalesRetencion:[''],
    retirosPermanencia:[''],
    retirosAntes2019SinRequisitosLegalesRetencion:[''],
    retiroRendimientosAportes2012:[''],
    retiroRendimientosAportesDespues2013:[''],
    retiroRendimientosConRetencion:[''],
    retencionContingentePracticada:[''],
    retencionSobreRendimientos:[''], 
    cesantias:[''],
     
    })
    pensionesVoluntariasForm(event: Event){
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
