class Dictionary {
    constructor() {
        this.urls = [
            "http://www.google.com",
            "http://www.youtube.com",
            "http://www.wikipedia.org",
            "http://www.facebook.com",
            "http://www.baidu.com",
            "http://www.wikipedia.com",
            "http://www.yahoo.com",
            "http://www.amazon.com",
            "http://www.qq.com",
            "http://www.live.com",
            "http://www.twitter.com",
            "http://www.instagram.com",
            "http://www.reddit.com",
            "http://www.ebay.com",
            "http://www.bing.com",
            "http://www.wordpress.com",
            "http://www.apple.com",
            "http://www.pinterest.com",
            "http://www.github.com",
            "http://www.dropbox.com",
            "http://www.ask.com",
            "http://www.answers.yahoo.com",
            "http://www.netflix.com",
            "http://www.linkedin.com",
            "http://www.imgur.com",
            "http://www.ebay.com",
            "http://www.alliexpress.com",
            "http://www.tumblr.com",
            "http://www.twitch.tv",
            "http://www.craigslist.com",
            "http://www.espn.com",
            "http://www.office.com",
            "http://www.bbc.com",
            "http://www.cnn.com",
            "http://www.fox.com",
            "http://www.chase.com",
            "http://www.imdb.com",
            "http://www.bankofamerica.com",
            "http://www.nytimes.com",
            "http://www.latimes.com",
            "http://www.weather.com",
            "http://www.stackoverflow.com",
            "http://www.washingtonpost.com",
            "http://www.wellsfargo.com",
            "http://www.zillow.com",
            "http://www.buzzfeed.com",
            "http://www.soundcloud.com",
            "http://www.spotify.com",
            "http://www.walmart.com",
            "http://www.theguardian.com",
            "http://www.dailymail.co.uk",
            "http://www.tripadvisor.com",
            "http://www.salesforce.com",
            "http://www.diply.com",
            "http://www.theladbible.com",
            "http://www.wikia.com",
            "http://www.givemesport.com",
            "http://www.rightmove.co.uk",
            "http://www.telegraph.co.uk",
            "http://www.gumtree.com",
            "http://www.gmx.net",
            "http://www.td.com",
            "http://www.royalbank.com",
            "http://www.theweathernetwork.com",
            "http://www.vice.com",
            "http://www.gfycat.com",
            "http://www.indeed.com",
            "http://www.battle.net",
            "http://www.dailymotion.com",
            "http://www.whatsapp.com",
            "http://www.booking.com",
            "http://www.yahoo.com/news",
            "http://www.huffingtonpost.com",
            "http://www.nbc.com",
            "http://www.wsj.com",
            "http://www.abcnews.go.com",
            "http://www.usatoday.com",
            "http://www.news.google.com",
            "http://www.shutterstock.com",
            "http://www.accuweather.com",
            "http://www.bloomberg.com",
            "http://www.reuters.com",
            "http://www.wunderground.com",
            "http://www.money.cnn.com",
            "http://www.time.com",
            "http://www.usnews.com",
            "http://www.nypost.com",
            "http://www.etsy.com",
            "http://www.ikea.com",
            "http://www.bestbuy.com",
            "http://www.homedepot.com",
            "http://www.nike.com",
            "http://www.groupon.com",
            "http://www.newegg.com",
            "http://www.hotels.com",
            "http://www.southwest.com",
            "http://www.priceline.com",
            "http://www.vrbo.com",
            "http://www.airbnb.com",
            "http://www.orbitz.com",
            "http://www.travelocity.com",
            "http://www.caranddriver.com",
            "http://www.homeaway.com",
            "http://www.collegehumor.com",
            "http://www.ford.com",
            "http://www.gm.com",
            "http://www.skyscanner.com",
            "http://www.theonion.com"
        ];
    }


    get randomUrl() {
        let randomIndex = Math.floor(Math.random() * this.urls.length);
        return this.urls[randomIndex];
    }
}