export {};

// Inheritance is a mechanism that allows a class to derive characteristics from another class. When a class B inherits from a class A, it means that B automatically acquires the attributes and methods of A without needing to redefine them.

class BankAccount {
  balance: number = 0;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  deposit(amount: number): void {
    this.balance += amount;
  }

  withdraw(amount: number): void {
    if (amount <= this.balance) {
      this.balance -= amount;
    }
  }
}

class CurrentAccount extends BankAccount {
  overdraftLimit: number; // new attribute only for currentaccount

  // When specifying a constructor method for a subclass,
  // we need to call another special method, "super".
  // This method calls the superclass (BankAccount) constructor to ensure
  // it is initialized before creating the CurrentAccount object itself.

  constructor(initialBalance: number, overdraftLimit: number) {
    super(initialBalance);
    this.overdraftLimit = overdraftLimit;
  }

  // Even though the withdraw method already exists in the superclass (BankAccount),
  // it is overridden here. This means every time a CurrentAccount
  // object calls the withdraw method, this implementation will be used,
  // ignoring the superclass method.

  override withdraw(amount: number): void {
      const totalAvailable = this.balance + this.overdraftLimit
      if(amount > 0 && amount <= totalAvailable){
        this.balance -= amount;
      }
  }
}
