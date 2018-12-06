const fs = require('fs')
const path = require('path')
const folderPath = process.argv.slice(2).toString();

var findPath = function(folderPath,result,cb) {
    fs.readdir(folderPath, function(err, items) {
 if(items !=undefined) {
    items.forEach(function(item, i, arr)
    {
      const newPath = path.resolve(folderPath,items[i]);
        let stats = fs.stat (newPath, function (err, stats)
        {
        if (stats.isDirectory() == true)
        {
            result.dirs.push(newPath);
            findPath(newPath,result,cb);
        }
            else if (items[i] !== undefined){
            result.files.push(newPath);
            }
        })
    })
       if (items == "") {
        return cb(result);
       }
    }
})
}

var files = {
    dirs: [],
    files: []
};

findPath(folderPath, files, function(v) {
     files =v; 
     var files_json = JSON.stringify(files);
     console.log(files_json);
    });


