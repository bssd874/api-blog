"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validatePost = void 0;
var zod_1 = require("zod");
// Schema untuk validasi post
var postSchema = zod_1.z.object({
    title: zod_1.z.string().min(5, 'Title harus minimal 5 karakter'),
    content: zod_1.z.string().min(10, 'Content harus minimal 10 karakter')
});
var validatePost = function (req, res, next) {
    try {
        postSchema.parse(req.body);
        next();
    }
    catch (error) {
        if (error instanceof zod_1.z.ZodError) {
            return res.status(400).json({ errors: error.errors });
        }
        next(error);
    }
};
exports.validatePost = validatePost;
//# sourceMappingURL=validate.js.map