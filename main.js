// simple App countdown timer
import { differenceInSeconds } from "date-fns";
import inquirer from "inquirer";
const res = await inquirer.prompt({
    type: "number",
    name: "userInput",
    message: "Please enter countDown time in seconds:",
    validate: (input) => {
        if (isNaN(input)) {
            return "Please enter valid input";
        }
        else if (input > 60) {
            return "Value must be b/w 0 to 60";
        }
        else {
            return true;
        }
    }
});
let value = res.userInput;
function startTime(val) {
    const initTime = new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(initTime);
    setInterval(() => {
        const cureentTime = new Date();
        const timeDiffer = differenceInSeconds(intervalTime, cureentTime);
        if (timeDiffer <= 0) {
            console.log('Timer has expired');
            process.exit();
        }
        const min = Math.floor((timeDiffer % (3600 * 24) / 36000));
        const sec = Math.floor(timeDiffer % 60);
        console.log(`${min.toString().padStart(2, '0')},${sec.toString().padStart(2, '0')}`);
    }, 1000);
}
startTime(value);
