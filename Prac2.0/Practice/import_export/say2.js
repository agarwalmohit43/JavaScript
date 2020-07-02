 function hi() {
    console.log(`Hello`);
}

function bye() {
    console.log(`Bye`);
}

export default function s() {
    console.log("Module loaded (export default)!");
}

export {hi,bye}