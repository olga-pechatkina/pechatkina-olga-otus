const stream = require('stream');

var val, val2;
const read = (function () {
  const $ = new stream.Readable({
    objectMode: false,
    read() {}
  })
  return $
})()
const write = new stream.Writable();
write._write = function (chunk, encoding, done) {
  console.log(chunk.toString());
  done();
}
const trans = new stream.Transform();
trans._transform = function (chunk, encoding, done) {
  val2 = (+chunk.toString() + (Math.round(Math.random() * 100))).toString();
  this.push(val2);
  done();
}

read.pipe(trans).pipe(write);

for (var i = 0; i < 1000; i++) {
  val = Math.round(Math.random() * 100);
  read.push(val.toString());
}