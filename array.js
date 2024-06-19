// 文字列要素"りんご"、"みかん"、"いちご"が入った配列を定義する
const array1 =["りんご","みかん"];
console.log(array1);

// 配列の2番目の要素をログ出力する
console.log(array1[1]);

// 配列の3番目の要素を”もも”に変更してログ出力する
array1[2] = 'もも'
console.log(array1[2]);

// 配列の最後に文字列要素"すいか"を追加する
array1.push('すいか')
console.log(array1)

// 配列の最後の要素を削除する
const fruits = ["りんご","みかん","いちご"];
fruits.pop()
console.log(fruits)

// 配列の最初に文字列要素"すいか"を追加する
fruits.push("すいか")
console.log(fruits)

// 配列の最初の要素を削除する
fruits.shift()
console.log(fruits)

// 配列から"みかん"のindexを取得する
console.log(fruits.indexOf("みかん"))

// 配列に"りんご"が含まれているか確かめる
fruits.push("りんご");
console.log(fruits.includes("りんご"))

// 配列の2番目の要素と3番目の要素からなる配列を作る
const fruits2 = fruits.slice(1, 3);
console.log(fruits2)

// 配列の3番目の要素を削除する
console.log(fruits)
fruits.splice(2, 1);
console.log(fruits)


//配列のそれぞれの要素をログ出力する
const fruits3 = ["apple", "orange", "grape"];
for (let i = 0; i < fruits3.length; i++) {
  console.log(fruits3[i]);
}

// 配列のそれぞれの要素を2倍にしてログ出力する
const number =[1,2,3]
const doubleNUmber =()=>{
  for(let i =0; i <number.length; i++){
    console.log(number[i] * 2)
  }
}
doubleNUmber();


// 配列のそれぞれの要素を3倍に加工した配列を取得する
const number2 = [1,2,3]
const tripleNumber = number2.map(num =>{
  return num * 3
})
console.log(tripleNumber)

//配列の中で3文字の要素のみに絞り込んだ配列を取得する
const fruits4 = ['apple','grape','fig'];
// const answer = fruits.filter(fruits.length ==3);
// 仮引数を使えなかった
const answer = fruits4.filter((fruit)=> fruit.length == 3);
console.log(answer)

// オブジェクト配列からあるプロパティのみの配列を取得する
const data ={
  id:107,
  name:'Bob',
  job:'programer'
}

for (let key in data) {
  console.log(key);
}

// 文字コード順に並べ替える
const otomo =['いぬ','さる','きじ'];
console.log(otomo.sort());

// 配列を逆順にする
console.log(otomo.reverse())

// 昇順ソートする
const since = [1975,11,20]
since.sort((a,b)=> a-b)
console.log(since)

// 降順ソートする
since.sort((a,b)=> b-a)
console.log(since)

// 配列内の要素をすべて足し合わせる
const arrayNum = [1,2,3,4,5];
let sum =0;
  for(let i = 0; i < arrayNum.length; i++){
    sum += arrayNum[i]
  }

console.log(sum)

// 配列内の要素をすべて足し合わせる（関数）
const arrayNum2 =[1,2,3,4,5]
let total =0;
const getTotal =(arrayNum2)=>{
  for(let i = 0; i < arrayNum2.length; i++){
    total += arrayNum2[i]
  }
  return total;
}
console.log(getTotal(arrayNum2));

// 配列内の要素をすべて足し合わせる（reduce）
const addArray =[1,2,3]

const calcTotal =(array)=>{
  let total = 0
  for(let i = 0; i<array.length; i++){
    total += array[i];
  }
  return total
}

console.log(calcTotal(addArray))

// 配列の全要素を引数の文字列で連結させる
const joinFruits = ['りんご','みかん','いちご']

console.log(joinFruits.join(','))

// スプレッド構文を用いて配列の要素を展開する①
const spreadArray = [1,2,3,4,5]
const spreadArray2 =[...spreadArray]
console.log(spreadArray2)

// スプレッド構文を用いて配列の要素を展開する②
const spreadArray3 = [1, 2, 3, 4, 5];
const spreadArray4 = [...spreadArray3, 6, 7, 8, 9];
console.log(spreadArray4);

// スプレッド構文を用いて配列の要素を展開する③
const spreadArray5 = [1,2,3,4,5];
const spreadArray6 = [6,7,8,9,10]
console.log([...spreadArray5,...spreadArray6])

