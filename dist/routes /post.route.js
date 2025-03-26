"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var post_repository_1 = __importDefault(require("../repositories /post.repository"));
var post_service_1 = __importDefault(require("../services/post.service"));
var post_controller_1 = __importDefault(require("../controller /post.controller"));
var upload_1 = __importDefault(require("../middleware/upload"));
var validate_1 = require("../middleware/validate");
var router = express_1.default.Router();
var postController = new post_controller_1.default(new post_service_1.default(new post_repository_1.default()));
router.post('/', upload_1.default.single('thumbnail'), validate_1.validatePost.bind, function (res, req) { return postController.createPost(res, req); });
router.get('/', postController.getAllPosts);
router.get('/:id', postController.getPostById.bind(postController));
exports.default = router;
//# sourceMappingURL=post.route.js.map