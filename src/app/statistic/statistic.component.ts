import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Entitys/customer';

@Component({
  selector: 'app-statistic',
  templateUrl: './statistic.component.html',
  styleUrls: ['./statistic.component.css']
})
export class StatisticComponent implements OnInit {

  customers:Customer[]=[];
  sumOfBalanceChecking:number=0;
  sumOfBalanceSavings:number=0;
  constructor(private serviceCustomer:CustomerService){

  }
  ngOnInit(): void {
    this.serviceCustomer.getAllCustomer().subscribe((data: Customer[]) => {
      
      this.customers = data;
      this.customers.forEach(element => {

        if (element.account.accountType=="savings") {
         this.sumOfBalanceSavings+=parseInt(element.account.balance.toString());
        }
        else {this.sumOfBalanceChecking+=parseInt(element.account.balance.toString());}
        // console.log(" heeee",this.sumOfBalanceChecking,this.sumOfBalanceSavings);
       
      });
    
    });
  }
}
