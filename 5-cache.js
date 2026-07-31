const cache = { home: "Nizami St. 10", work: "28 May St. 5" };

const readFromCache = (key) => {
    if(cache[key]){
        return Promise.resolve(cache[key])
    }else{
        return Promise.reject(new Error("Address not found in cache"))
    }
}