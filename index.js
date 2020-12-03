const {app,BrowserWindow} = require('electron');

function createWindow() {
    window = new BrowserWindow({
        width: 800,
        height: 800,
        webPreferences: {nodeIntegration: true}
    });

    window.loadFile('index.html');
}

app.on('ready',createWindow);