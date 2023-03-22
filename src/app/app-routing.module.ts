import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { ListCustomerComponent } from './list-customer/list-customer.component';
import { StatisticComponent } from './statistic/statistic.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [{path:"add",component:AddCustomerComponent},
{path:"list",component:ListCustomerComponent},
{path:"update/:id",component:UpdateCustomerComponent},
{path:"stati",component:StatisticComponent}
]

;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
