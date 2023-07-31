import { _decorator, Component, EventKeyboard, EventTouch, SkeletalAnimation } from 'cc';
import { Base } from './Base';
const { ccclass, property } = _decorator;

@ccclass('BaseModel')
export abstract class BaseModel extends Base {

    protected animation : SkeletalAnimation;

    public init(...data : any) : void {

    }

    protected onLoad(): void {
        if (this.node.getComponent(SkeletalAnimation) !== undefined) {
            this.animation = this.node.getComponent(SkeletalAnimation);
        }
        
    }

    start() {

    }

    update(deltaTime: number) {
        
    }

}


