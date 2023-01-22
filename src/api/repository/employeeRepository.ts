import { deepJoin } from "../service/EmployeeService"

export default { 

  getAll: () => {
    const employees = deepJoin();
    return employees;
  },

  getAllById: (id: number) => {
    const employees = deepJoin(id);
    return employees;
  }

}