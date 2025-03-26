"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var helmet_1 = __importDefault(require("helmet"));
var morgan_1 = __importDefault(require("morgan"));
var post_route_1 = __importDefault(require("./routes /post.route"));
var errorHandler_1 = require("./utils/errorHandler");
var logger_1 = require("./utils/logger");
// import { PORT } from "./constants";
var app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use((0, helmet_1.default)());
app.use((0, morgan_1.default)("dev"));
// Routes
app.use("/api/posts", post_route_1.default);
// Error Handling Middleware
app.use(errorHandler_1.errorHandler);
//Start Server
var PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    (0, logger_1.logger)("Server running on http://localhost:".concat(PORT));
});
exports.default = app;
//# sourceMappingURL=app.js.map