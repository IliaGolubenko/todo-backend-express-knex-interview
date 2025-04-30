const request = require("./util/httpRequests.js");
const app = require("../server.js");

describe("Todos API", () => {
  it("GET should return an array of all todos", async () => {
    const response = await request.get("/");
    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('POST should create a todo entry', async () => {
    const response = await request.post("/", { title: "blah", order: '1' });
    expect(response.status).toBe(200);
    expect(response.body.title).toBe('blah');
  })
});
