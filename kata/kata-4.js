const instructorWithLongestName = function(instructors) {
  let nameLength = 0;
  let pos = 0;

  for (let i = 0; i < instructors.length; i++) {
    if (instructors[i]['name'].length > nameLength) {
      nameLength = instructors[i]['name'].length;
      pos = i;
    }
  }

  return instructors[pos];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));