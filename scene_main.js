class SceneTitle extends Scene{
    constructor (game){
        super(game);
        this.paused = false;
        this.click = (event) => {
            // 根据点击位置判断选择关卡
            let posX = event.offsetX;
            let posY = event.offsetY;
            let levelNumber = SceneTitle.levelJudge(posX, posY);
            if(!this.paused){
                let scene = this.game.sceneFactory.getSceneMainInstance();
                if(levelNumber !== 0) this.loadScene(scene, levelNumber);
            }
        }
    }
    // 场景初始化
    init (){
        this.load();
        const cvs = document.getElementById('canvas');
        cvs.addEventListener('click', this.click)
    }
    // 加载初始页面
    load (){
        let canvas = this.game.canvas;
        this.game.context.clearRect(0, 0, canvas.width, canvas.height);
        this.drawMap ()
    }
    // 绘制初始页面背景图片
    drawMap (){
        let img = this.game.images['main'];
        let context = this.game.context;
        context.drawImage(img, 0, 0, 400, 400)
    }
    // 载入选定关卡
    loadScene (scene, number) {
        const cvs = document.getElementById('canvas');
        cvs.removeEventListener('click', this.click);
        scene.init(number)
    }
    // 判断关卡数
    static levelJudge(posX, posY){
        if(posX > 55 && posX < 95){
            if(posY > 155 && posY < 195) return 1;
            if(posY > 220 && posY < 260) return 5;
            if(posY > 290 && posY < 330) return 9;
        }
        if(posX > 140 && posX < 180){
            if(posY > 155 && posY < 195) return 2;
            if(posY > 220 && posY < 260) return 6;
            if(posY > 290 && posY < 330) return 10;
        }
        if(posX > 225 && posX < 265){
            if(posY > 155 && posY < 195) return 3;
            if(posY > 220 && posY < 260) return 7;
            if(posY > 290 && posY < 330) return 11;
        }
        if(posX > 305 && posX < 345){
            if(posY > 155 && posY < 195) return 4;
            if(posY > 220 && posY < 260) return 8;
            if(posY > 290 && posY < 330) return 12;
        }
        return 0;
    }

}