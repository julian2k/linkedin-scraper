"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var supabase_1 = require("./supabase");
var apify_client_1 = require("apify-client");
// Initialize the ApifyClient with API token
var client = new apify_client_1.ApifyClient({
    token: 'apify_api_v30dly0ZjploxLVPNbLrCtic1SfQed4nBt7M',
});
// Prepare Actor input
var input = {
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
    "count": 10,
    "maxDelay": 5,
    "minDelay": 2,
    "searchUrl": "https://www.linkedin.com/search/results/people/?keywords=building%20something%20new&origin=SWITCH_SEARCH_VERTICAL&sid=CFg",
    "startPage": 1
};
(function () { return __awaiter(void 0, void 0, void 0, function () {
    var run, items, _a, insertData, error;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0: return [4 /*yield*/, client.actor("pdcNMezBkIlhX0LwO").call(input)];
            case 1:
                run = _b.sent();
                // Fetch and print Actor results from the run's dataset (if any)
                console.log('Actor is runnin');
                return [4 /*yield*/, client.dataset(run.defaultDatasetId).listItems()];
            case 2:
                items = (_b.sent()).items;
                return [4 /*yield*/, supabase_1.default
                        .from('founder_leads')
                        .insert(items.map(function (item) { return ({
                        fullName: item.fullName,
                        profileUrl: item.profileUrl,
                        headline: item.headline,
                    }); }))];
            case 3:
                _a = _b.sent(), insertData = _a.data, error = _a.error;
                if (error)
                    console.error('Error inserting data:', error);
                else
                    console.log('Data inserted successfully:', insertData);
                return [2 /*return*/];
        }
    });
}); })();
