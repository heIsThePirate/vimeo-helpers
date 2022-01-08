import axios, { AxiosResponse } from 'axios';
import { authHeaders } from './utils';

/**
 * Delete a vimeo video.
 * @param videoId The video id for an existing video.
 * @returns The deletion status.
 */
const deleteVimeoVideo = async (videoId: string) => {
  try {
    const response: AxiosResponse = await axios.delete(`https://api.vimeo.com/videos/${videoId}`, {
      headers: authHeaders,
    });

    return response.data;
  } catch (err) {
    throw new Error('Sorry! Failed to reach Vimeo at the moment');
  }
};

export default deleteVimeoVideo;
