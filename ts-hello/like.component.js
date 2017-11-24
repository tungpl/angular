"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeButton = /** @class */ (function () {
    function LikeButton(_likeCount, _isSelected) {
        this._likeCount = _likeCount;
        this._isSelected = _isSelected;
    }
    Object.defineProperty(LikeButton.prototype, "likeCount", {
        get: function () {
            return this._likeCount;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LikeButton.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: true,
        configurable: true
    });
    LikeButton.prototype.onClick = function () {
        this._likeCount += this._isSelected ? -1 : 1;
        this._isSelected = !this._isSelected;
        console.log("Like Count: " + this._likeCount + ", isSelected: " + this._isSelected);
    };
    return LikeButton;
}());
exports.LikeButton = LikeButton;
