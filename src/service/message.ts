import { CONSTANTS } from "../config/constants";
import { Twilio } from "twilio";
import { MessageData } from "@/models/message";
import { generateOTP } from "./general";
const { TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_NUMBER } = CONSTANTS;

const client = new Twilio(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN);

export const sendMessage = async (data: MessageData) => {
  const OTP = generateOTP();
  const OTPMessage = `Hi. Your OTP is ${OTP}`;

  await client.messages.create({
    from: FROM_NUMBER,
    to: data.to,
    body: data.message.concat("\n", OTPMessage),
  });
};
