module.exports = function(counts, callback) {
  Object.keys(counts).forEach(function(key) {
    console.log(key + ':' + counts[key]);
  });
  callback(null);
};
