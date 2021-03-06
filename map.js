const MAP_CODE = {
    block:   1,
    wall:    2,
    box:     3,
    ball:    4,
    man:     5,
    boxBall: 6,
    manBall: 7,
    left:    10,
    down:    11,
    right:   12,
    up:      13,
    renew:   14,
    back:    15
};
window.boxMaps = [
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 4, 2, 1, 1, 1, 1,],
        [1, 1, 1, 2, 3, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 1, 1, 3, 4, 2, 1,],
        [1, 2, 4, 3, 5, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 2, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//1-easy
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [2, 2, 2, 2, 2, 1, 1, 1, 1, 1,],
        [2, 5, 1, 1, 2, 1, 2, 2, 2, 1,],
        [2, 1, 3, 3, 2, 1, 2, 4, 2, 1,],
        [2, 1, 3, 1, 2, 2, 2, 4, 2, 1,],
        [2, 2, 2, 1, 1, 1, 1, 4, 2, 1,],
        [1, 2, 1, 1, 1, 2, 1, 1, 2, 1,],
        [1, 2, 1, 1, 1, 2, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 2, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//2-easy
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 2, 2, 5, 1, 1, 2, 2, 1, 1,],
        [1, 2, 1, 1, 2, 1, 1, 2, 1, 1,],
        [1, 2, 1, 3, 6, 3, 1, 2, 1, 1,],
        [1, 2, 1, 1, 4, 1, 1, 2, 1, 1,],
        [1, 2, 2, 1, 4, 1, 2, 2, 1, 1,],
        [1, 1, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//3-easy
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 1, 1, 1, 1, 1, 2, 2, 1,],
        [1, 2, 1, 1, 1, 4, 4, 1, 2, 1,],
        [1, 2, 1, 3, 3, 3, 5, 1, 2, 1,],
        [1, 2, 1, 1, 2, 1, 4, 1, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//4-easy
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 2, 1, 1, 1, 1, 2, 2, 1,],
        [1, 2, 1, 4, 4, 1, 1, 1, 2, 1,],
        [1, 2, 1, 2, 1, 3, 3, 3, 2, 1,],
        [1, 2, 1, 1, 1, 2, 5, 4, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//5-medium
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 2, 4, 5, 6, 1, 2, 2, 1, 1,],
        [1, 2, 3, 1, 1, 3, 1, 2, 1, 1,],
        [1, 2, 1, 1, 1, 2, 1, 2, 1, 1,],
        [1, 2, 1, 1, 4, 1, 1, 2, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//6-medium
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 2, 5, 1, 4, 4, 2, 1, 1, 1,],
        [1, 2, 1, 2, 3, 1, 2, 2, 1, 1,],
        [1, 2, 1, 2, 1, 1, 1, 2, 1, 1,],
        [1, 2, 1, 1, 3, 2, 1, 2, 1, 1,],
        [1, 2, 1, 1, 6, 1, 1, 2, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//7-medium
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 1, 1, 1, 1,],
        [1, 2, 1, 1, 1, 2, 1, 1, 1, 1,],
        [1, 2, 1, 2, 1, 2, 2, 2, 1, 1,],
        [1, 2, 6, 4, 3, 1, 1, 2, 1, 1,],
        [1, 2, 1, 1, 2, 3, 1, 2, 1, 1,],
        [1, 2, 5, 1, 1, 1, 4, 2, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//8-medium
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 1, 1, 4, 1, 1, 2, 2, 1,],
        [1, 2, 1, 3, 3, 2, 4, 1, 2, 1,],
        [1, 2, 1, 2, 5, 3, 1, 1, 2, 1,],
        [1, 2, 1, 1, 4, 2, 1, 1, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 2, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//9-head
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 2, 2, 4, 1, 1, 2, 2, 2, 1,],
        [1, 2, 1, 1, 2, 1, 3, 5, 2, 1,],
        [1, 2, 1, 1, 2, 1, 2, 1, 2, 1,],
        [1, 2, 1, 6, 1, 1, 3, 4, 2, 1,],
        [1, 2, 1, 1, 1, 1, 2, 2, 2, 1,],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//10-hard
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 2, 2, 2, 2, 1, 1, 1, 1, 1,],
        [1, 2, 1, 1, 2, 2, 2, 2, 1, 1,],
        [1, 2, 1, 1, 1, 6, 4, 2, 1, 1,],
        [1, 2, 1, 1, 3, 2, 1, 2, 1, 1,],
        [1, 2, 1, 1, 4, 3, 5, 2, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 2, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//11-hard
    [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 2, 2, 2, 2, 2, 1, 1,],
        [1, 2, 2, 2, 1, 1, 5, 2, 1, 1,],
        [1, 2, 4, 1, 6, 2, 1, 2, 1, 1,],
        [1, 2, 1, 1, 1, 3, 1, 2, 1, 1,],
        [1, 2, 1, 3, 4, 1, 2, 2, 1, 1,],
        [1, 2, 2, 2, 2, 2, 2, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1,],
        [1, 1, 1, 1, 1, 1, 1, 15, 13, 14,],
        [1, 1, 1, 1, 1, 1, 1, 10, 11, 12,],
    ],//12-hard
];