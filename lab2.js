const characters = [
  {
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
  },
  {
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
  },
  {
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
  },
  {
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
  },
  {
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
  },
];

// 1. Get the first name of a character whose mass is more than 75.

console.log(
  "========================Get the first name of a character whose mass is more than 75.==============================="
);
let massLess75 = characters.find((e) => {
  return e.mass > 75;
});

console.log(massLess75);

// 2. Get the first eye color of a character shorter than 180.

console.log(
  "=====================Get the first eye color of a character shorter than 180=================================="
);
let shorter180 = characters.find((e) => {
  return e.height < 180;
});

console.log(shorter180);

// 3. Get characters whose height is greater than 150 but less than 210.

console.log(
  "======================Get characters whose height is greater than 150 but less than 210================================="
);
let greater180Less210 = characters.filter((e) => {
  return e.height > 150 && e.height < 210;
});

console.log(greater180Less210);

// 4. Get all female characters.

console.log(
  "========================Get all female characters==============================="
);
let female = characters.filter((e) => {
  return e.gender == "female";
});

console.log(female);

// 5. Get an array of all eye colors only.
console.log(
  "========================Get an array of all eye colors only.==============================="
);
let eyesColor = characters.map((e) => {
  return e.eye_color;
});

console.log(eyesColor);

// 6. Get an array of all masses only.
console.log(
  "========================Get an array of all masses only.==============================="
);

let masses = characters.map((e) => {
  return e.mass;
});

console.log(masses);

// 7. Sort by name alphabetically (A to Z).

console.log(
  "========================Sort by name alphabetically (A to Z).==============================="
);
let sortByName = characters.slice().sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
});

console.log(sortByName);

// 8. Sort by height (low to high).
console.log(
  "========================Sort by height (low to high).==============================="
);

let sortByHeight = characters.slice().sort((a, b) => a.height - b.height);

console.log(sortByHeight);

// 9. Does every character have a height greater than 100?
console.log(
  "========================Does every character have a height greater than 100?==============================="
);
let isGreaterThan100 = characters.every((e) => e.height > 100);

console.log(isGreaterThan100);

// 10. Is every character lighter than 200?
console.log(
  "========================Is every character lighter than 200?==============================="
);
let isLighter200 = characters.every((e) => e.mass < 200);

console.log(isLighter200);

// 11. Is there at least one character with black eyes?
console.log(
  "========================Is there at least one character with black eyes?==============================="
);
let blackEye = characters.some((e) => e.eye_color == "black");

console.log(blackEye);

// 12. Is there at least one character with a height of exactly 177?
console.log(
  "========================Is there at least one character with a height of exactly 177?==============================="
);
let height177 = characters.some((e) => e.height == 177);

console.log(height177);
