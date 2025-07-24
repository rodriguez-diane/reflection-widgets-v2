// Import any required libraries, like the Notion API client
import { Client } from '@notionhq/client';

// Initialize Notion client (replace with your own Notion API credentials)
const notion = new Client({ auth: process.env.NOTION_TOKEN });

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).end();  // Only allow GET requests
  }

  try {
    // Query your Notion database (replace with your actual database ID)
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID,
    });

    // Assuming the 'Wins' are stored in a 'Properties' field in Notion
    const wins = response.results.map(page => page.properties.Wins.title[0]?.text.content);

    // Randomly select a win
    const randomWin = wins[Math.floor(Math.random() * wins.length)];

    // Send the randomized win as a response
    res.status(200).json({ win: randomWin });
  } catch (error) {
    console.error('Error fetching wins:', error);
    res.status(500).json({ error: 'Failed to fetch wins' });
  }
}
