import { Component, OnInit } from '@angular/core';
import { DialogService } from 'src/app/services/dialog.service';
import { ApiService } from 'src/app/services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-dialog',
  templateUrl: './add-dialog.component.html',
  styleUrls: ['./add-dialog.component.scss']
})
export class AddDialogComponent implements OnInit {

  constructor(public service: DialogService, public apiService: ApiService, public dialogRef: MatDialogRef<AddDialogComponent>) { }

  ngOnInit(): void {
  }
  onClear() {
    this.service.form.reset()
    this.service.inittializeFormGroup()
  }
  onSubmit() {
      this.apiService.createNewUser({
        first_name: this.service.form.value.first_name,
        last_name: this.service.form.value.last_name,
        number: this.service.form.value.number
      }).subscribe(response => { this.dialogRef.close(response) })
    this.onClear()
  }
}
