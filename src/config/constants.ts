const { PORT, TWILIO_ACCOUNT_SID, NODE_ENV, TWILIO_AUTH_TOKEN, FROM_NUMBER } =
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
  NODE_ENV: NODE_ENV || "development",
  PORT: PORT || 8000,
  TWILIO_ACCOUNT_SID,
  TWILIO_AUTH_TOKEN,
  FROM_NUMBER,
};
