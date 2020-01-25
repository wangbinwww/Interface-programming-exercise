//输出json内容
const text =
  '{ "sites" : [{ "name":"Runoob" , "url":"www.runoob.com" },{ "name":"Google" , "url":"www.google.com" },{ "name":"Taobao" , "url":"www.taobao.com" } ]}';
const obj1 = JSON.parse(text);
console.log(obj1.sites[1].name + " -- " + obj1.sites[1].url);

//提取json值
const json = '{"result":true, "count":42}';
const obj2 = JSON.parse(json);
console.log(obj2.count);
console.log(obj2.result);

//将JSON对象转化为JSON字符
const jsonObj = {
  name: "西兰花的春天",
  age: 26,
  male: true
};
console.log(jsonObj);
jsonObj.age = 99;
console.log(jsonObj);
const jsonString = JSON.stringify(jsonObj);
console.log(jsonString);

//将JSON对象转化为JSON字符
var student = new Object();
student.name = "well";
student.sex = "Man";
student.address = "beijing";
console.log(student); //object
var jsonStudent = JSON.stringify(student);
console.log(jsonStudent); //string

//json数组转json字符串
//原始
var arr = [
  ["projectname1", "projectnumber1"],
  ["projectname2", "projectnumber2"],
  ["projectname3", "projectnumber3"]
];
//计划转成
var jsonarr = [
  { projectname: "projectname1", projectnumber: "projectnumber1" },
  { projectname: "projectname2", projectnumber: "projectnumber2" },
  { projectname: "projectname3", projectnumber: "projectnumber3" }
];

console.log(tojson(arr));

console.log(tojson(arr));

function tojson(arr) {
  if (!arr.length) return null;

  var i = 0;
  var len = arr.length;
  var array = [];
  for (; i < len; i++) {
    array.push({ projectname: arr[i][0], projectnumber: arr[i][1] });
  }
  return JSON.stringify(array);
}
