"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendMessageToContact = exports.getContacts = void 0;
const controller_1 = require("../../db/controller");
const message_1 = require("../../service/message");
const general_1 = require("../../service/general");
const getContacts = (req, res) => {
    const contacts = (0, controller_1.getContactsData)();
    res.send(contacts).status(200);
};
exports.getContacts = getContacts;
const sendMessageToContact = async (req, res) => {
    const messageData = req.body;
    try {
        if (!messageData.to || !messageData.message) {
            throw new Error("Invalid Data ");
        }
        const otp = (0, general_1.generateOTP)();
        await (0, message_1.sendMessage)({ ...messageData, otp });
        res
            .json({
            otp,
        })
            .status(200);
    }
    catch (error) {
        console.error(error, "error occurred while send message");
        res.send("Invalid number or Twilio Error").status(400);
    }
    // NOTE a better error message can be sent on the basis of unverified number or if something goes wrong with twilio itself. That can be done during testing also . Throwing 400 without exactly knowing the error is bad practice .
    // I cannot implement status codes for different errors due to time limitations
};
exports.sendMessageToContact = sendMessageToContact;
//# sourceMappingURL=controllers.js.map