
const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

interface Product {
    title: string,
    review: string,
    rating: string,
    imgUrl: string
}

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const list: Product[] = [];
let counter = 0;

//to deal with amazon request block
const userAgents = [
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.114 Safari/537.36',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:105.0) Gecko/20100101 Firefox/105.0',
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0.3 Safari/605.1.15',
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36 Edg/103.0.1264.49',
    'Mozilla/5.0 (Linux; Android 11; Pixel 5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.53 Mobile Safari/537.36',
    'Mozilla/5.0 (Android 10; Mobile; rv:78.0) Gecko/78.0 Firefox/78.0',
    'Mozilla/5.0 (iPad; CPU OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.0 Mobile/15E148 Safari/604.1',
    'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.5060.134 Safari/537.36'
];

async function scrapeAmazon(searchProd: string, attempt = 1, maxAttempts = 30) {
    const url = `https://www.amazon.com/s?k=${searchProd}`;
    list.length = 0;
    try {
        const userAgent = userAgents[Math.floor(Math.random() * userAgents.length)];
        const response = await axios.get(url, {
            headers: {
                'User-Agent': userAgent,
                "Accept": "*/*",
                "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
                "Sec-Fetch-Dest": "empty",
                "Sec-Fetch-Mode": "cors",
                "Sec-Fetch-Site": "same-origin",
                "downlink": "10",
                "dpr": "1",
                "ect": "4g",
                "pragma": "no-cache",
                "priority": "u=1, i",
                "rtt": "0",
                "Sec-Ch-device-memory": "8",
                "Sec-Ch-dpr": "1",
                "cache-control": "no-cache",
                'Referer': url
            }
        });

        const dom = new JSDOM(response.data);
        const document = dom.window.document;
        //scrapping data from html
        const title = document.querySelectorAll('h2.a-size-medium.a-spacing-none.a-color-base.a-text-normal');
        const review = document.querySelectorAll('a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style span.a-size-base.s-underline-text');
        const rating = document.querySelectorAll('i.a-icon-star-mini span.a-icon-alt');
        const imgUrl = document.querySelectorAll('div.a-section.aok-relative.s-image-fixed-height img.s-image');

        console.log("verifing scraping");
        console.log("title.length: "+title.length );
        console.log("review.length: "+review.length);
        console.log("rating.length: "+rating.length);
        console.log("imgUrl.length: "+imgUrl.length);


        //add scrap result into a variable
        for (let index = 0; index < title.length; index++) {
            //verify if all the scrapping data has all elements
            if (index < title.length && index < review.length && index < rating.length && index < imgUrl.length) {
                list.push({
                    title: title[index].textContent.trim(),
                    review: review[index].textContent.trim(),
                    rating: rating[index].textContent.trim(),
                    imgUrl: imgUrl[index].getAttribute('src')
                })
            }
        }
        
        counter = 0;
        return JSON.stringify(list);
    } catch (error) {
        if (attempt < maxAttempts) {
            counter++;
            console.log("Try number: " + counter);
            //try another time to request from amazon recursivily
            await sleep(210);
            return scrapeAmazon(url, attempt + 1, maxAttempts);
        } else {
            throw new Error(`Request to amazon has failed after ${counter} tries.`);
        }
    };
}

module.exports = scrapeAmazon;