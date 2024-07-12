/**
 * An array of routes that are accessible to the public
 * These routes do not require authentication
 * @type {string[]}
 */
export const publicRoutes = [
  "/",
  "/auth",
  "/auth/callback",
  "/onboarding",
  "/onboarding/aimred",
];

/**
 * An array of routes that are used for authentication
 * These routes will redirect logged in users to '/'
 * @type {string[]}
 */

export const authRoutes = ["/onboarding/my-dashboard"];

/**
 * The default redirect path after logging in
 * @type {string}
 */

export const DEFAULT_LOGIN_REDIRECT = "/auth";

/**
 * The default redirect path after logging in / out error
 * @type {string}
 */

export const DEFAULT_LOGIN_PROBLEM_REDIRECT = "/auth/auth-code-error";
