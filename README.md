# KOMMA Website

Welcome to the KOMMA website documentation! This guide will help you make changes to the website, even if you don't have any programming experience.

## Website Overview

The KOMMA website is:
- Hosted on Vercel under Charlie's account
- Built with Next.js and Tailwind CSS
- Currently being enhanced with a dynamic Projects page that will pull content from Notion

## Quick Start Guide

If you're just looking to make simple text changes, you can skip to the "Making Content Changes" section below.

If you need to set up the website on your computer to preview changes:

1. Download and install [Cursor](https://cursor.sh/) (our preferred code editor) or [Visual Studio Code](https://code.visualstudio.com/)
2. Download and install [Node.js](https://nodejs.org/) (choose the "LTS" version)
3. Open Cursor/VS Code
4. Open the website folder in the editor
5. Open the terminal (View → Terminal)
6. Type these commands in the terminal:
   ```
   npm install
   npm run dev
   ```
7. Open your web browser and go to [http://localhost:3000](http://localhost:3000)

## Projects Page (Coming Soon)

The Projects page will be dynamically updated using content from Notion. This means:
- Project information will be managed in Notion
- Changes in Notion will automatically update the website
- No need to edit code for project updates

### How to Update Projects (Coming Soon)

1. Log into the KOMMA Notion workspace
2. Navigate to the Projects database
3. Add or edit project information:
   - Project title
   - Description
   - Images
   - Links
   - Status
4. Changes will automatically sync to the website

Note: The Projects page integration is currently in development. Once complete, this will be the primary way to update project information.

## Making Content Changes

### Finding the Right File

The website content is organized into different files, each representing a page:

- `app/page.tsx` - The home page (what visitors see first)
- `app/about/page.tsx` - The About page
- `app/contact/page.tsx` - The Contact page
- `app/projects/page.tsx` - The Projects page (coming soon)

To edit a page:
1. Open Cursor/VS Code
2. In the left sidebar, find the `app` folder
3. Click on the folder for the page you want to edit (e.g., `about` for the About page)
4. Click on `page.tsx` inside that folder

### Editing Text

When you open a file, you'll see something that looks like this:
```tsx
<p className="text-black/80 mb-6">
  This is the text you can change.
</p>
```

To change the text:
1. Find the text you want to change (it will be between the `<p>` and `</p>` tags)
2. Edit the text while keeping the `<p className="...">` and `</p>` parts unchanged
3. Save the file (Ctrl+S or Cmd+S)

### Adding a New Page

If you need to add a completely new page (like a Projects page), please contact the development team at hello@komma.systems. They can help you set up the page with the correct structure and styling.

### Styling Guidelines

The website uses a consistent style across all pages:

- Background color: Black
- Text color: White
- Accent color: Cream (for special sections)

If you need to change any colors or styling, please contact the development team to ensure consistency across the website.

### Images and Media

To add or change images:
1. Place your image file in the `public` folder
2. Contact the development team to help you add it to the website

The website logo is stored as `public/Logo.png`. If you need to update the logo, simply replace this file with your new logo (keeping the same filename).

## Making Your Changes Live

After making changes:
1. Save all your changes
2. Contact the development team at hello@komma.systems
3. They will review your changes and make them live on the website

Note: The website is hosted on Vercel under Charlie's account. The development team has access to deploy changes.

## Need Help?

If you're unsure about making any changes or run into issues:
1. Take a screenshot of what you're trying to change
2. Email the development team at hello@komma.systems
3. They'll help you make the changes or make them for you

## Common Tasks

### Changing the About Page Text
1. Open `app/about/page.tsx`
2. Find the text you want to change
3. Edit the text between the `<p>` tags
4. Save the file

### Updating Contact Information
1. Open `app/contact/page.tsx`
2. Find the email address or other contact details
3. Update the information
4. Save the file

### Adding a New Team Member
1. Open `app/about/page.tsx`
2. Find the team member section
3. Copy an existing team member's section
4. Update the name, description, and LinkedIn link
5. Save the file

### Updating Projects (Coming Soon)
1. Log into Notion
2. Navigate to the Projects database
3. Add or edit project information
4. Changes will automatically sync to the website

Remember: If you're ever unsure about making changes, it's always better to ask for help than to make changes you're not confident about.

## Deployment

The site is deployed using Vercel. Changes pushed to the main branch will trigger an automatic deployment.

## Contributing

1. Create a new branch for your changes
2. Make your changes
3. Submit a pull request
4. Request review from team members

## Contact

For questions or issues, contact the development team at hello@komma.systems 