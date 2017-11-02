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