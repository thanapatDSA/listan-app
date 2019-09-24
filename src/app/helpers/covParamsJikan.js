export const findSeason = (months) => {
  let season = ''
  switch (months) {
    case 1 || 2 || 3:
      season = 'winter'
      break
    case 4 || 5 || 6:
      season = 'spring'
      break
    case 7 || 8 || 9:
      season = 'summer'
      break
    case 10 || 11 || 12:
      season = 'fall'
      break

    default:
      break
  }
  return season
}
