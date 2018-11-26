var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function request(N, type) {
    if (type == 0) {
        for (var i = 0; i < N; i++) {
            var promise = new Promise(resolve => {
                var xmlHttp = new XMLHttpRequest();
                xmlHttp.open("GET", "http://127.0.0.1:3000", true);
                xmlHttp.send(null);
            })
        }
    }
    if (type == 1) {
        for (var i = 0; i < N; i++) {
            var xmlHttp = new XMLHttpRequest();
            xmlHttp.open("GET", "http://127.0.0.1:3000", true);
            xmlHttp.send(null);
        }
    }
}

request(1, 0);
