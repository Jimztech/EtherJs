function verifyProof(proof, node, root, concat) {
    let node = this.leaves;
    if(node.length === 1) return proof;
    const sum = [];
    for(let i = 0; i < proof.length; i+=2){
        let left = node[i];
        let right = node[i + 1]; 
        // sum.push(concat(left, right));

        if (!right) {
            sum.push(left);
        }
        else {
            sum.push(this.concat(left, right));

            if (i === index || i === index - 1) {
                let isLeft = !(index % 2);
                proof.push({
                    data: isLeft ? right : left,
                    left: !isLeft
                });
            }
        }
    }

    const oldProof = getProof();
    if(sum === oldProof){
        console.log(true)
    } else {
        console.log(false);
    }
}


// Correct or original one
function verifyProof(proof, node, root, concat) {
    let data = node;
    for (let i = 0; i < proof.length; i++) {
        if (proof[i].left) {
            data = concat(proof[i].data, data);
        }
        else {
            data = concat(data, proof[i].data);
        }
    }
    return data === root;
}
