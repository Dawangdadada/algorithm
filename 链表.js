//单链表，双向链表，单循环链表，双循环链表
//单链表
function Node(val){
	this.val=val;
	this.next=null;
}
function List(){
	this.head=new Node("head");//初始化
	//this.find=find; //按值查找
	//this.insert=insert;//在某个位置插入一个节点
	//this.remove=remove;//删除节点
	this.createList=createList//头插法，新增节点插入在头结点和第一个节点之间
	//this.creatLinkList=creatLinkList;
	this.display=display;
}
/*function find(item){//按值查找
	var current=this.head.next;
	while(current&&current.val!=item){
		current=current.next;
	}
	if(current&&current.val==item){
		return current;
	}
	else{
		return null;
	}

}
function insert(newelement,item){//在某个节点之前插入
	var current=this.find(item);
	var newNode=new Node(newelement);
	newNode.next=current.next;
	current.next=newNode;
}
function remove(item){//找到待删除节点的前一个节点
     var current=this.head;
     while(current.next.val!=item){
     	current=current.next;
     }
     if(current.next.val==item){
     	current.next=current.next.next;
     }

}*/
function createList(arr){
	var current=this.head;
	for(var i=arr.length-1;i>=0;i--){
		var p=new Node(arr[i]);
		p.next=current.next;
		current.next=p;//插入到表头
	}
}
function creatLinkList(arr){//尾插法
	var current=this.head;
	for(var i=0;i<arr.length;i++){
		var p=new Node(arr[i]);
		current.next=p;
		current=p;
	}
}
function display(){
	var result=[];
	var current=this.head.next;
	while(current){
		result.push(current.val);
		current=current.next;
	}
	console.log(result);
}

//test:
/*var list=new List();
var arr=[1,2,3,4];
list.createList(arr);
list.display();
//单循环链表
//将单循环链表逆置的算法
function Node(val){
	this.val=val;
	this.next=null;
}
function ContrayLinkList(node){
	var p=node.next;
	node.next=node;//建立空循环链表，然后采用头插法
	var q;
	while(p!=node){
		q=p;//待插节点
		q.next=node.next;//头插法
		node.next=q;//
		p=p.next;

	}
	return node;

}
//已知有两个带头节点的循环单链表，设计一个算法，用最快的速度将这两个表合成一个带头节点的循环单链表。
//要求时间复杂度为O(1),且占用的辅助空间最小
function UnionCirLinkList(la,lb){//la,lb为两个带头结点的单循环链表的尾指针
	var q=lb.next;//头结点
	lb.next=la.next;
	la.next=q.next;
	q=null;//释放lb的头结点
}))*/

