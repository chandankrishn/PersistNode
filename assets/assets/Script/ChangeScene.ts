import { _decorator, Component, Node, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ChangeScene")
export class ChangeScene extends Component {
  start() {}
  onLoad() {
    let persistNode = director.getScene().getChildByName("Perisit");
    console.log("scene and children", persistNode);
  }
  changeScene() {
    director.loadScene("Demo");
  }
  updateScene() {
    director.loadScene("test");
  }

  update(deltaTime: number) {}
}
