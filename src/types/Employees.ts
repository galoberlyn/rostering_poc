import { Shifts } from "./Shifts";

export type Employees = {
  "last_name": string;
  "first_name": string;
  "id": number;
  "shifts"?: Shifts[];
}