const { app, BrowserWindow, Menu } = require('electron')
require("./server.js")
function createWindow () {
  const win = new BrowserWindow({
    width: 1280,
    height: 720,
    minWidth:1280,
    minHeight:720,
    icon:`${__dirname}/assets/img/win-icon.png`,
    title:"Ren'Py Doc",
    webPreferences: {
      nodeIntegration: false,
      webSecurity:false,
      contextIsolation:false,
      webviewTag:true
    }
  })
  win.loadFile(__dirname+'/index.html')
  win.setMenu(null)
  win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})