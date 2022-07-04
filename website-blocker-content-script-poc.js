console.log(` --- hello from website blocker content script --- `)

const website_black_list = [
    // 'facebook.com',
    // 'github.com',
    // 'twitter.com',
    // 'reddit.com',
    // 'youtube.com'
]


// get the current website 
console.log(`--- current website ${window.location} --- `)

website_black_list.map((site) =>{
    if(window.location.href.includes(site)) {
        document.querySelector("body").style.opacity = "0%"
        // todo 
        // disable click 
        // disable sound 
        // show custom text 
        // show timer 
        // how to set up a up for an extension to mage sites 
        // blank after a certain time 
    }   
})