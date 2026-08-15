Activity: Build a "Mini Product Store"
Activity Title
Mini Product Store — Think in Data, Not in Copy-Paste

Learning Objectives
By the end of this activity, you should be able to:

Store information in an array of objects instead of writing it in HTML.
Write reusable functions that work for any item (not one function per product).
Use a for loop and forEach() to avoid repeating yourself.
Change the page using DOM manipulation (getElementById, innerHTML, textContent).
React to clicks with an event listener.
Build text with template literals and make decisions with an if statement.
The Big Idea (read this first)
The goal is not to make a beautiful website. The goal is to think like a programmer.

That means:

❌ Do NOT hardcode products in HTML like this:
<div>Apple</div>
<div>Orange</div>
<div>Banana</div>
✅ Instead, store the data in JavaScript and let a loop build the HTML:
const products = [
  { name: "Apple", price: 20 },
  { name: "Orange", price: 15 },
  { name: "Banana", price: 10 },
];
❌ Do NOT write one function per product:
function addApple() {}
function addOrange() {}
function addBanana() {}
✅ Instead, write one function that works for any product:
function addToCart(product) {
  /* works for ALL products */
}
⚠️ You may use ChatGPT as a helper, but you must be able to explain every line you submit. If you can't explain it, don't submit it.

The Files (your starter kit)
File	What it is	Do you edit it?
index.html	Minimal HTML — just empty containers.	Rarely (it's basically done).
style.css	Minimal styling.	No — this activity is about JS.
script.js	This is where you work. Data + function skeletons with TODOs.	✅ Yes.
SOLUTION.js	The finished answer (your teacher's copy).	Only to check yourself after trying.
Instructions (step by step)
Open the activity folder and open index.html in your browser.
At first the page will be almost empty — that's expected. You will bring it to life with JS.
Open script.js in your code editor. Read the comments from top to bottom.
Fill in each // TODO in order:
createCard(product) — build one product card with a template literal, then add a click event listener to its button.
renderProducts() — use a for loop to put every product on the page.
addToCart(product) — push the product into the cart and refresh the cart.
renderCart() — use an if for the empty cart, then forEach() to list items and add up the total.
Save and refresh the browser after each step. Watch it come to life.
Open the browser Console (press F12) to read any error messages while you debug.
Requirements Checklist
Your finished script.js must include all of these. Tick each one before you submit:

 let and const variables (used correctly)
 An array of product objects
 At least 3 reusable functions
 At least one for loop
 At least one forEach()
 DOM manipulation (e.g. getElementById, innerHTML, textContent, appendChild)
 At least one addEventListener
 At least one template literal ( `${...}` )
 At least one if statement
 No hardcoded product HTML and no per-product functions
Expected Output (what "done" looks like)
When your code works:

Products section shows one card per item from the products array, each with a name, a price (e.g. ₱20), and an "Add to cart" button. You did not type these cards by hand — the loop made them.
Clicking "Add to cart" adds that product to the Cart list and the Total updates automatically (e.g. Total: ₱45).
Before you add anything, the cart shows "Your cart is empty." and Total: ₱0 (this proves your if statement works).
Adding the same product twice lists it twice and adds its price again.
Products                         Cart
┌───────────────┐                • Apple — ₱20
│ Apple         │                • Banana — ₱10
│ ₱20           │
│ [Add to cart] │                Total: ₱30
└───────────────┘
┌───────────────┐
│ Orange        │
│ ₱15           │
│ [Add to cart] │
└───────────────┘
   ...etc
Stretch Goals (optional — only if you finish early)
Add a quantity property to each product object and show it.
Add a "free shipping over ₱100" message using another if.
Add a "Clear cart" button with its own event listener.
Submission Instructions
Make sure all boxes in the Requirements Checklist are ticked.
Add a short comment at the top of script.js with your full name and section.
Zip the whole activity folder (or just submit your script.js — check with your teacher).
Submit before the deadline via [your class portal / Google Classroom link].
Be ready to explain any line of your code if asked.
Grading Rubric (100 points)
Category	What we look for	Points
JavaScript Logic	The app works correctly: products render, adding to cart updates the total, empty state shows.	25
Proper Use of Functions	Reusable functions that work for any product. No addApple/addBanana duplication.	20
Loop Usage	Correct use of a for loop and forEach() to avoid repeated code.	15
DOM Manipulation	Elements are created/updated from JS; no hardcoded product HTML.	15
Code Organization	Logical order, sensible names, data separated from display logic.	10
Readability	Clean indentation, helpful comments, easy to follow.	10
Following Instructions	All checklist items present; submission rules followed.	5
Total	100
Teacher's note
If you found yourself copying a whole answer from ChatGPT without understanding it — stop, delete it, and rebuild it one TODO at a time. The point of this activity is the thinking, not the finished screen. A messy store you understand beats a perfect store you can't explain.