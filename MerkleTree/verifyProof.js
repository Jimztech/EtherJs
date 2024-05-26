function verifyProof(proof, node, root, concat) {
    const sum = [];
    for(let i = 0; i < proof.length; i++){
        let left = node[i];
        let right = node[i + 1]; 
        sum.push(concat(left, right));
    }
}