exports.validator = (body, fields, check) => {
  let err = { field: [] };

  // REGEX

  // Check Empty Field
  for (const key in body) {
    if (key in fields) {
      if (body[key] == "")
        err.field.push({ error: key, message: "Key is Empty" });
    }
  }

  // Structure Match

  return err;
};
