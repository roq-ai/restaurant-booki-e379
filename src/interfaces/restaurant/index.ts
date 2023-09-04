import { EmployeeInterface } from 'interfaces/employee';
import { MenuItemInterface } from 'interfaces/menu-item';
import { ReservationInterface } from 'interfaces/reservation';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RestaurantInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  country?: string;
  gstn?: string;
  employee?: EmployeeInterface[];
  menu_item?: MenuItemInterface[];
  reservation?: ReservationInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    menu_item?: number;
    reservation?: number;
  };
}

export interface RestaurantGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  address?: string;
  city?: string;
  state?: string;
  zip_code?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
  country?: string;
  gstn?: string;
}
