function sliceString(word: string, start: number, end: number): string {
      return word.slice(start, end);
}

console.log(sliceString("Learning Typescript is different than Javascript", 9, 19));
