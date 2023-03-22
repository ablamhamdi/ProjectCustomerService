import { Customer } from "./customer";


export type CustomerFormData = Omit<
  Customer,
  'id' 
>;