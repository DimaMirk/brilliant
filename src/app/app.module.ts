import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog'
import { MatIconModule } from '@angular/material/icon'
import {MatInputModule} from '@angular/material/input'
import { AppComponent } from './app.component';
import { PhoneInfoComponent } from './components/phone-info/phone-info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddDialogComponent } from './dialogs/add-dialog/add-dialog.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogService } from './services/dialog.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PhoneInfoComponent,
    AddDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatTableModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatDialogModule,  
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule
  ],
  providers: [DialogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
