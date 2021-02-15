import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-declaracion-dialog',
  templateUrl: './declaracion-dialog.component.html',
  styleUrls: ['./declaracion-dialog.component.css']
})
export class DeclaracionDialogComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 7000,
    });
  }


  ngOnInit(): void {
  }

}
