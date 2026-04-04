FinAI: AI-Powered Financial Management Assistant
FinAI is a modern, full-stack financial tracking application designed to simplify personal budgeting through automation. By leveraging the Gemini 2.5 Flash model, users can scan receipts to automatically categorize expenses, track recurring subscriptions, and manage multiple accounts with real-time balance updates.

<img width="1470" alt="Screenshot 2024-12-10 at 9 45 45 AM" src="https://github.com/Apathbyte/FinAI/blob/main/public/banner.png">

🚀 Key Features
AI Receipt Scanning: Powered by Google Gemini to extract merchant names, amounts, and categories from images.

Multi-Account Management: Create and track balances across different bank accounts or credit cards.

Transaction Automation: Support for recurring transactions (Daily, Weekly, Monthly, Yearly) with automatic balance adjustment.

Smart Categorization: Automatic expense tagging to visualize spending habits.

Security & Protection: * Clerk Auth: Secure user authentication and onboarding.

ArcJet: Native rate-limiting and bot protection for server actions.

Email Notifications: Transaction summaries and alerts powered by Resend.

🛠️ Technical Stack
Framework: Next.js 15+ (App Router)

Language: TypeScript / JavaScript

Database: PostgreSQL (via Prisma ORM)

AI Engine: Google Generative AI (Gemini 2.5 Flash)

Security: ArcJet (Rate Limiting) & Clerk (Auth)

Styling: Tailwind CSS & Shadcn UI

📋 Prerequisites
Before running the project, ensure you have:

Node.js v18+

A PostgreSQL database (Supabase or Neon recommended)

API Keys for Clerk, Google AI Studio, ArcJet, and Resend

⚙️ Installation & Setup
Clone the repository:

Bash
'''git clone https://github.com/Apathbyte/FinAI.git
cd FinAI'''
Install dependencies:

Bash
npm install
Environment Variables:
Create a .env file in the root directory and populate it with the following:

Code snippet
DATABASE_URL=your_postgresql_url
DIRECT_URL=your_direct_postgresql_url

'''NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

GEMINI_API_KEY=your_gemini_api_key
RESEND_API_KEY=re_...
ARCJET_KEY=aj_...'''
Database Migration:

Bash
'''npx prisma generate
npx prisma db push'''
Run Development Server:

Bash
'''npm run dev'''

🏗️ Project Architecture
The application follows a Server Actions pattern for data mutations, ensuring a secure and fast communication layer between the frontend and the database.

actions/: Contains Next.js Server Actions for transactions, accounts, and receipt processing.

lib/: Core configuration for Prisma, ArcJet, and third-party clients.

components/: Reusable UI components built with Tailwind and Shadcn.