//var s=-64;
//var a=s>>3;
//console.log(a);
var readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line', function(line) {
    var json=line.read_line
    
   })

  //
  //var s=parseInt("11",2);
  //console.log(s);
  //var s=5%2;
 // console.log(s);

 //var s=5/2;
 //console.log(s);
 //与C++不同
 //var s='B'-'C';
 //console.log(s);
 /*function main(){
  var len=parseInt(read_line);
  var result=[];
  var count=0;
  while(len){
    len--;
    var item=read_line();
    if(item.length<8){
      result.push("NO");
      continue;//后面不执行，直接进行下一个
    }
    if(/[^a-zA-Z0-9]/.test(item)){
      result.push("NO");//只能出现这3种
      continue;
    }
    if(/^[\d]/.test(item)){
      result.push("NO");//不能以数字开头
      continue;

    }
    if(/[A-Z]/.test(item)){
      count++;

    }
    if(/[a-z]/.test(item)){
      count++;
    }
    if(/[0-9]/.test(item)){
      count++;
    }
    if(count<2){//至少出现两种
      result.push("NO");
      continue;
    }
      result.push("YES");//排除所有的情况


  }
  console.log(result.join("\n"));
  count=result.length=0;
 }
  
  var coins=[100,50,20,10,5,2,1];
  var len=coins.length;
  var remain=parseInt(read_line());
  var kinds=0;
  for(var i=0;i<len;i++){
    if(remain/coins[i]>=1){
      kinds++;
      remain-=coins[i];
      //console.log(coins[i]);
    }

  }
  console.log(kinds,kinds+remain);
  kinds=0;
 }*/
/* var readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.on('line',function(line){
    var n=line.trim();
    kinds=0;
    var coins=[100,50,20,10,5,2,1];
    for(var i=0;i<7;i++){
      if(n/coins[i]>1){
        kinds++;;
        n=n-coins[i];
      }
    }
    console.log(kinds,kinds+n);
  })
*/
var readline = require('readline');
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  var row=[];
  rl.on('line',function(line){
    row.push(line.trim());
    if(row.length==2){
      var arr=row[1].split(" ");
      var len=parseInt(row[0]);
      var start=arr[0];
      var end=arr[len-1];
      var min=Infinity;//正无穷
      for(var i=1;i<len-1;i++){//控制跳过的点
        var temp=0;
        var start=arr[0];
        for(var j=1;j<len;j++){
          if(i==j){
            continue;
          }
          temp+=Math.abs(start-arr[j]);
          start=arr[j];
        }
        if(temp<min){
          min=temp;
        }    
      }
      console.log(min);
    }
   
    })


 /* var a='3';
  var b='43';
  if(a.valueOf()>b[0].valueOf()){
    console.log("true");
  }

var numbers=[3,5,1,4,2];
 
  function PrintMinNumber(numbers)
{   
    if(numbers.length==0){
        return "";    }
    if(numbers.length==1){
        return numbers[0];
    }
    // write code here
   /*numbers=numbers.map(function(item){//forEach不会有返回值,迭代方法都不会修改数组
        return item.toString();
        
    });*/
    //console.log(numbers);
    /* numbers.sort(campare);  //返回-1表示a排在b前面
    var left="";
    for(var i=0;i<numbers.length;i++){
       left+=numbers[i];
        
    }
    return parseInt(left);
}
function campare(a,b){
  var A=a.toString();
  var B=b.toString();
    if(parseInt(A+B)>parseInt(B+A)){
        return 1;
    }
    else if(parseInt(A+B)==parseInt(B+A)){
      return 0;
    }
    else{
        return -1;
    }
}
 console.log(PrintMinNumber(numbers));

 

 var k=-1;
 if(k<0){
  console.log(k);
   k=1;//赋值
 }
 else{
   k=9;
 }
 console.log(k);




 var k=0;
 var k;
 console.log(k);//0
 var a="+12345";
 console.log(parseInt(a));
 var b="12aaddw";
 console.log(parseInt(b));*/