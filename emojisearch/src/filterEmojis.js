import emojis from './data/emoji.json';

export default function filterEmoji(searchText, limit) {
  if (searchText) {
    return emojis.filter(emoji => emoji.title.toLowerCase() === searchText.toLowerCase());
  }
  return emojis.slice(0, limit);
}
