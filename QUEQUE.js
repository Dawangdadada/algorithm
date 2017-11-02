//两个队列实现一个栈
function pop(q1,q2){
	var ptr,temp;
	if(q1.length){
		ptr=q1;
        temp=q2;
	}
	else{
		ptr=q2;
		temp=q1;
	}
	while(ptr.length>1){
		temp.push(ptr.shift());
	}
	 ptr.shift();
}
function push(q1,q2,val){
	var ptr;
	if(q2.length){
		ptr=q2;
	}
	else{
		ptr=q1;
	}
     ptr.push(val);
}

//test:
var q1=[];
var q2=[];
 push(q1,q2,2);
 console.log(q1);
  push(q1,q2,3);
 console.log(q1);
  push(q1,q2,4);
 console.log(q1);
 pop(q1,q2);
 console.log(q1,q2);