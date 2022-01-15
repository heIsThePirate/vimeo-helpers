import axios, { AxiosResponse } from 'axios';

enum VideoSize {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

/**
 * Get the thumbnail image of a 'public' Vimeo video
 * @param videoId The video id for an existing 'public' Vimeo video.
 * @param size The size of the thumbnail to get. Defaults to 'large' (w640).
 * @returns A promise that resolves to the URL of the thumbnail.
 */
const getVimeoThumbnailForPublicVideo = async (videoId: string, size: VideoSize = VideoSize.large) => {
  try {
    const response: AxiosResponse = await axios.get(`https://vimeo.com/api/v2/video/${videoId}.json`);
    return response.data[0][`thumbnail_${size}`];
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to get video thumbnail at the moment.');
  }
};

export default getVimeoThumbnailForPublicVideo;
