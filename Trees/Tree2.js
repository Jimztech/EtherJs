class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if (!this.root) {
            this.root = node;
            return;
        }
        
        this.manyLayers(this.root, node);
    }

    manyLayers(parent, child) {
        if (!child) {
            return;
        }

        if (child.data < parent.data) {
            if (!parent.left) {
                parent.left = child;
            } else {
                this.manyLayers(parent.left, child);
            }
        }  
        
        if (child.data > parent.data) {
            if (!parent.right) {
                parent.right = child;
            } else {
                this.manyLayers(parent.right, child);
            }
        }
    }
}
