// let tree = {
//   height: 10,
//   species: "fir",
//   addStuffToTree: (color, smell) => {
//     tree.color = color;
//     tree.smell = smell;
//   }
// };
// console.log("global from other file", outside);

// We want a public AND a private interface for our modules
// Redo our tree using block scope with let and const

// let tree;

// {
//   let height = 10;
//   let species = "fir";

//   const getHeight = () => {
//     return height;
//   };

//   const getTreeSpecies = () => species;

//   const growTree = inches => {
//     height = height + inches;
//   };

//   tree = { getHeight, growTree, getTreeSpecies };
// }

var tree = (function(originalTree) {
  let height = 10;
  let species = "fir";
  const getHeight = () => {
    return height;
  };

  originalTree.getTreeSpecies = () => species;

  originalTree.growTree = inches => {
    height = height + inches;
  };

  return originalTree
})(tree || {});

