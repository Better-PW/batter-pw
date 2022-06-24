import axios from 'axios';

const handler = async (req, res) => {
    // check if user is logged in (i.e auth_token is present in localStorage)
    const loginData = JSON.parse(localStorage.getItem('login-data'));
    const endpoint = "https://api.penpencil.xyz/v1/users/self";

    const config = {
        headers: {
            authorization: `Bearer ${loginData.access_token}`
        }
    }

    const r = await axios.get(endpoint, config);
    console.log(r.status, r.data);
    res.status(r.status).json(r.data);
}

export default handler;