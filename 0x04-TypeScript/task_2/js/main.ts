  // ----------------------------DirectorInterface--------------------------------//
  interface DirectorInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workDirectorTasks(): string;
  }
  
  // TeacherInterface
  interface TeacherInterface {
    workFromHome(): string;
    getCoffeeBreak(): string;
    workTeacherTasks(): string;
  }
  
  // Director Class
  class Director implements DirectorInterface {
    workFromHome(): string {
      return "Working from home";
    }
  
    getCoffeeBreak(): string {
      return "Getting a coffee break";
    }
  
    workDirectorTasks(): string {
      return "Getting to director tasks";
    }
  }
  
  // Teacher Class
  class Teacher implements TeacherInterface {
    workFromHome(): string {
      return "Cannot work from home";
    }
  
    getCoffeeBreak(): string {
      return "Cannot have a break";
    }
  
    workTeacherTasks(): string {
      return "Getting to work";
    }
  }
  
  // Function to create an employee
  function createEmployee(salary: number | string): Director | Teacher {
    if (typeof salary === "number" && salary < 500) {
      return new Teacher();
    }
    return new Director();
  }
  
  // Expected Results
  console.log(createEmployee(200)); // Teacher
  console.log(createEmployee(1000)); // Director
  console.log(createEmployee("$500")); // Director


                                // Type guard to check if the employee is a Director //
function isDirector(employee: Teacher | Director): employee is Director {
    return (employee as Director).workDirectorTasks !== undefined;
  }
  
  // Function to execute work
  function executeWork(employee: Teacher | Director): void {
    if (isDirector(employee)) {
      console.log(employee.workDirectorTasks());
    } else {
      console.log(employee.workTeacherTasks());
    }
  }
  
  // Expected Results
  executeWork(createEmployee(200)); // Getting to work
  executeWork(createEmployee(1000)); // Getting to director tasks
  
//-------------------------- Define a string literal type named Subjects --------------------//
type Subjects = 'Math' | 'History';

// Define the function teachClass
function teachClass(todayClass: Subjects): string {
    if (todayClass === 'Math') {
        return 'Teaching Math';
    } else if (todayClass === 'History') {
        return 'Teaching History';
    }
    // TypeScript will ensure no other value is passed due to the type Subjects
}

// Test cases
console.log(teachClass('Math'));     // Output: Teaching Math
console.log(teachClass('History'));  // Output: Teaching History
