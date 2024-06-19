// https://ja.javascript.info/destructuring-assignment
// オブジェクトのプロパティを分割代入しよう






// 「アラートです。」というアラートを表示しましょう。
const message ='アラートです'
console.log(alert(message))

// 確認アラート
// "confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう。
// ①confirmメソッドを使用し、nameをダイアログで表示してみよう。
// ②if文を使って条件分岐をし、trueなら' ようこそnameさん ' 、falseなら正しい名前を入力してくださいとログで表示させてみよう。
const name = "鈴木"
if(confirm(name + 'さんで間違い無いですか？')){
  console.log('ようこそ' + name + 'さん');

}else{
  console.log("正しい名前を入力してください")
}

// 動的確認アラート
// "confirmメソッドを使用し、名前が間違っていないか確認するポップアップを表示させてましょう。
// ①confirmメソッドを使用し、テンプレートリテラルでnameをダイアログで表示してみよう。
// ②if文を使って条件分岐をし、trueなら' ようこそnameさん 'をテンプレートリテラルで表記し、falseなら正しい名前を入力してくださいとログで表示させてみよう。"
if(confirm(`${name}さんで間違いないですか？`)){
  console.log(`ようこそ${name}さん`)
}else{
  console.log(`正しい名前を入力してください`)
}

// JSONplaceholderのfetch
// "JSONplacehokderのダミーデータをfetchメソッドを使用してダミーデータを取得しよう
// ①""https://jsonplaceholder.typicode.com/users""
// ②①のURLを使ってダミーデータを取得し、コンソールログに表示させてください。"

const dummyData = ('https://jsonplaceholder.typicode.com/users')

fetch(dummyData).then(res => res.json()).then(data => console.log(data))


// JSONplaceholderのfetch絞り込み
// "JSONplacehokderのダミーデータを使って、idが5のデータをログに表示させてみよう
// ①""https://jsonplaceholder.typicode.com/users"""

fetch(dummyData).then(res => res.json()).then(data =>{
  const filterData =data.filter((e)=>e.id === 5)
  console.log(filterData)
})