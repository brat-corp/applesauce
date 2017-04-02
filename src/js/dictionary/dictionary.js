class Dictionary {
    constructor() {
        this.urls = [
            "http://www.google.com",
            "http://www.youtube.com",
            "http://www.wikipedia.com",
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
            "http://www.answers.yahoo.com"
        ];
    }


    get randomUrl() {
        let randomIndex = Math.floor(Math.random() * this.urls.length);
        return this.urls[randomIndex];
    }
}