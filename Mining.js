const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // Add transaction to the mempool;
    return mempool.push(transaction);
}

function mine() {
    // Mine a block
    let transactions = [];

    // Mine the transactions.
    while (transactions < MAX_TRANSACTIONS && mempool.length > 0){
        transactions.push(mempool.pop())
    }

    const block = {                 // Give the blocks a height on an object.
        id: blocks.length,
    }

    // Take the sha256 hash of the stringified object;
    const hash = SHA256(JSON.stringify(block))
    blocks.push({ ...block, hash });            // Set the resulting value to a hash property on 
}                                                // the mined block just before mining it


module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool,
}

function mine() {
    let transactions = [];
    while (transactions.length < MAX_TRANSACTIONS && mempool.length > 0) {
        transactions.push(mempool.pop());
    }
    const block = { id: blocks.length, transactions }
    block.nonce = 0;
    let hash;
    while (true) {
        hash = SHA256(JSON.stringify(block)).toString();
        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            break;
        }
        block.nonce++;
    }
    blocks.push({ ...block, hash });
}