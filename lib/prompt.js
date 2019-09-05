const inquirer = require('inquirer')

module.exports = function (context) {
    return inquirer.prompt([
        {
            name: 'repositoryName',
            message: '仓库的名称',
            default: context.name
        },
        {
            name: 'projectNameCn',
            message: '项目的名称',
        },
        {
            name: 'sideType',
            message: '管理平台类型名称',
            default: '运营端',
        },
        {
            name: 'platform',
            message: 'pass的platform',
            default: 'NIT-SFZW|NjI4',
        },
    ])
}
