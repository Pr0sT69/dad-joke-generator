export const dadJokes = [
  "Why don't eggs tell jokes? They'd crack up!",
  "What do you call a fake noodle? An impasta!",
  "Why did the scarecrow win an award? Because he was outstanding in his field!",
  "Why did the math book look so sad? Because it had too many problems!",
  "What do you call a bear with no teeth? A gummy bear!",
  "What do you call a can opener that doesn't work? A can't opener!",
  "Why don't skeletons fight each other? They don't have the guts!",
  "What did the grape say when it got stepped on? Nothing, it just let out a little wine!",
  "Why don't scientists trust atoms? Because they make up everything!",
  "What do you call a pig that does karate? A pork chop!",
  "Why did the cookie go to the doctor? Because it was feeling crumbly!",
  "What do you call a sleeping bull? A bulldozer!",
  "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
  "What do you call a bear with no ears? B!",
  "Why don't oysters donate to charity? Because they're shellfish!"
];

export const getRandomJoke = () => {
  const randomIndex = Math.floor(Math.random() * dadJokes.length);
  return dadJokes[randomIndex];
};