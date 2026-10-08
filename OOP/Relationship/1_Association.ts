/* Association is the weakest relationship. It simply means that two independent objects know about each other and interact, but neither owns the other. They both have their own independent lifespans.

e.g : A Doctor and a Patient. A doctor interacts with a patient. If the doctor retires (object destroyed), the patient still exists and goes to another doctor. If the patient dies, the doctor still exists.

*/


class Patient {
  constructor(public name: string) {}
}

class Doctor {
  constructor(public name: string) {}

  // The doctor "uses" the patient object for this method, but doesn't store or own it.
  public checkup(patient: Patient) {
    console.log(`Dr. ${this.name} is checking up on ${patient.name}`);
  }
}

const p = new Patient("Pravin");
const d = new Doctor("Smith");

d.checkup(p); // Association in action