<img width="1440" height="762" alt="image" src="https://github.com/user-attachments/assets/1488983c-6fd4-47df-8065-65bcf5ff6915" />

# DevScope

DevScope is a GitHub profile analyzer that transforms public GitHub data into a clean, interactive dashboard. Instead of presenting raw API responses, it aggregates developer statistics, repository information, and language usage into meaningful visual insights.

Built with React and Tailwind CSS, the project focuses on simplicity, performance, and an intuitive user experience.

## Features

- GitHub profile search
- Developer profile overview
- Repository statistics
- Language distribution visualization
- Repository explorer
- Responsive interface
- Live data fetched from the GitHub REST API

## Tech Stack

- React
- Tailwind CSS
- JavaScript (ES6+)
- GitHub REST API
- Recharts
- Vite

## Motivation

GitHub exposes a large amount of useful information, but much of it is scattered across different pages. DevScope brings that information together into a single dashboard, making it easier to understand a developer's profile, activity, and technology stack at a glance.

## Installation

```bash
git clone https://github.com/anshumitasahu/DevScope

cd devscope

bun install

bun dev
```

or

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root.

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

A GitHub Personal Access Token is recommended to avoid API rate limits.

## Future Improvements

- Contribution graph
- Commit activity analytics
- Repository filtering and sorting
- Dark/Light theme
- Export analytics
- Organization support
- Developer comparison

## License

This project is open source and available under the MIT License.