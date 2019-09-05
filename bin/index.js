#!/usr/bin/env node

const program = require('commander')

program
  .command('create <project-name>')
  .description('新建一个项目')
  .option('-f, --force', '如果当前文件夹存在<project-name>，则进行覆盖')
  .action((name, cmd) => {
      const options = cleanArgs(cmd)
      require('../lib/create')(name, options)
  })

program.parse(process.argv)


	
function camelize (str) {
  return str.replace(/-(\w)/g, (_, c) => c ? c.toUpperCase() : '')
}

// commander passes the Command object itself as options,
// extract only actual options into a fresh object.
function cleanArgs (cmd) {
  const args = {}
  cmd.options.forEach(o => {
    const key = camelize(o.long.replace(/^--/, ''))
    // if an option is not present and Command has a method with the same name
    // it should not be copied
    if (typeof cmd[key] !== 'function' && typeof cmd[key] !== 'undefined') {
      args[key] = cmd[key]
    }
  })
  return args
}

