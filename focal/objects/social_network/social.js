const biggestFollower = function(network) {
  let names = [];
  let people = 0;

  for (const user in network) {
    if (network[user].follows.length > people) {
      people = network[user].follows.length;
    }
  }

  for (const user in network) {
    if (network[user].follows.length === people) {
      names.push(network[user].name);
    }
  }

  return names;
};

const mostPopular = function(network) {
  let followers = {};
  let highest = 0;
  let names = [];

  // Determine number of followers for each user
  for (const user in network) {
    followers[user] = findFollowers(user, network).length;
  }

  // Determine highest number
  for (const user in followers) {
    if (followers[user] > highest) {
      highest = followers[user];
    }
  }

  // Find all users with that highest number
  for (const user in followers) {
    if (followers[user] === highest) {
      names.push(network[user].name);
    }
  }

  return names;
};

const printAll = function(network) {
  for (const user in network) {
    console.log(user);
    console.log("Name:", network[user].name);
    console.log("Following:", convertUserNumbersToNames(network[user].follows, network));
    console.log("Followers:", convertUserNumbersToNames(findFollowers(user, network), network));
    console.log("---\n");
  }
};

const convertUserNumbersToNames = function(numbers, network) {
  let string = "";

  for (let i = 0; i < numbers.length; i++) {
    string += network[numbers[i]].name;

    if (i < numbers.length - 1) {
      string += ", ";
    }
  }

  return string;
};

const findFollowers = function(number, network) {
  const followerIDs = [];

  for (const user in network) {
    for (const item of network[user].follows) {
      if (item === number) {
        followerIDs.push(user);
        break;
      }
    }
  }

  return followerIDs;
};

// const findHighest = function(object) {
//   let highest = 0;

//   for (const item in object) {
//     if (object[item] > highest) {
//       highest = object[item];
//     }
//   }

//   return highest;
// };

// const pushMatching = function(object, match) {
//   const returnArray = [];

//   for (const item in object) {
//     if (object[item] === match) {
//       returnArray.push
//     }
//   }

// };

const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};

console.log(biggestFollower(data));
console.log(mostPopular(data));
printAll(data);