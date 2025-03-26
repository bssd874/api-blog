"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var path_1 = __importDefault(require("path"));
// Konfigurasi penyimpanan file
var storage = multer_1.default.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "uploads/"); // Simpan di folder uploads
    },
    filename: function (_req, file, cb) {
        var uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, uniqueSuffix + path_1.default.extname(file.originalname));
    },
});
// Filter file yang diterima (hanya gambar)
var fileFilter = function (_req, file, cb) {
    if (!file.mimetype.startsWith("image/")) {
        return cb(new Error("Only image files are allowed!"));
    }
    cb(null, true);
};
// Middleware upload
var upload = (0, multer_1.default)({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 2 * 1024 * 1024 }, // Maksimal 2MB
});
exports.default = upload;
//# sourceMappingURL=upload.js.map