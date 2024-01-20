const superbowlWin = data => {
  let win = data.find(record => record.result === 'W')
  return win ? win.year : undefined
}