function findMatching(array, string) {
    return array.filter(element => element.toLowerCase() || element == string)
    
}

function fuzzyMatch(array, stringMatch) {
    return array.filter(element => element.startsWith(stringMatch))
}

function matchName(array, string) {
    return array.filter(el => el.name === string)

}

    
    
