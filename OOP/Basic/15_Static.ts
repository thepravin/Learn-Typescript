export {};
// By default, when you add a property or method to a class, it belongs to the instance of that class (the object). If you create 100 User objects, you create 100 copies of that property in memory.
// The static keyword changes this. It attaches the property or method to the Class itself, not the instances. There is only ever one copy of a static member in memory, no matter how many objects you create.

class DatabaseConnection {
  public connectionId: string;

  public static totalConnections: number = 0;

  constructor(id: string) {
    this.connectionId = id;

    // You access static properties using the Class Name, NOT 'this'
    DatabaseConnection.totalConnections++;
  }

  // Static method: Can be called without creating an object
  public static getActiveConnections(): number {
    return DatabaseConnection.totalConnections;
  }
}

const db1 = new DatabaseConnection("db_master");
const db2 = new DatabaseConnection("db_replica");

// Calling static method directly on the Class
console.log(DatabaseConnection.getActiveConnections()); // Output: 2
