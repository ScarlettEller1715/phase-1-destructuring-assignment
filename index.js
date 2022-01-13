const farmAnimals = {
  moo:'cow',
  neigh: 'horse',
  baa: 'sheep',
  oink: 'pig',
  cluck: 'chicken'};

  const traditionalAnimalNames = {
    bessie: "cow",
    dolly: "sheep",
    babe: "pig",
    little: "chicken",
  }

  const animalColors = {
    blackAndWhite: "cow",
    black: "sheep",
    pink: "pig",
  }

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

const {moo, neigh, baa, oink, cluck} = farmAnimals;

const {bessie, dolly, babe, little} = traditionalAnimalNames;

const {blackAndWhite, black, pink} = animalColors;

const [red, orange, yellow, green, blue, indigo, violet] = colors;

const [r, o, y, g, b, , v] = colors;

const [, , , , , indg, ] = colors;

const {muppetName, color, song, job, partner} = muppet;

const {album: {theMuppetMovie: {song2}}, album: {theMuppetMovie: {song4}}, nestedJob, nestedPartner} = nestedMuppet;

// Objects

// 7. Use destructuring to assign all variables using the keys as the variable names

// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner