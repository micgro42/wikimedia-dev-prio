# dev-pain

This was intended to be the proof of concept for a static web app
to prioritize tasks on phabricator via its Conduit API.

Unfortunately, this is not feasible due to [design decisions](https://secure.phabricator.com/T7304) of the
phabricator developers that declined to make it possible to make this API available to requests from a different origin,
e.g., wherever this app would have been hosted.

See also:
* https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
* https://phabricator.wikimedia.org/T262215

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
