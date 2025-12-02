export interface Employee {
    id: number;
    name: string;
    position: string;
    salary: number;
}
export interface Manager extends Employee {
    department: string;
    numberOfEmployees: number;
}
//# sourceMappingURL=employee.d.ts.map