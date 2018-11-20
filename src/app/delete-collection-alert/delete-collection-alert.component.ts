import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-delete-collection-alert',
  templateUrl: './delete-collection-alert.component.html',
  styleUrls: ['./delete-collection-alert.component.css']
})
export class DeleteCollectionAlertComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<DeleteCollectionAlertComponent>) { }

  ngOnInit() {
  }
}
