// オブジェクト
// 空のオブジェクト定義
const person = {};
person.name = 'ボブ'
person.age = 20
console.log(person);

// オブジェクトのプロパティの値取得
console.log(person.name);

// オブジェクトのプロパティの値取得2
const getObjectName = (object) => {
  return object.name;
};
console.log(getObjectName(person));

// オブジェクトのプロパティの値変更
person.age = 30;
console.log(person);

// オブジェクトのプロパティの値変更2
const object = { age: 35, weight: 80 }
const changeAge = (number, obj) => {
  obj.age = number
  return obj
}
console.log(changeAge(30, object));

// libraryオブジェクトのopenHourプロパティの値を更新し、ログに出力してみよう
const library = {
  book: {
    author: "Tom Sawyer",
    year: "11/12/2021"
  }
}

//オブジェクトのプロパティの値を加算
const object2 = { age: 35, weight: 80 }
object2.age++;
console.log(object2);

// オブジェクトのageプロパティの値を関数を使って、+1増やして、ログに出力しよう
const plusAge = (obj) => {
  obj.age++;
  return obj;
}
console.log(plusAge(object2));

// オブジェクトにプロパティweightとその値"50kg"を追加する
const object3 = { name: "Bob", age: 35 }
object3.weight = '50kg';
console.log(object3);

// 関数の引数にオブジェクトと値を渡すとプロパティweightとその値を追加する関数を作成し、ログに出力してみよう
const person2 = { name: "nancy", age: 35 }
const addWeight = (personObj, weightNum) => {
  personObj.weight = weightNum;
  return personObj;
}
console.log(addWeight(person2, 50));


// オブジェクトのプロパティに複数の値を持つhobby配列を追加する
person2.hobby = ['reading', 'shopping'];
console.log(person2)
console.log(person2.hobby);

// オブジェクトのnameプロパティを削除する
delete person2.name;
console.log(person2);

// オブジェクトのnameプロパティを削除する前に実行確認した上で、OKの場合のみ削除されるようにしよう
// const person3 = {name: "John", age: 35}

// const confirm =()=>{
//   if(confirm('削除してもよろしいですか？')){
//     // true
//     delete person3.name;
//     console.log(person3);
//   }else{
//     // false
//     console.log('削除をキャンセルしました');
//   }
// }
// confirm();

const object4 = { name: "Bob", age: 35 };
if (confirm("削除してもよろしいですか？")) {
  delete object.name;
  console.log(object);
} else {
  console.log(object);
}

//引数にオブジェクトと消去したいプロパティ名を渡すことでオブジェクトのプロパティを削除することができる関数を作成し、ログ出力でプロパティが削除できたことを確認する
// const person4 = {name: "John", age: 35}
// const deleteProperty = (obj,property) =>{
//   delete obj.property;
//   return obj;
// }
// console.log(deleteProperty(person4,age))
const user = { name: 'Bob', age: 35 };
const deleteProperty = (obj, property) => {
  delete obj[property]
  return obj;
};
console.log(deleteProperty(user, "age"));

// オブジェクトに値が関数であるgetAnimalsプロパティを定義しログ出力する
// const pet = {
//   owner: "Bob",
//      animals: ["dog", "cat"],
//   }

//   const getAnimals =()=>{
//     return `${pet.owner} has ${pet.animals.join(" and ")}`;
//   }

// console.log(pet.getAnimals());
const pet = {
  owner: "Bob",
  animals: ["dog", "cat"],
  getAnimals: function () {
    return this.owner + " has a " + this.animals[0] + " and a " + this.animals[1] + ".";
  }
}

console.log(pet.getAnimals());