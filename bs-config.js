"use strict";

module.exports={
  "port": process.env.PORT||5050,
  "files": ["./dist/**/*.{html,htm,css,js}"],
  "server": { "baseDir": "." }
}