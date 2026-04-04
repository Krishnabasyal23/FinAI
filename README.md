# FinAI: AI-Powered Financial Management Assistant

**FinAI** is a modern, full-stack financial tracking application designed to simplify personal budgeting through automation. By leveraging the **Gemini 2.5 Flash** model, users can scan receipts to automatically categorize expenses, track recurring subscriptions, and manage multiple accounts with real-time balance updates.

## 🚀 Key Features

* **AI Receipt Scanning:** Powered by Google Gemini 2.5 Flash to extract merchant names, amounts, and categories from images with high precision.
* **Multi-Account Management:** Create and track balances across different bank accounts or credit cards.
* **Transaction Automation:** Support for recurring transactions (Daily, Weekly, Monthly, Yearly) with automatic balance adjustment logic.
* **Smart Categorization:** Automatic expense tagging to visualize spending habits across housing, entertainment, groceries, and more.
* **Security & Protection:**
    * **Clerk Auth:** Secure user authentication and onboarding flows.
    * **ArcJet:** Native rate-limiting and bot protection for sensitive Server Actions.
* **Email Notifications:** Transaction summaries and alerts powered by **Resend**.

## 🛠️ Technical Stack

* **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
* **Language:** TypeScript / JavaScript
* **Database:** PostgreSQL (via [Prisma ORM](https://www.prisma.io/))
* **AI Engine:** [Google Generative AI](https://aistudio.google.com/) (Gemini 2.5 Flash)
* **Security:** [ArcJet](https://arcjet.com/) (Rate Limiting) & [Clerk](https://clerk.com/) (Auth)
* **Styling:** Tailwind CSS & Shadcn UI

## 📋 Prerequisites

Before running the project, ensure you have:
* Node.js v18+ 
* A PostgreSQL database (Supabase or Neon recommended)
* API Keys for Clerk, Google AI Studio, ArcJet, and Resend

## ⚙️ Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Apathbyte/FinAI.git](https://github.com/Apathbyte/FinAI.git)
    cd FinAI
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Environment Variables:**
    Create a `.env` file in the root directory and populate it with the following:
    ```env
    DATABASE_URL=
    DIRECT_URL=

    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
    CLERK_SECRET_KEY=
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/onboarding
    NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding

    GEMINI_API_KEY=
    RESEND_API_KEY=
    ARCJET_KEY=
    ```

4.  **Database Migration:**
    ```bash
    npx prisma generate
    npx prisma db push
    ```

5.  **Run Development Server:**
    ```bash
    npm run dev
    ```

## 🏗️ Project Architecture

The application follows a **Server Actions** pattern for data mutations, ensuring a secure and fast communication layer between the frontend and the database.

* `actions/`: Contains Next.js Server Actions for transactions, accounts, and receipt processing.
* `lib/`: Core configuration for Prisma, ArcJet, and third-party clients.
* `components/`: Reusable UI components built with Tailwind and Shadcn.


## 📄 License

This project is licensed under the **MIT License**.
`Do Whatever the fuck you want with this code - Bidhan`

## 🛡️ Security Implementation

FinAI implements **Shielded Server Actions** using ArcJet. This prevents automated bots from draining your Gemini API credits by enforcing rate limits per user ID.

```javascript
const decision = await aj.protect(req, {
  userId,
  requested: 1, 
});
// Blocks request if rate limit is exceeded