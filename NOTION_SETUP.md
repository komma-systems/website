# Notion Integration Setup Guide

This guide will help you set up the Notion integration for dynamic initiative pages.

## 1. Create a Notion Database

1. Go to [Notion](https://notion.so) and create a new database
2. Add the following properties to your database:

### Required Properties:
- **Title** (Title type) - The initiative name
- **Description** (Rich text) - Initiative description
- **Phase** (Select) - e.g., "Phase 1", "Phase 2", etc.
- **Tags** (Multi-select) - e.g., "#governance", "#finance", "#community"
- **Status** (Select) - Options: "Published", "Draft"
- **Slug** (Rich text) - URL-friendly version of the title (e.g., "algorithmic-currency")

### Optional Properties:
- **Created** (Date) - Creation date
- **Updated** (Date) - Last updated date

## 2. Create a Notion Integration

1. Go to [Notion Integrations](https://www.notion.so/my-integrations)
2. Click "New integration"
3. Give it a name (e.g., "Komma Website")
4. Select your workspace
5. Copy the "Internal Integration Token"

## 3. Share Database with Integration

1. Go to your database in Notion
2. Click "Share" in the top right
3. Click "Invite" and search for your integration name
4. Give it "Can read" permissions

## 4. Get Database ID

1. Open your database in Notion
2. Copy the URL from your browser
3. The Database ID is the 32-character string between the last `/` and `?v=`
   - Example: `https://www.notion.so/your-workspace/32characteRIDHERE?v=...`

## 5. Set Environment Variables

Create a `.env.local` file in your project root:

```env
NOTION_TOKEN=your_integration_token_here
NOTION_DATABASE_ID=your_database_id_here
```

## 6. Add Sample Data

Add some initiatives to your Notion database with the properties above.

## 7. Test the Integration

1. Run your development server: `npm run dev`
2. Visit your homepage - you should see initiatives loaded from Notion
3. Click on any initiative to see the dynamic page

## Troubleshooting

- Make sure your integration has access to the database
- Check that all required properties are present
- Verify environment variables are set correctly
- Check the browser console for any errors

## Features

✅ **Dynamic Initiative Pages** - Each initiative gets its own page
✅ **Automatic Updates** - Changes in Notion appear on the website
✅ **Fallback System** - Shows hardcoded data if Notion API fails
✅ **SEO Friendly** - Each initiative has its own URL
✅ **Responsive Design** - Works on all devices
