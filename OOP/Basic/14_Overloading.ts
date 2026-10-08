class Logger {
  
  public log(message: string): void;
  
  public log(errorCode: number, message: string): void;
  
  public log(errorCode: number, message: string, timestamp: Date): void;

  // ---------------------------------------------------------
  // THE IMPLEMENTATION (Must handle all cases from above)
  // This signature is NOT visible to whoever calls the method.
  // ---------------------------------------------------------
  public log(arg1: string | number, arg2?: string, arg3?: Date): void {
    
    // We must manually inspect the types at runtime 
    if (typeof arg1 === 'string') {
      // Handles Signature A
      console.log(`[INFO]: ${arg1}`);
      return;
    } 
    
    if (typeof arg1 === 'number' && typeof arg2 === 'string') {
      if (arg3 instanceof Date) {
        // Handles Signature C
        console.log(`[ERR-${arg1}] at ${arg3.toISOString()}: ${arg2}`);
      } else {
        // Handles Signature B
        console.log(`[ERR-${arg1}]: ${arg2}`);
      }
    }
  }
}

const myLogger = new Logger();

myLogger.log("Application started"); 
myLogger.log(404, "User not found"); 
myLogger.log(500, "Database crashed", new Date());

// Error: TypeScript will reject this because it doesn't match Signature A, B, or C!
// myLogger.log("Error", 500);



//------------------------------------------------------------------------------------------------
//  Constructor Overloading
//------------------------------------------------------------------------------------------------
class UserProfile {
  public id: string;
  public username: string;

  // Signature 1: Create a brand new user from scratch
  constructor(username: string);
  
  // Signature 2: Hydrate an existing user from the database
  constructor(id: string, username: string);

  // Implementation
  constructor(arg1: string, arg2?: string) {
    if (arg2 === undefined) {
      // Signature 1 logic
      this.id = "generated_uuid_123";
      this.username = arg1;
    } else {
      // Signature 2 logic
      this.id = arg1;
      this.username = arg2;
    }
  }
}

const newUser = new UserProfile("PravinN"); 
const existingUser = new UserProfile("db_456", "PravinN"); 