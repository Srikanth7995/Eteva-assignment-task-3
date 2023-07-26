let List1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
let List2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

// To Get a unique set of users from List1 which are not in List2..
let new_list1 = [];

for (let i of List1) {
  if (List2.includes(i)) {
    continue;
  } else {
    new_list1.push(i);
  }
}

console.log(new_list1);

// To Get a unique set of users from List1 which are not in List2..
let new_list2 = [];

for (let j of List2) {
  if (List1.includes(j)) {
    continue;
  } else {
    new_list2.push(j);
  }
}

console.log(new_list2);

//To Get a set of users who are present in in List1 and List2..
let CommonUsers = [];

for (let k of List1) {
  if (List2.includes(k)) {
    CommonUsers.push(k);
  }
}

console.log(CommonUsers);
