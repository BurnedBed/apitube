/* eslint-disable no-tabs */
const p = require('phin');
module.exports = class APITUBE {
	// eslint-disable-next-line camelcase
	constructor(apikey, access_token) {
		this.apikey = apikey;
		// eslint-disable-next-line camelcase
		this.access_token = access_token;
	}

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
	async fetch(endpoint, options) {
		let url = options?.uploadBaseURL === true ? 'https://www.googleapis.com/upload/youtube/v3' : 'https://www.googleapis.com/youtube/v3';
		let params = '';
		if (endpoint) url += endpoint;
		else throw new Error('Provide an endpoint / pathname');
		if (options?.params) {
			if (typeof options.params !== 'object') throw new Error('options.params must be an object');
			for (const [k, v] of Object.entries(options.params)) {
				if (params.length === 0) {
					params += `?${encodeURI(k)}=${encodeURI(v)}`;
				}
				else {
					params += `&${encodeURI(k)}=${encodeURI(v)}`;
				}
			}

			url += params;
		}

		const reqObj = {
			url: url,
			method: options?.method ?? 'GET',
			parse: 'json'
		};
		if (options?.isOAuth === true) reqObj.headers = { Authorization: `Bearer ${this.access_token}` };
		else reqObj.url += `${params.length === 0 ? '?' : '&'}key=${this.apikey}`;

		if (options?.body) reqObj.data = options.body;

		if (options && options.debug === true) return reqObj;
		return p(reqObj)
			.then(res => res.body);
	}

	/**
	 * @method ConvertToVideoId
	 * @description Converts a video URL to Id
	 * @param {String} videoUrl
	 */
	convertToVideoId(videoUrl) {
		if (!videoUrl || typeof videoUrl !== 'string') throw new Error('Provide a playlistUrl');
		const videoRegex = /^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube\.com|youtu.be))(\/(?:[\w-]+\?v=|embed\/|v\/)?)([\w-]+)(\S+)?$/;
		return videoUrl.match(videoRegex)[5];
	}

	/**
	 * @method ConvertToChannelId
	 * @description Converts a channel URL to Id
	 * @param {String} channelUrl
	 */
	convertToChannelId(channelUrl) {
		if (!channelUrl || typeof channelUrl !== 'string') throw new Error('Provide a playlistUrl');
		const channelRegex = /^(?:(http|https):\/\/[a-zA-Z-]*\.{0,1}[a-zA-Z-]{3,}\.[a-z]{2,})\/channel\/([a-zA-Z0-9_]{3,})$/;
		return channelUrl.match(channelRegex)[3];
	}

	/**
	 * @method ConvertToPlaylistId
	 * @description Converts a playlist URL to Id
	 * @param {String} playlistUrl
	 */
	convertToPlaylistId(playlistUrl) {
		if (!playlistUrl || typeof playlistUrl !== 'string') throw new Error('Provide a playlistUrl');
		const playlistRegex = /^(https|http):\/\/(?:www\.)?youtube\.com\/watch\?(?:&.*)*((?:v=([a-zA-Z0-9_-]{11})(?:&.*)*&list=([a-zA-Z0-9_-]{18}))|(?:list=([a-zA-Z0-9_-]{18})(?:&.*)*&v=([a-zA-Z0-9_-]{11})))(?:&.*)*(?:#.*)*$/;
		return playlistUrl.match(playlistRegex)[5];
	}
};
