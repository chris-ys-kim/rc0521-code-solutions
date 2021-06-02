/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  if (balance > 0 && Number.isInteger(balance)) {
    var openAcc = new Account(this.nextAccountNumber, holder);
    openAcc.deposit(balance);
    this.accounts.push(openAcc);
    this.nextAccountNumber++;
    return openAcc.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var i = 0; i < this.accounts.length; i++) {
    if (this.accounts[i].number === number) {
      return this.accounts[i];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  if (this.accounts.length > 0) {
    for (var i in this.accounts) {
      total += this.accounts[i].getBalance();
    }
    return total;
  }
  return 0;
};
