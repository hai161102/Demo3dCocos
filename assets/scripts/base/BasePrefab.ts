import { _decorator, Component } from 'cc';
import { Main } from '../main/Main';
const { ccclass, property } = _decorator;

@ccclass('BasePrefab')
export class BasePrefab extends Component {

    protected scene : Main = null;

    public init(sence : Main, ...data : any) : void {
        this.scene = sence;
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


