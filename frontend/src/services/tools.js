

function ElipsedText(text,maxWords = 25) {
    let elipsedText = "";
    let words = text.split(' ');
    let wordsCount = 0;
    for(let word of words) {
        elipsedText+=word+' ';
        wordsCount++;
        if(wordsCount >= maxWords) break;
    }
    if(wordsCount != words.length) {
        elipsedText+='...';
    }
    return elipsedText;
}

function ConvertTypeToString(Type) {
    switch(Type) {
        case "HOTEL": {
            return "Гостиница"
        }
        case "APART": {
            return "Квартира"
        }
        case "ROOM": {
            return "Комната"
        }
        case "OFFICE": {
            return "Офисное помещение"
        }
    }
}

export {ElipsedText, ConvertTypeToString};