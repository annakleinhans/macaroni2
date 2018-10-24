/* firstLast6 */
function firstLast6 (name){
    if (name [0] == 6 || name [name.length - 1] == 6){
        return true;
    }
    return false;
}

/* has_23 */
function has23 (arr) {
    if (arr[0] == 2 || arr[0] == 3 || arr[0] == 2 || arr[1] == 3) {
        return true;
    }
    return false;
}


/* fix23 */
function fix23 (arr){
    for (var i = 0; i < arr.length; i++){
        if (arr[i] == 2 && arr[i + 1] == 3){
            return arr[i +1]
        }
        return arr;
    }


}

/* countYZ */
function countYZ (str){
    str=str.toLowerCase();
    var count = 0;
    for(var i = 0; i < str.length; i++){
        if (str[i] == " "){
            if (str[i-1] == "y" || str[i-1] == "z"){
                count++;
            }
        }
    }
    if (str[str.length - 1] == "y" || str[str.length - 1] == "z") {
        count++;
    }
    return count;
}


/* endOther */
function endOther (strX, strY){
    strX = strX.toLowerCase();
    strY = strY.toLowerCase();
    if (strY.endsWith(strX) || strX.endsWith(strY)){
        return true;
    } else {
        return false;
    }
}

/* starOut */
function starOut (str){
    var answer = "";
    for(var i = 0; i < str.length; i++){
        if (str[i] != "*" && str[i-1] != "*" && str[i+1] != "*"){
            answer = answer + str[i];
        }
    }
    return answer;
}

/* getSandwich */
function getSandwich (str){
    var breadCount = 0;
    for(var i = 0; i < str.length; i++){
        if (str.substring(i, i+5) == "bread"){
            breadCount = breadCount + 1;
        } if (breadCount >=2){
            return str.substring((str.indexOf("bread")+5), str.lastIndexOf("bread"));
        } else if (breadCount < 2){
            return "";
        }
    }
}

/* canBalance */
function canBalance (arr){
    var sum1 = 0;
    var sum2 = 0;
    for(var i = 0; i < arr.length; i++){
        sum1 = sum1 + arr[i];
        for(var j = i +1; j < arr.length; j++){
            sum2 = sum2 + arr[j];
        }
        if (sum1 == sum2){
            return true;
        }
        sum2 = 0;
    }
    return false;

}


/* countClumps */
function countClumps (arr) {
   var clump = 0;
   for(var i = 0; i < arr.length; i++){
       if (arr[i] == arr[i + 1]){
           clump++;
           for (var j = i + 1; j < arr.length; j++){
               if (arr[j] != arr[j + 1]){
                   i = j;
                   break;
               }
           }
       }

   }
   return clump;
}

/* evenlySpaced */
function evenlySpaced (a, b, c){
    var avg = (Math.max(a, b, c) + Math.min(a, b, c)) / 2;
    if (avg == a|| avg == b || avg == c){
        return true;
    }
    return false;
}

