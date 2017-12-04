// Tree DOM interactions

{
  let randomVar = "protected";
  const outputToDOM = () => {
    let myTree = tree.getTreeSpecies();
    document.getElementById("myTree").innerHTML = `My fave tree is a ${
      myTree
    } tree`;
  };

  tree.outputToDOM = outputToDOM;
  // tree.thing = randomVar;
}

tree.outputToDOM();
