> Deleting anything requires an `access_token`

### Deletes a video

```ts
(async () => {
	const APITUBE = require('apitube');
	const yt = new APITUBE(apikey: string, access_token: string);

	try {
		await yt.fetch('/search/', {
			method: 'DELETE',
			isOAuth: true,
			params: { id: 'PASTE-VIDEOID' }
		});

		return console.log('(204) Success');
	}
	catch (err) {
		return console.error(err);
	}
})();
```
