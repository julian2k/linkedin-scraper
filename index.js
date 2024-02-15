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
Object.defineProperty(exports, "__esModule", { value: true });
const apify_client_1 = require("apify-client");
// Initialize the ApifyClient with API token
const client = new apify_client_1.ApifyClient({
    token: 'apify_api_v30dly0ZjploxLVPNbLrCtic1SfQed4nBt7M',
});
// Prepare Actor input
const input = {
    "startPage": 1,
    "minDelay": 2,
    "maxDelay": 5
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    // Run the Actor and wait for it to finish
    const run = yield client.actor("pdcNMezBkIlhX0LwO").call(input);
    // Fetch and print Actor results from the run's dataset (if any)
    console.log('Results from dataset');
    const { items } = yield client.dataset(run.defaultDatasetId).listItems();
    items.forEach((item) => {
        console.dir(item);
    });
}))();
