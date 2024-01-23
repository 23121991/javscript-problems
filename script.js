//frequency concept example
let s= "saravanan bharathy chellamma"

let obj = {}
for (let i=0; i <= s.length-1; i++){
    if(obj[s[i]] == undefined){
        obj[s[i]] = 1;
    }else{
        obj[s[i]] += 1;
    }
 console.log(obj);   
}



//pattern problem pyramid
const  forminvertedpyramid = (n) =>{
    for(let i=1; i<=n; i++){
     let arr = [];
     for(let j=1; j<=n-i+1; j++){
      arr.push(j);
     }
     console.log(arr.join());
 } 
     
 }
 forminvertedpyramid(6);


//pattern problem x
const  formshapex = (n) =>{
    for(let i=1; i< n*2; i++){
        let arr = [];
        for(let j=1; j<=n*2; j++){
         if(i==j || j == n+n-i){
             arr.push(i);
         }else{
             arr.push(' ')
         }
        }
        console.log(arr.join(''));
    } 
        
    }
 formshapex(6);



 //basic max num in array problem 
 let arr = [6,7,88,999,21];
const findmax = (arr) =>{
    let max = arr[0];
    for (let i=0; i < arr.length; i++){
        if(max < arr[i]){
            max = arr[i]
        }
    }
    console.log(max);
}

findmax(arr);





//basic problem dupicate num in how many times in array
let arr1 = [13,23,33,13,23,44,55,55]
        
let map ={};


for (let i=0; i<arr1.length; i++){
    if(map[arr1[i]]){
        map[arr1[i]]++;
    }else{
        map[arr1[i]] = 1;
    }
}
     console.log(map);
   


//problem :2
let arr = [2,2,3,3,4,4,4,4,6,7,8,9,9,9,0,0,0,0];

let map = {};

for (let i=0; i<arr.length; i++){
  if(map[arr[i]]){
      map[arr[i]]++
  }  else {
      map[arr[i]] = 1;
  }
  console.log(map);
}
let val = Object.values(map);
let key = Object.keys(map);
console.log(val);
console.log(key);
for(let i=0; i<val.length; i++){
    if(val[i] == 1){
        console.log(key[i]);
    }
}