const firstArgument = process.argv[2];

const numberValue = Number(firstArgument);


if (isNaN(numberValue) || firstArgument === undefined) {
    console.log("Not a number");
} else {

    const integerValue = parseInt(firstArgument);
    console.log(`My number: ${integerValue}`);
}