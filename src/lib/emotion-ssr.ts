
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

export const cache = createCache({ key: 'css', prepend: true });

export const extractCriticalToChunks = (html: any) => {
  const { extractCriticalToChunks } = createEmotionServer(cache);
  return extractCriticalToChunks(html);
};

export const constructStyleTagsFromChunks = (emotionChunks: any) => {
  const { constructStyleTagsFromChunks } = createEmotionServer(cache);
  return constructStyleTagsFromChunks(emotionChunks);
};