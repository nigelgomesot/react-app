import emojis from './data/emoji.json';

export default function filterEmoji(searchText, limit) {
    return emojis.filter(emoji => {
      if (emoji.title.toLowerCase() === searchText.toLowerCase()) {
        return true;
      }

      if (emoji.keywords.toLowerCase().includes(searchText.toLowerCase())) {
        return true;
      }

      return false;
    }).slice(0, limit);
}
