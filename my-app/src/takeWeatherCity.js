/** takes data from Mongo Stitch
 *
 */

export default function takeWeatherCity() {
    return new Promise ((resolve, reject) => {
        const {
            Stitch,
            RemoteMongoClient,
            AnonymousCredential
        } = require('mongodb-stitch-browser-sdk');
        var weatherFromDB = [];
        var client, db;

        if (Stitch.hasAppClient('weatherapp-npwtn')) {
            client = Stitch.getAppClient('weatherapp-npwtn');      
        } else{
            client = Stitch.initializeDefaultAppClient('weatherapp-npwtn');
        }
        db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('WeatherCity');

        client.auth.loginWithCredential(new AnonymousCredential()).then(() =>
        db.collection('weatherCity').find().asArray()
        ).then(docs => {
            weatherFromDB = docs;
            resolve(weatherFromDB);
        }).catch(err => {
            console.error(err)
            reject(err);
        });  
    })
}