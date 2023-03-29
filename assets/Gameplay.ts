import { _decorator, Component, Node, game, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Gameplay")
export class Gameplay extends Component {
  start() {}
  onLoad() {
    console.log("Persist node addded");
    // this.node.parent = null;
    director.addPersistRootNode(this.node);
  }

  update(deltaTime: number) {}
}
