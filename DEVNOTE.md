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
- [x] default view top/bottom rotating
- [x] points generation
- [x] safari button color is blue
- [x] text color
- [x] add "language" to intersubject
- [ ] keyword top left
- [x] add close button
- [x] zoom limit
- [ ] edit definition

meta:
- [x] mobile versions
- [x] content
- [x] add back link
- [x] disable keyword user select
- [x] gpt unable to figure out logic
- rerender
- text errors in video
- debug section

uni:
- [x] uni: mobile versions
- [x] titles
- [x] collection name and description
- [x] plos name design
- [x] article abstract
- [x] cover images
- [x] add back link
- [x] plos logo design
- [x] keywords
- article contents
- cover image
- authors name design
- collection cover

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
- [x] add MacroSock Doors
- [x] disable select
- [x] mobile typing auto zoom
- [x] enter key for send email
- [x] printer sound
- [x] signin page and username
- [x] pata keywords
- [x] chrome
- [x] sound hash
- [x] prob shift char
- [ ] sample text
- [x] demo text on paper
- [x] click inbox to view emails
- [x] device mesh
- [ ] captcha
- story line
- [ ] more persona
- [ ] paper monospace
- [x] change pata hedron loc
- [ ] device led

topo:
- [x] mobile versions
- [x] mobile video auto fullscreen
- [x] focus no outline
- [x] disable selection
- [x] content
- [x] smaller user prof
- [x] add channel icon
- [x] keywords
- scene by scene description
- [ ] video cover
- [x] video subtitle
- [x] video trim
- [x] loading video has edge

about:
- [x] statements
- [x] definitions
- [x] back button
- [x] challenge
- [x] gpt
- [x] gpt database
- [x] instructions
- [x] style
- [x] intro
- [x] disclaimer
- [x] acknowledgement
- [x] mobile ask width
- [x] gpt use plain text
- [x] prewrap
- [x] change assistants

all:
- [x] color theme
- [x] back link
- [x] make icon general function
- [x] mobile safari tabbar
- [x] fonts
- [x] user select
- [x] disable zoom
- [x] safari toolbar height
- [x] inactivity redirect 

pre:
- [x] panel discussion outline
- panel discssion shooting
- panel discussion editing
