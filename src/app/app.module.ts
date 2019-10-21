import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewsandreviewsComponent } from './newsandreviews/newsandreviews.component';
import { BmwComponent } from './bmw/bmw.component';
import { DatsunComponent } from './datsun/datsun.component';
import { TataComponent } from './tata/tata.component';
import { SkodaComponent } from './skoda/skoda.component';
import { FAQSComponent } from './faqs/faqs.component';
import { FooterComponent } from './footer/footer.component';
import { TeslaComponent } from './tesla/tesla.component';
import { KiaComponent } from './kia/kia.component';
import { AlftozComponent } from './alftoz/alftoz.component';
import { RioComponent } from './rio/rio.component';
import { AltoComponent } from './alto/alto.component';
import { SwiftComponent } from './swift/swift.component';
import { WagonComponent } from './wagon/wagon.component';
import { BalenoComponent } from './baleno/baleno.component';

import { from } from 'rxjs';
import { Form1Component } from './form1/form1.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    
    NewsandreviewsComponent,
    
    BmwComponent,
    
    DatsunComponent,
    
    TataComponent,
    
    SkodaComponent,
    
    FAQSComponent,
    
    FooterComponent,
    
    TeslaComponent,
    
    KiaComponent,
    
    AlftozComponent,
    
    RioComponent,
    
    AltoComponent,
    
    SwiftComponent,
    
    WagonComponent,
    
    BalenoComponent,
    
    Form1Component,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
