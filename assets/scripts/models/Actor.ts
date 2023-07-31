import { _decorator, AnimationClip, EventKeyboard, EventTouch, Input, input, KeyCode, NodeSpace, v3, Vec3 } from 'cc';
import { BaseModel } from '../base/BaseModel';
const { ccclass, property } = _decorator;

@ccclass('Actor')
export class Actor extends BaseModel {
    
    

    private _isFront = false;

    protected onLoad(): void {
        super.onLoad();
        
    }
    start() {

    }

    update(deltaTime: number) {
        if (this._isFront) {
            this.node.setPosition(this.node.position.x, this.node.position.y, this.node.position.z + deltaTime);
        }
    }

    onKeyDown(event: EventKeyboard): void {
        if (event.keyCode == KeyCode.KEY_W) {
            this._isFront = true;
            if (this.animation !== undefined && this.animation != null) {
                this.animation.clips.forEach((clip: AnimationClip) => {
                    if (clip.name.includes('walking')) {
                        this.animation.defaultClip = clip;
                        this.animation.play();
                    }
                })
            }
            

        }
    }

    onKeyUp(event: EventKeyboard): void {
        if (event.keyCode == KeyCode.KEY_W) {
            this._isFront = false;
            console.log("page up");
            if (this.animation !== undefined && this.animation != null) {
                this.animation.clips.forEach((clip: AnimationClip) => {
                    if (clip.name.includes('idle')) {
                        this.animation.defaultClip = clip;
                        this.animation.play();
                    }
                })
            }
        }
    }

    protected onDestroy(): void {
    }

    onTouchStart(e: EventTouch) {

    }
    onTouchEnd(e: EventTouch) {

    }

    onTouchMove(event: EventTouch): void {
    }
    onTouchCancel(event: EventTouch): void {
    }
}


