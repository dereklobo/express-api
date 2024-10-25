const api = require('./app');

var request = require('supertest')
var { describe, test, expect}  = require('@jest/globals')

// test API routes
describe("Test endpoints", () => {
    test("Responds with 200 status code on / endpoint", async() => {
        const response =  await request(api).get('/');
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({})
    })


    test("Responds with 200 status code on /greet endpoint", async() => {
        const response =  await request(api).get('/greet');
        expect(response.statusCode).toBe(200)
        expect(response.body).toEqual({message:"Hello, World!"})
    })

    test("Responds with 200 status code on /nasa endpoint", async() => {
        const response =  await request(api).get('/nasa');
        expect(response.statusCode).toBe(200)
    })
})

