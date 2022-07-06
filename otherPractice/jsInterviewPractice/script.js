/* #1 -- Removing Dups */
const removeDups = (s) => {
  let exist = new Map();
  let st = "";

  for (let i = 0; i < s.length; i++) {
    // Checks if the current value of string[index] exists
    if (!exist.has(s[i])) {
      // If not add it to the string that will return
      st += s[i];

      //   Add to the Map
      exist.set(s[i], 1);
    }
  }
  return st;
};

/* #2 -- Two Sum*/
const twoSum = (nums, target) => {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    // Sets the two number
    let num1 = nums[i];
    let num2 = target - num1;

    if (map.has(num2)) {
      return [map.get(num2), i];
    }
    map.set(num1, i);
  }
};

// Faster verison
const twoSumV2 = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [nums.indexOf(nums[i]), nums.lastIndexOf(nums[j])];
      }
    }
  }
};

/* #3 -- Narcissistic Number */
const narcissistic = (value) => {
  // Code me to return true or false
  let x = 0;
  if (value > 9) {
    let newVal = value.toString().split("");
    return (
      newVal.map((e) => e ** newVal.length).reduce((a, b) => a + b) === value
    );
  } else {
    return true;
  }
};

/* #4 -- Filter the vowels*/
const disemvowel = (str) => {
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  return str
    .toString()
    .split("")
    .filter((letter) => !vowels.includes(letter))
    .join("");
};

// Other way
const disemvowelV2 = (str) => str.replace(/[aeiou]/gi, "");

/* #5 -- Unique In Order*/
const uniqueInOrder = (iter) => {
  const iterList =
    typeof iter == "string" || iter.length == 0
      ? iter.toString().split("")
      : iter.toString().split(",");

  const cleanIter = [];
  for (let i = 0; i < iterList.length; i++) {
    if (!cleanIter.includes(iter[i]) || iter[i] != iter[i - 1]) {
      cleanIter.push(iter[i]);
    }
  }
  return cleanIter;
};

const uniqueInOrderSpread = (iter) => {
  return [...iter].filter((a, b) => a !== iter[b + 1]);
};

/* #6 -- Reverse a String */
const reverseStr = (str) => {
  if (typeof str == "string") {
    return [...str].reverse();
  }
};

const reverseStrV2 = (str) => {
  if (typeof str == "string") {
    const empty = [];
    const valLength = [...str].length - 1;
    for (let i = valLength; i >= 0; i--) {
      empty.push([...str][i]);
    }
    return empty;
  }
};

/* #7 -- Roman to Value */
const romanToInt = function (s) {
  const map = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  for (let i = 0; i < s.length; i++) {
    const cur = map[s[i]];
    const next = map[s[i + 1]];

    if (cur < next) {
      result += next - cur;
      i++;
    } else {
      result += map[s[i]];
    }
  }
  return result;
};

/* #8 -- Longest Prefix */
const longestCommonPrefix = (s) => {
  let prefix = "";
  if (s === "" || s.length === 0) return prefix;

  for (let i = 0; i < s[0].length; i++) {
    const char = s[0][i];
    for (let j = 1; j < s.length; j++) {
      if (s[j][i] !== char) return prefix;
    }
    prefix = prefix + char;
  }
  return prefix;
};

/* #9 -- Valid Parentheses */
const isValid = (s) => {
  if (s.length % 2 !== 0) return false;

  const stack = [];
  const map = new Map([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);

  console.log(map);

  for (let i = 0; i < s.length; i += 1) {
    if (map.has(s[i])) {
      stack.push(map.get(s[i]));
    } else if (s[i] !== stack.pop()) {
      return false;
    }
  }

  return stack.length === 0;
};

/* #10 -- Merge Two Sorted Lists */
const mergeTwoLists = (list1, list2) => {
  // Checks if the list is empty or null which then will just return or add the other list
  if (list1 == null) return list2;
  if (list2 == null) return list1;

  // Basically the starting point
  let head;

  // When every a list1.val [curr] < list2.val [curr]
  // head = list1 --> this is equal to list1.val not the overall list1
  if (list1.val < list2.val) {
    head = list1;
    list1 = list1.next;
  } else {
    head = list2;
    list2 = list2.next;
  }

  // Chain the head list to check in the list1 and list2 again
  // Basically the next run will check list1.val [1] or list2.val [1]
  // Because the .next returns a boolean and list value
  head.next = mergeTwoLists(list1, list2);
  return head;
};

/* #11 -- Removing Dups in List */
// const removeDupsList = (s) => {
//   let compareList = [];

//   for (let i = 0; i < s.length; i++) {
//     if (!compareList.includes(s[i])) {
//       compareList.push(s[i]);
//     }
//   }
//   return compareList.sort();
// };

// const removeDupsList = (s) => {
//   let compareList = [];
//   let count = 0;

//   for (let i = 0; i < s.length; i++) {
//     if (s.includes(s[i])) {
//       s.pop(s[i]);
//     } else {
//       count++;
//     }
//   }
//   return s.sort();
// };

// console.log(removeDupsList([1, 1, 2]));

/* #12 -- Cache and Memorization */
const memor = (fn, context) => {
  const res = {};

  return function (...args) {
    let argsCache = JSON.stringify(args);
    console.log(argsCache);
    // Not in the in the res
    if (!res[argsCache]) {
      // Add the caching value to the res obj and assigning it a callback
      res[argsCache] = fn.call(context || this, ...args);
    }
    return res[argsCache];
  };
};

const clumsyP = (num1, num2) => {
  for (let i = 1; i <= 10000000; i++) {}
  return num1 * num2;
};

/* #13 -- Infinite Currying */
function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}
