const fs = require('fs')
const path = require('path')
const folderPath = 'E:/js/foo'

var findPath = function(folderPath,result,cb) {
    fs.readdir(folderPath, function(err, items) {
 if(items !=undefined) {
    items.forEach(function(item, i, arr)
    {
        let newPath = folderPath;
      newPath = path.resolve(newPath,items[i]);
        let stats = fs.statSync (newPath)
        if (stats.isDirectory() == true)
        {
            result.dirs.push(newPath);
            findPath(newPath,result,cb);
        }
            else if (items[i] !== undefined){
            result.files.push(newPath);
            }
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


