function findMatching(array, string){
    return array.filter((name) => {
        return name.toLowerCase() == string.toLowerCase();
    })
}

function fuzzyMatch(array, string){
    const length = string.length;
    return array.filter((name) => {
        return name.slice(0,length).toLowerCase() == string.toLowerCase()
    })
}

function matchName(array, string){
    return array.filter((driver) => {
        return driver["name"].toLowerCase() == string.toLowerCase()
    })
}