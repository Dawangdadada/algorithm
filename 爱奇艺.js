var readline=require("readline");
var  rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
rl.on('line',function(line){
	var str=line.replace(/R/g,'0').replace(/G/g,'1');
    var len=str.length;
    var curr=Math.pow(2,len)-1;  //构造全是1
    var oldnum=parseInt(str,2);
    var min=len;//初始值
    for(var i=0;i<len;i++){
    	var temp=oldnum^curr>>i;
    	var arr=temp.toString(2).match(/1/g);
    	var diff=arr?arr.length:0;
    	min=diff<min?diff:min;
    }
    console.log(min);

});


/*var s="dddddddd";
var arr=s.match(/1/g);
console.log(arr); //null
*/