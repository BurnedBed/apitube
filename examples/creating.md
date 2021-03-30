> Creating anything usually requires an `access_token`

### Creating a video

```ts
const apitube = require('apitube').default;
const fs = require('fs');
const yt = new APITUBE(apikey: string, access_token: string);
const video = fs.readFileSync('./assets/myvid.mp4');
yt.fetch('/videos/', {
	method: 'POST',
	isOAuth: true,
	params: { part: 'snippet' },
	body: video
}).then(response => console.log(response?.error ?? response));
```

### Creating a channelBanner

```ts
const apitube = require('apitube').default;
const fs = require('fs');
const yt = new APITUBE(apikey: string, access_token: string);
const channelBanner = fs.readFileSync('./assets/banner.png');
yt.fetch('/channelBanners/insert/', {
	method: 'POST',
	isOAuth: true,
	body: channelBanner
}).then(response => console.log(response?.error ?? response));
```

### Setting a thumbnail

```ts
const apitube = require('apitube').default;
const fs = require('fs');
const yt = new APITUBE(apikey: string, access_token: string);
const thumbnail = fs.readFileSync('./assets/thumbnail.png');
yt.fetch('/thumbnails/set/', {
	uploadBaseURL: true,
	method: 'POST',
	isOAuth: true,
	params: { videoId: 'PASTE-VIDEOID' },
	body: thumbnail
}).then(response => console.log(response?.error ?? response));
```
