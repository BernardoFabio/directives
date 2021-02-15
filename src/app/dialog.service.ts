import { Injectable } from '@angular/core';
import{MatDialog} from '@angular/material/dialog';

import { AhorroDialogComponent } from './ahorro-dialog/ahorro-dialog.component';
import { CorrienteDialogComponent } from './corriente-dialog/corriente-dialog.component';
import { FiduciariaDialogComponent } from './fiduciaria-dialog/fiduciaria-dialog.component';
import { CDTDialogComponent } from './cdtdialog/cdtdialog.component';
import { TarjetaCreditoDialogComponent } from './tarjeta-credito-dialog/tarjeta-credito-dialog.component';
import { CreditoHipotecarioDialogComponent } from './credito-hipotecario-dialog/credito-hipotecario-dialog.component';
import { OtrosCreditosDialogComponent } from './otros-creditos-dialog/otros-creditos-dialog.component';
import { AccionesDialogComponent } from './acciones-dialog/acciones-dialog.component';
import { PrestamosTercerosDialogComponent } from './prestamos-terceros-dialog/prestamos-terceros-dialog.component';
import { EfectivoDialogComponent } from './efectivo-dialog/efectivo-dialog.component';
import { BienRaizDialogComponent } from './bien-raiz-dialog/bien-raiz-dialog.component';
import { PredialComponent } from './predial/predial.component';
import { VehiculosDialogComponent } from './vehiculos-dialog/vehiculos-dialog.component';
import { OtrosBienesDialogComponent } from './otros-bienes-dialog/otros-bienes-dialog.component';
import { LaboralesDialogComponent } from './laborales-dialog/laborales-dialog.component';
import { AlimentacionDialogComponent } from './alimentacion-dialog/alimentacion-dialog.component';
import { FondoEmpleadosDialogComponent } from './fondo-empleados-dialog/fondo-empleados-dialog.component';
import { MaternidadDialogComponent } from './maternidad-dialog/maternidad-dialog.component';
import { AccidenteLaboralDialogComponent } from './accidente-laboral-dialog/accidente-laboral-dialog.component';
import { CajaCompensacionDialogComponent } from './caja-compensacion-dialog/caja-compensacion-dialog.component';
import { FunerariosDialogComponent } from './funerarios-dialog/funerarios-dialog.component';
import { ExterioresDialogComponent } from './exteriores-dialog/exteriores-dialog.component';
import { FuerzasArmadasDialogComponent } from './fuerzas-armadas-dialog/fuerzas-armadas-dialog.component';
import { PlanRetiroDialogComponent } from './plan-retiro-dialog/plan-retiro-dialog.component';
import { RetiroReservaDialogComponent } from './retiro-reserva-dialog/retiro-reserva-dialog.component';
import { CompensacionMuerteDialogComponent } from './compensacion-muerte-dialog/compensacion-muerte-dialog.component';
import { ApoyosEconomicosDialogComponent } from './apoyos-economicos-dialog/apoyos-economicos-dialog.component';
import { ColcienciasDialogComponent } from './colciencias-dialog/colciencias-dialog.component';
import { IntelectualDialogComponent } from './intelectual-dialog/intelectual-dialog.component';
import { ManualDialogComponent } from './manual-dialog/manual-dialog.component';
import { NegocioPropioDialogComponent } from './negocio-propio-dialog/negocio-propio-dialog.component';
import { PensionesDialogComponent } from './pensiones-dialog/pensiones-dialog.component';
import { PensionesDialog2Component } from './pensiones-dialog2/pensiones-dialog2.component';
import { ArrendamientoBienRaizDialogComponent } from './arrendamiento-bien-raiz-dialog/arrendamiento-bien-raiz-dialog.component';
import { ArrendamientoVehiculosDialogComponent } from './arrendamiento-vehiculos-dialog/arrendamiento-vehiculos-dialog.component';
import { ArrendamientoMaquinariaDialogComponent } from './arrendamiento-maquinaria-dialog/arrendamiento-maquinaria-dialog.component';
import { ArrendamientoOtrosBienesDialogComponent } from './arrendamiento-otros-bienes-dialog/arrendamiento-otros-bienes-dialog.component';
import { VentaVehiculoDialogComponent } from './venta-vehiculo-dialog/venta-vehiculo-dialog.component';
import { VentaBienRaizDialogComponent } from './venta-bien-raiz-dialog/venta-bien-raiz-dialog.component';
import { VentaAccionesDialogComponent } from './venta-acciones-dialog/venta-acciones-dialog.component';
import { VentaOtrosBienesDialogComponent } from './venta-otros-bienes-dialog/venta-otros-bienes-dialog.component';
import { HerenciaDialogComponent } from './herencia-dialog/herencia-dialog.component';
import { ConyugalDialogComponent } from './conyugal-dialog/conyugal-dialog.component';
import { SegurosDialogComponent } from './seguros-dialog/seguros-dialog.component';
import { PrepagadaDialogComponent } from './prepagada-dialog/prepagada-dialog.component';
import { DependientesDialogComponent } from './dependientes-dialog/dependientes-dialog.component';
import { SeguridadSocialDialogComponent } from './seguridad-social-dialog/seguridad-social-dialog.component';
import { VoluntariasDialogComponent } from './voluntarias-dialog/voluntarias-dialog.component';
import { AFCDialogComponent } from './afcdialog/afcdialog.component';
import { DeclaracionDialogComponent } from './declaracion-dialog/declaracion-dialog.component';


