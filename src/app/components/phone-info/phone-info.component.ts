import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { MatTableDataSource } from '@angular/material/table'
import { INumbersInfo } from '../../interfaces/info'
import { DialogService } from 'src/app/services/dialog.service';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

@Component({
  selector: 'app-phone-info',
  templateUrl: './phone-info.component.html',
  styleUrls: ['./phone-info.component.scss']
})

export class PhoneInfoComponent implements OnInit {

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'number', 'second_number','delete'];
   

  dataSource = new MatTableDataSource<INumbersInfo>()

  constructor(
    private apiServices: ApiService,
    private dialog: DialogService
  ) {}

  ngOnInit(): void {
  this.getNumbersInfo()
  }

  getNumbersInfo():void {
      this.apiServices.getInfo().subscribe(response => {
			this.dataSource.data = response
		})
  }

  openConfirmDialog() {
    this.dialog.openConfirmDialog().afterClosed().subscribe(response => {
      this.resetForm()
      if (response) {
        Notify.success(`User ${response.first_name} has been successfully added`)
        this.dataSource.data = [...this.dataSource.data, response]
      }
    })
  }

  onDeleteUser(id:number) {
    this.apiServices.deleteUser(id).subscribe(response => {
      Notify.info('User was deleted')
      const filtered = this.dataSource.data.filter(element => element.id !== id)
							this.dataSource.data = filtered
    })
  }
  
  resetForm() {
    this.dialog.form.reset()
    this.dialog.inittializeFormGroup()
  }
  }
