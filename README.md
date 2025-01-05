# Next.js 15 runtime error: accessing process.env in browser

This repository demonstrates a common error encountered in Next.js 15 applications when attempting to access environment variables (e.g., `process.env.MY_VARIABLE`) within client-side components (pages).  The `process` object is not available in the browser environment, leading to a runtime error.

## Problem

The example `about.js` page attempts to log an environment variable using `process.env.MY_VARIABLE`.  This will result in a runtime error in the browser because `process` is undefined.

## Solution

The `aboutSolution.js` demonstrates the correct approach.  Environment variables should be accessed during the build process (server-side rendering or API routes) and passed as props to the client-side components.  Alternatively, consider using a more appropriate method for managing application-specific configurations.