@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  // Dialogs Bienes//
    
  openDialog() {
    const dialogRef = this.dialog.open(AhorroDialogComponent);
  }
  corrienteDialog(){
    const dialogRef = this.dialog.open(CorrienteDialogComponent);
  }   
  fondoInversionDialog(){
    const dialogRef = this.dialog.open(FiduciariaDialogComponent);
  } 
  CDTDialog(){
    const dialogRef = this.dialog.open(CDTDialogComponent);
  }
  tarjetaCreditoDialog(){    
  const dialogRef = this.dialog.open(TarjetaCreditoDialogComponent)
  }
  creditoHipotecarioDialog(){
    const dialogRef = this.dialog.open(CreditoHipotecarioDialogComponent)
  }
  otrosCreditosDialog(){
    const dialogRef = this.dialog.open(OtrosCreditosDialogComponent)
  }
  accionesDialog(){
   const dialogRef = this.dialog.open(AccionesDialogComponent)
  }
  prestamosTercerosDialog(){
    const dialogRef = this.dialog.open(PrestamosTercerosDialogComponent)
  }
  efectivoDialog(){
    const dialogRef = this.dialog.open(EfectivoDialogComponent)
  }
  bienRaizDialog(){
    const dialogRef = this.dialog.open(BienRaizDialogComponent )
  }
  predialDialog(){
    const dialogRef = this.dialog.open(PredialComponent)
  }
  vehiculosDialog(){
    const dialogRef = this.dialog.open( VehiculosDialogComponent)
  }
  otrosBienesDialog(){
    const dialogRef = this.dialog.open(OtrosBienesDialogComponent)
  }
  laboralesDialog(){
    const dialogRef = this.dialog.open(LaboralesDialogComponent)
  }
  alimentacionDialog(){
    const dialogRef = this.dialog.open(AlimentacionDialogComponent)
  }
  fondoEmpleadosDialog(){
    const dialogRef = this.dialog.open(FondoEmpleadosDialogComponent)
  }
  maternidadDialog(){
    const dialogRef = this.dialog.open(MaternidadDialogComponent)
  }
  accidenteLaboralDialog(){
    const dialogRef = this.dialog.open(AccidenteLaboralDialogComponent)
  }
  cajaCompensacionDialog(){
    const dialogRef = this.dialog.open(CajaCompensacionDialogComponent)
  }
  funerariosDialog(){
    const dialogRef = this.dialog.open(FunerariosDialogComponent)       
  }
  exterioresDialog(){
    const dialogRef = this.dialog.open( ExterioresDialogComponent)
  }
  fuerzasArmadasDialog(){
    const dialogRef = this.dialog.open(FuerzasArmadasDialogComponent)
  }
  planRetiroDialog(){
    const dialogRef = this.dialog.open( PlanRetiroDialogComponent)
  }
  retiroReservaDialog(){
    const dialogRef = this.dialog.open(RetiroReservaDialogComponent)
  }
  compensacionMuerteDialog(){
    const dialogRef = this.dialog.open(CompensacionMuerteDialogComponent)
  }
  apoyosEconomicosDialog(){
    const dialogRef = this.dialog.open(ApoyosEconomicosDialogComponent)
  }
  colcienciasDialog(){
    const dialogRef = this.dialog.open(ColcienciasDialogComponent)
  }
  intelectualDialog(){
    const dialogRef = this.dialog.open(IntelectualDialogComponent)
  }
  manualDialog(){
    const dialogRef = this.dialog.open( ManualDialogComponent)
  }
  negocioPropioDialog(){
    const dialogRef = this.dialog.open(NegocioPropioDialogComponent)
  }
  pensionesDialog(){
    const dialogRef = this.dialog.open(PensionesDialogComponent)
  } 
  pensionesDialog2(){
    const dialogRef = this.dialog.open(PensionesDialog2Component)
  }
  arrendamientoBienRaizDialog(){
    const dialogRef = this.dialog.open(ArrendamientoBienRaizDialogComponent)
  }
  arrendamientoVehiculosDialog(){
    const dialogRef = this.dialog.open(ArrendamientoVehiculosDialogComponent)
  }
  arrendamientoMaquinariaDialog(){
    const dialogRef = this.dialog.open(ArrendamientoMaquinariaDialogComponent)
  }
  arrendamientoOtrosBienesDialog(){
    const dialogRef = this.dialog.open(ArrendamientoOtrosBienesDialogComponent)
  }
  ventaVehiculosDialog(){
    const dialogRef = this.dialog.open(VentaVehiculoDialogComponent)
  }
  ventaBienRaizDialog(){
    const dialogRef = this.dialog.open(VentaBienRaizDialogComponent)
  }
  ventaAccionesDialog(){
    const dialogRef = this.dialog.open(VentaAccionesDialogComponent)
  }
  ventaOtrosBienesDialog(){
    const dialogRef = this.dialog.open(VentaOtrosBienesDialogComponent)
  }
  herenciaDialog(){
    const dialogRef = this.dialog.open(HerenciaDialogComponent)
  }
  conyugalDialog(){
    const dialogRef = this.dialog.open( ConyugalDialogComponent)
  }
  segurosDialog(){
    const dialogRef = this.dialog.open(SegurosDialogComponent)
  }
  prepagadaDialog(){
    const dialogRef = this.dialog.open( PrepagadaDialogComponent)
  }
  dependientesDialog(){
    const dialogRef = this.dialog.open(DependientesDialogComponent)
  }
  seguridadSocialDialog(){
    const dialogRef = this.dialog.open(SeguridadSocialDialogComponent)
  }
  voluntariasDialog(){
    const dialogRef = this.dialog.open( VoluntariasDialogComponent)
  }
  AFCDialog(){
    const dialogRef = this.dialog.open( AFCDialogComponent)
  }
  declaracionDialog(){
    const dialogRef = this.dialog.open(DeclaracionDialogComponent)
  }
 
  
 
}
