const log4js = require('log4js');
log4js.configure({
    appenders: {
        cheese: {
            type: 'file',
            encoding: "utf-8",
            filename: 'Error.log'
        }
    },
    categories: {
        default: {
            appenders: ['cheese'],
            level: 'all'
        }
    }
});

const logger = log4js.getLogger('cheese');
logger.trace('我是一个错误！trace等级');
logger.debug('我是一个错误！debug等级');
logger.info('我是一个错误！info等级');
logger.warn('我是一个错误！warn等级');
logger.error('我是一个错误！error等级');
logger.fatal('我是一个错误！fatal等级');