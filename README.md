# APITUBE

#### APITUBE is a NodeJS Module to interact with the `YouTube Data API v3` | Join our [Discord Server](https://monkedev.com/r/discord) for support

> **Disclaimer**: This package relies on user feedback. Check out our [Contributing](https://github.com/BurnedBed/apitube/blob/main/CONTRIBUTING.md) guide to see how you can help!

---

## Installation

```
- Stable
npm install apitube
- Developer
npm github:BurnedBed/apitube#dev
```

## Quick Example

```ts
const APITUBE = require('apitube');
const yt = new APITUBE(apikey: string, access_token: string);

yt.fetch('/search/', {
	params: {
		part: 'snippet',
		type: 'videos',
		q: 'Monkeys',
		maxResults: 5
	}
}).then(response => {
	const titles = response?.error ?? response?.items.map(v => v.snippet.title);
	return console.log(titles);
});
```

## **T**able **O**f **C**ontents

- [Documentation](https://github.com/BurnedBed/apitube/blob/main/docs.md)
- [Tutorials](https://github.com/BurnedBed/apitube/blob/main/tutorials.md)
- [Examples](https://github.com/BurnedBed/apitube/blob/main/examples/)
- [Contributing](https://github.com/BurnedBed/apitube/blob/main/CONTRIBUTING.md)
- [License](https://github.com/BurnedBed/apitube/blob/main/LICENSE)

## Notice

##### The YouTube Data API v3 requires you to have an `apikey` and an `access_token` (if accessing your Google account). You can check out a tutorials on how to receive both by [clicking here]().
