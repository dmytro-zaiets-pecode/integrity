# Integrity Lab Front-End Engineer Evaluation

Welcome and thank you for applying at Integrity Lab. We know your time is valuable and appreciate you investing the effort. This exercise is designed to match the real-world everyday work an engineer does as closely as possible.

We want to focus as much on your strengths and why you’d be a great peer to join our team. The goal is not to seek out your weaknesses! We’ve worked to make this as standard and universal as possible, but if you feel any part of this exercise creates a blocker that doesn’t let you show your best work, please let us know. We are happy to make accommodations in many cases so we can learn the most about you!

## Exercise Guidance

- This exercise should last no more than 1 hour 30 minutes. Quality, clarity, and completeness are strongly preferred over extensive quantity.
- Required direct prompts are prefixed “Q:” Please place your responses in the `discussion.txt` file in the repo (all prompts are repeated)
- You’re free to add & state any assumptions you need to provide an answer (and generally you should assume the “easier” path - don’t make things more difficult). You can add any of these comments to the `discussion.txt` as well.
- If any major supporting code is necessary that isn’t otherwise relevant to this architecture, feel free to stub or comment out its implementation
- We are **not** looking for you to create a pixel perfect implementation of the design. We want to see that you can largely match a given design (think [80/20 rule](https://en.wikipedia.org/wiki/Pareto_principle)) but don’t need you to flesh out every detail.
- Feel free to use external libraries as needed. Please discuss why you chose to use the libraries you chose.
- You should treat this exercise as “open-book”: feel free to reference available resources as you typically would on your day-to-day job
- Internationalization, I18n, & multi-currency do not need to be taken into account for this exercise
- Code formatting is not evaluated or scored. Try to write cleanly so the reviewer can understand, but specific formatting choices are not considered

## Context

For the purposes of this exercise, imagine that we’re building a platform, AdvisorMatch, to help NYC consumers book appointments with financial advisors that will be the best fit for them. Through the platform, users will be able to find and contact an advisor, book an available appointment slot, and pay if necessary.

### Product Objective

Imagine that we’re in the early stages of building out this platform. The next feature is to build a directory of advisors that client users can browse to discover a advisor they think will be a good fit.

Product Requirements:

- Prospective clients should be able to view a list of advisors in the system.
- Prospective clients should be able to use filters to view the subset of advisors most relevant to them. They should be able to narrow down the list by location, certification, or specialty
- Prospective clients should be able to sort the matching advisors. They should be able to sort by name, location, certification, or specialty
- Prospective clients should be able to quickly see how many advisors match their criteria.

### Starting Point

At this point we have:

- A simple data set that has full list of advisors is accessible ./src/data.json.
- A design we intend to implement that you can view here: [[https://www.figma.com/file/ktzqObSSgEiXRyE89jkjII/AdvisorMatch?node-id=0%3A1](https://www.figma.com/file/3iZecAjwW8cTgUqVFunBG8/AdvisorMatch?node-id=0%3A1&t=76rGgXo9yQdmRzV6-1)](<[https://www.figma.com/file/ktzqObSSgEiXRyE89jkjII/Providermatch?node-id=0%3A1](https://www.figma.com/file/3iZecAjwW8cTgUqVFunBG8/AdvisorMatch?node-id=0%3A1&t=76rGgXo9yQdmRzV6-1)>)
- The simple skeleton of a front-end app you can use as a starting point.

#### Running the Code

- This template is a simple starting point made with create-react-app
- Install dependencies locally with `yarn install` (or `npm install` if you prefer not to use yarn)
- Run the app with `yarn start` (or `npm run start`)
  - Note that the app should now be available locally at localhost:3000
  - Webpack will be running, so code updates shouldn't require a restart of the server or a reload of the browser

# Section 1: Pre-Development Planning (~15 min)

You are the initial engineering liaison who has received the Product Objective above. Provide feedback on the request and ask questions as appropriate. Then answer these questions as if you were actually writing back to your colleagues. The intent of this exercise is not to see if you have perfect answers. It’s okay not to know the answers - but what would you do in real life to move the project forward and how do you communicate that?

Q: Overall, provide your response, questions, and guidance to your colleagues.

Q: What additional information is needed to begin implementation?

Q: Write an initial development plan that outlines a breakdown of the steps necessary to complete this feature.

# Section 2: Code Implementation (~60 min)

Using the development plan you wrote above, implement the user stories listed above. Specifically:

- Pull from the list of advisors.
- Display the list of advisors using the design as a guide. To reiterate we are not expecting pixel-perfect implementations as much as a presentable rough match.
- Implement functionality to allow users to filter the list of advisors, and calculate the number of matching advisors. We strongly prefer you to use of redux in your implementation.
- Structure the code as you would if this were intended for production.

# Section 3: Post-Development Planning (~15 min)

Q: If you were submitting this work as an actual PR to a production repo to be reviewed by a peer, what additional information would you communicate to them?

Q: Describe at least two particular limitations of your approach: What can’t it handle that we might need to address? Why did you make that choice? What are the alternatives?

Q: Write a brief summary of what you would do next if you had more time.
# integrity
