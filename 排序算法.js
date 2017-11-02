//1.冒泡排序(从小到大)（第一轮结束最大的是最后一个) 稳定的
var a=[72,54,58,30,31,78,2,77,82,72];
for(var outer=a.length-1;outer>=1;outer--){
	for(var inner=0;inner<outer;inner++){
		if(a[inner]>a[inner+1]){
			var t=a[inner+1];
			a[inner+1]=a[inner];
			a[inner]=t;
	}
	}
}
console.log(a);
//冒泡排序（从大到小)(第一轮结束最小的是最后一个)
var start=new Date().getTime();
var a=[72,54,58,30,31,78,2,77,82,72];
for(var outer=a.length-1;outer>=1;outer--){
	for(var inner=0;inner<outer;inner++){
		if(a[inner]<a[inner+1]){
			var t=a[inner+1];
			a[inner+1]=a[inner];
			a[inner]=t;
		}
	}
}
console.log(a);
//js sort()
var a=[72,54,58,30,31,78,2,77,82,72];
function compare(a,b){//如果第一个参数应该位于第二个参数之前，则返回-1
   if(a<b){//从小到大
   	return -1;
   }
   else if(a==b){
   	return 0;
   }
   else{
   	return 1;
   }
}
 a.sort(compare);
 console.log(a);

//2.快速排序 不稳定的(基准值和递归)
var a=[44,75,23,43,55,12,64,77,33];
function qSort(list){
	if(list.length==0){
		return [];
	}
	var pivot=list[0];
	var lesser=[];
	var greater=[];
	for(var i=1;i<list.length;i++){
		if(list[i]<pivot){
			lesser.push(list[i]);
		}
		else{
			greater.push(list[i]);
		}
	}
	return qSort(lesser).concat(pivot,qSort(greater));
}
   console.log(qSort(a));


//直接选择排序(经过第一轮排序之后最小的值会在第一个)(不稳定的)
var a=[44,75,23,43,55,12,64,77,33];
function selectSort(list){
	var min;//保存最小值在数组中的位置
	for(var outer=0;outer<=list.length-2;outer++){//outer用来控制最小值的位置
		min=outer;
      	for(var inner=outer+1;inner<list.length;inner++){
      		if(list[inner]<list[min]){
      			min=inner;
      		}
      	}
      	//内循坏结束,进行交换
      	var temp=list[outer];
      	list[outer]=list[min];
      	list[min]=temp;
	}
	return list;
}
console.log(selectSort(a));

//直接插入排序(稳定的)(有序表和无序表)
var a=(5+6)/2;
var b=Math.floor(a);
var c=parseInt(a);
console.log(a);//5.5
console.log(b);//5
console.log(c);//5
function insertSort(arr){
	for(var i=1;i<arr.length;i++){
		var temp=arr[i];//待插入数据
		var j=i-1;
		while(j>-1&&a[j]>temp){
			arr[j+1]=arr[j];
		    j--;
		}
		arr[j+1]=temp;//j+1插入位置
	}
	return arr;

}
var a=[1,5,4,2,3,9,6];
console.log(insertSort(a));
//插排的思想
//将数组中所有的0放在数组最后
function replace0(arr){
    var i,j;
    for( i=0;i<arr.length;i++){
         if(arr[i]==0){//是0就往后面移
            j=i+1;
         while(j<arr.length){
            arr[j-1]=arr[j];
         }
         arr[j-1]=arr[i];
         }
    }
}
//test:
var arr=[1,0,3,0,4,5];
replace0(arr);
console.log(arr);


//二分查找法(针对有序数据集)
var a=[0,2,4,5,5,9,10,23,44,56];
function binSearch(arr,data){
	var low=0;
	var high=arr.length-1;
	//var mid=Math.floor((low+high)/2);//js里面没有整数之说
    while(low<=high){
	var mid=Math.floor((low+high)/2);//js里面没有整数之说
    	if(arr[mid]===data){
    		return mid;
    	}
    		else if(arr[mid]<data){
    			low=mid+1;
    		}
    		else{
  				high=mid-1;
    		}
    	}
    return -1;
}
var d=binSearch(a,5);
console.log(d);

