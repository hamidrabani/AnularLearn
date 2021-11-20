import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CmpRegisterComponent } from './cmp-register/cmp-register.component';
import { CmpUserListComponent } from './cmp-user-list/cmp-user-list.component';
import { personal } from './Services/personal.service';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const appRout: Routes=[
  {path: '', component: HomeComponent},
  {path: 'List', component: CmpUserListComponent},
  {path: 'Person', component: CmpRegisterComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    CmpRegisterComponent,
    CmpUserListComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRout),
  ],
  providers: [
    personal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
