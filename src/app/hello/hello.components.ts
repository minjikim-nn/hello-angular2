import { Component } from '@angular/core';

@Component({
    selector:'hello',
    templateUrl: './hello.component.html',
    styleUrls: ['./hello.component.css']
})

export class HelloComponent{
    fontColor = 'blue';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello, Angular! 값 가져오기 / 이렇게 쓰는거구만'

    sayMessage(){
        // 버튼 클릭시 message
        alert(this.message);
    }
}

