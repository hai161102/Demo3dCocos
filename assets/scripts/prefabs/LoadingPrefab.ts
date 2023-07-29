import { _decorator } from 'cc';
import { BasePrefab } from '../base/BasePrefab';
import { Main } from '../main/Main';
const { ccclass, property } = _decorator;

@ccclass('LoadingPrefab')
export class LoadingPrefab extends BasePrefab {

    public init(sence: Main, ...data: any): void {
        super.init(sence, ...data);
    }

    protected onLoad(): void {
        console.log('Data loading...');
        setTimeout(() => {
            this.scene.selfPrefab = this.scene.mainPrefab;
            this.scene.loadPrefab();

        }, 5000);
    }
    start() {

    }

    update(deltaTime: number) {

    }
}


