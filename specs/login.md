# Sign-In Page Test Plan

## Executive Summary

This document contains a comprehensive test plan for the Sign-In page located at `http://localhost:3000/signin`.
The page includes the following interactive elements (discovered during runtime):
- `input#username` — Username (text)
- `input#password` — Password (password)
- `input[name=remember]` — Remember me (checkbox)
- `button[type=submit]` — "Sign In" button
- Link: "Don't have an account? Sign Up" (navigates to `/signup`)

Assumptions:
- Tests start from a fresh browser state (no cookies, localStorage, or sessionStorage) unless specified.
- A test account with credentials exists where needed, or the test will rely on mocked/staged backend responses.

Success Criteria:
- Valid credentials sign the user in and redirect to the expected authenticated landing page.
- Appropriate validation messages appear for invalid or missing inputs.
- "Remember me" persists session when enabled and does not when disabled.
- Accessibility and keyboard navigation are functional.

Failure Conditions:
- Any unhandled error (500-level) or client crash during normal flows.
- Silent failures where UI does not show feedback for user actions.

---

## Scenarios

Each scenario includes: starting state, step-by-step instructions, expected results, and success/failure criteria.

### 1. Happy Path — Successful Login
**Assumption:** A valid user exists, starting from fresh state.

Steps:
1. Open `http://localhost:3000/signin` in a new browser session.
2. Click (or tab to) the Username field and type `demologin`.
3. Click (or tab to) the Password field and type `demopass`.
4. Ensure the "Remember me" checkbox is unchecked for this scenario.
5. Click the "Sign In" button (or press Enter while focused in the password field).

Expected results:
- The page shows a loading indicator (if present) then redirects to the authenticated landing page (e.g., `/` or `/dashboard`).
- User session is established (cookie or localStorage token exists).
- No validation or error message is shown.

Success criteria:
- Redirect occurs within a reasonable time (e.g., < 3s) and page content corresponds to an authenticated view.

Failure conditions:
- Remains on the signin page with no feedback, or shows an unexpected error.

---

### 2. Invalid Credentials — Incorrect Password
**Assumption:** Account exists; fresh session.

Steps:
1. Open sign-in page.
2. Enter `valid_user@example.com` in Username.
3. Enter `WrongPassword` in Password.
4. Click "Sign In".

Expected results:
- The UI displays an explicit authentication error (e.g., "Invalid username or password").
- The user remains on the sign-in page.

Success criteria:
- Error message is visible and descriptive.

Failure conditions:
- No message shown or application crashes.

---

### 3. Input Validation — Empty Fields
**Assumption:** Fresh session with no input filled.

Steps:
1. Open sign-in page.
2. Click "Sign In" without entering Username or Password.

Expected results:
- Validation messages appear for required fields (e.g., "Username is required", "Password is required").
- No navigation occurs.

Success criteria:
- Each required field shows validation when empty and on submit.

Failure conditions:
- Submission proceeds or no feedback is shown.

---

### 4. Input Validation — Invalid Username Format
**Assumption:** The app treats username as an email; fresh session.

Steps:
1. Open sign-in page.
2. Enter `not-an-email` into Username.
3. Enter any string into Password.
4. Click "Sign In".

Expected results:
- The UI shows an inline validation message about invalid format (if email format validation applies), or a clear authentication failure.

Success criteria:
- Clear guidance is given to the user about expected username format.

Failure conditions:
- App silently fails or crashes.

---

### 5. Remember Me — Persistence Behaviour
**Assumption:** Fresh session; valid credentials available.

Steps (Remember enabled):
1. Open sign-in page.
2. Enter valid credentials.
3. Check "Remember me".
4. Click "Sign In" and confirm successful login.
5. Close the browser tab/window and re-open the site at `/` (or return to `/signin` depending on app flow).

Expected results (Remember enabled):
- User remains signed in across the browser restart or at least across a full page reload (session persists as per app design).

Steps (Remember disabled):
1. Repeat steps but leave "Remember me" unchecked.
2. Sign in successfully.
3. Close the tab and open a new tab to the app.

Expected results (Remember disabled):
- User session does not persist beyond the session (user is signed out or must sign in again).

Success criteria:
- Persistence behaviour matches the product spec.

Failure conditions:
- Session persists when it shouldn’t or does not persist when it should.

---

### 6. Forgot Password Link
**Assumption:** "Forgot password" is provided as a link or via the sign-in UI.

