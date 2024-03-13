const sentence = "hello there from lighthouse labs";

function animationLetters(sentence) {
    let delay = 0;
for (const char of sentence) {
    setTimeout(() => {
        process.stdout.write(char);
      }, delay);
      delay += 50;
  };
}
  
animationLetters(sentence);