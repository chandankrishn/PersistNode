import { _decorator, Component, Node, director } from "cc";
const { ccclass, property } = _decorator;

@ccclass("ChangeScene")
export class ChangeScene extends Component {
  start() {}
  changeScene() {
    director.loadScene("Demo");  
}
updateScene(){
    director.loadScene("test")
}

  update(deltaTime: number) {}
}
