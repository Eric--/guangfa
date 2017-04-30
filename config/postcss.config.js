let postcssSprites = require('postcss-sprites');

function spritesGroupBy(image) {

    let groups = /\/images\/sprites\/(.*?)\/.*/gi.exec(image.url);
    let groupName = groups ? groups[1] : group;
    image.retina = true;
    image.ratio = 1;
    if (groupName) {
        let ratio = /@(\d+)x$/gi.exec(groupName);
        if (ratio) {
            ratio = ratio[1];
            while (ratio > 10) {
                ratio = ratio / 10;
            }
            image.ratio = ratio;
        }
    }
    return Promise.resolve(groupName);
}

function spritesOnUpdateRule(isDev, rule, comment, image) {
    var spriteUrl = image.spriteUrl;
    image.spriteUrl = '/css/images/' + spriteUrl;
    postcssSprites.updateRule(rule, comment, image);
}

function spritesOnSaveSpritesheet(isDev, opts, groups) {
    let file = postcssSprites.makeSpritesheetPath(opts, groups);
    return file;	
}

function filterBy(image) {
    //过滤一些不需要合并的图片，返回值是一个promise，默认有一个exist的filter
    //
    if (image.url.indexOf('/images/sprites/') === -1) {
        return Promise.reject();
    }
    return Promise.resolve();
}

module.exports = {
    spritesGroupBy: spritesGroupBy,
    spritesOnUpdateRule: spritesOnUpdateRule,
    spritesOnSaveSpritesheet: spritesOnSaveSpritesheet
};
