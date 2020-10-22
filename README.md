# raffle.io test

My idea was to create a singleplayer version of [Colors Clash](https://colors-clash.netlify.app/) (naming in progress), a multiplayer game using socket.io which I developed this summer.

For that, outside the scope of the test, I updated the game's api to include authentification with JWT tokens and store the credentials in a MongoDB database, along with adding the logic for the singleplayer version of the game. The endpoints I wanted to use for the test are:
- **POST** /auth (public)
- **POST** /users/create (public)
- **GET** /challenges (protected)
- **GET** /challegnes/:id (protected)

Afterwards, using a top-down approach of how I wanted the game to look and work, I sketched a design.

![Design sketch](../media/design_sketch.jpeg?raw=true)

This enabled me to get a better overall picture of what I'm planning to build and prepare accordingly. Following a bottom-up approach, I created a small Scrum board for the poject to better visualize, prioritize and manage the tasks.

![Trello before](../media/trello_before.png?raw=true)

This is how the Scrum board looked when I started working on the test and the below picture resembles what I was able to do in 3 hours.

![Trello after](../media/trello_after.png?raw=true)

### Test user
**username:** raffle

**password:** raffletest

It is also possible to register new users (minimum password length is 6). The passwords are hashed before stored in the database, so you can rest assured I'm not planning any hacking.

## Packgaes
- [create-react-app](https://github.com/facebook/create-react-app) - React boilerplate
- [tailwindcss](https://tailwindcss.com/) - Styling
- [@reach/router](https://reach.tech/router/) - Routing
- [react-redux](https://react-redux.js.org/) - State management
- [axios](https://github.com/axios/axios) - HTTP client

## Playable game
As I had some free time and I couldn't just leave the game in that state without making it at least palyable, I created the [extra branch](../../tree/extra) which contains the code for the playable version.

There's also a live version hosted on Netlify available at this [link](https://colors-sp.netlify.app/).