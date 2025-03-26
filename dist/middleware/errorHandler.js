"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, _req, res, _next) {
    console.error(err.stack);
    res.status(500).json({ message: err.message || 'Internal Server Error' });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map