var arr=[];
var n1=0;
var n2=1;
arr.push(n1,n2);

var c=prompt("Enter the length :");
for(var i=2;i<c;i++){
    var temp=n1+n2;
    arr.push(temp);
    n1=n2;
    n2=temp;
}
