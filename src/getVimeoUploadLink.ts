import axios, { AxiosResponse } from 'axios';
import { GetVimeoUploadLinkResponse } from './models';
import { postHeaders } from './utils';

/**
 * Get an upload link from Vimeo.
 * @param blobSize The size of the video in bytes.
 * @param name The name of the video that would be displayed in Vimeo.
 * @returns A promise that resolves to an object containing the upload link and the video URL.
 */
const getVimeoUploadLink = async (blobSize: number = 0, name: string = 'Untitled') : Promise<GetVimeoUploadLinkResponse> => {
  let uploadLink = '';
  let uri = '';
  let videoUrl = '';

  try {
    const response: AxiosResponse = await axios.post('https://api.vimeo.com/me/videos', {
      headers: postHeaders,
      data: {
        upload: {
          approach: 'tus',
          size: blobSize,
        },
        name,
      },
    });

    uploadLink = response.data.upload.upload_link;
    videoUrl = response.data.link;
    uri = response.data.uri;
  } catch (err: any) {
    throw new Error(err.message || 'Sorry! Failed to reach Vimeo at the moment');
  }

  return { uploadLink, uri, videoUrl };
};

export default getVimeoUploadLink;
