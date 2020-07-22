import emojis from './data/emoji.json';

export default function filterEmoji(searchtext, limit) {
  return emojis
    .map(emoji => emoji.symbol)
    .slice(0, limit);
}
