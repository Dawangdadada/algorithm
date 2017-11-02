function TreeNode(val){
	this.val=val;
	this.left=null;
	this.right=null;
}
//二叉树遍历的递归算法
//1.先序遍历
function Tree(val){
	this.val=val;
	this.left=null;
	this.right=null;
}
function preOrderTraverse(t){
	if(t){
		console.log(t.val);
		preOrderTraverse(t.left);
		preOrderTraverse(t.right);
	}
}
//2.中序遍历
function inOrderTraverse(t){
	if(t){
		inOrderTraverse(t.left);
		console.log(t.val);
		inOrderTraverse(t.right);

	}
}
//3.后序遍历
function postOrderTraverse(t){
	if(t){
		postOrderTraverse(t.left);
		postOrderTraverse(t.right);
		postOrderTraverse(t.val);

	}

}
//二叉树遍历的非递归算法


//层次遍历算法
function LayerOrder(t){
	var res=[];
	var p;
	res.push(t);
	while(res.length>0){
      p=res.shift();
      console.log(p.val);
      if(p.left){
      res.push(p.left);
  	}
  	if(p.right){
      res.push(p.right);
  	}
	}
}
//遍历算法
//1.统计二叉树中叶子节点的个数
function countLeaf(T,count){
	if(T){
		if((!T.left)&&(!T.right)){
			count++;
		}
		countLeaf(T.left,count);
		countLeaf(T.right,count);
	}
}
//2.求二叉树的深度
//思路：左,右子数深度的最大值加1
function deepth(T){
	var depthLeft,depthRight, depthVal;
	if(!T){
		depthVal=0;
	}
	else{
		depthLeft=deepth(T.left);
		deepthRight=deepth(T.right);
		depthVal=(deepthRight>depthLeft?deepthRight:depthLeft)+1;
	}
	return depthVal;

}
//3.复制二叉树
//思路:生成一个二叉树节点,其数据域为item,左指针为lptr,右指针为rptr
function getTreeNode(item,left,right){
	var 
}

