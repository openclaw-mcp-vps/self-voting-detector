import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Self-Voting Detector — Detect Fake Engagement & Self-Voting Patterns',
  description: 'API service that analyzes voting patterns to detect suspicious self-voting, bot networks, and fake engagement across platforms.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="964c6383-2e1e-4d05-b434-c75f3a2d6f0c"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  )
}
