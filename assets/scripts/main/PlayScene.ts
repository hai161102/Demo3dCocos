import { __private, _decorator, AnimationClip, Camera, Component, EventKeyboard, EventTouch, input, Input, instantiate, KeyCode, Light, Node, Prefab, v3, Vec3 } from 'cc';
import { BaseScene } from '../base/BaseScene';
import { Actor } from '../models/Actor';
import { SocketUtils, TAG } from '../utils/SocketUtils';
const { ccclass, property } = _decorator;

@ccclass('PlayScene')
export class PlayScene extends BaseScene {


    static sceneName: string = 'playscene';
    @property(Light)
    light: Light;
    @property(Camera)
    camera: Camera;
    @property(Prefab)
    actorPrefab: Prefab;

    private actors: Actor[];

    protected onLoad(): void {
        super.onLoad();
        this.actors = [];
        this.addNode();
        SocketUtils.instance.socket.on(TAG.USER_IN, (...args: any[]) => {
            console.log(TAG.USER_IN, args);
        });
    }
    addNode(data?: any) {
        let actorNode = instantiate(this.actorPrefab);
        if (data) {
            actorNode.setPosition(data.position.x, data.position.y, data.position.z);
        }
        else { actorNode.setPosition(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10)); }

        this.actors.push(actorNode.getComponent(Actor));
        this.node.addChild(actorNode);
    }

    start() {

    }

    update(deltaTime: number) {
        this.camera.node.setPosition(this.actors[0].node.position.x, this.camera.node.position.y, this.actors[0].node.position.z + 8);
        this.camera.node.updateWorldTransform();
    }

    onKeyDown(event: EventKeyboard): void {
        this.actors[0].onKeyDown(event);
    }

    onKeyUp(event: EventKeyboard): void {
        this.actors[0].onKeyUp(event);
    }

    protected onDestroy(): void {
        super.onDestroy();
        SocketUtils.instance.socket.disconnect();
    }
}


