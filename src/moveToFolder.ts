import axios from 'axios';
import { authHeaders } from './utils';

/**
 * Move a Vimeo video to a new folder
 * @param videoId The videoId for an existing Vimeo video that neeeds to be moved.
 * @param folderId The folderId for the folder that the video should be moved to.
 * @returns A promise that resolves to a status of 'success' or throws an error.
 */
const moveToFolder = async (videoId: string, folderId: string): Promise<string> => {
  try {
    await axios.put(`https://api.vimeo.com/me/projects/${folderId}/videos/${videoId}`, {
      headers: authHeaders,
    });

    return 'success';
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to move video at the moment.');
  }
};

export default moveToFolder;
