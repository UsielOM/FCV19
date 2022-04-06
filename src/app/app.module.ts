import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UserBegingPageComponent } from './Pages/user-beging-page/user-beging-page.component';
import { HomeModule } from './Pages/homepages/home.module';
import { FooterComponent } from './Shared/footer/footer.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    AppComponent,
    UserBegingPageComponent,
    FooterComponent,
   
    
    
  ],
  imports: [
    BrowserModule,
    HomeModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],

  bootstrap: [AppComponent]
})
export class AppModule { }
