import { Component } from '@angular/core';

@Component({
    selector: 'hello-world',
    templateUrl: './hello-world.component.html'
})

export class HelloWorldComponent {
    message = '메세지 기본값';
    canEdit = false;

    onEditClick() {
        // 클릭시
        this.canEdit = !this.canEdit;

        if(this.canEdit){
            this.message = 'ture 입니다'
        }else{
            this.message = 'false 입니다'
        }
    }
}
