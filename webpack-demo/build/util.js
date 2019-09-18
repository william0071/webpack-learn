const path = require("path");
const glob = require("glob");
const config = require("./config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

function entries() {
  // 获取 src/html 下的所有 js 入口文件
  let files = glob.sync("../src/html/" + `**/index.js`, {
    cwd: path.resolve(__dirname)
  });
  // console.log(path.resolve(__dirname));
  // console.log("------------------");
  // console.log(files);
  let entries = {},
    htmlPlugins = [];

  files.forEach(function(_file) {
    let file = path.parse(_file);
    let curDir = file.dir.replace(config.path.html + "/", "");
    htmlName = curDir.replace("/js", "");
    console.log(htmlName)
    // console.log(_file);
    // console.log(file);
    // console.log(htmlName);
    let entryKey = htmlName;
    entries[entryKey] = _file;

    console.log('../src/html/'+ htmlName + '.html')
    let cfg = {
      filename: htmlName +'.html',
      template: path.resolve(__dirname, '../src/html/'+ htmlName + '.html'),
      title: htmlName
    }
    htmlPlugins.push(new HtmlWebpackPlugin(cfg));
  });

  return {
    entries,
    htmlPlugins
  };
}
entries();
module.exports = {
  entries
};
