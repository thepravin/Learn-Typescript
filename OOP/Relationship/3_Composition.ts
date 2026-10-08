/*
- Composition is the strongest relationship. It represents a strict "whole-part" relationship where the parent object absolutely owns the child object. If the parent is destroyed, the child is destroyed with it.

- The parent class usually instantiates the child class inside its own constructor. The child is strictly bound to the parent's lifecycle.

- e.g :  A House and a Room. A house is composed of rooms. If you demolish the house, the rooms are destroyed too. You cannot have a "room" floating around independently without a house.

*/

class Room {
  constructor(public name: string) {}
}

class House {
  private rooms: Room[] = [];

  constructor() {
    // Strong ownership: The House creates the rooms internally.
    // No external code has access to these specific Room objects.
    this.rooms.push(new Room("Kitchen"));
    this.rooms.push(new Room("Bedroom"));
  }
}

let myHouse: House | null = new House();

// If I destroy the house...
myHouse = null;

// The rooms are automatically garbage collected and destroyed. 
// They cannot exist independently.