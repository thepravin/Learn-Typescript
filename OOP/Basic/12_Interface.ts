export {}
interface BankAccount {
  balance: number;
  deposit(amount: number): void;
  withdraw(amount: number): void;
}

class CurrentAccount implements BankAccount {
  balance: number;

  // The class can have other attributes and methods
  // beyond those specified in the interface
 overdraftLimit: number;

 deposit(amount:number):void{
    this.balance += amount;
 }

 withdraw(amount:number):void{
    if(amount <= this.balance){
        this.balance -=amount
    }
 }

}


class SavingsAccount implements BankAccount {
  balance: number;

  deposit(amount: number): void {
    // can have different logic from CurrentAccount
    // but must respect the method signature,
    // i.e., parameters (amount: number) and return type (void)
  }

  withdraw(amount: number): void {
    // ...
  }
}