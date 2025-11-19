Functional Page Model for Playwright: A Scalable Alternative to Classic POM By James Kip

https://medium.com/@jameskip/functional-page-model-for-playwright-a-scalable-alternative-to-classic-pom-007d8ec26333

The traditional Page Object Model (POM) has served as the de facto standard for structuring end-to-end test automation. While useful, it often becomes unwieldy as test suites scale, particularly in fast-moving applications with frequent UI changes. Enter the Functional Page Model (FPM) — a modular, functional approach to organizing Playwright tests that emphasizes separation of concerns, reusability, and maintainability.

In this post, I’ll walk you through what the Functional Page Model is, how it’s structured, how to use it, and what trade-offs you might expect when adopting it.

What Is the Functional Page Model?
The Functional Page Model (FPM) breaks down test modules into four separate components:

component.actions.ts: Contains reusable user interaction methods (clicks, navigations, form submissions).
component.locators.ts: Encapsulates all UI element selectors.
component.data.ts: Manages test data and fixtures.
component.spec.ts: Contains actual test definitions.
This functional decomposition contrasts with monolithic page classes in classic POMs, making it easier to compose, extend, and maintain test code as your application grows.

The Structure
Here’s what a typical FPM setup looks like in your Playwright repo:

e2e/
└── tests/
    └── clients/
        └── FPM/
            ├── realworld.actions.ts
            ├── realworld.locators.ts
            ├── realworld.data.ts
            └── realworld.spec.ts

Component Breakdown

🔹 Actions (realworld.actions.ts)
Defines reusable functions simulating user behavior.

export const createClinicalNote = async (page: Page, noteInput: NoteData) => {
  await Locators.chartNewBtn(page).click();
  await Locators.noteBtn(page).click();
  await Locators.noteInput(page).fill(noteInput.text);
  await Locators.saveBtn(page).click();
};

🔹 Locators (realworld.locators.ts)
Centralizes all UI element selectors for better maintainability.

export const noteInput = (page: Page) => page.getByRole("textbox", { name: "note" })
export const noteInputText = (page: Page, noteText: string) => page.getByText(noteText)

🔹 Data (realworld.data.ts)
Handles test input data, mocks, and data transformations.

interface NoteData {
  locationId: string
  patientId: string
  text: string
  title: string
}

export const noteInput: NoteData = {
  locationId: "16",
  patientId: "1",
  text: "E2E Test Note",
  title: generateUniqueId(),
}

🔹 Specs (realworld.spec.ts)
Implements actual test cases by wiring together actions, data, and locators.

test("create quick note", async ({ page }) => {
  await Actions.goto(page, client.id, patient.id);
  await Actions.createClinicalNote(page, noteInput);
  await expect(Locators.noteInputText(page, noteInput.text)).toBeVisible();
});

Advantages of the Functional Page Model
✅ Clear Separation of Concerns
By separating locators, actions, and test data, updates to one aspect of the app (e.g., selector changes) require minimal edits in isolated files.

✅ Improved Reusability
Actions are pure functions that can be reused across test suites and don’t rely on class state.

✅ Easier Onboarding
New contributors can navigate isolated, purpose-driven files instead of parsing large page classes.

✅ Scalable for Large Teams
Avoids merge conflicts common in monolithic page files and encourages parallel contributions.

Disadvantages & Trade-Offs
❌ Fragmented File Structure
Splitting one “page” into four files can create overhead in navigating between them, especially in smaller test suites.

❌ Less Familiar to Traditional QA Engineers
Testers used to object-oriented POMs may require a mindset shift to work functionally.

❌ Slight Overhead for Simple Flows
For small components with only one or two test cases, the structure may feel like overkill.

When to Use It
The Functional Page Model shines when:

Your application is growing quickly.
You have multiple contributors writing E2E tests.
You prioritize test readability and maintainability.
You want to reduce the coupling of test logic with UI structure.
Avoid it if:

You’re working with very small test suites or prototypes.
Your team is deeply embedded in an OOP-centric automation stack.

Final Thoughts
The Functional Page Model offers a refreshing, modular approach to structuring Playwright tests. By trading class-based structures for composable functions, you gain clarity, maintainability, and scale — particularly in modern, fast-moving frontend environments.

It might not be for everyone, but if you’re managing a growing test suite and want to reduce friction between development and QA, FPM is worth a serious look.