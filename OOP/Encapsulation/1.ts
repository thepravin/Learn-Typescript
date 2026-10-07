export {};

//  It involves hiding the internal implementation details of a module, class, function, or any other software component, exposing only what is necessary for external use. This improves code security, maintainability, and modularity by preventing unauthorized access and ensuring controlled interactions.

// access modifiers (public, private, protected ) , getter, setter

// public – Allows the attribute or method to be accessed from anywhere, both inside and outside the class. This is the default visibility, meaning that if no access modifier is specified in the code, TypeScript assumes it as public.

// protected – Allows access within the class and its subclasses but prevents external access.

// private – Restricts access to the attribute or method only within the class itself.

class DigitalWallet {
  private balance: number = 0;
  private readonly accountId: string;
  private transactionHistory: string[] = [];

  constructor(accountId: string) {
    this.accountId = accountId;
  }

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount <= 0) {
      throw new Error("Deposit amount must be greater than 0");
    }

    this.balance += amount;
    this.transactionHistory.push(`Deposited: $${amount}`);
  }

  public withdraw(amount: number): void {
    if (amount <= 0) {
      throw new Error("Withdrawal amount must be greater than zero.");
    }
    if (amount > this.balance) {
      throw new Error("Insufficient funds.");
    }
    
    this.balance -= amount;
    this.transactionHistory.push(`Withdrew: $${amount}`);
  }

  public getLedger(): string[] {
    // Return a copy to prevent external mutation of the array
    return [...this.transactionHistory];
  }
}
