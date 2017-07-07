# The Pragmatic Programmer tips
After a lot of books and tutorials I've read on *'How to programming in language X'* and *'How to Use framework Y'* I've search for a new book.
I've look for a book which will contribute me in a different way, something which will make me one step closer to be a better software developer, more than a language-framework-skill user.

The book **The Pargmatic Programmer** made me to realize that code writing its just a side effect as a developer.

Right now I'm reading this book and I'm collecting some tips during my journey.
I will write here some tips from time to time, hope it will be useful to you.

I've also include the tips which already mentioned in the book, it will be colorized)

The TPP book tips will be :book:

My tips will be :black_nib:

**Note: Read the book!! those tips are just a good-to-keep cheatsheet**

**Note 2: Please feel free to correct me or add some advices of your own**

© All copyrights belong to their respective owners of 'The Pragmatic Programmer' book ©

---

## *0. Preface*:
#### **What Makes A Pragmatic Programmer**
1. :book: Care About Your Craft.
2. :book: Think! About Your Work.
#### **Individual Pragmatists, Large Teams**
- :black_nib: There is always room for individuality and craftsmanship.
#### **Its A Continuous Process**
- :black_nib: *Kaizen* - every day, work to refine the skills you have and to add new tools to your repertoire.

## *1. A Pragmatic Philosophy:*
#### **Intro**
- :black_nib: Approaching - think beyond the immediate problem, place it in its larger context.
#### *The Cat Ate My Source Code*
- :black_nib: When you take responsibility for a project, you should expect to be held accountable for it, don't blame someone or something else.
3. :book: Provide Options, Don't Make Lame Excuses.'t be done, explain what can be done.
#### *Software Entropy*
4. :book: Don't Live with Broken Windows.
- :black_nib: When the project you're working on is:
    - Messy and ugly - stop coding and take care for the mess you're facing with.
    - Clean and beauty - keep up with the clean way and don't fall for "fire rages" (deadlines, release date, demos, etc.)
#### *Stone Soup And Boiled Frogs*
- :black_nib: Work out what you can reasonably ask for.
- :black_nib: People find it easier to join an ongoing success.
5. :book: Be a Catalyst for Change.
- :black_nib: Its often the accumulation of small things that breaks morale and teams.
6. :book: Remember the Big Picture.
- :black_nib: Constantly review what's happening around you, not just what you personally are doing.
#### *Good Enough Software*
- :black_nib: Its unprofessional to promise impossible time scales and to cut basic engineering corners to meet a deadline.
7. :book: Make Quality a Requirements Issue.
- :black_nib: Great software today is often preferable to perfect software tomorrow.
- :black_nib: Don't spoil a perfectly good program by over-embellishment and over-refinement.
#### *Your Knowledge Portfolio*
- :black_nib: Your knowledge and experience are your most important professional assets, but unfortunately they're expiring assets.
- :black_nib: Managing your knowledge portfolio is very similar to managing a financial portfolio.
- :black_nib: Build your portfolio:
    - *Invest regularly* - Invest in your knowledge portfolio regularly, even small amount.
    - *Diversify* - the more different things you know, the more valuable you are.
    - *Manage risks* - in the terms of risk-reward standards, the technology spectrum is pretty wide, don't pull all your technical eggs in one basket.
    - *Buy low, sell high* - learning an emerging technology before it becomes popular can be priceless.
    - *Review and rebalance* - the industry is very dynamic, you should review what you learn, to keep in mind that it's relevant.
8. :book: Invest Regularly in Your Knowledge Portfolio.
- :black_nib: Goals:
    - Learn at least one new language every year.
    - Read a technical book each quarter.
    - Read non-technical books.
    - Take classes / online course.
    - Participate in local user groups / meetups.
    - Experiments with different environments, change one in a while your tools set (OS, IDE, etc..)
    - Stay current, keep updated with magazines about different technologies.
    - Get wired, connect to newsgroups to get the ins and outs of new language/technology you want to get into
- :black_nib: The process of learning will expand your thinking, opening you to new possibilities and new ways of doing things.
- :black_nib: Always have something to read in an otherwise dead moment
9. :book: Critically Analyze What You Read and Hear.
#### *Communicate!*
- :black_nib: A good idea is an orphan without effective communication
- :black_nib: Plan what you want to say
- :black_nib: Jot down the ideas you want to communicate, and plan a couple of strategies for getting them across
- :black_nib: You need to understand the needs, interests, and capabilities of your audience
- :black_nib: By making the appropriate pitch to each group, you'll get them all excited about your project
- :black_nib: Make what you're saying relevant in time, as well as in content
- :black_nib: Adjust the style of your delivery to suit your audience
- :black_nib: There is no excuse for producing poor-looking printed documents
- :black_nib: If possible, involve your readers with early drafts of your document. Get their feedback, and pick their brains
- :black_nib: If you want people to listen to you: listen to them Turn the meeting into a dialog, and you'll make your point more effectively
- :black_nib: Always respond to e-mails and voice mails
10. :book: It's Both What You Say and the Way You Say It.

## *2. A Pragmatic Approach:*
#### **The Evils of Duplication**
- :black_nib: Programmers are constantly in maintenance mode
- :black_nib: It's easy to duplicate knowledge, and when we do so, we invite a maintenance nightmare
11. :book: DRY - Don't Repeat Yourself.
- :black_nib: Structures in multiple languages can be built from a common metadata representation using a simple code generator
- :black_nib: keep the low-level knowledge in the code, reserve the comments for high-level explanations
- :black_nib: "Shortcuts make for long delays."
- :black_nib: Have a central place in the source tree where utility routines and scripts can be deposited
12. :book: Make It Easy to Reuse
#### **Orthogonality**
- :black_nib: Two or more things are orthogonal if changes in one do not affect any of the others
13. :book: Eliminate Effects Between Unrelated Things.
- :black_nib: You get two major benefits if you write orthogonal systems: increased productivity and reduced risk
- :black_nib: Separating infrastructure from application. Each major infrastructure component gets its own subteam. Each obvious division of application functionality is similarly divided
- :black_nib: Ask yourself how decoupled your design is from changes in the real world
- :black_nib: When you bring in a toolkit, ask yourself whether it imposes changes on your code that shouldn't be there
- :black_nib: Rules about coding:
    - Keep your code decoupled
    - Avoid global data
    - Avoid similar functions
