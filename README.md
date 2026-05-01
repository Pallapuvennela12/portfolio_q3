# Pallapu Vennela Portfolio

A responsive React portfolio built with Vite. It includes sections for an intro,
skills, projects, contact, and profile hyperlinks for GitHub, LinkedIn, and
CodeChef.

## Local Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The production files are generated in `dist`.

## Update Profile Links

Edit `src/main.jsx` and replace these placeholder URLs:

- `https://github.com/your-github-username`
- `https://www.linkedin.com/in/your-linkedin-username`
- `https://www.codechef.com/users/your-codechef-username`

## Deploy On Render

1. Push this project to a GitHub repository.
2. Open Render and create a new **Static Site**.
3. Connect the GitHub repository.
4. Use these settings:
   - Build command: `npm install && npm run build`
   - Publish directory: `dist`
5. Deploy.

The included `render.yaml` already contains these settings for Render Blueprint
deployments.
