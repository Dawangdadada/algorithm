//1.随机生成法(生成随机数，若已出现则重新生成，未出现则保存)
function frish(arr){
	var result=[];//存放生成的下标
    var c=0;
    var s;
    while(c<arr.length){
    	s=Math.floor(Math.random()*arr.length);
    	console.log(s);//随机生成下标[0-9]
    	if(result.indexOf(s)==-1){
    			result[c++]=s;
    	}
    }
    var arrNum=[];
    for(var i=0;i<arr.length;i++){
    	arrNum[i]=arr[result[i]];
    }
    return arrNum;
}

//test:
var arr=[1,2,3,4,5,6,7,8,9,10];
var arrNum=frish(arr);
console.log(arrNum);

//变形:获取一个1-50的随机不重复数组
var num=50;
var arr=[];
for(var i=1;i<=50;i++){
	arr.push(i);
}
var result=[];
for(var j=49;j>=0;j--){//技巧在这
	var rand=Math.ceil(Math.random()*j);
	console.log(rand);
	var middle=arr.splice(rand,1);//这是一个数组
	result.push(middle[0]);
}
console.log(result);

//2.随机交换法(遍历有序数列，每一项与随机位置的元素交换，即可得到一个随机排列的数据列)
function shuffle(a) {
    var len = a.length;
    for (var i = 0; i < len; i++) {
        var index = Math.floor(Math.random() * (len - i));//
        console.log(index);
        var temp = a[index];
        a[index] = a[i];
        a[i] = temp;
    }
  }
//test：
var a=[1,2,3,4,5,6,7,8,9,10];
shuffle(a);
console.log(a);