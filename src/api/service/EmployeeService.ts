import { Employees } from "../../types/Employees"
import { Roles } from "../../types/Roles"
import { Shifts } from "../../types/Shifts"
import { employees } from "../model/data/employees"
import { roles } from "../model/data/roles"
import { shifts } from "../model/data/shifts"

export const deepJoin = (id?: number) => {

  const finalData: Employees[] = [];
  
  if(id) {
    const emp = employees.filter((employee: Employees) => (employee.id === id));
    let employeeRole: Roles[];
    let employeeShift: Shifts[];
    employeeShift = shifts.filter((shift: Shifts, shiftIndex: number) => {
      employeeRole = roles.filter((role: Roles) => ( role.id === shift.role_id))
      if (shift.employee_id === emp[0].id) {
        shifts[shiftIndex].roles = employeeRole;
        return true;
      }
    })

    finalData.push({
      ...emp[0],
      shifts: employeeShift
    })

    return finalData;
  }

  employees.forEach((employee: Employees) => {
    let employeeRole: Roles[];
    let employeeShift: Shifts[];
    employeeShift = shifts.filter((shift: Shifts, shiftIndex: number) => {
      employeeRole = roles.filter((role: Roles) => ( role.id === shift.role_id))
      if (shift.employee_id === employee.id) {
        shifts[shiftIndex].roles = employeeRole;
        return true;
      }
    })

    finalData.push({
      ...employee,
      shifts: employeeShift
    })
  })

  return finalData;

}