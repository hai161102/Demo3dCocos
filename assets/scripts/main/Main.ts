import { _decorator, Component, instantiate, Prefab } from 'cc';
import { BasePrefab } from '../base/BasePrefab';
import { LoadingPrefab } from '../prefabs/LoadingPrefab';
const { ccclass, property } = _decorator;

@ccclass('Main')
export class Main extends Component {

    selfPrefab : Prefab;

    @property(Prefab)
    loadingPrefab : Prefab;

    @property(Prefab)
    mainPrefab : Prefab;

    protected onLoad(): void {
        this.selfPrefab = this.loadingPrefab;
        this.loadPrefab();
    }
    loadPrefab(...data : any) {
        let node = instantiate(this.selfPrefab);
        this.node.removeAllChildren();
        node.getComponent(BasePrefab).init(this, ...data);
        this.node.addChild(node);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
}


