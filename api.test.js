/* const supertest = require('supertest');
const app = require('./index'); // Adjust the path accordingly



describe('API Tests', () => {
  it('should save JSON data', async () => {
    const jsonData = { name: 'John Doe', age: 25 };

    const response = await supertest(app)
      .post('/save')
      .send(jsonData)
      .expect(201);

    expect(response.body.message).toBe('JSON data saved successfully');
  });

  it('should retrieve saved JSON data', async () => {
    const response = await supertest(app)
      .get('/retrieve')
      .expect(200);

    expect(Array.isArray(response.body)).toBe(true);
  });
});
 */

const supertest = require('supertest');
const app = require('./index'); 


describe("POST /save", () => {
  describe("given a username and password", () => {

    test("should respond with a 200 status code", async () => {
      const response = await supertest(app).post("/save").send({
        name: "username",
        age: 23
      })
      expect(response.statusCode).toBe(200)
    })
    test("should specify json in the content type header", async () => {
      const response = await supertest(app).post("/save").send({
        name: "username",
        age: 23
      })
      expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })
    test("response has userId", async () => {
      const response = await supertest(app).post("/save").send({
        name: "username",
        age: 23
      })
      expect(response.body.userId).toBeDefined()
    })
    it('should retrieve saved JSON data', async () => {
        const response = await supertest(app)
          .get('/retrieve')
          .expect(200);
    
        expect(Array.isArray(response.body)).toBe(true);
      });
  })

  describe("when the username and password is missing", () => {
    test("should respond with a status code of 400", async () => {
      const bodyData = [
        {name: "username"},
        {age: 23},
        {}
      ]
      for (const body of bodyData) {
        const response = await supertest(app).post("/save").send(body)
        expect(response.statusCode).toBe(400)
      }
    })
  })

})