## Coding Project — Next.js “Button Counter” (React)
Overview

I built a small Next.js web app that renders a reusable Button Counter component. This project implements stateful React UI with accessible controls.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## MVP Checklist
# Counter Component

✅ Displays the current count dynamically (aria-live="polite").

✅ Buttons: Increment, Decrement, and Reset.

✅ Optional Step input (<input type="number">) allows changing the step amount.

# Props

✅ initialCount (default = 0)

✅ initialStep (default = 1)

✅ showStepInput (boolean, controls if the input appears)

# Accessibility

✅ Uses real <button> elements for keyboard access.

✅ Count region announced via aria-live="polite".

✅ Disabled buttons are visually and semantically clear.

✅ Input has an associated <label>.

# State Management

✅ Uses useState for both count and step.

✅ Decrement button disabled when count - step < 0.

# Home Page

✅ Renders one counter with defaults (0, step 1).

✅ Renders one counter with custom props (count 10, step 10, step input enabled).

# Quality

✅ No runtime errors.

✅ Clean layout and simple CSS.