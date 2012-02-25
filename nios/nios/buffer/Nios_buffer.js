window.Buffer = exports.Buffer = function(size, encoding) {
	if (typeof size == 'number') {
		this.length = size;
	} else {
		var string = size;
		this.length = string.length;
		for (i=0, limiti=this.length; i < limiti; i++) {
			this[i] = string.charCodeAt(i);
		}
	}
};
Buffer.prototype = Object.create(ArrayBuffer.prototype);
Buffer.prototype._isBuffer = true;
Buffer.prototype.toString = function() {
	var str = '';
	for (var i = 0; i < this.length; i++) {
		if (this[i] == 0) break;
		str += String.fromCharCode(this[i]);
	}
	return str;
}

Buffer.prototype.slice = function (start, stop) {
	var len = stop - start + 1;
	var ret = new Buffer(len);
	for (var i = 0; i < len; i++) {
		ret[i] = this[i + start];
	}
	return ret;
}

Buffer.prototype.copy = function(buffer, startOffset) {
	for (var i = 0; i < this.length; i++) {
		buffer[startOffset + i] = this[i];
	}
}

Buffer.isBuffer = function(obj) { return obj._isBuffer == true; }
Buffer.byteLength = function(str, encoding) {
	// FIXME: work properly
	return str.length;
}

