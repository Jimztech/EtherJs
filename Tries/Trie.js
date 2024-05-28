const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(key) {
        const someString = key.split("");
        let currentNode = this.root;

        for(i = 0; i < someString.length; i++){
            const someItems = someString[i];

            if(!currentNode.children[someItems]){
                currentNode.children[someItems] = new TrieNode(someItems)
            }

            currentNode = currentNode.children[someItems];
        }

        currentNode.isWord = true;
    }
}
