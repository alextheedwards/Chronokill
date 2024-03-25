
export enum ActionTypes {
  bg = "bg", // backgrounds
  qa = "qa", // decision modals
  sfx = "sfx", // sounds
  char = "char", // add character
  echar = "echar", // edit character
  rchar = "rchar", // remove character
  check = "check", // add conditional rendering
  rcheck = "rcheck", // remove conditional rendering
  script = "script", // change script
  name = "name", // add textpanel title
  endgame = "endgame", //end game popup
  amb = "amb", // add ambient sounds
  ramb = "ramb", // remove ambient sounds
  score = "score", // score decisions made
}

export default ActionTypes