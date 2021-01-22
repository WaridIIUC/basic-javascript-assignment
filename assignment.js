// https://github.com/WaridIIUC/basic-javascript-assignment


// kilometerToMeter function start here

function kilometerToMeter(kilometer){
    if(typeof(kilometer) == "number"){          //check input is number or not 
        if(kilometer < 0){
            return "Wrong Input. Negative value of KM is not accept.";
        }
        else{
            var meter = kilometer * 1000;
            return meter;
        }
    }
    else{
        return "Wrong Input. Only number will accept.";
    }   
}




// budgetCalculator function start here

function budgetCalculator(numberOfWatch, numberOfMobile, numberOfLaptop){
    if(typeof(numberOfWatch) == "number" && typeof(numberOfMobile) == "number" && typeof(numberOfLaptop) == "number"){ // check input parameter are number or not
        if(numberOfWatch < 0 || numberOfMobile < 0 || numberOfLaptop < 0){   //check input values are negative or not
            return "Wrong Input. Negative value of quantity is not accept";
        }
        else{
            var totalWatchCost = numberOfWatch * 50 ;
            var totalMobileCost = numberOfMobile * 100 ;
            var totalLaptopCost = numberOfLaptop * 500 ;
            var totalCost = totalWatchCost + totalMobileCost + totalLaptopCost;
            return totalCost;
        }
    }
    else{
        return "Wrong Input. Only number value will accept.";
    }   
}




// hotelCost function start here

function hotelCost(numberOfDays) {
    if(typeof(numberOfDays) == "number"){   //check input value is number or not.
        if (numberOfDays < 0) {         // check input value is negative or not
            return "Wrong Input. Negative value of days is not accept.";
        }
        else {
            var totalStayDays = numberOfDays;
            var totalRent = 0;
            if (totalStayDays >= 10) {
                totalRent = totalRent + (10 * 100);
                totalStayDays = totalStayDays - 10;
                if (totalStayDays >= 10) {
                    totalRent = totalRent + (10 * 80);
                    totalStayDays = totalStayDays - 10;
                    totalRent = totalRent + totalStayDays * 50;
                }
                else {
                    totalRent = totalRent + totalStayDays * 80;
                }
            }
            else {
                totalRent = totalRent + totalStayDays * 100;
            }
            return totalRent;
        }
    }
    else{
        return "Wrong Input. Only number values are accepted."
    }   
}




// megaFriend function start here

function megaFriend(friendsName) {
    if (friendsName.length > 0){    // check given array is empty or not
        var maxLengthName = friendsName[0];     
        for (var i = 0; i < friendsName.length; i++) {
            if (friendsName[i].length > maxLengthName.length) {
                maxLengthName = friendsName[i];
            }
        }
        return maxLengthName;
    }
    else{
        return "Wrong Input. Given array is empty.";
    }
}

