"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOTP = void 0;
const generateOTP = () => {
    // generates a six digit OTP
    return String(Math.floor(Math.random() * (10e5 - 10e4)) + 10e4);
};
exports.generateOTP = generateOTP;
//# sourceMappingURL=general.js.map