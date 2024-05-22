// Transaction Output.

class TXO {
    constructor (owner, amount) {
        this.owner = owner;
        this.amount = amount;
        this.spent = false;     // Amount not spent yet.
    }

    spend () {
        this.spent = true;
    }
}