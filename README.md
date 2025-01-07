# Portfolio Web App Template 1

This is a personal portfolio web application built using [Vite](https://vitejs.dev/). It showcases my projects, skills, and contact information as a passionate architectural student.

## How to Deploy This Portfolio

Follow these step-by-step instructions to deploy your portfolio on [Vercel](https://vercel.com/) and customize it using [Visual Studio Code](https://code.visualstudio.com/).

---

### 1. Create a GitHub Account

If you don’t already have a GitHub account, create one at [github.com](https://github.com/).

---

### 2. Fork the Repository

1. Open the repository link:  
   [https://github.com/your-username/portfolio-webapp](https://github.com/your-username/portfolio-webapp)  
2. Click the **Fork** button in the top-right corner. This creates a copy of the project under your GitHub account.

---

### 3. Download and Install Node.js

1. Go to the [Node.js download page](https://nodejs.org/).
2. Download the **LTS (Long-Term Support)** version for your operating system (recommended for most users).
3. Install Node.js by following the on-screen instructions.  
   **Note**: This will also install `npm` (Node Package Manager), which is required to manage project dependencies.

---

### 4. Download and Install Visual Studio Code (VS Code)

1. Go to the [VS Code download page](https://code.visualstudio.com/).
2. Download the version for your operating system (Windows, macOS, or Linux).
3. Install VS Code by following the on-screen instructions.

---

### 5. Set Up a Vercel Account

1. Go to [vercel.com](https://vercel.com/) and sign up for a free account.
2. After signing up, connect your Vercel account to GitHub:
   - On the Vercel dashboard, click **Add New Project**.
   - Authorize Vercel to access your GitHub account.
   - Select the forked portfolio repository from your GitHub repositories.

---

### 6. Install Project Dependencies (Locally)

1. Install all project dependencies using
```bash
npm install
```
2. Run locally by running
```bash
npm run dev
``` 
3. Open the browser and navigate to the URL provided by the terminal (usually http://localhost:5173)

4. Update portfolio with personal information and see updates in live server after saving changed files.

### 7. Deploy to Vercel
1. Push changes to Github
- git add .
- git commit -m "Deploy portfolio"
- git push -u origin main

2. On vercel Dashboard
- Add new Project
- Import the repo you just pushed to Github
- Follow the setup instructions and click Deploy

3. Once deployed, access the portolio through the live URL and You're all set!