Steps:
1. On the sign-in page, locate the "Forgot password" link (if present) and click it.

Expected results:
- The app navigates to the password recovery page or opens a modal with recovery steps.
- The recovery page contains a field to enter the username/email and a submit option.

Success criteria:
- Navigation occurs and recovery UI is present.

Failure conditions:
- Link is missing or leads to a 404 or broken page.

---

### 7. Sign Up Link Navigation
**Assumption:** Link text: "Don't have an account? Sign Up".

Steps:
1. Click the "Sign Up" link on the sign-in page.

Expected results:
- The app navigates to `/signup` (or the configured sign-up route).

Success criteria:
- Sign-up page loads and contains expected fields (username/email, password, create account button).

Failure conditions:
- No navigation or broken link / 404.

---

### 8. Accessibility & Keyboard Navigation
**Assumption:** Fresh session.

Steps:
1. Open sign-in page.
2. Use keyboard Tab to navigate through interactive elements in order.
3. Ensure labels are read correctly by screen readers (manual or automated check with accessibility tools).
4. Try submitting the form using Enter while focused on password input.

Expected results:
- Tab order is logical: username -> password -> remember -> sign-in -> sign-up link.
- Each input has an associated visible label or aria-label.
- Enter triggers form submission.

Success criteria:
- Page meets basic accessibility checks (labels, focus states, keyboard operability).

Failure conditions:
- Unreachable controls via keyboard or missing labels.

---

### 9. Rate Limiting / Brute-force Protection (Negative Load)
**Assumption:** Fresh session; run against staging or controlled environment only.

Steps:
1. Attempt to sign in with the same valid username and wrong password repeatedly (e.g., 10 attempts).

Expected results:
- The app should either throttle attempts, return increasing delay, or lock the account after a defined number of failed tries.
- The UI shows an appropriate message advising the user of lockout or cooldown.

Success criteria:
- Protective measures are in place to prevent brute-force login attempts.

Failure conditions:
- No throttling and no user-visible feedback.

---

### 10. Session Expiration and Logout
**Assumption:** User can sign in successfully.

Steps:
1. Sign in successfully.
2. Locate and click the logout control in the authenticated UI.
3. After logout, try to access a protected route directly (e.g., `/dashboard`).

Expected results:
- After logout, user is redirected to sign-in page.
- Protected routes require authentication and redirect to sign-in when not authenticated.

Success criteria:
- Logout clears session and denies access to protected content.

Failure conditions:
- Session remains active after logout.

---

### 11. UI Edge Cases — Paste / Whitespace Handling
**Assumption:** Fresh session.

Steps:
1. Paste an email with leading/trailing whitespace into the Username field and enter the correct password.
2. Submit the form.

Expected results:
- Server or client trims whitespace and accepts credentials if otherwise valid, or shows a clear validation message.

Success criteria:
- Whitespace is handled gracefully.

Failure conditions:
- Credentials are rejected due to whitespace.

---

### 12. Password Visibility Toggle (If Present)
**Assumption:** Some UIs provide a "show password" control.

Steps:
1. Enter a known password in the Password field.
2. Toggle the visibility control.

Expected results:
- The password toggles between masked and visible states.
- Visibility toggle does not change the field value.

Success criteria:
- Toggle works and respects accessibility (labelled button).

Failure conditions:
- Toggle exposes password unexpectedly or fails to change state.

---

## Test Data Recommendations
- Create dedicated test accounts for automated tests with known credentials.
- Use a staging environment for destructive or rate-limit tests.

## Notes for Automation
- Selectors observed: `#username`, `#password`, `input[name=remember]`, `button[type=submit]`, link text for sign-up. Use these to build stable selectors in tests.
- Ensure automation starts with a cleared browser context to avoid flakiness.
- For rate-limiting and lockout tests, coordinate with backend team or use feature flags to avoid impacting production accounts.

---

## Quick Checklist
- [ ] Happy path login
- [ ] Invalid credential message
- [ ] Empty-field validations
- [ ] Remember-me persistence verification
- [ ] Sign-up link navigation
- [ ] Forgot-password navigation
- [ ] Keyboard & accessibility checks
- [ ] Rate-limiting behaviour (staging only)
- [ ] Logout and session expiry
- [ ] Whitespace & paste handling
- [ ] Password visibility toggle


Generated on: 2025-11-18
