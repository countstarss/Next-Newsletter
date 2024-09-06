import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher(
  //MARK: - 开放访问控制:
  [
    '/sign-in(.*)',
    '/sign-up(.*)',
    '/',
  ]
);


export default clerkMiddleware((auth, request) => {
  
  // 继续正常处理请求
  if (!isPublicRoute(request)) {
    auth().protect();
  }
});


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};




