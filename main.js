function _main(canvasDom) {
    let canvas = document.querySelector(canvasDom);
    let images = {
        ball:     'images/ball.png',     //球
        block:    'images/block.png',    //背景
        box:      'images/box.png',      //箱子
        down:     'images/down.png',     //向下小人
        left:     'images/left.png',     //向左小人
        right:    'images/right.png',    //向右小人
        up:       'images/up.png',       //向上小人
        wall:     'images/wall.png',     //墙
        boxBall:  'images/boxBall.png',  //归位的箱子
        renew  :  'images/renew.png',    //复位按钮
        downKey:  'images/downKey.png',  //向下按钮
        leftKey:  'images/leftKey.png',  //向左按钮
        rightKey: 'images/rightKey.png', //向右按钮
        upKey:    'images/upKey.png',    //向上按钮
        back:     'images/back.png',     //返回主页面按钮
        main:     'images/main.png'      //主页面
    };
    let game = new Game(canvas);
    initImages(images, game);
}
function initImages(images, game) {
    // 预加载所有图片
    let loads = [];
    let imgNames = Object.keys(images);
    for (let i = 0; i < imgNames.length; i++){
        let name = imgNames[i];
        let path = images[name];
        let img = new Image();
        img.src = path;
        img.onload = function (){
            images[name] = img;
            loads.push(1);
            if (loads.length === imgNames.length){
                game.images = images;
                game.init();
            }
        }
    }
}