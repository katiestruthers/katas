const organizeInstructors = function(instructors) {
  const courses = {};

  for (let i = 0; i < instructors.length; i++) {
    // Check to see if course already added
    if (courses.hasOwnProperty(instructors[i].course)) {
      courses[instructors[i].course].push(instructors[i].name);
    }
    // If not, add the new course 
    else {
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