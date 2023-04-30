const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let foundA, foundB;

  // Loop through recipes
  for (let i = 0; i < recipes.length; i++) {
    foundA = false;
    foundB = false;

    // Loop through bakery A
    for (let j = 0; j < bakeryA.length; j++) {
      if (recipes[i].ingredients[0] === bakeryA[j] || recipes[i].ingredients[1] === bakeryA[j]) {
        foundA = true;
        break;
      } 
    }

    // Loop through bakery B
    for (let t = 0; t < bakeryB.length; t++) {
      if (recipes[i].ingredients[0] === bakeryB[t] || recipes[i].ingredients[1] === bakeryB[t]) {
        foundB = true;
        break;
      } 
    }

    // Check for a match
    if (foundA === true && foundB === true) {
      return recipes[i].name;
    }
  }
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));