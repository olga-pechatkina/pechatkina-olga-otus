import {promisify} from './functions/promisify.mjs';
import fs from "fs";
import md5 from'js-md5';
import path from 'path';
import {genGuid} from './functions/guid.js';
//import oracledb from 'oracledb';

const pathFile = '20170809_0950_PR67210_PA58905_POV.sql';

var readFile = promisify(fs.readFile, false);
var stat = promisify(fs.stat, false);
var state;
var object = {
  guid: '',
  objectName: '',
  objectType: 10,
  objectSubType: 10,
  objectHash: '',
  owner: '',
  lastChangedTime: '',
  createDate: '',
  objectBody: '',
  objectExt: 4
};

(async function getData() {
  try{
    object.objectName = path.basename(pathFile);
    object.objectBody = await readFile(pathFile, 'utf8');
    
    object.owner = /.+Author.+:\s+(\w+\s+\w+)/.exec(object.objectBody)[1];//how to handle if nothing found according to template?
    object.createDate = /.+Creation.+:\s+([0-9]+.[0-9]+.[0-9]+)/.exec(object.objectBody)[1];

    state = await stat(pathFile);
    object.lastChangedTime =  state.mtimeMs/1000 |0;

    object.objectHash = md5(object.objectBody);

    object.guid = genGuid();

    for(var p of Object.keys(object))
    {
      console.log(p +' = ' + object[p]);
    }

  } catch(err) {
    console.log(err);
  }
})()


/*const oracledb = require('oracledb');
try {
  oracledb.initOracleClient({libDir: '/Users/your_username/instantclient_19_3'});
} catch (err) {
  console.error('Whoops!');
  console.error(err);
  process.exit(1);
}
*/
//let oracledb = require('oracledb');

/*let connection;

oracledb.getConnection({
  user: "aradmin",
  password: "eMsiWgsus-)DBad42",
  connectString: "localhost/XXXDB3"
}).then(conn => connection = conn)
  .catch(err => throw err);*/