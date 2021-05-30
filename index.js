function findMatching(drivers, name) { 
   return drivers.filter(object => { 
    return object.toLowerCase() === name.toLowerCase()
        // we are going to have to match our name and the object, by making them both lowercase
        // make sure that the object name and the name are similar, basically comparing them
         })
}




function fuzzyMatch(drivers, letters) { 
    return drivers.filter(function(name) {
       return name.substring(0,letters.length) === letters 
    })
} 

function matchName(drivers, letters) {
    return drivers.filter(function(driver) {
    return driver.name === letters})
    }


