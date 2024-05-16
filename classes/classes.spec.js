const User = require("./classes");
const faker = require("faker-br");

let dataset;

beforeEach(() => {
  dataset = {
    streetName: faker.address.streetName(),
    streetNumber: faker.address.streetAddress()
  };
});

afterEach(() => {
  dataset = null;
});

describe('Dataset tests', () => {
  it('should have a street name and street number', () => {
    expect(dataset.streetName).toBeDefined();
    expect(dataset.streetNumber).toBeDefined();
  });

  it('should have a valid street name and number', () => {
    expect(dataset.streetName).toMatch(/\w+/);
    expect(dataset.streetNumber).toMatch(/\d+/);
  });
});

describe("The User class", () => {
  it("should create a new user", () => {
    const user1 = new User("smith", "smith@test.com");
    expect(user1.name).toBe("smith");
    expect(user1.email).toBe("smith@test.com");
  })});
  
  // Make new describe
// should create new error message if the user name is less than 5 characters
// the name must be at least 5 chars long
// test validateName() with user2 named "tom", "tom@test.com");

describe("The User class", () => {
  it("should create new error message if the user name is less than 5 characters", () => {
    const user2 = new User("tom", "tom@gmail.com");
    user2.validateName(user2.name);
    expect(user2.errors[0]).toBe("the name must be at least 5 chars long");
  }
)});