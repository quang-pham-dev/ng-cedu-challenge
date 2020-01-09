import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from '@cedu/app-routing.module';
import { AppSharedLayoutModule } from '@cedu-shared-layouts/layout.module';
import { AppSharedModulesModule } from '@cedu-shared-modules/modules.shared';
import { AppStoreModule } from '@cedu-store/store.module';

import { AppComponent } from '@cedu/app.component';
import { AuthComponent } from '@cedu/routes/auth/auth.component';
import { AuthService } from '@cedu-services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    AppSharedLayoutModule,
    AppSharedModulesModule,
    AppStoreModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
