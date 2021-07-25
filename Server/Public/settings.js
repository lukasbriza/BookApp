const serverPort = 3000;
const clientPort = 3001;
const clientUrl = 'http://localhost:'+clientPort+'/';
const serverUrl = 'http://localhost:'+serverPort+'/';


const settings = {
    serverUrl: serverUrl,
    serverPort: serverPort,
    clientUrl: clientUrl,
    clientPort: clientPort
}
module.exports = settings;