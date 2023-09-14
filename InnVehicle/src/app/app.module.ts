

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { BrandsPageComponent } from './brands-page/brands-page.component';

import { GalleryPageComponent } from './gallery-page/gallery-page.component';
import { LearnMorepageComponent } from './learn-morepage/learn-morepage.component';


@NgModule({
  declarations: [
    AppComponent,
   
    HomeComponent,
         BrandsPageComponent,

         GalleryPageComponent,
         LearnMorepageComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
