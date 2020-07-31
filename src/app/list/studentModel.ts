import { Interface } from 'readline';
import { StorageStrategies } from 'ngx-webstorage';

export interface StudentModel {
  id?: number;
  name: String;
  email: String;
  phoneNumber: String;
  password?: String;
}
