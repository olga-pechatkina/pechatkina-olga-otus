const http = require('http')

function request(N, type) {
    if (type == 0) {
                http.get('http://127.0.0.1:3000', (res) => {
                    if(res!== undefined)
                    {
                        N--;
                         while (N>0) return request(N,type);
                    }
        }    
                );
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

request(N, type);
