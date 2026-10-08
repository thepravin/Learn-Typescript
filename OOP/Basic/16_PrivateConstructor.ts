export {}

// TypeScript has no native equivalent to prevent method overriding. To prevent a class from being instantiated or extended normally (which is heavily used in the Singleton pattern), you use a private constructor. 

class SingletonLogger {
  private static instance: SingletonLogger;

  // The constructor is private. Only the class itself can call `new`.
  private constructor() {
    console.log("A new Logger instance was created!");
  }

 
  public static getInstance(): SingletonLogger {
    // If we don't have an instance yet, create one.
    if (!SingletonLogger.instance) {
      SingletonLogger.instance = new SingletonLogger(); // We are inside the class, so 'new' is allowed
    }
    // Return the ONE instance we created.
    return SingletonLogger.instance;
  }

  // A normal instance method to actually do the logging
  public log(message: string): void {
    console.log(`[LOG]: ${message}`);
  }
}



// ❌ ERROR: You cannot do this
// const logger1 = new SingletonLogger(); 
// TS Error: Constructor of class 'SingletonLogger' is private and only accessible within the class declaration.

// ✅ CORRECT: 
const loggerA = SingletonLogger.getInstance(); 
loggerA.log("System booting up..."); 
// Console output: 
// "A new Logger instance was created!"
// "[LOG]: System booting up..."

const loggerB = SingletonLogger.getInstance();
loggerB.log("Connecting to database...");
// Console output: 
// "[LOG]: Connecting to database..." 
// Notice it did NOT print "A new Logger instance was created!" again.

// PROOF: They are the exact same object in memory
console.log(loggerA === loggerB); // Output: true