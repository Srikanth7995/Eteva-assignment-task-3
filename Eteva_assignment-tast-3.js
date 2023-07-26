const list1 = ["Arjun", "Adwait", "Swapnil", "Amit", "Vishal", "Adnan"];
const list2 = ["Adwait", "Laxman", "Amit", "Adnan", "Nitin", "Gaurav"];

const set1 = new Set(list1);
const set2 = new Set(list2);

// a. Get a unique set of users from List1 which are not in List2
const uniqueList1 = list1.filter((user) => !set2.has(user));

console.log(uniqueList1);

// b. Get a unique set of users from List2 which are not in List1
const uniqueList2 = list2.filter((user) => !set1.has(user));

console.log(uniqueList2);

// c. Get a set of users who are present in both List1 and List2 (intersection of list1 & list2)
const commonUsers = list1.filter((user) => set2.has(user));

console.log(commonUsers);
