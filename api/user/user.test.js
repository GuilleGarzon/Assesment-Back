const request = require('supertest');
const mongoose = require('mongoose');
const configExpress = require('../config/express');
const User = require('./user.model');

const app = configExpress();

describe('Users', () => {
  beforeAll(async () => {
    await mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
  });

  afterAll(async () => {
    await mongoose.disconnect();
    await mongoose.connection.close();
  });

  test("should not create user when there is no email", async () => {
    const user = { password: "123456" };
    const res = await request(app).post("/api/users").send(user);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/User could not be registered/i);
  });

  test("should not create user when email already exists", async () => {
    const user = { email: "guille@mail.com", password: "123456" };
    await User.create(user);
    const res = await request(app).post("/api/users").send(user);

    expect(res.statusCode).toBe(400);
    expect(res.body.message).toMatch(/User could not be registered/i);
  });
})
