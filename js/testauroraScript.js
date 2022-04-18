let auroraRandomAmount = 0;

function randomAurora() {
    document.getElementById('sms').innerHTML = "";
    while (auroraRandomAmount >= 0) {
        var guardianBox = ["yes", "no", "no", "no", "no"];
        var percent = document.getElementById('percentAurora').value;
        var amtAurora = document.getElementById('amountAurora').value;
        var auroraPercentOutput = Math.floor(Math.random() * 101);
        if (auroraPercentOutput < percent) {
            guardianBox[1] = "yes"
            if (amtAurora == 2) {
                break;
            }
            auroraPercentOutput = Math.floor(Math.random() * 101);
            if (auroraPercentOutput < percent) {
                guardianBox[2] = "yes"
                if (amtAurora == 3) {
                    break;
                }
                auroraPercentOutput = Math.floor(Math.random() * 101);
                if (auroraPercentOutput < percent) {
                    guardianBox[3] = "yes"
                    if (amtAurora == 4) {
                        break;
                    }
                    auroraPercentOutput = Math.floor(Math.random() * 101);
                    if (auroraPercentOutput < percent) {
                        guardianBox[4] = "yes"
                        break;
                    }
                }
            }
        }
        auroraRandomAmount = auroraRandomAmount + 1;
        if (auroraRandomAmount > 20000) {
            document.getElementById('sms').innerHTML = "เกมควายหลอกแดกตัง";
            break;
        }
    }
    document.getElementById('variable').innerHTML = "total = " + auroraRandomAmount;
    document.getElementById('compliance').innerHTML = "Percent Aurora = " + guardianBox[0] + " " + guardianBox[1] + " " + guardianBox[2] + " " + guardianBox[3] + " " + guardianBox[4];
    auroraRandomAmount = 0;
}