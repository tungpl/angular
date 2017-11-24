"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var like_component_1 = require("./like.component");
var likeBtn = new like_component_1.LikeButton(1000000, false);
for (var i = 0; i < 10; i++) {
    likeBtn.onClick();
}
