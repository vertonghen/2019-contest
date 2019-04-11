class Man{
    constructor(){
        this.direction = 'down';
        this.x = 0;
        this.y = 0;
    }
    // 向上方移动
    moveUp (map){
        let x = this.x;
        let y = this.y;
        this.direction = 'up';
        let b = map[x - 1][y];
        switch (b) {
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x - 2][y] !== MAP_CODE.wall && map[x - 2][y] !== MAP_CODE.box && map[x - 2][y] !== MAP_CODE.boxBall){
                    this.x--;
                    // man处于ball的位置
                    if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                    else map[x][y] = MAP_CODE.block;
                    // 空位置由ball变man
                    if(map[x - 1][y] === MAP_CODE.ball || map[x - 1][y] === MAP_CODE.boxBall) map[x - 1][y] = MAP_CODE.manBall;
                    else map[x - 1][y] = MAP_CODE.man;
                    // box移动至原本是ball的位置
                    if(map[x - 2][y] === MAP_CODE.ball) map[x - 2][y] = MAP_CODE.boxBall;
                    else map[x - 2][y] = MAP_CODE.box;
                }
                break;
            case MAP_CODE.wall:
                break;
            case MAP_CODE.block:
                this.x--;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x - 1][y] = MAP_CODE.man;
                break;
            case MAP_CODE.ball:
                this.x--;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x - 1][y] = MAP_CODE.manBall;
                break;
            default:
                alert('向上移动出现错误，请刷新重试');
                break;
        }
    }
    // 向下方移动
    moveDown (map){
        let x = this.x;
        let y = this.y;
        this.direction = 'down';
        let b = map[x + 1][y];
        switch (b) {
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x + 2][y] !== MAP_CODE.wall && map[x + 2][y] !== MAP_CODE.box && map[x + 2][y] !== MAP_CODE.boxBall){
                    this.x++;
                    // man处于ball的位置
                    if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                    else map[x][y] = MAP_CODE.block;
                    // 空位置由ball变man
                    if(map[x + 1][y] === MAP_CODE.ball || map[x + 1][y] === MAP_CODE.boxBall) map[x + 1][y] = MAP_CODE.manBall;
                    else map[x + 1][y] = MAP_CODE.man;
                    // box移动至原本是ball的位置
                    if(map[x + 2][y] === MAP_CODE.ball) map[x + 2][y] = MAP_CODE.boxBall;
                    else map[x + 2][y] = MAP_CODE.box;
                }
                break;
            case MAP_CODE.wall:
                break;
            case MAP_CODE.block:
                this.x++;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x + 1][y] = MAP_CODE.man;
                break;
            case MAP_CODE.ball:
                this.x++;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x + 1][y] = MAP_CODE.manBall;
                break;
            default:
                alert('向下移动出现错误，请刷新重试');
                break;
        }
    }
    // 向左侧移动
    moveLeft (map){
        let x = this.x;
        let y = this.y;
        let b = map[x][y - 1];
        this.direction = 'left';
        switch (b) {
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x][y - 2] !== MAP_CODE.wall && map[x][y - 2] !== MAP_CODE.box && map[x][y - 2] !== MAP_CODE.boxBall){
                    this.y--;
                    // man处于ball的位置
                    if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                    else map[x][y] = MAP_CODE.block;
                    // 空位置由ball变man
                    if(map[x][y - 1] === MAP_CODE.ball || map[x][y - 1] === MAP_CODE.boxBall) map[x][y - 1] = MAP_CODE.manBall;
                    else map[x][y - 1] = MAP_CODE.man;
                    // box移动至原本是ball的位置
                    if(map[x][y - 2] === MAP_CODE.ball) map[x][y - 2] = MAP_CODE.boxBall;
                    else map[x][y - 2] = MAP_CODE.box;
                }
                break;
            case MAP_CODE.wall:
                break;
            case MAP_CODE.block:
                this.y--;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x][y - 1] = MAP_CODE.man;
                break;
            case MAP_CODE.ball:
                this.y--;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x][y - 1] = MAP_CODE.manBall;
                break;
            default:
                alert('向左移动出现错误，请刷新重试');
                break;
        }
    }
    // 向右侧移动
    moveRight (map){
        let x = this.x;
        let y = this.y;
        let b = map[x][y + 1];
        this.direction = 'right';
        switch (b) {
            case MAP_CODE.box:
            case MAP_CODE.boxBall:
                if (map[x][y + 2] !== MAP_CODE.wall && map[x][y + 2] !== MAP_CODE.box && map[x][y + 2] !== MAP_CODE.boxBall){
                    this.y++;
                    // man处于ball的位置
                    if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                    else map[x][y] = MAP_CODE.block;
                    // 空位置由ball变man
                    if(map[x][y + 1] === MAP_CODE.ball || map[x][y + 1] === MAP_CODE.boxBall) map[x][y + 1] = MAP_CODE.manBall;
                    else map[x][y + 1] = MAP_CODE.man;
                    // box移动至原本是ball的位置
                    if(map[x][y + 2] === MAP_CODE.ball) map[x][y + 2] = MAP_CODE.boxBall;
                    else map[x][y + 2] = MAP_CODE.box;
                }
                break;
            case MAP_CODE.wall:
                break;
            case MAP_CODE.block:
                this.y++;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x][y + 1] = MAP_CODE.man;
                break;
            case MAP_CODE.ball:
                this.y++;
                if(map[x][y] === MAP_CODE.manBall) map[x][y] = MAP_CODE.ball;
                else map[x][y] = MAP_CODE.block;
                map[x][y + 1] = MAP_CODE.manBall;
                break;
            default:
                alert('向右移动出现错误，请刷新重试');
                break;
        }
    }
}