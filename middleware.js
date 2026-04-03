import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// 1. Added brackets [] to make this a proper array
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/account(.*)",
  "/transaction(.*)"
]);

export default clerkMiddleware(async (auth, req) => {
  // 2. Changed userID to userId (Crucial!)
  const { userId, redirectToSignIn } = await auth();
  
  if (!userId && isProtectedRoute(req)) {
    return redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Optimized for Next.js 16/Turbopack performance
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};