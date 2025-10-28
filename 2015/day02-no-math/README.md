# Day 2: I Was Told There Would Be No Math

📌 [Link to the puzzle](https://adventofcode.com/2015/day/2)

---

## 🧩 Problem Summary

### Part 1 – Wrapping Paper

The elves want to order **exactly the amount of wrapping paper** they need.

Each present is a box, and the total wrapping paper required is:

- The surface area of the box:  
  `2*l*w + 2*w*h + 2*h*l`
- Plus a little extra:  
  the area of the **smallest side**

Example:  
For a `2x3x4` box:  
→ surface area = `52`  
→ smallest side = `6`  
→ total = `58`

We must compute the total square feet of wrapping paper needed for **all boxes** in the input.

#### 🧠 My Approach (Part 1)

- Load the input as a raw string from the file
- Convert it into a list of boxes, each represented as `[l, w, h]`
- For each box:
  - Compute the surface area
  - Find the smallest side and use it as slack
  - Add both values to get the required paper
- Sum up the total for all boxes

---

### Part 2 – Ribbon

The elves also need to order **ribbon**.

For each box, the ribbon needed is:

- The smallest perimeter around the box `2*(smallest + second smallest side)`
- Plus ribbon for the bow: `volume = l * w * h`

Example:  
For a `2x3x4` box:  
→ perimeter = `10`  
→ bow = `24`  
→ total = `34`

We must compute the total feet of ribbon needed for all presents.

#### 🧠 My Approach (Part 2)

- Reuse the parsed boxes `[l, w, h]`
- For each box:
  - Sort the sides to find the two smallest
  - Compute the smallest perimeter: `2*(a + b)`
  - Compute the bow: `a * b * c`
  - Add both to get the total ribbon for that box
- Sum everything
