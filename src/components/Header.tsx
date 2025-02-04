import type React from "react";
import { Link } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header: React.FC = () => {
  /* React.FC specifies that Header is a React Functional Component,  React.FC is useful for type safety when dealing with props. */
  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50  bg-gray-200">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="size-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="lg:gap-x-12 justify-center">
            <nav>Logo here</nav>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className=" decoration-none text-black font-extrabold">
              Product
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Features
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Marketplace
            </a>
            <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Company
            </a>
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <IoMenu size={25} />

            {/* <a href="#" className="text-sm/6 font-semibold text-gray-900">
              Log in <span aria-hidden="true">&rarr;</span>
            </a> */}
          </div>
        </nav>
        <div className="lg:hidden" role="dialog" aria-modal="true">
          <div className="fixed inset-0 z-50"></div>
          <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                {/* <img className="h-8 w-auto" src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt=""> */}
              </a>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="size-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Product
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Features
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Marketplace
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;

/*
Notes:

1. flex 
flex: [flex-grow](how much an item grows relative to others) [flex-shrink](how much an item when the space is tight) [flex-basis](the initial size before growing and shrinking);
🔹 Default Value: flex: 0 1 auto;
🔹 Example: flex: 1 1 100px; (grows, shrinks, and starts at 100px width)
Flexbox is a layout method for arranging items in rows or columns.
flex-direction: row (default)

2. Margins and paddings
Class	Effect
-m-1.5	Adds negative margin of -1.5 * 0.25rem = -0.375rem (shrink the element).
p-1.5	Adds padding of 1.5 * 0.25rem = 0.375rem (space inside the element).

3. sr-only (screen reader only)
make its inclusive to screen reader
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

4. Span
Key Features of <span>
✅ Inline (doesn’t start a new line like <div>)
✅ Used for styling parts of text
✅ No default styling (unlike <p>, <h1>, etc.)
✅ Can contain text or other inline elements (like <a> or <strong>)

5. inline-flex
inline-flex	Makes the element inline + flexbox (acts like display: inline-flex;).
does not acts like a block (taking the full width)

6. items-center
Centers content vertically (align-items: center;).

7.justify-center
Centers content horizontally (justify-content: center;).

8. rounded-md
Adds medium border radius (border-radius: 0.375rem;).

9.text-gray-700	
Sets text color to a dark gray.


10. svg
<svg>	Declares an SVG (Scalable Vector Graphics) element (used for icons, shapes, etc.).
className="size-6"	Applies Tailwind CSS to set width & height to 1.5rem (6 * 0.25rem).
fill="none"	Prevents the shape from being filled with color.
viewBox="0 0 24 24"	Defines the coordinate system, setting the SVG to 24x24 pixels.
stroke-width="1.5"	Sets the line thickness to 1.5px.
stroke="currentColor"	Uses the text color (currentColor) as the stroke color (inherits from parent styles).
aria-hidden="true"	Hides the icon from screen readers (useful if it's decorative).
data-slot="icon"	Likely used for component libraries to manage slot-based icons.

11. path
<path>	Defines a vector path (used for drawing).
stroke-linecap="round"	Ends the lines with a round shape (instead of sharp/flat ends).
stroke-linejoin="round"	Rounds the corners where lines meet, making the "X" smooth.
d="M6 18 18 6 M6 6l12 12"	Defines the path's movement (the actual shape).

🔹 Understanding d="M6 18 18 6 M6 6l12 12"
The d attribute (short for "draw") defines the shape's movement:

M6 18 18 6

M6 18 → Move to (6,18)
18 6 → Draw a line to (18,6)
M6 6l12 12

M6 6 → Move to (6,6)
l12 12 → Draw a line 12px right and 12px down

12. <div className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
fixed	Positions the element fixed on the screen (does not move with scrolling).
inset-y-0	Stretches the element from top (top: 0) to bottom (bottom: 0).
right-0	Positions the element at the right edge of the screen (right: 0).
z-50	Sets a high z-index (50), ensuring it appears above other elements.
w-full	Makes the element take up the full width of the screen.
overflow-y-auto	Enables vertical scrolling (overflow-y: auto;) if the content exceeds the screen height.
bg-white	Sets background color to white.
px-6 py-6	Adds padding (24px) on all sides (padding-left, padding-right, padding-top, padding-bottom).
sm:max-w-sm	On small screens (sm:), limits the maximum width to sm (24rem or 384px).
sm:ring-1 
sm:ring-gray-900/10	On small screens, adds a thin border (1px ring) with 10% opacity gray for a subtle outline.


ring:
The ring class in Tailwind adds an outline (border-like glow) around an element without affecting its size.

Example: ring-1 → Adds a 1px outline.
Difference from border? ring sits outside the element, while border takes up space inside.

900/10 means:
Gray-900 color (very dark gray).
10% opacity (/10 → 10% transparent).

inset-y-0 is a shorthand for top-0 and bottom-0

Use inset-0 (shorthand for top-0 right-0 bottom-0 left-0).


13. lg:gap-x-12	
On large screens (lg:), adds horizontal spacing (gap: 3rem or 48px) between child elements.


14. ✅ Use justify-between when you want spacing between items (e.g., navbar, header).
✅ Use justify-end when you want all items to be aligned to the right (e.g., buttons in a footer).


15. text-sm/6 
set the line height (space between text lines) to six

16. aria: Accessible Rich Internet Application
It is a set of attributes designed to improve accessibility for people using assistive technologies (e.g., screen readers)
aria-hidden: hides from screen readers.
aria-label: provides a label for the element to screen readers.

17. 
&rarr;	→	Right Arrow
&larr;	←	Left Arrow
&uarr;	↑	Up Arrow
&darr;	↓	Down Arrow
&harr;	↔	Left-Right Arrow
&varr;	↕	Up-Down Arrow

18.
role="dialog"	Indicates that this is a dialog/modal for screen readers.
aria-modal="true"	Prevents users from interacting with background elements when the modal is open.

19.     <div>
      <FaBeer size={50} />  Size in pixels
      <FaBeer size="2em" />  Size in em units
      <FaBeer size="3rem" />  Size in rem units
    </div>

 */
