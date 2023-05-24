const data = [
  {
    id: 2,
    name: "Jane Smith",
    age: 25,
    city: "Los Angeles",
  },
  {
    id: 1,
    name: "John Doe",
    age: 30,
    city: "New York",
  },
  {
    id: 4,
    name: "Sarah Williams",
    age: 28,
    city: "San Francisco",
  },
  {
    id: 3,
    name: "David Johnson",
    age: 35,
    city: "Chicago",
  },
];

var keyWord = "Jo";
const filteredResult = data.filter(
  (a) =>
    a.name.toLowerCase().includes(keyWord.toLowerCase()) ||
    a.age.toString().toLowerCase().includes("30".toLowerCase())
);
console.log("original", data);
console.log("filtered", filteredResult);
