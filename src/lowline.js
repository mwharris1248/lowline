(function() {
  root = this;

  var _ = {};
  _.backup = root._;

  _.getBackup = function(){
    return this.backup;
  };

  _.VERSION = '0.0.1';

  _.getVersion = function(){
    return this.VERSION;
  };

  root._ = _;

}());
