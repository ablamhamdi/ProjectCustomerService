import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from './Entitys/customer';
import { CustomerFormData } from './Entitys/customer-form-data.model';
const API_URL = "http://localhost:3000/customers";
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpCustomer:HttpClient) { }

  getAllCustomer():Observable<Customer[]>{  
 //   console.log(this.httpCustomer.get<Customer[]>(API_URL).pipe(resp=>resp))
    return this.httpCustomer.get<Customer[]>(API_URL);
  }
  AddCustomer(customerFormData: CustomerFormData): Observable<Customer> {
    return this.httpCustomer.post<Customer>(API_URL, customerFormData);
  }
  deleteCustomer(cusromer: Customer) {
    return this.httpCustomer.delete(`${API_URL}/${cusromer.id}`);
  }
  getById(id: string): Observable<Customer> {
    return this.httpCustomer.get<Customer>(`${API_URL}/${id}`);
  }
  updatePokemon(cusromer: Customer): Observable<Customer> {
    return this.httpCustomer.put<Customer>(`${API_URL}/${cusromer.id}`, cusromer);
  }
}
