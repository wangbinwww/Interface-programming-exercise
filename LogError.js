const log4js = require('log4js');
log4js.configure({
    appenders: {
        everything: {
            type: 'dateFile',
            filename: 'logs.log',
            pattern: 'yyyy-MM-dd hh-mm'
        }
    },
    categories: {
        default: {
            appenders: ['everything'],
            level: 'debug'
        }
    }
});

const logger = log4js.getLogger('everything');
logger.trace('我是一个错误！trace等级');
logger.debug('我是一个错误！debug等级');
logger.info('我是一个错误！info等级');
logger.warn('我是一个错误！warn等级');
logger.error('我是一个错误！error等级');
logger.fatal('我是一个错误！fatal等级');