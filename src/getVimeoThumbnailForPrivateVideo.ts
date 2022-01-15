import axios, { AxiosResponse } from 'axios';
import { authHeaders } from './utils';

interface Image {
    width: number;
    link: string;
}

/**
 * Get the thumbnail image of a 'private' Vimeo video.
 * @param videoId The video id for an existing 'private' video.
 * @param thumbnailWidth The width of the required thumbnail image. Defaults to '640px' (standard: large).
 * @returns A promise that resolves to the URL for the thumbnail image.
 */
const getVimeoThumbnailForPrivateVideo = async (videoId: string, thumbnailWidth: number = 640) : Promise<string> => {
  try {
    const response: AxiosResponse = await axios.get(`https://api.vimeo.com/videos/${videoId}`, {
      headers: authHeaders,
    });

    const data = await response.data;

    const thumbnail: Image[] = data?.pictures?.sizes?.filter((img: Image) => img.width === thumbnailWidth);

    if (thumbnail?.length) {
      return thumbnail[0].link;
    }
    throw new Error('Sorry! No thumbnail for the specified width found. Please try again with a different width (or use default).');
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment.');
  }
};

export default getVimeoThumbnailForPrivateVideo;
