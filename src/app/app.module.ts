import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { LessonsComponent } from './components/lessons/lessons.component';
import { RegisterComponent } from './components/register/register.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule ],
  declarations: [ AppComponent, HomeComponent, AboutComponent, LessonsComponent, RegisterComponent, TabsComponent, NavbarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
