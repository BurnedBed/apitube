> Searching requires an `apikey` in most use cases

### Searches for a video on YouTube with basic error handling

```ts
const APITUBE = require('apitube');
const yt = new APITUBE(apikey: string, access_token: string);

yt.fetch('/search/', {
	params: {
		part: 'snippet',
		type: 'videos',
		q: 'Monkeys',
		maxResults: 10
	}
}).then(response => {
	const titles = response?.error ?? response?.items.map(v => v.snippet.title);
	return console.log(titles);
});
```

### Searching for videos from a channel

```ts
const APITUBE = require('apitube');
const yt = new APITUBE(apikey: string, access_token: string);

yt.fetch('/search/', {
	params: {
		part: 'snippet',
		channelId: 'PASTE-CHANNELID',
		type: 'videos',
		maxResults: 50
	}
}).then(response => {
	const titles = response?.error ?? response?.items.map(v => v.snippet.title);
	return console.log(titles);
});
```
