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
