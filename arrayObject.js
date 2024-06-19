// 複数のオブジェクト要素を持つ配列の定義
const object =[
  {  id:1,name:'John',age:15},
  {id:2,name:'Bob',age:20},
  {id:3,name:'Micheal',age:15}
]
console.log(object)

//配列オブジェクト複数のオブジェクト要素を持つ配列からオブジェクト取得
console.log(object[0])


// 複数のオブジェクト要素を持つ配列からプロパティの値取得
console.log(object[0].age)



// 配列オブジェクトから特定のオブジェクト取得
const findObject = object.find((e)=> e.id === 2)

console.log(findObject)

// 配列オブジェクト絞り込み取得1
// 配列内のオブジェクトのnameプロパティの文字列が3文字のオブジェクト要素からなる配列を取得してください。
const filterObject = object.filter(e=>e.name.length == 3)
console.log(filterObject)


// 配列オブジェクト絞り込み取得2
// 配列内のオブジェクトのageプロパティが15のオブジェクト要素を全て取得してください。
// ①配列メソッドのfilterを使用し、条件に一致した要素を全て含んだ配列を定数として定義する。
// ②定義した定数をログで出力し、確認する
//
const filter15 = object.filter((obj) =>(obj.age === 15))
console.log(filter15)

// 配列オブジェクト絞り込み取得3
// 配列内のオブジェクトのidプロパティが1の要素を除いた配列を取得してください。
const eliminateId1 = object.filter((obj)=> obj.id !== 1)
console.log(eliminateId1)

// 配列オブジェクトの特定の要素削除
// 配列内のオブジェクトのageプロパティが15の要素を削除してください。
const eliminateAge15 = object.filter(e => e.age !== 15)
console.log(eliminateAge15)

// 配列オブジェクトのプロパティ値更新
// 配列内のオブジェクトのageプロパティに+1してください。

// const objAgeplus1 = object.map((e)=> e.age + 1)

const objAgeplus1 = object.map((obj)=> {
  return {...obj,age:obj.age + 1}
})

console.log(objAgeplus1)

// 配列オブジェクトのプロパティ値更新2
// 配列内のオブジェクトのnameプロパティの頭に`Mr. `をつけてください。
// const newObj = object.map((user)=>{
//   return {...object,name:"Mr." + user.name}
// })
// console.log(newObj)

const newObj = object.map((user) => {
  return { ...user, name: "Mr." + user.name };
});

console.log(newObj);

// 配列オブジェクトのマージ
// 配列オブジェクト操作
const todos = [{
  id:1,
  title:"todo1"
},
{
  id:2,
  title:"todo2"
},
{
  id:3,
  title:"todo3"
}
]
const likes =[{todoId:1},{todoId:3},]

const todoWithLike =todos.map((todo)=>{
  const like = likes.find((like)=>like.todoId === todo.id);
  return{
    id:todo.id,
    title:todo.title,
    like:like ? true: false
  }
})

console.log(todoWithLike)

// 以下にコードを書いてください。
// const todosWithLike = []"
// const todosWithLike = [{
//     id:1,
//     title:"todo1",
//     like:true
//   },
//   {
//     id:2,
//     title:"todo2",
//     like:false
//   },
//   {
//     id:3,
//     title:"todo3",
//     like:true
//   }
// ]