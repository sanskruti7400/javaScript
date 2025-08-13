function houseKeeper(name,age,work){
    this.name=name;
    this.age=age;
    this.work=work;

    this.clean =function(){
        alert("Cleaning in progres....");
    };
}


var h1=new houseKeeper("p",21,"clean");
var h2=new houseKeeper("s",20,"bath");

h1.clean();
