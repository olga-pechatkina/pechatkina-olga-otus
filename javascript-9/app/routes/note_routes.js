module.exports = function(app, db) {
const https = require('https');
const xml2js = require ('xml2js');
const parser = new xml2js.Parser({attrkey:"@"});

    app.get('/api/rss/create/:link=*', function(req, res) {
      https.get(req.params[0], (resp) => {
      let articles = []; 
      let data = '';
          
      // A chunk of data has been recieved.
      resp.on('data', (chunk) => {
        data += chunk;
      });
    
      let link = req.params[0];
      db.collection('rss_links').insert({link}, (err, result) => {});
      // The whole response has been received.
      resp.on('end', () => {
        parser.parseString(data, function (err, result) {
          let alldata = JSON.stringify(result); 
          alldata = JSON.parse(alldata); 
          articles = alldata.rss.channel[0].item;
        });
        db.collection('rss_articles').insert(articles, (err, result) => {
          if (err) { 
            res.send({ 'error': 'An error has occurred' }); 
          } else {
            res.send(result.ops);
          }
        })
      });
    
    }).on("error", (err) => {
      console.log("Error: " + err.message);
    });
    
    });
    
    app.get('/api/rss/urls', function(req, res) {
      db.collection('rss_links').find().toArray((err, items) => {
        if (err) {
          res.send({'error':'An error has occurred'});
        } else {
          res.send(items);
        }
      });

    });
    
    app.get('/api/rss/docs', function(req, res) {
      db.collection('rss_articles').find().toArray((err, items) => {
        if (err) {
          res.send({'error':'An error has occurred'});
        } else {
          res.send(items);
        }
      });
    });
};