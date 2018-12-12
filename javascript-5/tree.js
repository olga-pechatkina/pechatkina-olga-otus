const fs = require('fs')
const path = require('path')
const folderPath = process.argv.slice(2).toString();

var findPath = function (folderPath, result, cb) {
    fs.readdir(folderPath, function (err, items) {
        if (err) return cb(err);
        let itemsLeft = items.length;
        items.forEach(function (item, i, arr) {
            const newPath = path.resolve(folderPath, items[i]);
            let stats = fs.stat(newPath, function (err, stats) {
                if (stats.isDirectory() == true) {
                    findPath(newPath, result, function (err, res) {
                        result.dirs.push(newPath);
                        if (!--itemsLeft) {
                            cb(null, result);
                        }
                    });
                } else {
                    result.files.push(newPath);
                    if (!--itemsLeft) {

                        cb(null, result);
                    }
                }
            })
        })
        if (!itemsLeft) {
            return cb(null, result);
        }

    })
}

var files = {
    dirs: [],
    files: []
};

findPath(folderPath, files, function (err, res) {
    files = res;
    var files_json = JSON.stringify(files);
    console.log(files_json);
});