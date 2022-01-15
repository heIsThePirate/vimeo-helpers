import axios from 'axios';
import { authHeaders } from './utils';

/**
 * Delete a vimeo video.
 * @param videoId The video id for an existing video.
 * @returns A promise that resolves to a status of 'success' or throws an error.
 */
const deleteVimeoVideo = async (videoId: string): Promise<string> => {
  try {
    await axios.delete(`https://api.vimeo.com/videos/${videoId}`, {
      headers: authHeaders,
    });

    return 'success';
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment');
  }
};

export default deleteVimeoVideo;
