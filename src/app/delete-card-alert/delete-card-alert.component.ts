import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-card-alert',
  templateUrl: './delete-card-alert.component.html',
  styleUrls: ['./delete-card-alert.component.css']
})
export class DeleteCardAlertComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteCardAlertComponent>) { }

  ngOnInit() {
  }
}