console.log(isNaN(true));
console.log(parseFloat("A"));


var arr=[1,2,3,4,5,6,7];
var arr1=arr.splice(8,2);//splice超出范围,原数组会去掉截取了的这一部分
console.log(arr1);//[]
console.log(arr);
var arr3=arr.push(8);//push返回的是数组的长度
console.log(arr3);
var arr2=arr.slice(0);//包括start,不包括end//只输入start时会默认截取到最后
console.log(arr2);
console.log(arr);//slice不改变原来的数组
//concat;
var arr=[1,2,3,4];
var arr2=[5,6,7,8];
var arr3=arr.concat(arr2);//产生一个新的数组
console.log(arr3);

//动态规划
function dynFib(n){
	var val=[];
	for(var i=0;i<=n;i++){
		val[i]=0;
	}
	if(n==1||n==2){
		return 1;
	}
	else{
		val[1]=1;
		val[2]=1;
		for(var i=3;i<=n;i++){
			val[i]=val[i-1]+val[i-2];
		}
		return val[n];
	}

}
console.log(dynFib(6));

var flag=1;
flag=flag<<32;
console.log(flag);

function reOrderArray(array)
{
    // write code here
   /* var even=[];//偶数
    var odd=[];//奇数
    for(var i=0;i<array.length;i++){
        if(array[i]%2==0){
            even.push(array[i]);
        }
        else {
            odd.push(array[i]);
        }
      
    }
      return odd.concat(even);*/
    //利用插入排序的思想，是奇数就前移
    for(var i=0;i<array.length;i++){
        if(array[i]%2==1){//是奇数
            var temp=array[i]；
            //待插入的数据
            var j=i-1;
            while(j>-1&&array[j]%2==0){
                array[j+1]=array[j];//后移
                j--;
            }
            array[j+1]=temp;
        }
    }
    return array;
}
console.log(reOrderArray([2,3,4,5,6,9]));

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

//广度优先算法
function bfs(s){
	var queue=[];
	var mark=[0,0,0,0,0];
    var adj=[[1,2],[0,3],[0,4],[1],[2]];
     mark[s]=1;
    queue.push(s);
    while(queue.length>0){
    	var v=queue.shift();//从队首移除
    	if(v!=undefined){
    		console.log(v+'\n');
    	}
    	for(var i=0;i<adj[v].length;i++){
    		if(!mark[adj[v][i]]){
    			mark[adj[v][i]]=1;
    			queue.push(adj[v][i]);
    		}
    	}
    }
}
bfs(0);

//
var data=[1,2,3,3,3,3,4,5];
var k=3;
function GetNumberOfK(data, k)
{
    var first=getfirstindex(data,k);
    var last=getlastindex(data,k);
    return last-first+1;
    // write code here
}
function getfirstindex(data,k){
    var start=0;
    var end=data.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2);
        if(data[mid]<k){
            start=mid+1;
        }
        else if(data[mid]>k){
            end=mid-1;
        }
        else if(data[mid-1]==k&&mid-1>=0){
            end=mid+1;
        }
        else 
            return mid;
    }
    return -1;
}
function getlastindex(data,k){
    var start=0;
    var end=data.length-1;
    while(start<=end){
        var mid=Math.floor((start+end)/2);
        if(data[mid]<k){
            start=mid+1;
        }
        else if(data[mid]>k){
            end=mid-1;
        }
        else if(data[mid+1]==k&&mid+1<data.length){
            start=mid+1;
        }
        else 
            return mid;
    }
    return 0;
}
console.log(GetNumberOfK(data,k));

//一道关于argument的js题目;
function sum(x,y,z){
    argument[0]=argument[]
}
function test(){
    var y=10;
    sum(1,1,2,);
}
//splice
var arr=[1,2,3,4,5];
var arr1=arr.splice(0,2);
console.log(arr1);
console.log(arr);

//归并排序,采用递归的话对于js而言不友好-
var arr=[8,4,5,7,1,3,6,2];
function sort()