// routes/apiRoutes.js

const express = require('express');
const axios = require('axios');
const router = express.Router();

// get data from  API
router.post('/get-data', async (req, res) => {
    const searchItemName = req.body.userInput;

    //Search cocktail by name (www.thecocktaildb.com/api/json/v1/1/search.php?s=ITEM_TO_SEARCH)
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchItemName}`;


    // wait for response
    try {
        const response = await axios.get(url);

        // send data to json
        const data = response.data;

        // check if the drinks name was found
        if (data.drinks) {
            // render result page with data
                // result = page to load
                // cocktail = variable to use in ejs
                // data = full json object
                // drinks[0] = first item in the drinks array
            res.render('result', {
                searchTerm: searchItemName, 
                cocktail: data.drinks[0],
                found: true
                // ^ set up a variable to check if found
            });
        } else {
            res.render('result',  {
                searchTerm: searchItemName,
                cocktail: null, // no cocktail found
                found: false
                // no cocktail variable since nothing was found
            }
            );
        }
    } catch (error) {
        console.error('Error fetching data from API:', error);
        res.render('error', {message: 'Error fetching data from API.'});
    }
});

module.exports = router;
