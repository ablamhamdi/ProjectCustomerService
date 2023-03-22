import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../Entitys/customer';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {
  customer!:Customer;
  customerForm:FormGroup;
  isLoading = false;
constructor(private formBuilder:FormBuilder,private serviceCustomer:CustomerService,private route: ActivatedRoute,  private router: Router){
  this.route.paramMap.subscribe(params => {
    const id = params.get('id');

    if (id) {
      this.serviceCustomer.getById(id).subscribe((data: Customer) => {
        this.customer = data;
       console.log(this.customer)
      });
    } 
  });
  
  this.customerForm = formBuilder.group({
    firstName: [
      "",
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
  ngOnInit(): void {
  
  }



submit(){
 this.serviceCustomer.updatePokemon(this.customer) .subscribe((customer: Customer) => {
  this.isLoading = false;
  this.customerForm.reset();
  this.router.navigate(['/list']);
});;
 console.log("ekkkk",this.customer)
}
getControl(controlName: string) {
  return this.customerForm.get(controlName);
}
canSubmit(): boolean {
  return this.customerForm.dirty && this.customerForm.valid;
}

  
}
