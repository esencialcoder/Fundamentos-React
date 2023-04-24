import client from "../../api/client";

const tweetsURL = '/api/tweets'

export const getLatestTweets = ()=>{
    return client.get(tweetsURL);
};