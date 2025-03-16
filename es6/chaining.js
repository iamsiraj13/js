const language = {
  name: "js",
  library: {
    react: {
      //   company: "Facebook",
    },
  },
};

console.log(language?.library?.react?.company);

const colors = ["red", "yellow", "green", "blue"];
console.log(colors?.[6]);
