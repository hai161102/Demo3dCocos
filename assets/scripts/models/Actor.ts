import { _decorator, AnimationClip, EventKeyboard, Input, input, KeyCode } from 'cc';
import { BaseModel } from '../base/BaseModel';
const { ccclass, property } = _decorator;

@ccclass('Actor')
export class Actor extends BaseModel {

    protected onLoad(): void {
        super.onLoad();
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.on(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
    start() {

    }

    update(deltaTime: number) {
        this.node.position.set(this.node.position.x, this.node.position.y, this.node.position.z + 1 * deltaTime);
        this.node.updateWorldTransform();
        
    }
    
    private onKeyDown(event: EventKeyboard) : void {
        if (event.keyCode == KeyCode.KEY_W) {
            console.log("page up");
            if (this.animation !== undefined && this.animation != null) {
                this.animation.clips.forEach((clip : AnimationClip) => {
                    if (clip.name.includes('walking')) {
                        this.animation.defaultClip = clip;
                        this.animation.play();
                    }
                 }) 
            }
        }
    }

    private onKeyUp(event: EventKeyboard) : void {
        if (event.keyCode == KeyCode.KEY_W) {
            console.log("page up");
            if (this.animation !== undefined && this.animation != null) {
                this.animation.clips.forEach((clip : AnimationClip) => {
                    if (clip.name.includes('idle')) {
                        this.animation.defaultClip = clip;
                        this.animation.play();
                    }
                 }) 
            }
        }
    }

    protected onDestroy(): void {
        input.off(Input.EventType.KEY_DOWN, this.onKeyDown, this);
        input.off(Input.EventType.KEY_UP, this.onKeyUp, this);
    }
}


