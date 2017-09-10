# simple-clock
A simple analog clock made with vanilla JS

## Core concepts

### Custom animation curves

We can use cubic bezier animation timings to imitate the ticking of a clock hand.

### CSS transforms

We can use transform-origin to change the point that an HTML element rotates on. There is a transition issue when transitioning between
359 degrees and 0 degrees. One solution is to keep counting up and never go back to 0 degrees. I opted to transition to check for the
transition and replace it with a transition to 360. During the second of time between this transition and the next, I disable the 
transition using JS and reset to 0 before enabling it again.
