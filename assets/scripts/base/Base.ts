import { _decorator, Component, EventKeyboard, EventTouch, input, Input, Node } from 'cc';

const { ccclass, property } = _decorator;


@ccclass('Base')
export abstract class Base extends Component {


    protected onLoad(): void {

        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.on(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.on(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.on(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
        input.off(Input.EventType.TOUCH_START, this.onTouchStart, this);
        input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this);
        input.off(Input.EventType.TOUCH_END, this.onTouchEnd, this);
        input.off(Input.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
    }

    onKeyDown(event: EventKeyboard): void{

    }
    onKeyUp(event: EventKeyboard): void{

    }
    onTouchStart(event: EventTouch): void{

    }
    onTouchEnd(event: EventTouch): void{

    }
    onTouchMove(event: EventTouch): void {

    }
    onTouchCancel(event: EventTouch): void {
        
    }
}