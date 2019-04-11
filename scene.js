class Scene {
    constructor (game){
        this.game = game;
        this.maps = Scene.initMaps(window.boxMaps);
    }
    static initMaps(maps){
        let ret = [];
        for (let i = 0; i < maps.length; i++){
            ret[i] = [];
            for (let j = 0; j < maps[i].length; j++){
                ret[i][j] = [];
                for (let k = 0; k < maps[i][j].length; k++){
                    ret[i][j][k] = maps[i][j][k];
                }
            }
        }
        return ret;
    }
    init (){}
    drawMap (){}
    drawItem (x, y, item){
        let w = 40;
        let img = this.game.images[item];
        let context = this.game.context;
        context.drawImage(img, x * w, y * w, w, w);
    }
}