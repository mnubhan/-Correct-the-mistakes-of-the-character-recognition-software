
const correct = (string) => {
  string=string.replaceAll(/0/gi, "O")
  string=string.replaceAll(/5/gi, "S")
  string=string.replaceAll(/1/gi, "I")
  return string
}
