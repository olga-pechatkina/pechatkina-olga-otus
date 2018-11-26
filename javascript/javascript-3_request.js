const http = require('http')

function request(N, type) {
    if (type == 0) {
<<<<<<< Updated upstream
        for (var i = 0; i < N; i++) {
            var promise = new Promise(resolve => {
                http.get('http://127.0.0.1:3000');
            })
=======
                http.get('http://127.0.0.1:3000', (res) => {
                    if(res!== undefined)
                    {
                        N--;
                         while (N>0) return request(N,type);
                    }
        }    
                );
>>>>>>> Stashed changes
        }
    if (type == 1) {
        for (var i = 0; i < N; i++) {
            http.get('http://127.0.0.1:3000');
        }
    }
}

const args = process.argv.slice(2);
var N = args[0];
var type = args[1];

<<<<<<< Updated upstream
request(N, type);
=======
request(N, type);
>>>>>>> Stashed changes
