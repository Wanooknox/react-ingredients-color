var {app, BrowserWindow} = require('electron');

var mainWindow;

function CreateWindow() {
    var mainWindow = new BrowserWindow({
        width: 800,
        height:600,
        backgroundColor: '#ccc'
    });
    mainWindow.loadURL("file://" + __dirname + "/public/index.html");
    //mainWindow.loadURL("http://google.com");
}

app.on('ready', CreateWindow);
