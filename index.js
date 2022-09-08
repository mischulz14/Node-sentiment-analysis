import fs from 'node:fs';
import vader from 'vader-sentiment';

let input = process.argv.slice(2).join(' ');

if (process.argv[2].includes('txt')) {
  input = fs.readFileSync(`./${process.argv[2]}`, 'utf-8', (err, data) => {
    if (err) {
      console.log(err);
      return;
    }

    return data;
  });
}

const intensity = vader.SentimentIntensityAnalyzer.polarity_scores(input);

console.log(
  `This text is ${parseInt(intensity.pos * 100)}% positive, ${parseInt(
    intensity.neg * 100,
  )}% negative and ${parseInt(intensity.neu * 100)}% neutral`,
);
