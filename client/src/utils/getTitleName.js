export const getTitleName = (searchType) => {
  switch (searchType) {
    case 'popular':
      return 'Популярные фильмы';
    case 'top_rated':
      return 'Рейтинговые фильмы';
    case 'upcoming':
      return 'Новинки';
    case 'now_playing':
      return 'Сейчас на экранах';
  
    default:
      return 'Результаты поиска';
  }
}
