export const splitName = function (name) {
  try {
    var tokens = name.split('-')
    var date = `${tokens[0]}-${tokens[1]}-${tokens[2]}`
    var title = tokens[3]
    return {
      title: title,
      date: date,
      name: name
    }
  } catch(err) {
    return {
      title: null,
      date: null
    }
  }
}
