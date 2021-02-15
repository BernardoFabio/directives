import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import{ RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatTabsModule} from '@angular/material/tabs';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatRippleModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatTreeModule} from '@angular/material/tree';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatStepperModule} from '@angular/material/stepper';

//firebase
import{environment}from '../environments/environment';
import{AngularFireDatabaseModule}from 'angularfire2/database';
import{AngularFireModule}from 'angularfire2';
import{AngularFirestoreModule}from '@angular/fire/firestore';


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
import { BodyComponent } from './body/body.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { DeclaracionDialogComponent } from './declaracion-dialog/declaracion-dialog.component';
import { LoginComponent } from './login/login.component';


const routes: Routes =[ 
  {path:"",component:MainNavComponent}, 
  {path:"comenzar", component: BodyComponent},
  {path:"login", component:LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AhorroDialogComponent,
    CorrienteDialogComponent,
    FiduciariaDialogComponent,
    CDTDialogComponent,
    TarjetaCreditoDialogComponent,
    CreditoHipotecarioDialogComponent,
    OtrosCreditosDialogComponent,
    AccionesDialogComponent,
    PrestamosTercerosDialogComponent,
    EfectivoDialogComponent,
    BienRaizDialogComponent,
    PredialComponent,
    VehiculosDialogComponent,
    OtrosBienesDialogComponent,
    LaboralesDialogComponent,
    AlimentacionDialogComponent,
    FondoEmpleadosDialogComponent,
    MaternidadDialogComponent,
    AccidenteLaboralDialogComponent,
    CajaCompensacionDialogComponent,
    FunerariosDialogComponent,
    ExterioresDialogComponent,
    FuerzasArmadasDialogComponent,
    PlanRetiroDialogComponent,
    RetiroReservaDialogComponent,
    CompensacionMuerteDialogComponent,
    ApoyosEconomicosDialogComponent,
    ColcienciasDialogComponent,
    IntelectualDialogComponent,
    ManualDialogComponent,
    NegocioPropioDialogComponent,
    PensionesDialogComponent,
    PensionesDialog2Component,
    ArrendamientoBienRaizDialogComponent,
    ArrendamientoVehiculosDialogComponent,
    ArrendamientoMaquinariaDialogComponent,
    ArrendamientoOtrosBienesDialogComponent,
    VentaVehiculoDialogComponent,
    VentaBienRaizDialogComponent,
    VentaAccionesDialogComponent,
    VentaOtrosBienesDialogComponent,
    HerenciaDialogComponent,
    ConyugalDialogComponent,
    SegurosDialogComponent,
    PrepagadaDialogComponent,
    DependientesDialogComponent,
    SeguridadSocialDialogComponent,
    VoluntariasDialogComponent,
    AFCDialogComponent,
    BodyComponent,
    MainNavComponent,
    DeclaracionDialogComponent,
    LoginComponent,
               
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatRadioModule,
    MatTabsModule,
    MatExpansionModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatListModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatTableModule,
    MatDialogModule,
    MatDividerModule,
    MatGridListModule,
    MatRippleModule,
    MatCardModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTreeModule,
    MatButtonToggleModule,
    MatStepperModule,
    RouterModule.forRoot(routes),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),                
  ],
  entryComponents:[AhorroDialogComponent, CorrienteDialogComponent, FiduciariaDialogComponent, CDTDialogComponent,
    TarjetaCreditoDialogComponent, CreditoHipotecarioDialogComponent, OtrosCreditosDialogComponent, AccionesDialogComponent,
    PrestamosTercerosDialogComponent,PrestamosTercerosDialogComponent, BienRaizDialogComponent, PredialComponent,
    VehiculosDialogComponent,OtrosBienesDialogComponent,LaboralesDialogComponent, AlimentacionDialogComponent, FondoEmpleadosDialogComponent,
    MaternidadDialogComponent,AccidenteLaboralDialogComponent, CajaCompensacionDialogComponent, FunerariosDialogComponent,
    ExterioresDialogComponent,FuerzasArmadasDialogComponent, PlanRetiroDialogComponent,RetiroReservaDialogComponent,
    CompensacionMuerteDialogComponent,ApoyosEconomicosDialogComponent,ColcienciasDialogComponent,IntelectualDialogComponent,
    ManualDialogComponent,NegocioPropioDialogComponent, PensionesDialogComponent,PensionesDialog2Component,  ArrendamientoBienRaizDialogComponent,
    ArrendamientoVehiculosDialogComponent, ArrendamientoMaquinariaDialogComponent,ArrendamientoOtrosBienesDialogComponent,
    VentaVehiculoDialogComponent, VentaBienRaizDialogComponent,VentaAccionesDialogComponent,VentaOtrosBienesDialogComponent,
    HerenciaDialogComponent, ConyugalDialogComponent,SegurosDialogComponent, PrepagadaDialogComponent,
    DependientesDialogComponent,SeguridadSocialDialogComponent, VoluntariasDialogComponent, AFCDialogComponent,
    DeclaracionDialogComponent], 

    
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
