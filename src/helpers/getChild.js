export default function getChild (object, keyName) {
  let child = object
  for (let key of keyName.split('.')) {
    if (!child) {
      break
    }
    child = child[key]
  }
  return child
}
