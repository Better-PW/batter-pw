import axios from "axios";

const handler = async (req, res) => {
  if (req.method !== "POST") { req.status(500); }
  const phone = req.body.number;
  const endpoint = "https://api.penpencil.xyz/v1/users/get-otp?smsType=0";
  const payload = {
    username: phone,
    countryCode: "+91",
  }
  const resp = await axios.post(endpoint, payload);
  res.status(resp.status).json(resp.data);
}

export default handler;
