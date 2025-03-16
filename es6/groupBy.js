const languages = [
  { title: "Javascript", type: "scripting" },
  { title: "Java", type: "Normal" },
  { title: "Python", type: "scripting" },
];

let scriptingLanguages = {};

// way 1
// languages.forEach((language) => {
//   const type = language.type;
//   if (!scriptingLanguages[type]) {
//     scriptingLanguages[type] = [];
//   }
//   scriptingLanguages[type].push(language);
// });

// way 2
// scriptingLanguages = languages.reduce((res, language) => {
//   const type = language.type;
//   if (!res[type]) {
//     res[type] = [];
//   }
//   res[type].push(language);
//   return res;
// });

// console.log(languages);

// way 3
scriptingLanguages = Object.groupBy(languages, (lang) => {
  lang.type;
});

console.log(scriptingLanguages);
