
import createCache from '@emotion/cache';
import createEmotionServer from '@emotion/server/create-instance';

export default function createEmotionCache() {
  return createCache({ key: 'css', prepend: true });
}

const cache = createEmotionCache();

export const extractCriticalToChunks = (html: any) => {
  const { extractCriticalToChunks } = createEmotionServer(cache);
  return extractCriticalToChunks(html);
};

export const constructStyleTagsFromChunks = (emotionChunks: any) => {
  const { constructStyleTagsFromChunks } = createEmotionServer(cache);
  return constructStyleTagsFromChunks(emotionChunks);
};