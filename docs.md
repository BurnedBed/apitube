# Documentation

| Type | Interface | Key |

### APITUBE#fetch()

```ts
/**
 * @method fetch
 * @description Fetch from the YouTube Data API v3
 * @param {String} endpoint The endpoint / pathname
 * @param {Object} options The options of this method
 * @param {Boolean} options.uploadBaseURL Determines whether you want to set the baseURL to 'https://www.googleapis.com/upload/youtube/v3'
 * @param {String} options.method The HTTPS method to be used
 * @param {Boolean} options.isOAuth If you would like to use your access_token for this request
 * @param {Object} options.params The parameters of the URL
 * @param {Object} options.body The request body
 * @param {Boolean} options.debug Returns the request object if set to true (does not make the request)
 */
```

### APITUBE#convertToVideoId()

```ts
/**
 * @method ConvertToVideoId
 * @description Converts a video URL to Id
 * @param {String} videoUrl
 */
```

### APITUBE#convertToChannelId()

```ts
/**
 * @method ConvertToChannelId
 * @description Converts a channel URL to Id
 * @param {String} channelUrl
 */
```

### APITUBE#convertToPlaylistId()

```ts
/**
 * @method ConvertToPlaylistId
 * @description Converts a playlist URL to Id
 * @param {String} playlistUrl
 */
```
