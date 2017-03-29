switch (process.platform) {
  case "darwin":
    console.log("./node_modules/electron/dist/Electron.app/Contents/MacOS/Electron .");
  case "linux":
    console.log("./node_modules/electron/dist/electron .");
}
