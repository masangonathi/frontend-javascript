interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Sbani",
    lastName: "Masango",
    age: 20,
    location: "Durban",
  };
  
  const student2: Student = {
    firstName: "Sphe",
    lastName: "Masango",
    age: 22,
    location: "Jozi",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const nameCell = document.createElement("td");
    nameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(nameCell);
    row.appendChild(locationCell);
    tbody.appendChild(row);
  });
  
  table.appendChild(tbody);
  document.body.appendChild(table);