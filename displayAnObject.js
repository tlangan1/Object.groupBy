import process from "process";

export function display(obj, prefix = ``) {
  if (!(obj instanceof Array) && !(obj instanceof Object)) {
    process.stdout.write(`${prefix}${obj}`);
  } else {
    if (obj instanceof Array) {
      displayArray(obj);
    } else {
      for (let key in obj) {
        process.stdout.write(`${prefix}${key} = ${obj[key]}\n`);
      }
    }
  }
}

function displayArray(aArray) {
  aArray.forEach((item, index) => {
    process.stdout.write(`${index}:`);
    if (item instanceof Object || item instanceof Array) {
      process.stdout.write(`\n`);
      display(item, `\t`);
    } else {
      console.log(` ${item}`);
    }
  });
}
