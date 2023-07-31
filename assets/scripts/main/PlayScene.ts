import { __private, _decorator, AnimationClip, Camera, Component, EventKeyboard, EventTouch, input, Input, instantiate, KeyCode, Light, Node, Prefab, v3, Vec3 } from 'cc';
import { BaseScene } from '../base/BaseScene';
import { Actor } from '../models/Actor';
import { SocketUtils } from '../utils/SocketUtils';
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
        // socket.on('connected', () => {
        //     console.log('User', this.node.uuid, 'connected');
        // });
        let str : string = `Hello Server!`;
        SocketUtils.instance.send('data', this.node.uuid + ": Hello Server");
        SocketUtils.instance.on('USER_IN', (e) => {
            console.log(e);
        });
        this.actors = [];
        for (let index = 0; index < 5; index++) {
            let actorNode = instantiate(this.actorPrefab);
            actorNode.setPosition(Math.floor(Math.random() * 10), 0, Math.floor(Math.random() * 10));
            this.actors.push(actorNode.getComponent(Actor));
            this.node.addChild(actorNode);
        }

    }

    start() {

    }

    update(deltaTime: number) {
        // this.camera.node.setPosition(this.actor.node.position.x, this.actor.node.position.y + 1.5, this.actor.node.position.z - 4);
        // this.camera.node.updateWorldTransform();
    }

    onKeyDown(event: EventKeyboard): void {
        this.actors[0].onKeyDown(event);
    }

    onKeyUp(event: EventKeyboard): void {
        this.actors[0].onKeyUp(event);
    }

    protected onDestroy(): void {
        super.onDestroy();
    }
}


