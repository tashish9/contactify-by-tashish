import { config } from "dotenv";

config();

const { PORT, TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, FROM_NUMBER } =
  process.env;

if (!TWILIO_ACCOUNT_SID) {
  throw new Error("twilio info absent ");
}

if (!TWILIO_AUTH_TOKEN) {
  throw new Error("twilio info absent ");
}

if (!TWILIO_ACCOUNT_SID) {
  throw new Error("twilio info absent ");
}
export const CONSTANTS = {
  PORT: PORT || 8000,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  FROM_NUMBER,
};
