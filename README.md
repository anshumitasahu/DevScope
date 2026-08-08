# DevScope

DevScope is a GitHub profile analyzer that lets you search for a GitHub user and see their profile, repos, languages, and activity in one place.

Instead of going through different sections of a GitHub profile, DevScope puts the useful information into a simple interactive dashboard with charts and visualizations.

## Features

* Search GitHub profiles
* View profile info and stats
* Explore repos
* View language distribution
* Compare two GitHub profiles
* Activity heatmap based on repository pushes
* Fetches live data using the GitHub REST API

## Tech Stack

* React
* Tailwind CSS
* JavaScript (ES6+)
* GitHub REST API
* Recharts
* Vite
* GeckoFX

## Screenshots
<img src="/public/Home-Page.png" classname="w-50">

## Why I Built This

I wanted to build something that makes GitHub profile data easier to look at and understand.

GitHub already provides a lot of this information, but it's spread across different parts of a profile. DevScope brings it together into one dashboard so you can get a quick overview of a developer's work, repos, languages, and activity.

## Installation

```bash
git clone https://github.com/anshumitasahu/DevScope

cd DevScope

bun install

bun dev
```

Or, if you're using npm:

```bash
npm install
npm run dev
```

## Environment Variables

Create a `.env` file in the project root:

```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

A GitHub Personal Access Token is recommended to avoid GitHub API rate limits.
