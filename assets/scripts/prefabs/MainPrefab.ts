import { Camera, Light, _decorator, Node, input, Input, EventKeyboard, KeyCode } from 'cc';
import { BasePrefab } from '../base/BasePrefab';
import { Main } from '../main/Main';
import { Actor } from '../models/Actor';
const { ccclass, property } = _decorator;

@ccclass('MainPrefab')
export class MainPrefab extends BasePrefab {

    @property(Light)
    light: Light;
    @property(Camera)
    camera: Camera;

    @property(Actor)
    actor: Actor;

    public init(sence: Main, ...data: any): void {
        super.init(sence, ...data);
    }

    protected onLoad(): void {
        
    }
    start() {

    }

    update(deltaTime: number) {
        
    }

}


