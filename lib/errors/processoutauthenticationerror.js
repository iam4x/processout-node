"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProcessOutAuthenticationError = /** @class */ (function (_super) {
    __extends(ProcessOutAuthenticationError, _super);
    function ProcessOutAuthenticationError(code, message) {
        var _this = _super.call(this, message) || this;
        _this.code = code;
        _this.name = "ProcessOutAuthenticationError";
        return _this;
    }
    return ProcessOutAuthenticationError;
}(Error));
module.exports = ProcessOutAuthenticationError;
//# sourceMappingURL=processoutauthenticationerror.js.map