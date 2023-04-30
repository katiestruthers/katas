const organizeInstructors = function(instructors) {
  const courses = {};

  for (let i = 0; i < instructors.length; i++) {
    // Check to see if course already added
    if (instructors[i].course in courses) {
      courses[instructors[i].course].push(instructors[i].name);
    } else { // If not, add the new course
      courses[instructors[i].course] = [instructors[i].name];
    }
  }

  return courses;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));