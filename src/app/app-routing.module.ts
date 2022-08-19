import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TabsComponent } from './components/tabs/tabs.component';
import { RegisterComponent } from './components/register/register.component';
import { LessonsComponent } from './components/lessons/lessons.component';

const routes: Routes = [
  { path: 'tabs', component: TabsComponent},
      { path: 'register', component: RegisterComponent},
      { path: 'lessons',component: LessonsComponent},
      { path: 'about', component: AboutComponent},
      { path: '',component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
