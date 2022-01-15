import axios from 'axios';
import { getVimeoThumbnailForPublicVideo } from '../index';

jest.mock('axios');

describe('Testing getVimeoThumbnailForPublicVideo', () => {
  const mockedAxios = axios as jest.Mocked<typeof axios>;

  test('should return a thumbnail url', () => {
    const videoId = '123';
    const expectedThumbnailUrl = 'https://i.vimeocdn.com/video/123_640x360.jpg';
    mockedAxios.get.mockResolvedValue({ data: [{ thumbnail_large: expectedThumbnailUrl }] });

    expect(getVimeoThumbnailForPublicVideo(videoId)).resolves.toEqual(expectedThumbnailUrl);
  });

  test('should catch the exception and throw an error message', () => {
    const videoId = '123';
    mockedAxios.get.mockRejectedValue(new Error('Custom error message'));

    expect(getVimeoThumbnailForPublicVideo(videoId)).rejects.toThrow('Custom error message');

    mockedAxios.get.mockRejectedValue(new Error(''));

    expect(getVimeoThumbnailForPublicVideo(videoId)).rejects.toThrow('Sorry! Failed to get video thumbnail at the moment.');
  });
});
