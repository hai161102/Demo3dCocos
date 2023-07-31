import { _decorator, Component, EventKeyboard, EventTouch, input, Input, Node } from 'cc';
import { Base } from './Base';
const { ccclass, property } = _decorator;

@ccclass('BaseScene')
export abstract class BaseScene extends Base {


    protected onLoad(): void {
        super.onLoad();
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

    protected onDestroy(): void {
        super.onDestroy();
    }


}


