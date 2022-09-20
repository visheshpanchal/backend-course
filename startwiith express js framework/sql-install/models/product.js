const db = require("../util/database");

module.exports = class Product {
  constructor(id, title, imageUrl, description, price) {
    this.id = id;
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }
  static deleteById(id) {
    return db.execute("DELETE FROM products WHERE id = ?", id);
  }

  save() {
    // We Use this method bcz protection from SQL-Injection
    // Not use ${} this method
    return db.execute(
      `INSERT INTO products (title, price, imageUrl, description) 
    
    VALUES (?,?,?,?);
    `,
      [this.title, this.price, this.imageUrl, this.description]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM products;");
  }

  static findById(id) {
    return db.execute("SELECT * FROM products WHERE id= ? ;", [id]);
  }
};
