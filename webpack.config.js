const path = require('path');

const SRC_DIR = path.join(__dirname, '/client/src');

module.exports = {
  entry: `${SRC_DIR}/index.jsx`,
  module: {
    loaders: []
  }
}