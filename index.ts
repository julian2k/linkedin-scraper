import supabase from './supabase'
import { ApifyClient } from 'apify-client';
// Initialize the ApifyClient with API token
const client = new ApifyClient({
    token: 'apify_api_v30dly0ZjploxLVPNbLrCtic1SfQed4nBt7M',
});
// Prepare Actor input
const input = {
    cookie: [
            {
                "domain": ".linkedin.com",
                "expirationDate": 1738978338.664247,
                "hostOnly": false,
                "httpOnly": false,
                "name": "bcookie",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "\"v=2&0b6b2c51-9337-4349-84b6-8395b170d2ac\"",
                "id": 1
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1738445282.56389,
                "hostOnly": false,
                "httpOnly": true,
                "name": "dfpfpt",
                "path": "/",
                "sameSite": "lax",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "53ac841b97e8492b8917964da0c8d2e0",
                "id": 2
            },
            {
                "domain": ".linkedin.com",
                "hostOnly": false,
                "httpOnly": true,
                "name": "fptctx2",
                "path": "/",
                "sameSite": "lax",
                "secure": true,
                "session": true,
                "storeId": "0",
                "value": "taBcrIH61PuCVH7eNCyH0FC0izOzUpX5wN2Z%252b5egc%252f6u%252f8wn7H7WTRnzkGSNzb2gN2MX6%252bu51CeKjLQDDvrZcuoSO00MQAkfJEYFN%252be5gRBPNUTFlYzi9q2Lp5y1fpoXpja1nyZ8AkIFoDMdZh8AqrgowaW5ykJR1Q9xK3S%252bpVFiVbt%252bGLD%252fqeguA%252bmyFUWDP4u3TQc8DpjPR%252bOy%252ba5i0nlvd0%252fQl905VWbFFjBdIYQQm0XuEhpGzv%252bjUtW%252b%252bS%252beWxP2IbXcGG9MfLgBVgEJnrBwKXhog0%252bFsaCDf3QJ0ULaX0CGovL0MATl3ie1ADNqZODb87mKE2sJFBm69rPCVG3Q5XPNj4oCu2AcqPfmpIg%253d",
                "id": 3
            },
            {
                "domain": ".linkedin.com",
                "hostOnly": false,
                "httpOnly": false,
                "name": "lang",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": true,
                "storeId": "0",
                "value": "v=2&lang=en-us",
                "id": 4
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1722374877.200982,
                "hostOnly": false,
                "httpOnly": false,
                "name": "li_gc",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "MTsyMTsxNzA2ODIyODc3OzI7MDIxGtNeWnoM2r756a0diUpE0wDE0CxlqTJ9H62uX1K7xkc=",
                "id": 5
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1723487376.626222,
                "hostOnly": false,
                "httpOnly": false,
                "name": "li_mc",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "MTsyMTsxNzA3OTM1Mzc2OzI7MDIxPxbU0qDUzs6posiHlRWqotkNGcaz0L7CEYNhOoIiWh4=",
                "id": 6
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1738978338.664198,
                "hostOnly": false,
                "httpOnly": false,
                "name": "liap",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "true",
                "id": 7
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1708014259.787155,
                "hostOnly": false,
                "httpOnly": false,
                "name": "lidc",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "\"b=TB26:s=T:r=T:a=T:p=T:g=4814:u=482:x=1:i=1707927859:t=1708014259:v=2:sig=AQFZGbw8e2cTH4SWiKZ8RP0ElAwcSq05\"",
                "id": 8
            },
            {
                "domain": ".linkedin.com",
                "expirationDate": 1710526096,
                "hostOnly": false,
                "httpOnly": false,
                "name": "UserMatchHistory",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "AQJuXQYbVEiYOQAAAY2ozhmqdmWKBjF8OUZ50CWwJejvJqcVRczFfkT2DI2fD7rBVHI-O769pxU5UHTgkSz1FQ_Sqo75gedAyIQ3YLZ2Kp9Nl_q53iFK4y4KBNS0zE4CP7AdDg8Tvy5eE2jfWKZDU_NFFKBl1QcCHXHEkBCG-W_9h_UFZ4sWDAQdQgWeCYgzSwKif8KjjTXXcYcPLqFp-_nHMwGCrGCzv1VFBDgph4ShvWVikJdef6FyT1q6glle6I9p7Q9PofPG5HdSnrHZJ_sCBI7modSVz_mgsjg7NA",
                "id": 9
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1738978338.664286,
                "hostOnly": false,
                "httpOnly": true,
                "name": "bscookie",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "\"v=1&20240201211143c15cb333-6e27-4c8c-8e3f-1c5f5b620ee5AQHesOGCQ8TkyeT9-PMLRoQAc4gYOMNF\"",
                "id": 10
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1738978338.664227,
                "hostOnly": false,
                "httpOnly": false,
                "name": "JSESSIONID",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "\"ajax:1823067034667603404\"",
                "id": 11
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1738978338.664129,
                "hostOnly": false,
                "httpOnly": true,
                "name": "li_at",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "AQEDASzBleYBowfZAAABjWaSTGkAAAGNr4r_vU0AKpFR69hlqbQBEDbQm1Bx-Z1SOqjRCDgDlpEvbu-kdy8eVEcVAxcdLIGh9aAYp7QbH2t8iSynkjDy_0xX6OlyNje-N6J6nSLQ_ahqOyDjzTBjQkTl",
                "id": 12
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1723482495,
                "hostOnly": false,
                "httpOnly": false,
                "name": "li_theme",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "light",
                "id": 13
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1723482495,
                "hostOnly": false,
                "httpOnly": false,
                "name": "li_theme_set",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "app",
                "id": 14
            },
            {
                "domain": ".www.linkedin.com",
                "expirationDate": 1709143695,
                "hostOnly": false,
                "httpOnly": false,
                "name": "timezone",
                "path": "/",
                "sameSite": "unspecified",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "Europe/Berlin",
                "id": 15
            },
            {
                "domain": "www.linkedin.com",
                "expirationDate": 1722374879,
                "hostOnly": true,
                "httpOnly": false,
                "name": "g_state",
                "path": "/",
                "sameSite": "unspecified",
                "secure": false,
                "session": false,
                "storeId": "0",
                "value": "{\"i_l\":0}",
                "id": 16
            },
            {
                "domain": "www.linkedin.com",
                "expirationDate": 1738357904,
                "hostOnly": true,
                "httpOnly": false,
                "name": "li_alerts",
                "path": "/",
                "sameSite": "no_restriction",
                "secure": true,
                "session": false,
                "storeId": "0",
                "value": "e30=",
                "id": 17
            }
        ],
        "count": 40,
        "maxDelay": 5,
        "minDelay": 2,
        "searchUrl": "https://www.linkedin.com/search/results/people/?keywords=building%20something%20new&origin=SWITCH_SEARCH_VERTICAL&sid=CFg",
        "startPage": 1
    };

(async () => {
    // Run the Actor and wait for it to finish
    const run = await client.actor("pdcNMezBkIlhX0LwO").call(input);
    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Actor is runnin');
    const { items } = await client.dataset(run.defaultDatasetId).listItems();
    // Insert items into Supabase
    const { data: insertData, error } = await supabase
        .from('founder_leads') 
        .insert(items.map(item => ({
            fullName: item.fullName,
            profileUrl: item.profileUrl,
            headline: item.headline,
        }))); 

    if (error) console.error('Error inserting data:', error);
    else console.log('Data inserted successfully:', insertData);
})();