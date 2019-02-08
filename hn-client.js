const fetch = require('node-fetch');

// implemented from: https://github.com/HackerNews/API

const HN_PREFIX = 'https://hacker-news.firebaseio.com/v0/';

const TOP_STORIES = 'topstories';
const ITEM = 'item';

function hnFetch(type, id = '') {
  const url = id
    ? `${HN_PREFIX}${type}/${id}.json`
    : `${HN_PREFIX}${type}.json`;
  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => {
      if (!isStatusOk(res.status)) {
        throw res;
      }
      return res.json();
    })
    .then(res => res)
    .catch(error => console.error(error));
}

function isStatusOk(statusCode) {
  return statusCode === 200 || statusCode === 304;
}
async function main() {
  const storyIds = await hnFetch(TOP_STORIES);
  const stories = await Promise.all(
    storyIds.slice(0, 20).map(storyId => hnFetch(ITEM, storyId))
  );

  console.log(
    stories.map(story => {
      delete story.kids;
      return story;
    })
  );
}

main();
