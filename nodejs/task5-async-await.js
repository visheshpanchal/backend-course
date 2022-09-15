const printLoop = () => {
  return new Promise((resolve, reject) => {
    console.log("a");
    resolve();
  });
};

printLoop()
  .then((res) => {
    console.log("b");
  })
  .then((res) => {
    console.log("c");
  })
  .then((res) => {
    console.log("d");
  })
  .then((res) => {
    console.log("e");
  });
