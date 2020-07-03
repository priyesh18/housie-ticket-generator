var fs = require('fs'),
    path = require('path')

function dirTree(filename, id) {
   
    var stats = fs.lstatSync(filename),
        info = {
            path: filename,
            dir: path.parent,
            name: path.basename(filename).replace('.jpg', ''),
            id: id
        };

    if (stats.isDirectory()) {
        info.type = "folder";
        info.items = fs.readdirSync(filename).map((child, index) => {
            var index = index + 1;
            return dirTree(filename + '/' + child, index);
        });
    } else {
        // Assuming it's a file. In real life it could be a symlink or
        // something else!
        info.type = "file";
    }

    return info;
}

if (module.parent == undefined) {
    /* Uncomment the next 2 lines to view readable output. */

    // var util = require('util');
    // console.log(util.inspect(dirTree(process.argv[2], 1), false, null));

    let jsonTree = JSON.stringify(dirTree(process.argv[2], 1).items)
    jsonTree = jsonTree.replace(/..\/public\//g, '');

    console.log(jsonTree);
}