(function() {
  root = this;

  var _ = {};
  _.backup = root._;

  _.getBackup = function(){
    return this.backup;
  };

  _.VERSION = '0.0.1';

  _.info = function(){
    console.log('lowline.js ver' + this.VERSION);
  };

  root._ = _;

}());

_.info();
