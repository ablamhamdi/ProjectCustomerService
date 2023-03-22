import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Entitys/customer';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {
 customerForm:FormGroup;
 isLoading = false;
 
 customer: Customer = { id: "", firstName: "", lastName: "", email: "", gender: "", address: "" ,account:{accountId:"",balance:0,accountType:""}};
 constructor( private formBuilder:FormBuilder,private serviceCustomer:CustomerService){
  
this.customerForm = formBuilder.group({
  firstName: [
    '',
    [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ],
   
  ],
  lastName: [
    '',
    [Validators.required, Validators.min(1), Validators.max(100)],
  ],
  email: [
    '',
    [Validators.required, Validators.email],
  ],
  gender: [false],
  address: ['', Validators.required],
  AccountType: [false], 
  balance: [0,Validators.required]
});


 }
 getControl(controlName: string) {
  return this.customerForm.get(controlName);
}
canSubmit(): boolean {
  return this.customerForm.dirty && this.customerForm.valid;
}
submit(){
  this.isLoading = true;
  //console.log(this.customerForm.value);
  const randomId: string = uuidv4();

  this.customer.id=randomId;
  this.customer.firstName=this.customerForm.value.firstName;
  this.customer.lastName=this.customerForm.value.lastName;
  this.customer.email=this.customerForm.value.email;
  this.customer.address=this.customerForm.value.address;
  this.customer.gender=this.customerForm.value.gender;
  const randomIdsecond: string = uuidv4();
  this.customer.account.accountId=randomIdsecond;
  this.customer.account.accountType=this.customerForm.value.AccountType;
  this.customer.account.balance=this.customerForm.value.balance;
  console.log(this.customer);
  console.log(this.customerForm.value);
  this.serviceCustomer
    .AddCustomer(this.customer)
    .subscribe((customer: Customer) => {
      this.isLoading = false;
      this.customerForm.reset();
     
    });
}
}
