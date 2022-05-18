import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Pages/homepages/home.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from './Pages/user-beging-page/user.module';
import { ErrorComponent } from './Shared/error/error.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ErrorComponent,
  

      
 
 
    
    
  ],
  imports: [
    BrowserModule,
    HomeModule,
    FontAwesomeModule,
    UserModule,
    AppRoutingModule,

  ],
  providers: [
    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
