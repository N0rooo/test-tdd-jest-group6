const User = require("./classes");

describe("The User class", () => {
  it("should create a new user", () => {
    const user1 = new User("smith", "smith@test.com");
    expect(user1.name).toBe("smith");
    expect(user1.email).toBe("smith@test.com");
  })});
  

describe("The User class", () => {
  it("should create new error message if the user name is less than 5 characters", () => {
    const user2 = new User("tom", "tom@gmail.com");
    user2.validateName(user2.name);
    expect(user2.errors[0]).toBe("the name must be at least 5 chars long");
  }
)});

describe("The User class", () => {
  it("error the name is require", () => {
    const user2 = new User("", "tom@gmail.com");
    user2.validateName(user2.name);
    expect(user2.errors[0]).toBe("the name is required");
  }
)});


