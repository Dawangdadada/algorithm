//kuohao(�ݹ�)
function printfAllKuohao(left,right,s,result){
	if(left>right){//��֤�����Բ��ܳ����ȴ�ӡ������
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

//2.˳ʱ���ӡ��ά���飨����������飩
//�������ȿ��Ǵ�ӡ��ΧһȦ�����⣬Ȼ�����ʹ�õݹ���⣬ֱ�����ȫ����ӡ��Ϊֹ��Ҳ�����ȴ�ӡ����Χ������Ȼ�����Ԫ��ά�����м��������Ϊһ���µ����飬���´�ӡ�����������Χ������ֱ�����ȫ����ӡ��Ϊֹ
function printfArray(arr,result,m,n){//m��n��
	var i;
	if(m<=0||n<=0){
		return;
	}
	if(m==1){//ֻ��һ��
		for( i=0;i<n;i++){
		result.push(arr[0][i]);
	}
	return;
	}
	if(n==1){//ֻ��һ��
		for( i=0;i<m;i++){
			result.push(arr[i][0]);
		}
		return;
	}
	//��ӡ��һ��
	for( i=0;i<n;i++){
		result.push(arr[0][i]);
	}
	//��ӡ���һ��
	for( i=1;i<m;i++){
		result.push(arr[i][n-1]);
	}
	//��ӡ���һ��
	for(i=n-2;i>=0;i--){
		result.push(arr[m-1][i]);
	}
	//��ӡ�����һ��
	for(i=m-2;i>=1;i--){
		result.push(arr[i][0]);
	}
	//�ݹ�
	if(m-2>0&&n-2>0){
		//js��ά����
		var subarr=new Array(m-2);
		var j;
		for(i=1;i<m-1;i++){
			subarr[i-1]=new Array(n-2);
			for(j=1;j<n-1;j++){
				subarr[i-1][j-1]=arr[i][j];
			}
		}
		arr=null;
		printfArray(subarr,result,m-2,n-2);//�ݹ�
	}
}

//��������(����tostring������add)
//�Ȳ��ܽ�λȻ�����λ
function BigInt(){
	this.tostring=function(str){
		return str;
	}
	this.add=function(str1,str2){//Ĭ��str1��str2��������
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
	res[k]=0;//���λ
	for(m=0;m<max-1;m++){//�����λ
		res[m+1]+=parseInt(res[m]/10);
		res[m]=parseInt(res[m]%10);
	}
	console.log(res);
	//������������λ��0ȥ��
	k=max-1;
	while(res[k]==0){
		k--; 
	}
	//�����λ��ʼȡ��
	for(m=k;m>=0;m--){
		result+=res[m].toString();
	}

//�ַ���ȫ����



//��һ�����飬��0�ŵ�����ò�������ķ���(��������ѭ��)
function sort_0(arr){
	var temp,i,j,len=arr.length;
    for(i=0;i<len;i++)
	{
		if(arr[i]==0){//���������ǰ��
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
