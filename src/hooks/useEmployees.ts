import moment from "moment";
import { useState } from "react";
import employeeRepository from "../api/repository/employeeRepository";
import { Employees } from "../types/Employees";
import { Shifts } from "../types/Shifts";

export const useEmployees = () => {

  const [openModal, setOpen] = useState(false);
  const [employeeById, setEmployeeById] = useState<any>(null);
  console.log(employeeById)
  const allEmployees = employeeRepository.getAll();

  const getConstructedEventList = () => {
    const constructedEvents: any = [];
    allEmployees.forEach((allEmployee: Employees) => {
      allEmployee.shifts?.forEach((shift: Shifts | any) => {
        constructedEvents.push({
          id: allEmployee.id,
          start: moment(shift.start_time).toDate(),
          end: moment(shift.end_time).toDate(),
          title: `${allEmployee.first_name} ${allEmployee.last_name} - ${shift?.roles[0]?.name}`,
          styleProps: { ...shift?.roles[0]}
        })
      });
    });

    return constructedEvents;
  }

  const getEmployeeById = (id: number) => {
    setEmployeeById(employeeRepository.getAllById(id));
  }

  return {
    getConstructedEventList,
    openModal,
    setOpen,
    getEmployeeById,
    employeeById,
    setEmployeeById
  }

}