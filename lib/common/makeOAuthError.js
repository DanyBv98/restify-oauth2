"use strict";

var errors = require("restify-errors");

module.exports = function makeOAuthError(errorClass, errorType, errorDescription) {
	return new errors[errorClass + "Error"]({ info: { type: errorType }}, errorDescription);
};