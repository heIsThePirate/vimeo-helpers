import axios from 'axios';
import { patchHeaders } from './utils';

/**
 * Upload a blob to Vimeo (using the TUS resumable approach).
 * @param blob The blob to upload.
 * @param uploadLink The upload link from Vimeo.
 * @returns The upload status (or error).
 */
const uploadBlobToVimeo = async (blob: Blob, uploadLink: string): Promise<string> => {
  try {
    let response = await axios.patch(uploadLink, {
      headers: patchHeaders,
      data: blob,
    });

    // The video finishes uploading when the 'upload-offset' header of the response is equal to the blobSize
    while (
      parseInt(response.headers['upload-offset'], 10) !== blob.size
    ) {
      // eslint-disable-next-line no-await-in-loop
      response = await axios.patch(uploadLink, {
        headers: {
          ...patchHeaders,
          'Upload-Offset': parseInt(response.headers['upload-offset'], 10),
        },
        data: blob,
      });
    }

    return 'success';
  } catch (err) {
    throw new Error('Sorry! Failed to reach Vimeo at the moment');
  }
};

export default uploadBlobToVimeo;
