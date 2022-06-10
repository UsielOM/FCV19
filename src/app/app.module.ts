import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './Pages/homepages/home.module';
import { FooterComponent } from './Shared/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserModule } from './Pages/user-beging-page/user.module';
import { ErrorComponent } from './Shared/error/error.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
    HttpClientModule,
    FormsModule,
   

  ],
  providers: [

    
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
