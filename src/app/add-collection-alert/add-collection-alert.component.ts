import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-collection-alert',
  templateUrl: './add-collection-alert.component.html',
  styleUrls: ['./add-collection-alert.component.css']
})
export class AddCollectionAlertComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<AddCollectionAlertComponent>) { }

  @ViewChild('name')
  name: ElementRef

  ngOnInit() {
  }

  closeDialog() {
    let value = this.name.nativeElement.value

    if(value !== '')
      this.dialogRef.close(value);
  }
}