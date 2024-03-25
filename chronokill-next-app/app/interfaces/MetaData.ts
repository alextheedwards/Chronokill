
export interface MetaData {
  score: number
}

// can add more things that need to exist for the life of the component here
// could also use local storage as an alternative altogether
export const MetaDataDefault: MetaData = {
  score: 0
}

export default MetaData