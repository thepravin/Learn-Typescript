/*
 - "Has-a"

 - Aggregation is a specialized form of Association. It represents a "whole-part" relationship. The parent object has the child object, but the child can still exist independently if the parent is destroyed.

 - You usually pass the child object into the parent via the constructor (Dependency Injection).

 - e.g : A Department and a Professor. The Computer Science department has professors. However, if the university closes the CS Department, the professors don't cease to exist; they just move to a different department or university.

*/

class Professor {
  constructor(public name: string) {}
}

class Department {
  private professors: Professor[] = [];

  // The department takes in professors from the outside.
  // It does NOT create them using `new Professor()` internally.
  public addProfessor(prof: Professor) {
    this.professors.push(prof);
  }
}

// 1. Create independent objects
const prof1 = new Professor("Dr. Alan Turing");
let csDept: Department | null = new Department();

// 2. Aggregate them
csDept.addProfessor(prof1);

// 3. Destroy the parent
csDept = null; 

// 4. The child survives
console.log(prof1.name); // Still exists: "Dr. Alan Turing"