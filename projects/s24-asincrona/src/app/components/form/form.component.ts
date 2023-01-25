import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  ngOnInit(): void {
  }

  sport!: string;
  name!: string;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      data: {name: this.name, sport: this.sport}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.sport = result;
    });
  }

}
