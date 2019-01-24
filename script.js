
function run(){

    var tigger = new Tiger("Tigger","meat");
    tigger.eat("meat");
    //tigger.eat("kibble");

    var pooh = new Bear("Pooh","fish");
    pooh.eat("fish");
    pooh.eat("meat");

    var unicorn = new Unicorn("Unicorn","marshmallows");
    unicorn.eat("fish");
    unicorn.eat("meat");

    var giraffes = new Giraffes("Giraffes","leaves");
    giraffes.eat("fish");
    giraffes.eat("meat");

    var bee = new Bee("Bee","leaves");
    bee.eat("fish");
    bee.eat("meat");


}

class Animal {

    constructor(tName, tfavfood) {
        this.name=tName;
        this.favoriteFood = tfavfood;
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





class Tiger extends Animal {

    constructor(tName) {
        super("Tiger");
        this.name=tName;
        this.favoriteFood = "meat";
    }



}





class Bear extends Animal{

    constructor(tName, tfavfood) {
        super("Bear");
        this.name=tName;
        this.favoriteFood = tfavfood;
    }

    sleep(){
        console.log(this.name +" hibernates for 4 months");
    }

    /*eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more "+ food);
   }*/

}








class Unicorn extends Animal{

    constructor(tName, tfavfood) {
        super("Unicorn");
        this.name=tName;
        this.favoriteFood = tfavfood;
    }

    sleep(){
        console.log(this.name +" sleeps in a cloud");
    }

    /*eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more "+ food);
   }*/

}






class Giraffes extends Animal{

    constructor(tName, tfavfood) {
        super("Giraffes");
        this.name=tName;
        this.favoriteFood = tfavfood;
    }

    sleep(){
        console.log(this.name +" sleeps in a cloud");
    }

    eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more leaves");
   }

}






class Bee extends Animal{

    constructor(tName, tfavfood) {
        super("Bee");
        this.name=tName;
        this.favoriteFood = tfavfood;
    }

    sleep(){
        console.log(this.name +" sleeps in a cloud");
    }

    /*eat(food){
        console.log(this.name+ " eats " +food);
        food!=this.favoriteFood ?this.sleep():   console.log("YUM!!! "+this.name+" wants more "+ food);
   }*/

}

