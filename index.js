// const date = new Intl.DateTimeFormat("en-GB", { day: "2-digit", month: "2-digit", year: "2-digit" }).format(Date.now());

// console.log(date);

// ("abhishek");
// const stringSplitter = (str) => {
//   if (str.length > 3)return console.log(str);

//   let firstThree = str.slice(0, 3);
//   let lastThree = str.slice(-3);
//   console.log(firstThree + lastThree);
// };



// stringSplitter("abhishek");
// stringSplitter("abek");
// stringSplitter("abk");

// let n =5 ;
// function  printer(n) {
//   // let count =1;
//   for(let i=0; i<=Math.floor(n/2); i++){
//     let temp="";
//     for(let j=i; j<=n; j++){
//       temp+=" ";
//     }
//     for(let k=1; k<=i; k++){
//       temp+=i+" ";
//     }
//     console.log(temp)
//   }
//   for(let i=Math.ceil(n/2); i>=0; i--){
//     let temp="";
//     for(let j=i; j<=n; j++){
//       temp+=" ";
//     }
//     for(let k=1; k<=i; k++){
//       temp+=i+" ";
//     }
//     console.log(temp)
//   }

  
// }

// printer(n);


// Hallow Printer 

function hallowPrinter(n){
  for(let i=1; i<=n ;i++){
    let temp="";
    for(let j=1; j<=n; j++){
      if(i==1 || i==n){
        temp+="*";
      }else{
        if(j<n && j>0){
          if(j==1 || j==n-1){
            temp+="* "
          }else{
            temp+=" ";
          }
        }
      }
    }
    console.log(temp);
  }
}

hallowPrinter(5);