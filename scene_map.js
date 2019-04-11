class SceneMain extends Scene{
    constructor (game){
        super(game);
        this.level = 1;
        this.man = new Man('down');
        this.paused = false;
        // 根据键盘按键响应事件
        this.keydown = (event) => {
            let k = event.key;
            if (!this.paused){
                if (k === 'ArrowUp'){
                    this.man.moveUp(this.map);
                    this.refresh(this.map, this.level)
                }
                if (k === 'ArrowDown'){
                    this.man.moveDown(this.map);
                    this.refresh(this.map, this.level)
                }
                if (k === 'ArrowLeft'){
                    this.man.moveLeft(this.map);
                    this.refresh(this.map, this.level)
                }
                if (k === 'ArrowRight'){
                    this.man.moveRight(this.map);
                    this.refresh(this.map, this.level)
                }
                if (k === 'r'){
                    this.loadLevel (this.level)
                }
            }
        };
        // 根据鼠标点击位置响应事件
        this.click = (event) => {
            let posX = event.offsetX;
            let posY = event.offsetY;
            if (!this.paused) {
                if (posX > 360 && posX < 400 && posY > 320 && posY < 360) {
                    this.loadLevel(this.level);
                }
                if (posX > 320 && posX < 360 && posY > 320 && posY < 360) {
                    this.man.moveUp(this.map);
                    this.refresh(this.map, this.level);
                }
                if (posX > 320 && posX < 360 && posY > 360 && posY < 400) {
                    this.man.moveDown(this.map);
                    this.refresh(this.map, this.level);
                }
                if (posX > 280 && posX < 320 && posY > 360 && posY < 400) {
                    this.man.moveLeft(this.map);
                    this.refresh(this.map, this.level);
                }
                if (posX > 360 && posX < 400 && posY > 360 && posY < 400) {
                    this.man.moveRight(this.map);
                    this.refresh(this.map, this.level);
                }
                if (posX > 280 && posX < 320 && posY > 320 && posY < 360) {
                    let scene = this.game.sceneFactory.getSceneTitleInstance();
                    scene.init();
                }
            }
        }
    }
    // 场景初始化
    init (number){
        this.level = number;
        this.loadLevel(this.level);
        const cvs = document.getElementById('canvas');
        cvs.addEventListener('click', this.click);
        window.addEventListener('keydown', this.keydown);
    }
    // 加载指定关卡信息
    loadLevel (level){
        let canvas = this.game.canvas;
        this.game.context.clearRect(0, 0, canvas.width, canvas.height);
        level--;
        this.map = [];
        for (let i = 0; i < this.maps[level].length; i++){
            this.map[i] = [];
            for (let j = 0; j < this.maps[level][i].length; j++){
                this.map[i][j] = this.maps[level][i][j];
            }
        }
        this.drawMap (this.map);
    }
    // 根据地图信息加载地图元素
    drawMap (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                this.drawItem(j, i, 'block');
                if (map[i][j] === MAP_CODE.wall)    this.drawItem(j, i, 'wall');
                if (map[i][j] === MAP_CODE.box)     this.drawItem(j, i, 'box');
                if (map[i][j] === MAP_CODE.ball)    this.drawItem(j, i, 'ball');
                if (map[i][j] === MAP_CODE.up)      this.drawItem(j, i, 'upKey');
                if (map[i][j] === MAP_CODE.down)    this.drawItem(j, i, 'downKey');
                if (map[i][j] === MAP_CODE.right)   this.drawItem(j, i, 'rightKey');
                if (map[i][j] === MAP_CODE.left)    this.drawItem(j, i, 'leftKey');
                if (map[i][j] === MAP_CODE.renew)   this.drawItem(j, i, 'renew');
                if (map[i][j] === MAP_CODE.back)    this.drawItem(j, i, 'back');
                if (map[i][j] === MAP_CODE.boxBall) this.drawItem(j, i, 'boxBall');
                if (map[i][j] === MAP_CODE.man){
                    this.man.x = i;
                    this.man.y = j;
                    this.drawItem(j, i, this.man.direction);
                }
                if (map[i][j] === MAP_CODE.manBall){
                    this.man.x = i;
                    this.man.y = j;
                    this.drawItem(j, i, 'ball');
                    this.drawItem(j, i, this.man.direction);
                }
            }
        }
        let canvas = this.game.canvas;
        let context = this.game.context;
        context.font = '20px "Microsoft YaHei"';
        context.fillStyle = '#000000';
        context.textAlign = 'center';
        let text = "第" + this.level + "关";
        context.fillText(text, canvas.width / 2, canvas.height / 14);
    }
    // 根据地图元素完成绘制
    drawItem (x, y, item){
        let w = 40;
        let img = this.game.images[item];
        let context = this.game.context;
        context.drawImage(img, x * w, y * w, w, w)
    }
    // 更新地图
    refresh (map){
        let canvas = this.game.canvas;
        let ctx = this.game.context;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.drawMap(map);
        // 判断是否胜利，如果胜利就跳入下一关
        if (SceneMain.isWin(map)){
            this.paused = true;
            setTimeout(() => {
                this.nextLevel();
                this.paused = false
            }, 500);
        }
        // 未通关的情况下检测是否已经失败，如果失败给予提示
        else{
            if (SceneMain.isLose(map)){
                this.paused = true;
                setTimeout(() => {
                    this.paused = false;
                    alert("游戏失败，即将为您复位本关");
                    this.loadLevel(this.level);
                }, 100);
            }

        }
    }
    //判断是否失败函数
    static isLose (map){
        let flag = 3;
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                if (map[i][j] === MAP_CODE.box || map[i][j] === MAP_CODE.boxBall){
                    let shang = map[i][j - 1];
                    let xia   = map[i][j + 1];
                    let zuo   = map[i - 1][j];
                    let you   = map[i + 1][j];
                    let left_flag = SceneMain.helper(zuo, you);
                    let up_flag   = SceneMain.helper(shang, xia);
                    if(left_flag === false && up_flag === false) flag--;
                }
            }
        }
        return flag === 0;
    }
    // 判断是否失败辅助函数
    static helper(first, second) {
        let flag_one = true;
        let flag_two = true;
        if(first  === MAP_CODE.wall || first  === MAP_CODE.box || first  === MAP_CODE.boxBall) flag_one = false;
        if(second === MAP_CODE.wall || second === MAP_CODE.box || second === MAP_CODE.boxBall) flag_two = false;
        return !(flag_one === false || flag_two === false);
    }
    // 判断是否成功函数
    static isWin (map){
        for (let i = 0; i < map.length; i++){
            for (let j = 0; j < map[i].length; j++){
                if (map[i][j] === MAP_CODE.ball || map[i][j] === MAP_CODE.manBall) return false;
            }
        }
        return true;
    }
    // 判断下一关情况
    nextLevel (){
        this.level++;
        if (this.level > this.maps.length){
            alert('已完成最后一关，将返回初始页面');
            this.level = 1;
            let scene = this.game.sceneFactory.getSceneTitleInstance();
            this.loadScene(scene);
            return;
        }
        this.loadLevel(this.level);
    }
    // 去除页面监听
    loadScene (scene){
        const cvs = document.getElementById('canvas');
        cvs.removeEventListener('click', this.click);
        window.removeEventListener('keydown', this.keydown);
        scene.init()
    }
}