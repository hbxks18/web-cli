var spawn = require('child_process').spawn;

function addSubModule(repo, cb) {

    opts = opts || {};

    var git = 'git';
    var args = ['submodule', 'add'];
    args.push(repo);
    args.push('lib');

    var process = spawn(git, args);
    process.on('close', function(status) {
        if (status == 0) {
            cb && cb();
        } else {
            cb && cb(new Error("'git clone' failed with status " + status));
        }
    });
}

module.exports = function(repo) {
  return new Promise(function(resolve, reject) {
    addSubModule(repo, function(err) {
      if (err) {
        reject(err)
      } else {
        resolve();
      }
    })
  });
}
