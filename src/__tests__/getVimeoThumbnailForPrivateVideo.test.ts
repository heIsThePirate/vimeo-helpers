import axios from 'axios';
import { getVimeoThumbnailForPrivateVideo } from '../index';

jest.mock('axios');

describe('Testing getVimeoThumbnailForPrivateVideo', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('should return a thumbnail url', () => {
    const videoId = '123';
    const expectedThumbnailUrl = 'https://i.vimeocdn.com/video/123_640x360.jpg';
    mockedAxios.get.mockResolvedValue({ data: { pictures: { sizes: [{ width: 640, link: expectedThumbnailUrl }] } } });

    expect(getVimeoThumbnailForPrivateVideo(videoId)).resolves.toEqual(expectedThumbnailUrl);
  });

  test('should throw an error if no thumbnail of specified width found', () => {
    const videoId = '123';
    const expectedThumbnailUrl = 'https://i.vimeocdn.com/video/123_640x360.jpg';
    mockedAxios.get.mockResolvedValue({ data: { pictures: { sizes: [{ width: 640, link: expectedThumbnailUrl }] } } });

    expect(getVimeoThumbnailForPrivateVideo(videoId, 800))
      .rejects.toThrow('Sorry! No thumbnail for the specified width found. Please try again with a different width (or use default).');
  });

  test('should catch the exception and throw an error message', () => {
    const videoId = '123';
    mockedAxios.get.mockRejectedValue(new Error('Custom error message'));

    expect(getVimeoThumbnailForPrivateVideo(videoId)).rejects.toThrow('Custom error message');

    mockedAxios.get.mockRejectedValue(new Error(''));

    expect(getVimeoThumbnailForPrivateVideo(videoId)).rejects.toThrow('Sorry! Failed to reach Vimeo at the moment.');
  });
});
