import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddcourseComponent } from './addcourse/addcourse.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewallcomponentComponent } from './viewallcomponent/viewallcomponent.component';
import { RouterModule } from '@angular/router';

const myroutes=[
  {path:"",component:AddcourseComponent},
  {path:"view",component:ViewallcomponentComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    AddcourseComponent,
    NavbarComponent,
    ViewallcomponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
