//kuohao(递归)
function printfAllKuohao(left,right,s,result){
	if(left>right){//保证合理性不能出现先打印右括号
		return;
	}
	if(left>0){
		printfAllKuohao(left-1,right,s+"(",result);
	}
	if(right>0){
		printfAllKuohao(left,right-1,s+")",result);
	}
	if(left==0&&right==0){
		result.push(s);
	}
}

//2.顺时针打印二维数组（螺旋输出数组）
//分析：先考虑打印周围一圈的问题，然后可以使用递归求解，直到最后全都打印完为止。也就是先打印最外围的数，然后对于元二维数组中间的数组作为一个新的数组，重新打印该新数组的外围的数，直到最后全部打印完为止
function printfArray(arr,result,m,n){//m行n列
	var i;
	if(m<=0||n<=0){
		return;
	}
	if(m==1){//只有一行
		for( i=0;i<n;i++){
		result.push(arr[0][i]);
	}
	return;
	}
	if(n==1){//只有一列
		for( i=0;i<m;i++){
			result.push(arr[i][0]);
		}
		return;
	}
	//打印第一行
	for( i=0;i<n;i++){
		result.push(arr[0][i]);
	}
	//打印最后一列
	for( i=1;i<m;i++){
		result.push(arr[i][n-1]);
	}
	//打印最后一行
	for(i=n-2;i>=0;i--){
		result.push(arr[m-1][i]);
	}
	//打印最左边一列
	for(i=m-2;i>=1;i--){
		result.push(arr[i][0]);
	}
	//递归
	if(m-2>0&&n-2>0){
		//js二维数组
		var subarr=new Array(m-2);
		var j;
		for(i=1;i<m-1;i++){
			subarr[i-1]=new Array(n-2);
			for(j=1;j<n-1;j++){
				subarr[i-1][j-1]=arr[i][j];
			}
		}
		arr=null;
		printfArray(subarr,result,m-2,n-2);//递归
	}
}

//大整数类(包括tostring方法和add)
//先不管进位然后处理进位
function BigInt(){
	this.tostring=function(str){
		return str;
	}
	this.add=function(str1,str2){//默认str1和str2是正整数
		var len1=str1.length,
			len2=str2.length,
			max=Math.max(len1,len2)+1,
			i=len1-1,
			j=len2-1,
			res=[],
			m,
			n,
			result="",
			k=0;
	for(;i>=0,j>=0;i--,j--){
		res[k++]=parseInt(str1[i])+parseInt(str2[j]);
	}
	console.log(res);
	while(i>=0){
		res[k++]=parseInt(str1[i--]);
	}
	while(j>=0){
		res[k++]=parseInt(str2[i--]);
	}
	console.log(res);
	console.log(k);
	res[k]=0;//最高位
	for(m=0;m<max-1;m++){//处理进位
		res[m+1]+=parseInt(res[m]/10);
		res[m]=parseInt(res[m]%10);
	}
	console.log(res);
	//将结果集的最高位的0去除
	k=max-1;
	while(res[k]==0){
		k--; 
	}
	//从最高位开始取数
	for(m=k;m>=0;m--){
		result+=res[m].toString();
	}

//字符串全排列



//给一个数组，把0放到最后，用插入排序的方法(会引起死循环)
function sort_0(arr){
	var temp,i,j,len=arr.length;
    for(i=0;i<len;i++)
	{
		if(arr[i]==0){//后面的数往前移
		      temp=arr[i];
			j=i+1;
			while(j<len){
				arr[j-1]=arr[j];
				j++;
			}
			arr[j-1]=temp;
			i--;
			console.log(arr);
		}
	}
	
}

//test:
var arr=[0,1,2,3,0,0,4,5];
sort_0(arr);
console.log(arr);
