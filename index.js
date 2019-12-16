var retext = require ('retext');
var language = require ('retext-language');
var languageData = require ('./languageData');

const identifyLanguage = (data = '') => {
  return new Promise (function (res, rej) {
    retext ()
      .use (language)
      .use (() => cst => {
        const [result] = cst.children
          .map (e => ({
            languages: ((e.data || {}).languages || [])
              .map (e => ({
                lang: e[0],
                matchScore: e[1],
                data: languageData.map[e[0]],
              }))
              .sort ((a, b) => -a.matchScore + b.matchScore),
          }))
          .filter (e => e.languages.length > 0);
        const [resolution = {}] = result.languages;
        const {lang: resolutionLang = 'undefined'} = resolution;
        const languageObject = languageData.map[resolutionLang] || {};
        const {
          lang: match_language = 'undefined',
          matchScore: match_score,
        } = resolution;
        res ({
          match_score,
          match_language,
          match_language_data: languageObject,
          match_languages: result.languages,
          match_languages_count: (result.languages || []).length,
        });
      })
      .process (data.replace (/\n/g, ' '));
  });
};

module.exports = identifyLanguage;
