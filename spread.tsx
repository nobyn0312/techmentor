// 配列をコピーして、新しい配列を作成しよう
//"①スプレッド構文を使用し、配列arrをコピーしよう。
// ②新しく作成した配列をログで出力し、確認する。"

const arr =[10,230];
const newArr =[...arr]
console.log(newArr)

// 配列の中に要素を追加して、新しい配列を作成しよう
// "①配列colorに""blue"", ""orange""の要素を追加して、コピーしよう。
// ②新しく作成した配列をログで出力し、確認する。"
const color = ["red","blue","yellow"]
const newColor = [...color,"orange"]
console.log(newColor)


// 2つの配列を結合して、新しい配列を作成しよう
// "①スプレッド構文を使用し、配列arrとstrを結合してみよう。
// ②新しく作成した配列をログで出力し、確認する。"
const str =[10,20]
const match = [...arr,...str]
console.log(match)

// オブジェクトをコピーして、新しいオブジェクトを作成しよう
// "①スプレッド構文を使用し、personオブジェクトをコピーしよう。
// ②新しく作成した配列をログで出力し、確認する。"
const person ={id:1, name:'taro'}
const copyPerson ={...person}
console.log(copyPerson)

// オブジェクトの中にプロパティを追加して、新しいオブジェクトを作成しよう
// "①personオブジェクトに、' age: 24, job: ""programmer"" 'のプロパティを追加し、コピーしてみよう
// ②新しく作成した配列をログで出力し、確認する。"
const newPerson ={...person, age:24,job:'Programer'}
console.log(newPerson)

// 2つのオブジェクトを結合して、新しいオブジェクトを作成しよう
// "①スプレッド構文を使用し、{ country: ""America"", job: ""software engineer"" } を結合してみよう。
// ②新しく作成した配列をログで出力し、確認する。"
const person3 = { name: "Mike", age: 23 };
const personInfo ={...person3,...{country:'America',job:'software engineer'}}
console.log(personInfo)

// オブジェクトのプロパティの値を変更して、新しいオブジェクトを作成しよう
// "①スプレッド構文を使用し、プロパティnameの値を'Alice'に変更しよう。
// ②personオブジェクト内に、' country: ""America"", job: ""software engineer"" 'のプロパティを追加しよう。
// ③新しく作成した配列をログで出力し、確認する。"
const newPerson2 ={...personInfo,name:'Alice'}
console.log(newPerson2)