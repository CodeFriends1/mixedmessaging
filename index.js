import axios from 'axios';
import cheerio, { load } from 'cheerio';
import fs from 'fs';

const url_1 = 'https://parade.com/1039651/marynliles/dr-seuss-quotes/';
const url_2 = 'https://patternbasedwriting.com/elementary_writing_success/list-4800-adjectives/';
const url_3 = 'http://ooquotes.com/a-list-of-most-used-39-memorable-mean-girls-quotes.html';


function scrape(url, selector, tag, filename) {
    
    axios(url)
    .then(
        response => {
            const html = response.data;
            const $ = load(html);
            const container = [];

            $(selector).each(
                function() {
                    const adj = $(this).find(tag).text();
                    container.push(adj);
                }
            )

        // JSON output
        const output = {
            source: url,
            results: container
        }

        fs.writeFile('./' + filename + '.json', JSON.stringify(output), (error) => { if (error) throw error;});

        })
    .catch(error => console.log(error))
    .finally(console.log('DONE.\n\n'));

}

scrape(url_1, '.m-detail--body', 'p', 'seuss_quotes');
scrape(url_2, '.row-1', 'td', 'adjectives');
scrape(url_3, '.entry-content', 'p', 'mean_quotes');