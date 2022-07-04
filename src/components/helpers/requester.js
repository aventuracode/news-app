export const URL_API = 'https://newsapi.org/v2/';
export const TOPHEADLINES = 'top-headlines?';
export const SEARCH = 'everything?';

export const DEFAULCOUNTRY = 'country=ar';
export const SEARCHTERM = 'q=bitcoin&';
export const APIKEY = 'apiKey=fff512780b26425b9684978188f23c32';
export const PAGESIZE = '&pageSize=10&';
export const PAGE = '&page=';
export const URL_TOPHEADLINES = URL_API + TOPHEADLINES + APIKEY + PAGESIZE;
export const URL_SEARCH = URL_API + SEARCH + APIKEY + PAGESIZE;

// https://newsapi.org/v2/top-headlines?country=us&apiKey=cbab2fea4a3f4bb7be51a649924313fc&pageSize=10&page=2
// https://newsapi.org/v2/everything?q=bitcoin&apiKey=cbab2fea4a3f4bb7be51a649924313fc&pagesize=10&page=1
