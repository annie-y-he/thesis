## TODO: 
- save camera position before link
```js
const handleLink = (event: React.MouseEvent) => {
  event.preventDefault();
  const { camera } = useThree();
  console.log(camera.position);
};
```
- [x] main: fix popup format
- [x] main: add more prompt
- [x] pata: application windows
- [x] pata: window resize
- [x] main: mobile versions
- [x] meta: mobile versions
- [x] topo: mobile versions
- [x] pata: mobile versions
- [x] uni: mobile versions
- [x] main: favicon and metadata
- [x] pata: global mouse position instead of three pointer, also consider when dragging windows.
- [x] pata: drag control, stop propagation.
- [x] topo: mobile video auto fullscreen
- [x] pata: limit on orbit control in mobile
- [x] pata: mobile drag object not working (they are working)
- [x] main: server favicon not changed
- [x] all: color theme
- [x] pata: retain thread memory
- [x] pata: bold unread message
- [x] pata: safe use secret key
- [x] pata: add previous assistant email
- [x] pata: specific gpt model runs multiple times

main:
- fix diagram sphere shading
- hover color for verses
- points overlay
- monad verse world definition
- statement
- disclaimer
- safari button color is blue

meta:
- add back link
- content
- rerender

uni:
- add back link
- content

pata:
- add back link
- content
- scan desk and objects
- captcha
- more persona
- default window size
- signin page and username

topo:
- content
- smaller user prof
- add channel icon

all:
- back link
- make icon general function
- mobile safari tabbar
- video cover
- video subtitle
- fonts

pre:
- panel discussion outline
