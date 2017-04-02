class Dictionary {
    constructor() {
        this.urls = [
            "https://www.google.com",
            "https://www.youtube.com",
            "https://www.wikipedia.com",
            "https://www.facebook.com",
            "https://www.baidu.com",
            "https://www.wikipedia.com",
            "https://www.yahoo.com",
            "https://www.amazon.com",
            "https://www.qq.com",
            "https://www.live.com",
            "https://www.twitter.com",
            "https://www.instagram.com",
            "https://www.reddit.com",
            "https://www.ebay.com",
            "https://www.bing.com",
            "https://www.wordpress.com",
            "https://www.apple.com",
            "https://www.pinterest.com",
            "https://www.github.com",
            "https://www.dropbox.com",
            "https://www.ask.com",
            "https://www.answers.yahoo.com"
        ];
    }


    get randomUrl() {
        let randomIndex = Math.floor(Math.random() * this.urls.length);
        return this.urls[randomIndex];
    }
}