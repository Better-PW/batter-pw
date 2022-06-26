import axios from "axios";

const handler = async (req, res) => {
  if (req.method !== "POST") {
    req.status(500);
  }
  const phone = req.body.number;
  const otp = req.body.otp;
  const endpoint = "https://api.penpencil.xyz/v1/oauth/token";
  const payload = {
    username: phone,
    otp: otp,
    "client-id": "system-admin",
    latitude: 0,
    longitude: 0,
    grant_type: "password",
  };
  const resp = await axios.post(endpoint, payload);
  console.log(resp.data);
  res.status(resp.status).json(resp.data);
};

export default handler;
