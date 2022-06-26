import axios from 'axios';

const handler = async (req, res) => {
    let mode = req.body.bought_batches ? 1 : 0;
    const endpoint = "https://api.penpencil.xyz/v3/batches/my-batches";
    const config = {
        headers: { authorization: `Bearer ${req.body.access_token}` },
        params: { mode: mode }
    }
    const r = await axios.get(endpoint, config);
    res.status(200).json(r.data);
}

export default handler;
