describe('LowLine', function(){

  it('version property is string', function(){
    expect(typeof _.getVersion()).toEqual('string');
  });

  it('version string not empty', function(){
    expect(_.getVersion()).not.toEqual('');
  });

});
