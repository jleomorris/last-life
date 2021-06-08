// Base URL
const base_url = 'https://api.rawg.io/api/';
const API_KEY = process.env.REACT_APP_RAWG_API_KEY;

// Calculate Month
const getCurrentMonth = () => {
  const month = new Date().getMonth() + 1;

  if (month < 10) {
    return `0${month}`;
  } else {
    return month;
  }
};

// Calculate Day
const getCurrentDay = () => {
  const day = new Date().getDate();

  if (day < 10) {
    return `0${day}`;
  } else {
    return day;
  }
};

// Current day/month/year
const currentYear = new Date().getFullYear();
const currentMonth = getCurrentMonth();
const currentDay = getCurrentDay();
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular games
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=`;
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=`;
const new_games = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=`;

export const upcomingGamesUrl = (number) =>
  `${base_url}${upcoming_games}${number}&key=${API_KEY}`;
export const popularGamesUrl = (number) =>
  `${base_url}${popular_games}${number}&key=${API_KEY}`;
export const newGamesUrl = (number) =>
  `${base_url}${new_games}${number}&key=${API_KEY}`;

// Game details
export const gameDetailsUrl = (game_id) =>
  `${base_url}games/${game_id}?key=${API_KEY}`;

// Game screenshots
export const gameScreenshotUrl = (game_id) =>
  `${base_url}games/${game_id}/screenshots?key=${API_KEY}`;

// Searched game
export const searchGameUrl = (game_name, number) =>
  `${base_url}games?search=${game_name}&page_size=${number}&key=${API_KEY}`;
