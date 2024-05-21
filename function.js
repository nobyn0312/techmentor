
// 関数
// 引数を2倍にする関数
const twice=(num) =>{
  return num * 2;
}
console.log(twice(3));

// 引数を +1 する関数
const adOne = (num)=>{
 return num + 1;
}
console.log(adOne(3));

// 引数を -1 する関数
const minusOne = (num)=>{
 return num - 1;
}
console.log(minusOne(5));

// 引数文字列の文字数を返す関数
const getLength =(str)=>{
 return str.length;
}
console.log(getLength("apple"));

// 引数文字列の文字数を返す関数2
const checkLength =(str)=>{
 // if(str == String) 条件式がわからなかった。
  if(typeof str == 'string'){
   return str.length;
 }else{
  return "err"
 }
}
console.log(checkLength("javascript"));
console.log(checkLength(12345));

// 引数の文字数が10文字未満か判定する関数
const judgeLength = (str) =>{
 if(str.length <= 10){
   return true;
 }else if(str.length > 10){
   return false;
 }
}
console.log(judgeLength("apple"));
console.log(judgeLength("この文字列は10文字未満ですか？"));

// 引数の文字数を判定する関数
const judgeLength2 = (str) =>{
 if(5 <= str.length && str.length < 10){
   return true;
 }else{
   return false;
 }
}
console.log(judgeLength2("appleee"));

// 2つの引数を合計する関数
const getSum =(num1,num2)=>{
 return num1 + num2;
}
console.log(getSum(3,2));

// 2つの引数の文字列を結合する関数
const getFullName = (firstName,lastName)=>{
 return firstName + lastName;
}
console.log(getFullName("Tanaka","Taro"));

// 引数が文字列か判定する関数
const checkString = (parameter) => {
 if (typeof parameter === 'string') {
   return true;
 } else {
   return false;
 }
}
console.log(checkString("apple"));
console.log(checkString(12345));

// 引数の最初の文字を返す関数
const getFirstChar = (str) => {
 return str.slice(0,1);
}
console.log(getFirstChar("apple"));

// 引数の最後の文字を消す関数
const getLastChar = (str) => {
 return str.slice(0,-1);
}
console.log(getLastChar("apple"));

// 引数の最初の文字を消す関数
const removeLastChar = (str) => {
 return str.slice(1);
}
console.log(removeLastChar("apple"));

// true,falseを逆にする関数
const toggleBoolean = (valid) => {
 if(valid === true) {
   return false
}else if(valid === false){
 return true
}
}
console.log(toggleBoolean(true));

// 配列をカンマ区切りの文字列にする関数
const joinAnswers = (arr) => {
 return arr.join(",");
}
let fruits = ["apple", "oragne" , "melon"];
console.log(joinAnswers(fruits));