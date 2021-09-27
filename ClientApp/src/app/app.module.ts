import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpRegisterComponent } from './cmp-register/cmp-register.component';
import { CmpUserListComponent } from './cmp-user-list/cmp-user-list.component';
import { personal } from './Services/personal.service';

@NgModule({
  declarations: [
    AppComponent,
    CmpRegisterComponent,
    CmpUserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    personal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
