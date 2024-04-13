## TODO: 
- save camera position before link
```js
const handleLink = (event: React.MouseEvent) => {
  event.preventDefault();
  const { camera } = useThree();
  console.log(camera.position);
};
```

main:
- [x] fix popup format
- [x] add more prompt
- [x] mobile versions
- [x] favicon and metadata
- [x] server favicon not changed
- [x] fix diagram sphere shading
- [x] hover color for verses
- [x] points overlay
- points generation
- monad verse world definition
- statement
- disclaimer
- safari button color is blue
- save camera position before link (seems like safari does this already)
- random points reset after click
- default view top/bottom rotating
- add "language" to intersubject

meta:
- [x] mobile versions
- [x] content
- [x] add back link
- rerender
- text errors in video
- debug section
- disable keyword user select
- gpt unable to figure out logic

uni:
- [x] uni: mobile versions
- [x] titles
- [x] collection name and description
- [x] plos name design
- [x] article abstract
- [x] cover images
- [x] add back link
- article outlines
- article contents
- article refine abstract
- refine cover image
- plos logo design
- authors name design
- keywords

pata:
- [x] application windows
- [x] window resize
- [x] mobile versions
- [x] global mouse position instead of three pointer, also consider when dragging windows.
- [x] drag control, stop propagation.
- [x] limit on orbit control in mobile
- [x] mobile drag object not working (they are working)
- [x] retain thread memory
- [x] bold unread message
- [x] safe use secret key
- [x] add previous assistant email
- [x] specific gpt model runs multiple times
- [x] add back link
- [x] default window size
- [x] email grid stack for mobile
- [x] scan desk and objects
- [x] fix window min width vs init width
- [x] add vs code printed function 
- [x] fix slow problem 
- content
- captcha
- more persona
- signin page and username
- mobile typing auto zoom
- enter key for send email
- pata keywords

topo:
- [x] mobile versions
- [x] mobile video auto fullscreen
- [x] focus no outline
- content
- smaller user prof
- add channel icon
- keywords
- scene by scene description

about:
- intro
- [x] statements
- [x] definitions
- [x] back button
- [x] challenge
- [x] gpt
- instructions
- style

all:
- [x] color theme
- back link
- make icon general function
- mobile safari tabbar
- video cover
- video subtitle
- fonts
- add "loading page"
- user select

pre:
- panel discussion outline
