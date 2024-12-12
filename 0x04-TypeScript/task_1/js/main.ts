interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    yearsOfExperience?: number;
    location: string;
    [propName: string]: any;
  }
  
  interface Directors extends Teacher {
    numberOfReports: number;
  }

  const teacher3: Teacher = {
    firstName: "Slindile",
    lastName: "Dube",
    fullTimeEmployee: false,
    location: "Durban",
    contract: false,
  };
  
  console.log(teacher3);

  const director1: Directors = {
    firstName: "Zandile",
    lastName: "Mgomezulu",
    location: "Free State",
    fullTimeEmployee: true,
    numberOfReports: 17,
  };
  
  console.log(director1);

  interface printTeacherFunction {
    (firstName: string, lastName: string): string;
  }
  
  const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName.charAt(0)}. ${lastName}`;
  };
  
  console.log(printTeacher("Slindile", "Dube")); // Output: S. Dube
  
  
  // Interface describing the constructor
interface StudentConstructor {
    new (firstName: string, lastName: string): StudentInterface;
  }
  
  // Interface describing the class
  interface StudentInterface {
    workOnHomework(): string;
    displayName(): string;
  }
  
  // Class implementation
  class StudentClass implements StudentInterface {
    constructor(public firstName: string, public lastName: string) {}
  
    workOnHomework(): string {
      return "Currently working";
    }
  
    displayName(): string {
      return this.firstName;
    }
  }
  
  const student = new StudentClass("Sbani", "Masango");
  console.log(student.displayName()); // Output: Sbani
  console.log(student.workOnHomework()); // Output: Currently working
  

  