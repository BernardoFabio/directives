import {Component, Injectable} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { MatDialogRef, MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogService } from '../dialog.service';


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  
  options:any=[{"codigo":1, "texto":"Si"}, {"codigo":2,  "texto": "No"}];
  
  constructor(private breakpointObserver: BreakpointObserver, public dialog: MatDialog, private dialogService:DialogService) {}
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );  

    
  declaracionDialog(){
    const dialogRef = this.dialogService.declaracionDialog();
  }

 


}

