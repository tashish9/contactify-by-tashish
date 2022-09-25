import { getContactsData } from "../../db/controller";
import { sendMessage } from "../../service/message";
import express from "express";
import { MessageData } from "../../models/message";
import { generateOTP } from "../../service/general";

export const getContacts = (req: express.Request, res: express.Response) => {
  const contacts = getContactsData();
  res.send(contacts).status(200);
};

export const sendMessageToContact = async (
  req: express.Request,
  res: express.Response
) => {
  const messageData = req.body as MessageData;
  try {
    if (!messageData.to || !messageData.message) {
      throw new Error("Invalid Data ");
    }
    const otp = generateOTP();
    await sendMessage({ ...messageData, otp });
    res
      .json({
        otp,
      })
      .status(200);
  } catch (error) {
    console.error(error, "error occurred while send message");
    res.send("Invalid number or Twilio Error").status(400);
  }
  // NOTE a better error message can be sent on the basis of unverified number or if something goes wrong with twilio itself. That can be done during testing also . Throwing 400 without exactly knowing the error is bad practice .
  // I cannot implement status codes for different errors due to time limitations
};
