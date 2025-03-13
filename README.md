# Twitter Bot

A simple Twitter bot built with Node.js and the Twitter API v2.

## Features

- Send tweets
- Fetch home timeline
- Search tweets
- Environment-based configuration

## Setup

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Configure Twitter API credentials**
   - Copy `.env.example` to `.env`
   - Fill in your Twitter API credentials:
     ```
     TWITTER_API_KEY=your_api_key_here
     TWITTER_API_SECRET=your_api_secret_here
     TWITTER_ACCESS_TOKEN=your_access_token_here
     TWITTER_ACCESS_SECRET=your_access_secret_here
     ```

3. **Get Twitter API credentials**
   - Go to [Twitter Developer Portal](https://developer.twitter.com/)
   - Create a new app
   - Generate API keys and access tokens

## Usage

### Run the bot
```bash
npm start
```

### Use as a module
```javascript
const TwitterBot = require('./index.js');

const bot = new TwitterBot();

// Send a tweet
await bot.tweet('Hello World!');

// Get timeline
const timeline = await bot.getTimeline(10);

// Search tweets
const results = await bot.searchTweets('#nodejs', 10);
```

## API Methods

- `tweet(text)` - Send a tweet
- `getTimeline(count)` - Fetch home timeline tweets
- `searchTweets(query, count)` - Search for tweets

## License

ISC