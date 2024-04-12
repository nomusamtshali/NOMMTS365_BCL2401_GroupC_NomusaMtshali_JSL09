EXTRA NOTES: 

/** 
* Challenge: get a URL for a default background image and set it here
         * 
         * 1. Change the query in the URL above back to something real
         * 2. Log the image url to the console (replacing console.log(data) above)
         * 3. Use that URL as the "default" background image to be used if 
         *    the promise is ever rejected.
         */
    
    fetch("https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=kjhgdsfljhalskjdhflaksdjhflkjhasdf")
    .then(res => res.json())
    .then(data => {
        console.log(data.urls.regular)
        document.body.style.backgroundImage = `url(${data.urls.regular})`
		document.getElementById("author").textContent = `By: ${data.user.name}`
    })
    .catch(err => {
     
        document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDE2NzA&ixlib=rb-1.2.1&q=80&w=1080)`
          // Report the error to some kind of service
    })
    
    
    HOW TO DO ERROR HANDLING WITH .FETCH() 
    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    
    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
    .then(res => {
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    // 3 digit number will come back + error
    // however promise is not rejected
    
    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
    .then(res => {
        console.log(res.ok) // it's a boolean. will return true or false
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    
    fetch("https://httpstat.us/200")
    .then(res => {
        console.log(res.ok)
        console.log(res.status)
        // return res.json()
    })
    // will get true + status
    
    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoins")
    .then(res => {
        console.log(res.ok)
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    // will get false + status + error
    
    
    HOW CAN I TRIGGER MY CATCH BLOCK FROM WITHIN MY .THEN BLOCK?
    - we can do that by throwing an error.
    
    
fetch("https://api.coingecko.com/api/v3/coins/dogecoinsdfkhsdlfkjhsldkjfhsdf")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    // you'll get an error
    
    
    fetch("https://api.coingecko.com/api/v3/coins/dogecoin")
    .then(res => {
        if (!res.ok) {
            throw Error("Something went wrong")
        }
        console.log(res.status)
        return res.json()
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => console.error(err))
    //we'll get a 200 status + data