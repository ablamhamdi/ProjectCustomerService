import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './Entitys/customer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title = 'bank-project';
}
