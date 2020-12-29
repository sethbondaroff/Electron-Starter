const electron = require("electron");
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const path = require("path");
const Menu = electron.Menu
const dialog = electron.dialog
const isDev = require("electron-is-dev");
let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({ 
        width: 1280, 
        height: 1024,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true,
            worldSafeExecuteJavaScript: true,
        }
    });
    mainWindow.loadURL(isDev? "http://localhost:3000": `file://${path.join(__dirname, "../build/index.html")}`);
    mainWindow.on("closed", () => (mainWindow = null));
    mainWindow.webContents.openDevTools();
}

const template = [
    {
      label: 'Edit',
      submenu: [
        {
          role: 'undo'
        },
        {
          role: 'redo'
        },
        {
          type: 'separator'
        },
        {
          role: 'cut'
        },
        {
          role: 'copy'
        },
        {
          role: 'paste'
        }
      ]
    },
  
    {
      label: 'View',
      submenu: [
        {
          role: 'reload'
        },
        {
          role: 'toggledevtools'
        },
        {
          type: 'separator'
        },
        {
          role: 'resetzoom'
        },
        {
          role: 'zoomin'
        },
        {
          role: 'zoomout'
        },
        {
          type: 'separator'
        },
        {
          role: 'togglefullscreen'
        }
      ]
    },
  
    {
      role: 'window',
      submenu: [
        {
          role: 'minimize'
        },
        {
          role: 'close'
        }
      ]
    },
  
    {
      role: 'help',
      submenu: [
        {
          label: 'Report a Bug / Give Feedback',
          click() {
            const options = {
              type: "info",
              buttons: [],
              defaultId: 0,
              title: "Report a Bug / Give Feedback",
              message: "Report any issues or suggest improvements to seth@ths.ca"
            }
            dialog.showMessageBox(null, options)
          }
        }
      ]
    }
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});