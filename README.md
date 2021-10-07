# electo
My website I guess
## Contents
- /boot
  - /system: Probably my main "personal website". Simulates a visual OS booting
- /likes
  - /making
    - /hopscotch
      - /stuff: Generates the project player link for a .hopscotch file 
    - /random
      - /stuff: Kinda like a blog but less structured, ehh
    - /stereotypes: Don't mind (yet)
  - /balloons: Find the amount of balloons you own without looking it up in an ever-growing table every time
  - /ruining
    - /EGCode: EGCode's website
- /root: Simulates a linux OS but I have no plan of adding more commands, originally wanted it to be a terminal emulator with an EGCode REPL

also yes there's a dark mode switcher "library" that sets the "data-dark" attribute of the body tag to "true" when in dark mode. It also adds a css link tag to average.css, which is just a bit of css I find useful when I'm too lazy. If you don't want average.css just add a data-customcss to the body tag
```html
<script src="https://electogenius.github.io/electo/darkmodeswitch.js"></script>