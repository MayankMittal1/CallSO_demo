const critical = require("critical");
const path = require("path");

critical.generate({
  base: path.join(path.resolve(__dirname), "build/"),
  src: "index.html",
  target: {
    html: "indexx.html",
  },
  inline: true,
  extract: true,
  width: 1280,
  height: 720,
});
