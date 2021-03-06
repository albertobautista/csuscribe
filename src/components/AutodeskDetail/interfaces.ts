import { Contact } from '@interfaces/contact';
import { Contract } from '@interfaces/contract';
import { Response } from '@interfaces/apiResponse';

export interface ContractAndContact {
  id: number;
  name: string;
  contracts: Contract[];
  contacts: Contact[];
}

export interface Client {
  id: number;
  value: number;
  text: string;
}

export interface ContractAndContactResponseProps extends Response {
  data: ContractAndContact[];
}
