var Stack = function() {
    this._storage =[];
    this._start=0;
    this._end=0;
    this._length=0;

    this.add = function(){
    	this._storage.push(this._end);
    	this._end++;
    	this._length++;

      // write me
    };
    this.remove = function() {
     this._storage.pop(this._end);
    	this._end--;
    	this._length--;
      // write me
    };
  };