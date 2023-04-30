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

const convertNamesToUserNumbers = function(names, network) {
  const userNumbers = [];

  for (let i = 0; i < names.length; i++) {
    for (const user in network) {
      if (names[i] === network[user].name) {
        userNumbers.push(user);
      }
    }
  }

  return userNumbers;

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

const biggestFollower = function(network) {
  let names = [];
  let people = 0;

  // Determine highest number
  for (const user in network) {
    if (network[user].follows.length > people) {
      people = network[user].follows.length;
    }
  }

  // Find all users with that highest number
  for (const user in network) {
    if (network[user].follows.length === people) {
      names.push(network[user].name);
    }
  }

  return names;
};

const biggestFollowerOver30 = function(network) {
  const testList = convertNamesToUserNumbers(biggestFollower(network), network);
  const testObj = {};
  const names = [];
  let highest = 0;
  let highestTemp;

  // Determine highest number
  for (const number of testList) {
    highestTemp = 0;

    for (const following of network[number].follows) {
      if (network[following].age > 30) {
        highestTemp++;
      }
    }

    if (highestTemp > highest) {
      highest = highestTemp;
    }

    testObj[network[number].name] = highestTemp;
  }

  // Find all users with highest number
  for (const user in testObj) {
    if (testObj[user] === highest) {
      names.push(user);
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

const mostPopularOver30 = function(network) {
  const testList = convertNamesToUserNumbers(mostPopular(network), network);
  const testObj = {};
  const names = [];
  let highest = 0;
  let highestTemp;

  // Determine highest number
  for (const number of testList) {
    highestTemp = 0;

    for (const follower of findFollowers(number, network)) {
      if (network[follower].age > 30) {
        highestTemp++;
      }
    }

    if (highestTemp > highest) {
      highest = highestTemp;
    }

    testObj[network[number].name] = highestTemp;
  }

  // Find all users with highest number
  for (const user in testObj) {
    if (testObj[user] === highest) {
      names.push(user);
    }
  }

  return names;
};

const printAll = function(network) {
  console.log("---");
  for (const user in network) {
    console.log("Name:", network[user].name);
    console.log("Following:", convertUserNumbersToNames(network[user].follows, network));
    console.log("Followers:", convertUserNumbersToNames(findFollowers(user, network), network));
    console.log("---");
  }
};

const followersOfFollowers = function(user, firstFollowers, network) {
  const uniqueSecondFollowers = [];

  for (const firstFollower of firstFollowers) {
    let secondFollowers = findFollowers(firstFollower, network);

    for (const secondFollower of secondFollowers) {
      if ((secondFollower !== user) && !(uniqueSecondFollowers.includes(secondFollower)) && !(firstFollowers.includes(secondFollower))) {
        uniqueSecondFollowers.push(secondFollower);
      }
    }
  }

  return uniqueSecondFollowers;
};

const printReach = function(network) {
  for (const user in network) {
    const userFollowers = findFollowers(user, network);
    const userFollowersFollowers = followersOfFollowers(user, userFollowers, network);

    console.log("Name:", network[user].name);
    console.log("Followers:", userFollowers.length);
    console.log("Unique Followers of Followers:", userFollowersFollowers.length);
    console.log("Total Reach:", userFollowers.length + userFollowersFollowers.length);
    console.log("---");
  }
};

const unrequitedFollowers = function(network) {
  const unrequited = {};
  let userFollowers;

  for (const user in network) {
    userFollowers = findFollowers(user, network);

    for (const follows of network[user].follows) {
      if (!(userFollowers.includes(follows))) {
        if (!(network[user].name in unrequited)) {
          unrequited[network[user].name] = [];
        }
        unrequited[network[user].name].push(network[follows].name);
      }
    }
  }

  return unrequited;
};

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

console.log("User Following & Followers List:");
printAll(data);
console.log("User Reach List:");
printReach(data);
console.log("Users following the most people:", biggestFollower(data));
console.log("Users following the most people over the age of 30:,", biggestFollowerOver30(data));
console.log("Users with the most followers:", mostPopular(data));
console.log("Users with the most followers over the age of 30:", mostPopularOver30(data));
console.log("Users with unrequited followers:", unrequitedFollowers(data));