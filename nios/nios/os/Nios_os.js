exports.hostname = function() {
	var ret;
	Nios_call("Nios_os", "hostname", [], function (hostname) { ret = hostname; }, true);
	return ret;
}

exports.type = function() {
	var ret;
	Nios_call("Nios_os", "type", [], function (type) { ret = type; }, true);
	return ret;
}