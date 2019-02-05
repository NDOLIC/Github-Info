import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HubComponent } from './hub/hub.component';
import { AboutComponent } from './about/about.component';

import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import {RoutingModule} from './routing/routing.module';
import { UserFormComponent } from './user-form/user-form.component'

const routes:Routes=[
  {path:"hub",component:HubComponent},
  {path:"about",component:AboutComponent},
  {path:"",redirectTo:"/users",pathMatch:"full"},
  {path:'**',component:NotFoundComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HubComponent,
    AboutComponent,
    NotFoundComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
