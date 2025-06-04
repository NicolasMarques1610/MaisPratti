class TreeNode {
  constructor(value) {
    this.value = value;
    this.children = [];
  }

  addChild(node) {
    this.children.push(node);
  }

  removeChild(value) {
    this.children = this.children.filter(child => child.value !== value);
  }
}

class Tree {
  constructor(rootValue) {
    this.root = new TreeNode(rootValue);
  }

  traverseDFS(callback) { // printa em formato de busca em profundidade
    function recurse(node) {
      callback(node); // chama a function printNode e printa
      node.children.forEach(child => recurse(child)); // percorro os filhos do node e chamo recursivamente a function recurse
    }
    recurse(this.root); // executa primeiro
  }

  traverseBFS(node = this.root, prefix = "", isLast = true) {
    console.log(prefix + (isLast ? "|__ " : "|-- ") + node.value);

    const childCount = node.children.length;
    node.children.forEach((child, index) => {
      const isLastChild = index === childCount - 1;
      const newPrefix = prefix + (isLast ? "    " : "|   ");
      this.traverseBFS(child, newPrefix, isLastChild);
    })
  }
}

const tree = new Tree("A");

const B = new TreeNode("B");
const C = new TreeNode("C");
const D = new TreeNode("D");
const E = new TreeNode("E");
const F = new TreeNode("F");
const G = new TreeNode("G");
const H = new TreeNode("H");

tree.root.addChild(B);
tree.root.addChild(C);
tree.root.addChild(D);

B.addChild(E);
B.addChild(F);

C.addChild(G);

G.addChild(H);

B.removeChild("F");

function printNode(node) {
  console.log(node.value);
}

tree.traverseDFS(printNode); // passo uma referência da function
tree.traverseBFS();