/*ABCDEFGHI,输出该二叉树的先序遍历结果*/
//思路先构建二叉树,然后再先序遍历输出来
/*var readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', function(line) {
    var arr=line.trim().split(",");
    function Node(value){
      this.val=value;
      this.left=null;
      this.right=null;
    }
    function buildTree(root,index){//递归构建完全二叉树
        if(index>=arr.length){
          return null;
        }//出口
        root=new Node(arr[index]);
        root.left=buildTree(root.left,(2*index+1));
        root.right=buildTree(root.right,(2*index+2));
        return root;
      }
      function preOrder(root){
        if(root===null){
          return;
        }
        result.push(root.val);
        preOrder(root.left);
        preOrder(root.right);

      }
      var root=null;
      root=buildTree(root,0);
       var result=[];
      preOrder(root);
      console.log(result.join(","));
  })*/
//JSON key值首字母大写  "keyValue:"
var readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.on('line', function(line) {
    var data = line.trim().replace(/("\s*)(\w*)(\s*)("\:)/g, function($0,$1,$2,$3,$4){
        return $1 + captalize($2)+$3+$4;
    });
    /* var data = line.trim().replace(/("*)(\w*)(*)("*\:)/g, "$1"+captalize($2)+"$3"+"$4");*/
    console.log(data);
    function captalize(str){
      var arr = str.split('');
        arr[0] = arr[0].toUpperCase();
        return arr.join('');
    }
});



//选择题
/*console.log(null instanceof Object);//false;
var a=parseInt(3,2);
console.log(a);//NaN
/*null和undefined值没有toString()这个方法
使用String()时null会返回"null",undefined会返回"undefined"*/
/*var c=null;
console.log(c.toString());// TypeError: Cannot read property 'toString' of null
console.log(String(c));
//filter():返回true的项组成的数组
/*var numbers=[1,2,3,'3',3];
var unique=numbers.filter(function(item,index,array){
	return array.indexOf(item)===index;
});
console.log(unique);

var json="keyValue";
console.log(json.toUpperCase());//将小写转为大写 KEYVALUE
var json="23AA3245AA54";
var str=json.replace(/(\d*)([A-Z]*)(\d*)/g,function($0,$1,$2,$3){
	return $3+low($2)+$1;
})
console.log(str);
function low(str){
	return str.substring(0,1).toLowerCase()+str.substring(1);
}*/

/*var str="abbbb";//因为字符串的下标是不可写属性
var arr=str.split("");
for(var i=0;i<str.length;i++){
	arr[i]=arr[i].toUpperCase();
}
console.log(arr.join(""));//ABBBB

var str="abbbb";
for(var i=0;i<str.length;i++){
	str[i]=str[i].toUpperCase();
}
console.log(str);//abbbb
//replace()
var str="aaa333";
//var str1=str.substring(0,1);//不会改变原来的字符
//console.log(str1,str);
var str1=str.replace(/([a-z]+)(\d+)/g,"$2"+"$1");//为什么一定要加引号呢
console.log(str1)*/

/*var str=[1,2,4,NaN];
console.log(str.indexOf(NaN));//-1*/

var s="1224_"
s=s.replace(/\w+/,"*");
console.log(s);


function arrayMerge(){
​var result=[];
​return result.contat(arguments);
​}
