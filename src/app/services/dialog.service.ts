import { Injectable } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { AddDialogComponent } from '../dialogs/add-dialog/add-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog() {
		return this.dialog.open(AddDialogComponent, {
			width: '500px',
			disableClose: true
		})
  }
  
  form: FormGroup = new FormGroup({
    id: new FormControl(null),
    first_name: new FormControl('', Validators.required), 
    last_name: new FormControl('', Validators.required),
    number: new FormControl('', [Validators.required,Validators.pattern('[()0-9]{10,17}')]),
    second_number: new FormControl('', Validators.pattern('[- ()0-9]{10,17}')),
  })

  inittializeFormGroup() {
    this.form.setValue({
      id: null,
      first_name: '',
      last_name: '',
      number: '',
      second_number:'',
    })
  }
}
