const apple ="りんご"
console.log(apple)

let weight = 70;
weight = 60;
console.log(weight);

var text ="あいうえお";
text ="かきくけこ"
const answer = text;
console.log(answer);

var text1 = "あいうえお"
var text2 = "かきくけこ"
console.log(text1 + text2);

const str = "あいうえお";
const newStr = str.replace("あ", "お");
console.log(str);
console.log(newStr);

const str1 = "あああああ";
console.log(str1.replace("あああああ","おおおおお"));

const  str2  ="あいうえお";
const answer1 = [...str2]
console.log(answer1);

const str3 = "あいうえおかきくけこ";
// 0番目から5つの文字
const newstr =str3.slice(0,5);
console.log(newstr);

const str4 = 'Menta';
// 1文字目から3文字目だけコンソールに出力してください;
var newstr4 =str4.substring(0,3)
console.log(newstr4);

// 4文字目以降コンソールに出力してください
newstr4 = str4.substring(3);
console.log(newstr4);


const alphabet = "abcde";
// 最後の文字だけコンソールに出力してください
console.log(alphabet.slice(-1));


// 文字分割①
const greeting = "Hi my name is Bob!";

// ここに処理を書いてください。
const newGreeting = greeting.split(", ");
console.log(newGreeting);

// 文字分割②
newGreeting.forEach(element => {
  console.log(element);
});
