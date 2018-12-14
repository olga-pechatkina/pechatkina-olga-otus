const stream = require('stream');

const read = (function () {
  const $ = new stream.Readable({
    objectMode: false,
    highWaterMark: 32768, 
    read() {}
  })
  return $
})()
const write = new stream.Writable({objectMode: false, highWaterMark: 32768});
write._write = function (chunk, encoding, done) {
  console.log(chunk.toString());
  done();
}
const trans = new stream.Transform({objectMode: false, highWaterMark: 32768});
trans._transform = function (chunk, encoding, done) {
  const val2 = (+chunk.toString() + (Math.round(Math.random() * 100))).toString();
  this.push(val2);
  done();
}

read.pipe(trans).pipe(write);

var doThatStuff = (function() {
for (var i = 0; i < 1000; i++) {
  const val = Math.round(Math.random() * 100);
  read.push(val.toString());
}
})()