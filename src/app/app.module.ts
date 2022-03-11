import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeModule} from './home/home.module'
import {LoginModule} from './login/login.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {SecurityModule} from './security/security.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import {JwtTokenInterceptor} from './services/interceptors/jwt-token-interceptor'
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { UtilsModule } from './utils/utils.module';

import {SegModule} from './seg/seg.module'
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MaintenanceModule } from './maintenance/maintenance.module';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule,
    LoginModule,
    SegModule,
    MaintenanceModule,
    SecurityModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    UtilsModule
  ],
  providers: [
    Title,
    { provide: HTTP_INTERCEPTORS, useClass: JwtTokenInterceptor, multi: true },
    {provide: LocationStrategy, useClass: HashLocationStrategy,}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
