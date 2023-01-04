// 많이 보이게 될
class Car{
    constructor(public age: number){

    }
}
let car = new Car(10);
console.log(car.age);


class Parent{
    // public
    public one = 10;
    // 상속된 객체 사용 가능
    protected two = 20;

    private three = 30;
    constructor(){
        this.one
        this.two
        this.three
    }
}

class Child extends Parent{
    constructor(){
        super();
        // three 는 접근 x, two는 접근 가능
        this.one
        this.two
    }
}

let pr = new Parent();

class App extends Parent{
    // typescript의 기능이 더 많음,
}

/*
이렇게 컴파일됨
var App = (function(){
    function App(){

    }
    return App;
}())

*/
