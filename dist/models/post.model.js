"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(id, title, content, thumbnail, createdAt, updatedAt) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.thumbnail = thumbnail;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }
    Post.fromEntity = function (prismaPost) {
        var _a;
        return new Post(prismaPost.id, prismaPost.title, prismaPost.content, (_a = prismaPost.thumbnail) !== null && _a !== void 0 ? _a : undefined, prismaPost.createdAt, prismaPost.updatedAt);
    };
    Post.prototype.toDTO = function () {
        return {
            id: this.id,
            title: this.title,
            content: this.content,
            thumbnail: this.thumbnail,
            createdAt: this.createdAt,
            updatedAt: this.updatedAt,
        };
    };
    return Post;
}());
exports.default = Post;
//# sourceMappingURL=post.model.js.map