export const generateOTP = () => {
  // generates a six digit OTP
  return String(Math.floor(Math.random() * (10e5 - 10e4)) + 10e4);
};
