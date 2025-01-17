import { TwitterApi } from "twitter-api-v2";

const client = new TwitterApi({
    appKey: process.env.API_KEY,
    appSecret: process.env.API_KEY_SECRET,
    accessToken: process.env.ACCESSTOKEN,
    accessSecret: process.env.ACCESSTOKEN_SECRET,
});

const rwClient = client.readWrite

export default rwClient