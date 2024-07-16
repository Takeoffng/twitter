import express from "express";
import "dotenv/config";
import rwClient from "./twitterClient.js";
import { CronJob } from "cron";

const port = 5000
const app = express();

app.listen(port, () => console.log(`port is running on ${port}`));

const tweet = async () => {
    try{
        await rwClient.v2.tweet(
            "its 2:20pm! Good Afternoon and have a very productive day! testing servers :)"
        );
        console.log("tweeted!");
    } catch (error) {
        console.error(error);
    }
};

const job = new CronJob ("55, 5, * * *", () => {
    tweet();
});

job.start();