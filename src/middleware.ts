// middleware.js
import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired({
  returnTo: '/api/auth/login?returnTo=/check-in',
});

export const config = {
  matcher: '/app/:path*',
};
