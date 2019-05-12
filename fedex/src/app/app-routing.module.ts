import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FedexComponent} from './fedex/fedex.component';
import { LoginComponent} from './login/login.component';
import { CustomsComponent} from './customs/customs.component';
import { AwbDetailsComponent} from './awb-details/awb-details.component';






const routes: Routes = [
  {path:'', component:LoginComponent, pathMatch:'full'},
    {path:'login', component:LoginComponent},
 {path:'fedex', component:FedexComponent},
  {path:'awb-details', component:AwbDetailsComponent},
  {path:'customs', component:CustomsComponent},
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, FedexComponent, CustomsComponent, AwbDetailsComponent];