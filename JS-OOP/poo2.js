"use strict";

class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this._movement = [];

    console.log(`Gracias por abrir una cuenta ${owner}`);
  }

  deposit(value) {
    this._movement.push(value);
    return this;
  }

  withdraw(value) {
    this.deposit(-value);
    return this;
  }

  _approveLoan(value) {
    return true;
  }

  requestLoan(value) {
    if (this._approveLoan(value)) {
      this.deposit(value);
      console.log(`Loan approved.`);
    }
    return this;
  }
}

const acc1 = new Account("jonas", "EUR", 1234);

acc1.deposit(150);
acc1.withdraw(100);
acc1.requestLoan(300);
console.log(acc1);

acc1.deposit(300).deposit(500).withdraw(35).requestLoan(25000).withdraw(4000);

console.log(acc1);
