> Updating anything usually requires an `access_token`

### Updating a video

```ts
import APITUBE from 'apitube';
const yt = new APITUBE(apikey: string, access_token: string);

yt.fetch('/videos/', {
	method: 'PUT',
	isOAuth: true,
	params: { part: 'snippet' },
	body: {
		id: 'PASTE-VIDEOID',
		snippet: {
			title: 'This is the new title of this video!',
			categoryId: 'get a list of videoCategories here: https://gist.github.com/dgp/1b24bf2961521bd75d6c or use videoCategories#list'
		}
	}
}).then(response => console.log(response?.error ?? response));
```
