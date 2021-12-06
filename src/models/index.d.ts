import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmployeeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Employee {
  readonly id: string;
  readonly Emp_id?: number;
  readonly Emp_name?: string;
  readonly Join_date?: string;
  readonly No_work_days?: number;
  readonly No_Work_month?: number;
  readonly Avg_Annual_Sal?: number;
  readonly Avg_sal_thrMon?: number;
  readonly Pension_curr_month?: number;
  readonly Accumulated_pension?: number;
  readonly pension_holder?: boolean;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Employee, EmployeeMetaData>);
  static copyOf(source: Employee, mutator: (draft: MutableModel<Employee, EmployeeMetaData>) => MutableModel<Employee, EmployeeMetaData> | void): Employee;
}