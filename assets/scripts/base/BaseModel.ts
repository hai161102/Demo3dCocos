import { _decorator, Component, SkeletalAnimation } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BaseModel')
export abstract class BaseModel extends Component {

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