//双向链表
/*function DulNode(val){
	this.val=val;
	this.next=null;
	this.prior=null;
}

function DulLinkList(){
	this.head=new DulNode("head");
	this.find=find;
	this.DuLinkInsert=DulLinkInsert;//插入一个节点
	this.DulLinkDelete=DulLinkDelete;//删除
	this.createDulLinkList=createDulLinkList;//头插法
	this.display=display
}
function find(item){
	var current=this.head.next;
	while(current&&current.val!=item){
		current=current.next;
	}
	if(current&&current.val===item){//一定要写上current;要不然会直接访问current.val，但是current实际上是一个null
		return current;
	}
	else{
		console.log("error");
		return null;
	}

}
function DulLinkInsert(item,element){//在item之后插入一个节点,注意item是最后一个节点的情况
	var pre=this.find(item);
	if(!pre){
		console.log("error");
		return false;
	}
	var ele=new DulNode(element);
	if(pre.next){
	ele.next=pre.next;
	pre.prior=ele;
	pre.next=ele;
	ele.prior=pre;
}
else{//在链表的尾部插入

	ele.next=pre.next;
	ele.prior=pre;
	pre.next=ele;
}
}
function DulLinkDelete(item){//删除值为item的节点
	var p=this.find(item);//
	if(!p){
		console.log("error");
		return false;
	}
	if(p.next){//删除的不是尾节点
		p.prior.next=p.next;//注意顺序
		p.next.prior=p.prior;
		p=null;//释放内存
	}
	else{
		p.prior.next=null; //释放内存
	}
	console.log(";;;;",p);
}
//双向链表删除和插入为什么需要判断是不是尾节点？因为null没有前驱属性( Cannot read property 'prior' of null)
//双向链表的建立
function createDulLinkList(arr){//头插法
	var current=this.head;);//
	for(var i=arr.length-1;i>=0;i--){
		var p=new DulNode(arr[i]同时引用了同一个内存
		if(current.next){
			current.next.prior=p;//
		}
		p.next=current.next;
		p.prior=current;
		current.next=p;
	}

}
function display(){
	var current=this.head.next;
	var result=[];
	while(current){
		result.push(current.val);
		current=current.next;
	}
	console.log(result);

}
//test:
var dulLink=new DulLinkList();
dulLink.createDulLinkList([1,2,3,4]);
dulLink.display();
dulLink.DulLinkDelete(2);
dulLink.display();
dulLink.DulLinkDelete(4);
dulLink.display();*/
//双向循环链表
/*function CirNode(val){
	this.val=val;
	this.prior=null;
	this.next=null;
}
function CirDulLinkList(){
	this.head=new CirNode("head");
	this.head.prior=this.head;
	this.head.next=this.head;
	this.createCirDulLinkList=createCirDulLinkList;
	this.display=display;
}
function createCirDulLinkList(arr){//头插法
	var current=this.head;
	for(var i=arr.length-1;i>=0;i--){
		var p=new CirNode(arr[i]);
		current.next.prior=p;//不要忘了
		p.next=current.next;
		p.prior=current;
		current.next=p;
	}

}
function display(){
	var result=[];
	var current=this.head.next;
    while(current!=this.head){
    	result.push(current.val);
    	current=current.next;
    }
    console.log(result);
}
//test:
var cirDulList=new CirDulLinkList();
cirDulList.createCirDulLinkList([1,2,3,4]);
cirDulList.display();*/
//链表的应用
//将一个有序链表la和lb归并成一个有序表，要求不另设空间
/*function mergeList(la,lb){
	var p=la.next;
	var q=lb.next;
	var t=la;
	while(p&&q){
		if(p.val<=q.val){
			t.next=p;
			t=t.next;
			p=p.next;
		}
		else{
			t.next=q;
			t=t.next;
			q=q.next;
		}
	}
	while(p){
		t.next=p;
		t=t.next;
		p=p.next;
	}
	while(q){
		t.next=q;
		t=t.next;
		q=q.next;
	}
	lb=null;//释放lb的空间
}
//test:
var la=new List();
la.createList([1,3,5]);
la.display();
var lb=new List();
lb.createList([2,4,6]);
lb.display();
mergeList(la.head,lb.head);
la.display();*/

//设L是带头结点的单链表指针，试编写算法，按递增次序输出单链表中各节点的数据元素，并释放节点所占的存储空间。
//要求不允许使用数组作为辅助空间
/*function deleteMin(l){
	if(!l.next){
		return false;
	}
	var pre,p;
	while(l.next){//直到链表为空
		 pre=l.next;//工作指针
         p=l;//最小值的前驱指针
	while(pre.next){
		if(pre.next.val<p.next.val){
			p=pre;
		}
		pre=pre.next;
	
	}//找到最小的节点并将它删除
	    var q=p.next;
	    p.next=q.next;
		console.log(q.val);
		q=null;//释放内存
}
  l=null;
}
var l=new List();
l.createList([1,4,3,2]);
l.display();
deleteMin(l.head);
l.display();*/
//在一个递增有序的链表中，有数据相同的元素存在，编写算法删去数据相同的节点，使链表不在有重复的数据元素
function deleteSame(l){
	var pre=l.next;//工作指针的前一个节点
	var p=l.next.next;//工作指针
	var q;
	while(p!=null){
		if(pre.val===p.val){//相等的话只把工作指针后移并去掉相等的
			q=p;
			pre.next=q.next;
			p=p.next;
			q=null;
		}
		else{//不相等同时向后移
			pre=pre.next;
			p=pre.next;
		}

	}
}
//test:
var l=new List();
l.createList([1,1,2,3,3]);
l.display();
deleteSame(l.head);
l.display();

//dulLink.DulLinkDelete();
/*var obj={
	val:"object"
};
	obj.next={
		val:"2",
		next:"6"
	};
function del(obj){
	if(obj.next){
		obj.next=null;
	}
}
del(obj);
console.log(obj.next);
function display(arr){
	console.log(arr);
}
display([1,2,3,4]);


function foo(){
	var obj={
		a:3,
		b:6
	}
	return obj;
}
var obj=foo();
console.log(obj);*/


























































































































                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           






























































































































































































