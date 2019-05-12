import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule , routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';  
import { HttpClientModule } from '@angular/common/http';
import {MatDialogModule} from '@angular/material/dialog';
import {Http, HttpModule, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from 'rxjs';

import {
  
  MatTabsModule,
  MatExpansionModule,  
   MatGridListModule,  
  MatButtonModule,      
  MatMenuModule,      
  MatToolbarModule,      
  MatIconModule,      
  MatCardModule,      
  MatFormFieldModule,      
  MatInputModule,      
  MatDatepickerModule,      
  MatDatepicker,      
  MatNativeDateModule,      
  MatRadioModule,      
  MatSelectModule,      
  MatOptionModule,      
  MatSlideToggleModule,ErrorStateMatcher,ShowOnDirtyErrorStateMatcher,      
} from '@angular/material';  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { FlexLayoutModule } from '@angular/flex-layout';
import { AwbDetailsComponent } from './awb-details/awb-details.component';
import { FedexComponent } from './fedex/fedex.component';
@NgModule({
  declarations: [
    AppComponent,
     routingComponents,
     AwbDetailsComponent,
  
  ],
  imports: [
    
    MatDialogModule,
    MatExpansionModule,
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    FormsModule,      
    ReactiveFormsModule,      
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule   ,
    HttpClientModule,
   HttpModule
    
    
  ],
   exports: [ 
    
    
   
     MatDialogModule,
     MatExpansionModule, 
     MatTabsModule,    
    MatButtonModule,      
    MatMenuModule,      
    MatToolbarModule,      
    MatIconModule,      
    MatCardModule,      
    BrowserAnimationsModule,      
    MatFormFieldModule,      
    MatInputModule,      
    MatDatepickerModule,      
    MatNativeDateModule,      
    MatRadioModule,      
    MatSelectModule,      
    MatOptionModule,      
    MatSlideToggleModule      
  ],   
 entryComponents: [
AwbDetailsComponent
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
