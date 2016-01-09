global._ = {};
global._.info = function(){
  console.log('oldRunning');
};

(function() {
  root = this;

  var _ = {};
  _.backup = root._;

  _.getBackup = function(){
    return this.backup;
  };

  _.info = function(){
    console.log('newRunning');
  };

  root._ = _;

}());

_.info();
_.getBackup().info();
