const getImageURL = (id: string) => {
  return `https://picsum.photos/id/${(Math.abs(id.split('').reduce((a,b) => ((a << 5) + a) + b.charCodeAt(0), 0)) + '').substring(0,2)}/800/500`
}

export default getImageURL