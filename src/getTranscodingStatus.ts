import axios, { AxiosResponse } from 'axios';
import { authHeaders } from './utils';

/**
 * Get the transcoding status of a vimeo video.
 * @param videoId The video id for an uploaded/existing video.
 * @returns The transcoding status ('complete'/'in_progress'/'error').
 */
const getTranscodingStatus = async (videoId: string): Promise<string> => {
  try {
    const response: AxiosResponse = await axios.get(
      `https://api.vimeo.com/me/videos/${videoId}`,
      {
        headers: authHeaders,
      },
    );

    if (response?.data) {
      return response.data.transcode.status;
    }
    throw new Error('Sorry! Failed to fetch the transcoding status');
  } catch (err) {
    throw new Error('Sorry! Failed to reach Vimeo at the moment');
  }
};

export default getTranscodingStatus;
