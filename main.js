const {ipcMain, app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const env = require('./env');
const requireTemplate = require('./src/require-template')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

ipcMain.on('open-url', (event, url, site) => {
  let win = new BrowserWindow({width: 800, height: 600})

  win.webContents.on('did-finish-load', function() {
    win.webContents.executeJavaScript(requireTemplate(`./sites/${site}`));
  });

  win.on('closed', () => {
    win = null
  })

  // Load a remote URL
  win.loadURL(url)
});

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({width: 1000, height: 600, minWidth: 800, minHeight: 500})

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'src/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  if (env.env !== 'production') {
    // Open the DevTools.
    win.webContents.openDevTools()
  }

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}


// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
