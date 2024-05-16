const faker = require("faker-br");

const User = require("./classes")

describe("The User class", () => {
	it("should create a new user", () => {
		const user1 = new User("smith", "smith@test.com")
		expect(user1.name).toBe("smith")
		expect(user1.email).toBe("smith@test.com")
	})

	it("should create new error message if the user name is less than 5 characters", () => {
		const user2 = new User("tom", "tom@gmail.com")
		user2.validateName(user2.name)
		expect(user2.errors[0]).toBe("the name must be at least 5 chars long")
	})

  it("error the name is require", () => {
		const user2 = new User("", "tom@gmail.com")
		user2.validateName(user2.name)
		expect(user2.errors[0]).toBe("the name is required")
	})
})

describe("The isValid function", () => {
	it("should call validateName, validateEmail, validatePassword functions when isValid fn is called", () => {
		const user = {
			validateName: () => {},
			validateEmail: () => {},
			validatePassword: () => {},
			isValid: function () {
				this.validateName()
				this.validateEmail()
				this.validatePassword()
			},
		}
		jest.spyOn(user, "validatePassword")
		jest.spyOn(user, "validateName")
		jest.spyOn(user, "validateEmail")

		user.isValid()

		expect(user.validatePassword).toHaveBeenCalled()
		expect(user.validateName).toHaveBeenCalled()
		expect(user.validateEmail).toHaveBeenCalled()
	})
})

describe("User class logging", () => {
	let consoleSpy

	beforeEach(() => {
		consoleSpy = jest.spyOn(console, "log")
	})

	afterEach(() => {
		consoleSpy.mockRestore()
	})

	it("should log 'validating email...' when validateEmail is called", () => {
		const user = new User("Alice", "alice@example.com")
		user.validateEmail()
		expect(consoleSpy).toHaveBeenCalledWith("validating email...")
	})

	it("should log 'validating password...' when validatePassword is called", () => {
		const user = new User("Alice", "alice@example.com")
		user.validatePassword()
		expect(consoleSpy).toHaveBeenCalledWith("validating password...")
	})
})

describe("isValid test", () => {
	let user
	let validateNameSpy, validateEmailSpy, validatePasswordSpy

	beforeEach(() => {
		user = new User("Alice", "alice@example.com")
		validateNameSpy = jest.spyOn(user, "validateName")
		validateEmailSpy = jest.spyOn(user, "validateEmail")
		validatePasswordSpy = jest.spyOn(user, "validatePassword")
	})

	afterEach(() => {
		validateNameSpy.mockRestore()
		validateEmailSpy.mockRestore()
		validatePasswordSpy.mockRestore()
	})

	it("should call validateName, validateEmail, and validatePassword when isValid is called", () => {
		user.isValid()
		expect(validateNameSpy).toHaveBeenCalled()
		expect(validateEmailSpy).toHaveBeenCalled()
		expect(validatePasswordSpy).toHaveBeenCalled()
	})
})

// EX 5

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
