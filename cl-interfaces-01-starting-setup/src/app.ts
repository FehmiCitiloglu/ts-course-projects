class Department {
    static fiscalYear = 2020;
    // private readonly id: string
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id:string ,public name: string){
        // this.id = id
        // this.name = n
        console.log(Department.fiscalYear);

    }


    static createEmployee(name:string){
        return {name: name}
    }

    describe(this: Department){
        console.log(`Department: (${this.id}): ${this.name}`);

    }
    addEmployee(employee: string){
        this.employees.push(employee)
    }
    printEmployeeInformation(){
        console.log(this.employees.length);
        console.log(this.employees);

    }
}

class ITDepartment extends Department {
    admins: string[]
    constructor(id:string,  admins: string[]) {
        super(id, 'IT');
        this.admins = admins

        }
}

class AccountingDepartment extends Department {
    private lastReport: string

get mostRecentReport(){
    if(this.lastReport){

    return this.lastReport
    }
    throw new Error('No report found')
}

    set mostRecentReport(value:string){
        if(!value){
            throw new Error('Please pass in a valid value!')
        }
        this.addReport(value)

    }

    constructor(id:string, private reports: string[]){
    super(id, 'Accounting')
    this.lastReport = reports[0]
    }


    addEmployee(name: string){
        if(name === 'Max'){
            return;
        }
        this.employees.push(name)

    }
    addReport(text: string){
        this.reports.push(text)
        this.lastReport = text
    }

    printReports(){
        console.log(this.reports);

    }
}


const employee1 = Department.createEmployee('Fehmi')
console.log(employee1, Department.fiscalYear);


const it = new ITDepartment('d1', ['Max']);


it.addEmployee('Max')
it.addEmployee('Manu')

// it.employees[2] = 'Anna'
it.describe()
it.printEmployeeInformation()

console.log(it);


// accounting.describe()

// const accountingCopy = {name: 'Some name', describe: accounting.describe }

// accountingCopy.describe()



const accounting = new AccountingDepartment('d2', [])

accounting.mostRecentReport = 'Some report';

accounting.addReport('Something went wrong...')

console.log(accounting.mostRecentReport);
accounting.printReports()

accounting.addEmployee('Max')
accounting.addEmployee('Manu')

accounting.printEmployeeInformation()