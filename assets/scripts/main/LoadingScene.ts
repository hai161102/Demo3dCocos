import { _decorator, Component, director, EventKeyboard, EventTouch, Node } from 'cc';
import { BaseScene } from '../base/BaseScene';
import { PlayScene } from './PlayScene';
import { Base } from '../base/Base';
import { SocketUtils } from '../utils/SocketUtils';
const { ccclass, property } = _decorator;


@ccclass('LoadingScene')
export class LoadingScene extends BaseScene {

    static sceneName : string = 'loadingscene';

    protected onLoad(): void {
        super.onLoad()
        setTimeout(() => {
            director.loadScene(PlayScene.sceneName);
        }, 2000);
    }

    start() {

    }

    update(deltaTime: number) {
        
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
}


