"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessage = void 0;
const constants_1 = require("../config/constants");
const twilio_1 = require("twilio");
const general_1 = require("./general");
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_NUMBER } = constants_1.CONSTANTS;
const client = new twilio_1.Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);
const sendMessage = async (data) => {
    const OTP = (0, general_1.generateOTP)();
    const OTPMessage = `Hi. Your OTP is ${OTP}`;
    await client.messages.create({
        from: FROM_NUMBER,
        to: data.to,
        body: data.message.concat("\n", OTPMessage),
    });
};
exports.sendMessage = sendMessage;
//# sourceMappingURL=message.js.map