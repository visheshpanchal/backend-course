const modifiedValidator = (body, fields) => {
  for (const field of fields) {
    if (body.hasOwnProperty(field)) {
      console.log("error");
      console.log(body["field"]);
    }
  }
};

modifiedValidator({ email: "vishesh@gmail.com" }, ["email"]);
