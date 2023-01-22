import { Roles } from "./Roles";

export type Shifts = {
  "employee_id": number;
  "start_time": string;
  "role_id": number;
  "end_time": string;
  "id": number;
  "break_duration": number;
  "roles"?: Roles[];
}