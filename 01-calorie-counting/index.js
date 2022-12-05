console.log(
  require('fs')
    .readFileSync('./input.txt')
    .toString()
    .split('\n\n')
    .map(x => x.split('\n').reduce((p, c) => p + +c, 0))
    .reduce((p, c) => c > p ? c : p, 0)
);
