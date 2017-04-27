/**
 * @author: steven
 * @date: 17/04/20
 */

//线上版本aot
switch (process.env.NODE_ENV) {
    case 'pro':
    case 'production':
        module.exports = require('./config/webpack.config.aot');
        break;
    case 'dev':
    case 'development':
    default:
        module.exports = require('./config/webpack.config.dev');
}
