const User = require("./classes")

describe("The User class", () => {
	it("should create a new user", () => {
		const user1 = new User("smith", "smith@test.com")
		expect(user1.name).toBe("smith")
		expect(user1.email).toBe("smith@test.com")
	})
})

describe("The User class", () => {
	it("should create new error message if the user name is less than 5 characters", () => {
		const user2 = new User("tom", "tom@gmail.com")
		user2.validateName(user2.name)
		expect(user2.errors[0]).toBe("the name must be at least 5 chars long")
	})
})

describe("The User class", () => {
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

		// assertion
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
