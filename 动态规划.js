//动态规划，寻找最长公共子串
function longCommonString(string1,string2){
	var arr1=new Array(string1.length);
	var max=0;
	var lcs="";
	console.log("-------");
	for(var i=0;i<arr1.length;i++){
		 arr1[i]=new Array(string2.length);
		for(var j=0;j<string2.length;j++){
			arr1[i][j]="";
			console.log("bbbbb");
		}
	}//初始化
	//具有最优子结构
	for(var i=0;i<string1.length;i++){
		for(var j=0;j<string2.length;j++){
			if(i==0||j==0){
				if(string1[i]===string2[j]){
					arr1[i][j]=string[i];
				}
			}
				else{
					if(string1[i]===string2[j]){
						arr1[i][j]=arr1[i-1][j-1]+string1[i];
					}
				}
				if(max<arr1[i][j].length){
				   max=arr1[i][j].length;
				   lcs=arr1[i][j];
				   console.log(lcs);
				}

			}
		}
		return lcs;
	}
	var string1="abbcc";
	var string2="dbbcc";
	console.log(longCommonString(string1,string2));

//动态规划-背包问题
var value=[4,5,10,11,13];//每件物品的价值
var size=[3,4,7,8,9];//每件物品对应的尺寸
var n=5;//有多少件物品
var capacity=16;	
function dbagback(value,size,n,capacity){
	var min=size[0];
	for(var i=1;i<n;i++){
		if(min>size[i]){
			min=size[i];
		}

	}//找出最小的size,从这里开始
  if(min>capacity){
  	return "错误";
  }	
  else{
     var array=[];
     for(var i=0;i<n;i++){
     	array[i]=[];
     }
     for(var i=0;i<n;i++){
     	for(var j=0;j<=capacity;j++){//表示容量
     		if(i==0||j<min){
     			if(size[i]<=j){
     				array[i][j]=value[i];
     			}
     			else{
     				array[i][j]=0;
     			}

     		}
     		else{//下面这个if超级重要哦
     			if(size[i]<=j){//只有当当前的容量减去当前的包尺寸之后会大于当前的包的尺寸，才需要考虑是否需要放这个包
      			 	array[i][j]=Max(array[i-1][j-size[i]]+value[i],array[i-1][j]);
     			}
     			else{
     				array[i][j]=array[i-1][j];
     			}

     		}
     		console.log(array[i][j]);
     		
     	}
     }
    	return array[n-1][capacity];
  }
} 
function Max(a,b){
	return a>b?a:b;
}
console.log(dbagback(value,size,n,capacity));


var string1="abbcc";
var arr1=new Array(string1.length);
console.log(arr1.length);