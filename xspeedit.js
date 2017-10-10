function weight (box) {
  const [...items] = box
  return items.reduce((a, b) => Number(a) + Number(b), 0)
}

function makeBox (articlesToShip) {
  let [current, ...remaining] = articlesToShip.sort((a, b) => b - a)
  let toShipAfter = [...remaining]
  while (remaining && remaining.length > 0) {
    const [firstFit, ...fits] = remaining.filter(item => Number(item) + Number(weight(current)) <= 10)
    if (firstFit) {
      current += firstFit
      toShipAfter.splice(toShipAfter.indexOf(firstFit), 1)
    }
    remaining = fits
  }
  return {
    box: current,
    remainingArticles: toShipAfter
  }
}

function ship (articles) {
  if (!articles) {
    return ''
  }
  if (!/^\d+$/.test(articles)) {
    throw Error('Oops, something is wrong with your articles')
  }
  const [...articlesToShip] = articles
  let {box, remainingArticles} = makeBox(articlesToShip)
  let boxes = [box]
  while (remainingArticles.length > 0) {
    let {box, remainingArticles: others} = makeBox(remainingArticles)
    boxes = [...boxes, box]
    remainingArticles = [...others]
  }
  return boxes.join('/')
}

module.exports = {
  ship
}
