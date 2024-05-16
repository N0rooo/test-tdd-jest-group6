const faker = require("faker-br")
const errorStreetName = "invalid street name format"
const errorStreetNumber = "invalid street number format"

class User {
	constructor(name, email, streetName, streetNumber) {
		this.name = name
		this.email = email
		this.errors = []
		this.streetName = streetName ?? faker.address.streetName()
		this.streetNumber = streetNumber ?? faker.address.streetAddress()
	}
	validateName() {
		if (this.name) {
			if (this.name.length < 5) {
				this.errors.push("the name must be at least 5 chars long")
			}
		} else {
			this.errors.push("the name is required")
		}
	}

	validateEmail() {
		console.log("validating email...")
	}

	validateStreetName() {
		if (!this.streetName.match(/\w+/)) {
			this.errors.push(errorStreetName)
		}
	}

	validateSreetNumber() {
		if (!this.streetNumber.match(/^\d+[a-zA-Z]*$/)) {
			this.errors.push(errorStreetNumber)
		}
	}

	validatePassword() {
		console.log("validating password...")
	}

	isValid() {
		this.validateName()
		this.validateEmail()
		this.validatePassword()
	}
}

module.exports = { User, errorStreetName, errorStreetNumber }
