// interface extend employee

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