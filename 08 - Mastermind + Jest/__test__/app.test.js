const app = require("../app.js")

describe('Palindrom', () => {
    it("Should be part of the autorized color", () => {
        expect(app.checkColor("red")).toEqual(true)
    })
    it("Should not be part of the autorized color", () => {
        expect(app.checkColor("purple")).toEqual(false)
    })
})