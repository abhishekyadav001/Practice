const date = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).format(Date.now());

console.log(date);

("abhishek");
const stringSplitter = (str) => {
  if (str.length > 3)return console.log(str);

  let firstThree = str.slice(0, 3);
  let lastThree = str.slice(-3);
  console.log(firstThree + lastThree);
};



stringSplitter("abhishek");
stringSplitter("abek");
stringSplitter("abk");
