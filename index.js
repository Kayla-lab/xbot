const { TwitterApi } = require('twitter-api-v2');
require('dotenv').config();

class TwitterBot {
    constructor() {
        this.client = new TwitterApi({
            appKey: process.env.TWITTER_API_KEY,
            appSecret: process.env.TWITTER_API_SECRET,
            accessToken: process.env.TWITTER_ACCESS_TOKEN,
            accessSecret: process.env.TWITTER_ACCESS_SECRET,
        });
    }

    async tweet(text) {
        try {
            const tweet = await this.client.v2.tweet(text);
            console.log('Tweet sent successfully:', tweet.data.id);
            return tweet;
        } catch (error) {
            console.error('Error sending tweet:', error);
            throw error;
        }
    }

    async getTimeline(count = 10) {
        try {
            const tweets = await this.client.v2.homeTimeline({ max_results: count });
            console.log(`Retrieved ${tweets.data.data.length} tweets from timeline`);
            return tweets;
        } catch (error) {
            console.error('Error fetching timeline:', error);
            throw error;
        }
    }

    async searchTweets(query, count = 10) {
        try {
            const tweets = await this.client.v2.search(query, { max_results: count });
            console.log(`Found ${tweets.data.data?.length || 0} tweets for query: ${query}`);
            return tweets;
        } catch (error) {
            console.error('Error searching tweets:', error);
            throw error;
        }
    }
}

async function main() {
    const bot = new TwitterBot();
    
    try {
        await bot.tweet('Hello from my Twitter bot! 🤖');
    } catch (error) {
        console.error('Bot failed to run:', error);
    }
}

if (require.main === module) {
    main();
}

module.exports = TwitterBot;