
function run(){

    var tigger = new Tiger("Tigger");
    tigger.eat("meat");
    tigger.eat("kibble");

    var pooh = new Bear("Pooh");
    pooh.eat("fish");
    pooh.eat("meat");


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

class Bear{

    constructor(oName) {
        this.name=oName;
        this.favoriteFood = "fish";
    }



    //method #1
    /*sleep(){
        console.log(this.name +" hibernates for 4 months");
    }

    //method #2
   // eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more "+ food);
   } */
}