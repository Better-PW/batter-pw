import axios from 'axios';
// import axiosRetry from 'axios-retry';

const handler = async (req, res) => {
    // console.log(req.body.batchID, req.body.subID);
    const endpoint = `https://api.penpencil.xyz/v1/batches/${req.body.batchID}/subject/${req.body.subID}/recent-schedule`;
    const config = {
        headers: { authorization: `Bearer ${req.body.access_token}` }
    }
    // axiosRetry(axios, { retries: 3 });
    const r = await axios.get(endpoint, config);
    // r.then((r)=>{res.status(r.status).json(r.data);})
    // r.catch((e)=>{console.log(e.data)});
    // console.log(r.data);
    res.status(r.status).json(r.data);

}

export default handler;
