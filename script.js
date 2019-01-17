
function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");

}

class Tiger {

    constructor(tName) {
        this.name=tName;
        this.favoriteFood = "meat";
    }
    //method #1
   sleep(){
        console.log(this.name +" sleeps for 8 hours");
    }

    //method #2
    eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more "+ food);
    }

}

class 