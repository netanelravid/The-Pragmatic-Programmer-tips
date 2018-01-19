# The Pragmatic Programmer tips
After a lot of books and tutorials I've read on *'How to programming in language X'* and *'How to Use framework Y'* I've search for a new book.
I've look for a book which will contribute me in a different way, something which will make me one step closer to be a better software developer, more than a language-framework-skill user.

The book **The Pargmatic Programmer** made me to realize that code writing its just a side effect as a developer.

Right now I'm reading this book and I'm collecting some tips during my journey.
I will write here some of my own tips from time to time, and also the tips mentioned which mentioned by the authors. hope it will be useful to you.

Tips icons:
- The TPP book tips will be :book:
- My tips will be :black_nib:

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
#### **Reversibility**
- :black_nib: There is always more than one way to implement something
- :black_nib:  Requirements, users, and hardware change faster than we can get the software developed
14. :book: There Are No Final Decisions
#### **Tracer Bullets**
- Something that gets us from
a requirement to some aspect of the final system quickly, visibly, and
repeatably.
15. Use Tracer Bullets to Find the Target
- Tracer code is not fully functional. However, once you
have achieved an end-to-end connection among the components of your
system, you can check how close to the target you are, adjusting if
necessary.
- Advantages:
    - Users get to see something working early
    - Developers build a structure to work in
    - You have an integration platform
    - You have something to demonstrate
    - You have a better feel for progress
- A small body of code is easy and quick to change
- Prototyping
generates disposable code. Tracer code is lean but complete, and forms part
of the skeleton of the final system
#### **Prototypes and Post-it Notes**
- We tend to think of prototypes as code-based, but they don't always have to
b, we can build prototypes out of different materials.
Post-it notes are great for prototyping dynamic things, drawn with a paint program, or
with an interface builder
- Things to Prototype:
    - Architecture
	- New functionality in an existing system
	- Structure or contents of external data
	- Third-party tools or components
	- Performance issues
	- User interface design
- Prototyping is a learning experience. Its value lies not in the code produced,
but in the lessons learned
16. Prototype to Learn
- When building a prototype you can ignore:
    - Correctness
    - Completeness
    - Robustness (error checks)
    - Style
- Prototypes can be
deceptively attractive to people who don't know that they are just
prototypes. You must make it very clear that this code is disposable,
incomplete, and unable to be completed.
#### **Domain Languages**
17. Program Close to the Problem Domain
- By coding at a higher level of abstraction, you are free to
concentrate on solving domain problems, and can ignore petty
implementation details
- There are many users of an application: end
users, operations staff, support and maintenance programmers, etc, each of these users has their own problem domain.
- A mini-language may be in a line-oriented, easily parsed
format, it can
be parsed simply using switch statements, or using regular expressions
#### **Estimating**
18. Estimate to Avoid Surprises
- How accurate is accurate enough? depends on the context, its a high accuracy or a ballpark figure?
- the units you use
make a difference in the interpretation of the result (days, weeks, months)
- Ask someone who's
already done it, cast
around for someone who's been in a similar situation in the past
- You need to think about the scope before
starting to guess
- build a rough and ready bare-bones mental model, the process leads to discoveries of underlying patterns
and processes that weren't apparent on the surface
- Break the model into components, you'll need
to discover the mathematical rules that describe how these components
interact
- each component have parameters that affect
how it contributes to the overall model
- work out which parameters have the most impact on the result, and
concentrate on getting them about right
- varying the values of the critical
parameters, until you work out which ones really drive the model. A
spreadsheet can be a big help
- record your estimates so you can see how close
you were
19. Iterate the Schedule with the Code 
- When you asked for an estimate, say "I'll get back to you", estimates given at the coffee machine will come back to
haunt you

## *3. The Basic Tools*
#### **Intro**
- The better your tools, and the better you know
how to use them, the more productive you can be
- Always be on the lookout for better ways of
doing things. If you come across a situation where you feel your current
tools can't cut it, make a note to look for something different or more
powerful that would have helped
#### **The Power of Plain Text**
20. Keep Knowledge in Plain Text
- Insurance against obsolescence, human-readable forms of data will outlive all
other forms of data
- Virtually every tool in the computing universe can operate on plain text
- Easier testing, it is
a simple matter to add, update, or modify the test data without having to
create any special tools to do so.
#### **Shell Games**
- The command line is
better suited when you want to quickly combine a couple of commands
21. Use the Power of Command Shells 