//////////////////////////////////////////////////////Task 1
// var fullName = "Emil Quluzade Sahin";
// var letters = fullName.replace(/\s/g, '').split('');
//console.log(letters);
//////////////////////////////////////////////////////Task 2
// var removeLetters = letters.splice(4,8)
// letters = removeLetters.concat(letters);
// //console.log(letters);
//////////////////////////////////////////////////////Task 3
// var newFullName = letters.toString();
// newFullName = newFullName.replace(/,/g, '');
// console.log(newFullName);
//////////////////////////////////////////////////////Task 4
let arr = [4,5,2,1,5,2,5,3,5,6,2,1,6,2,6,2,5,3,2,7,4,6,4,5,6,2,5,6,3,7,3,7];
// var count = 0;
// for (let index = 0; index < arr.length; index++) {
//     if (arr[index]==5) {
//         count++;
//     }
// }
//console.log(count)
//////////////////////////////////////////////////////Task 5
// var sum = 0;
// for (let index = 0; index < arr.length; index++) {
//     sum=sum+arr[index]
// }
//console.log(sum)
//////////////////////////////////////////////////////Task 6
// var sameNumbers = [];
// var orderedNumbers;
// for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//         if (arr[i]===arr[j] && !sameNumbers.includes(arr[i])) {
//             sameNumbers.push(arr[i]);
//         }
//     }
// }
// orderedNumbers = sameNumbers.sort((a, b) => a - b);
//console.log(orderedNumbers);
//////////////////////////////////////////////////////Task 7
// var maxNum = arr[0];
// var countMaxNum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>maxNum) {
//         maxNum = arr[i]
//     }
// }

// for (let i = 0; i < arr.length; i++) {
//     if (maxNum==arr[i]) {
//         countMaxNum++;
//     }
// }

//console.log(countMaxNum);
//////////////////////////////////////////////////////Task 8
// var random = Math.floor(Math.random()*10)+1 ;
// var isItInArr = false
// for (let i = 0; i < arr.length; i++) {
//     if (random==arr[i]) {
//         isItInArr = true
//     }
    
// }
//console.log(isItInArr);
//////////////////////////////////////////////////////Task 9
// var myName = 'Emil';
// isItInArr = false
// for (let i = 0; i < arr.length; i++) {
//     if (myName.length==arr[i]) {
//         isItInArr = true;
//     }
// }
//console.log(isItInArr);
//////////////////////////////////////////////////////Task 10
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%3==2) {
//         console.log(arr[i])
//         break;
//     }
    
// }
//////////////////////////////////////////////////////Task 11
// var maxNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>maxNum) {
//         maxNum = arr[i]
//     }
// }
// for (let i = 0; i < arr.length; i++)
//     if (arr[i]==maxNum) {
//         console.log(i)
//         break;
//     }
//////////////////////////////////////////////////////Task 12
// var indexes = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==4) {
//         indexes.push(i);
//     }
// }
// console.log(indexes)
//////////////////////////////////////////////////////Task 13
// var indexes = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==4) {
//         indexes.push(i);
//     }
// }

// var maxNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>maxNum) {
//         maxNum = arr[i]
//     }
// }

// var minNum = arr[0];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]<minNum) {
//         minNum = arr[i]
//     }
// }

// for (let i = 0; i < arr.length; i++)
//     if (arr[i]==maxNum) {
//         console.log(i+" max index")
//         break;
//     }
// for (let i = 0; i < arr.length; i++)
//     if (arr[i]==minNum) {
//         console.log(i+" min index")
//         break;
//     }
//////////////////////////////////////////////////////Task 14
// var biggerThanTwo = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]>2) {
//         biggerThanTwo.push(arr[i])
//     }
    
// }
// var lengthDiff = arr.length - biggerThanTwo.length
// console.log(lengthDiff)
//////////////////////////////////////////////////////Task 15
// var sum=0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i]==7) {
//         sum=sum + i;
//     }
    
// }
// console.log(sum)
//////////////////////////////////////////////////////Task 16
let arr2 = [
    {
      name:'test',
      key:1
    },
    {
      name:'task',
      key:2
    },
    {
      name:'tanqo',
      key:3
    },
    {
      name:'like',
      key:4
    },
    {
      name:'task',
      key:5
    },
    {
      name:'trust',
      key:6
    },
    {
      name:'test',
      key:7
    },
    {
      name:'last',
      key:8
    },
    {
      name:'tanqo',
      key:9
    },
    {
      name:'elephant',
      key:10
    },
    {
      name:'love',
      key:11
    },
    {
      name:'small',
      key:12
    },
    {
      name:'little',
      key:13
    },
  ]
//   var arrayWithT = [];
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[0]=='t') {
//         arrayWithT.push(arr2[i])
//     }
    
//   }
//   console.log(arrayWithT)
//////////////////////////////////////////////////////Task 17
//   var arrayWithT = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[0]=='t' && arr2[i].name[arr2[i].name.length-1]=='t') {
//         arrayWithT=arrayWithT+1;
//     }
    
//   }
//   console.log(arrayWithT)
//////////////////////////////////////////////////////Task 18
//   var arrayWithT = 0;
//   for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[0]=='t' && arr2[i].name[arr2[i].name.length-1]=='t') {
//         arrayWithT += arr2[i].key;
//     }
    
//   }
//   console.log(arrayWithT)
//////////////////////////////////////////////////////Task 19
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name[arr2[i].name.length-1]=='e') {
//         arr2[i].name='SuperDev'
//     }
    
// }
// console.log(arr2)
//////////////////////////////////////////////////////Task 20
// var maxNum = arr2[0].name.length;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length>maxNum) {
//         maxNum = arr2[i].name.length
//     }
// }
// var key;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length == maxNum) {
//         key = arr2[i].key
//     }
    
// }
//  console.log(key)
//////////////////////////////////////////////////////Task 21
// var maxNum = arr2[0].name.length;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length>maxNum) {
//         maxNum = arr2[i].name.length
//     }
// }
// var indexes;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length == maxNum) {
//         indexes = i*i
//     }
    
// }
// console.log(indexes)
//////////////////////////////////////////////////////Task 22
// var newArr = [];
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.length==4) {
//         newArr.push(arr2[i])
//     }
    
// }
// console.log(newArr)
//////////////////////////////////////////////////////Task 23
// var maxKey=arr2[0].key;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].key>maxKey) {
//         maxKey=arr2[i].key
//     }
    
// }
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].key==maxKey) {
//         console.log(arr2[i].name)
//     }
    
// }
//////////////////////////////////////////////////////Task 24
// var index = [] ;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.split('l').length-1 == 2) {
//         index.push(i)
//     }
    
// }
// console.log(index)
//////////////////////////////////////////////////////Task 25
// var index = [] ;
// for (let i = 0; i < arr2.length; i++) {
//     if (arr2[i].name.split('t').length-1 == 2) {
//         index.push(arr2[i].key)
//     }
    
// }
// console.log(index)
//////////////////////////////////////////////////////Task 26
