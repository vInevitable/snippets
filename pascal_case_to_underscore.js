function pascalToUnderscoreCase(inputStr){
  return inputStr.replace(/\.?([A-Z]+)/g, (x,y) => {
    return "_" + y.toLowerCase()
  }).replace(/^_/, "");
}
