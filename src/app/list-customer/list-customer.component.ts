import { Component, Input, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../Entitys/customer';

@Component({
  selector: 'app-list-customer',
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.css']
})
export class ListCustomerComponent implements OnInit {
  customers:Customer[]=[];
  isDeleteLoading: any[] = [];
  constructor(private serviceCustomer:CustomerService){

  }
  ngOnInit(): void {
    this.serviceCustomer.getAllCustomer().subscribe((data: Customer[]) => {
      this.customers = data;
      console.log(this.customers);
    });
  
  }

  delete(customer: Customer) {
    this.setIsLoading(customer, true);
    this.serviceCustomer.deleteCustomer(customer).subscribe(() => {
      this.customers = this.customers.filter((p) => p.id !== customer.id);
      this.setIsLoading(customer, false);
    });
  }
  getIsDeleteLoading(customer: Customer) {
    return this.isDeleteLoading.find((p) => p.id === customer.id)?.isLoading;
  }
  private setIsLoading(cusromer:Customer, isLoading: boolean) {
    this.isDeleteLoading = this.isDeleteLoading.map((p) => {
      if (p.id === cusromer.id) {
        return { ...p, isLoading };
      }
      return p;
    });
  }
  
}
