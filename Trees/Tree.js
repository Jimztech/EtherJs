// My original code
class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }

        if(node.data < this.root.data) {
            this.root.left = node;
        };
    
        if(node.data > this.root.data) {
            this.root.right = node;
        }
    };

    manyLayers (parent, child) {
        if(child.data < parent.data) {
            this.left = node;
            
            if(parent.left = node){
                manyLayers(parent.left.node);
            }
            if(parent.left != node) {
                this.left = node;
            }
        }

        if(child.data > parent.data) {
            this.right = node;

            if(parent.right = node) {
                manyLayers(parent.right.node);
            }
            if(parent.right != node){
                this.right = node;
            }
        }
    };

}

class Tree {
    constructor() {
        this.root = null;
    }

    hasNode(data) {
        return this.searchRoot(this.root, data)
    }

    searchRoot(root, data) {
        if(!root) {
            return false;
        }
        if(root.data === data) {
            return true;
        }
        if(root.data > data) {
            return this.searchRoot(root.left, data);
        }
        if(root.data < data) {
            return this.searchRoot(root.right, data);
        }
    }

    addNode(node) {
        if(!this.root) {
            this.root = node;
        }
        this.addToRoot(this.root, node);
    }

    addToRoot(root, node) {
        if (node.data < root.data) {
            if (!root.left) {
                root.left = node;
            }
            else {
                this.addToRoot(root.left, node);
            }
        }

        if (node.data > root.data) {
            if (!root.right) {
                root.right = node;
            }
            else {
                this.addToRoot(root.right, node);
            }
        }
    }
}


module.exports = Tree;