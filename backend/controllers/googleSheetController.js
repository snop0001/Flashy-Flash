import {getDutchCards,getEnglishCards} from '../adapters/googleSheetsAPI.js'
let stepD = 0;
let stepE = 0;


export async function getDutchGoogleSheet(req, res, next){
    const rows = await getDutchCards();
    let word = rows[stepD][0];
    stepD++;
    if(stepD > 2) {
        stepD = 0;
    }
    
    res.json(word);
}

export async function getEnglishGoogleSheet(req, res, next){
    const rows = await getEnglishCards();
    let word = rows[stepE][0];
    stepE++;
    if(stepE > 2) {
        stepE = 0;
    }
    
    res.json(word);
}