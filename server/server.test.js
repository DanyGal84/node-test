const request = require('supertest');
const expect = require('expect');
var app = require('./server').app;

describe('Server', () => {
    describe('GET /', () => {
            it('should return hello world response', (done) => {
                request(app)
                    .get('/')
                    .expect(404)
                    .expect((res) => {
                        expect(res.body).toInclude({
                            error: 'Page not found.'
                        });
                    })
                    .end(done);
            });
    });

    describe('Get /users', () => {
        it('should return you exist in users', (done) => {
            request(app)
                .get('/users')
                .expect(200)
                .expect((res) => {
                    expect(res.body).toInclude({
                        name: 'Daniel Galvan',
                        age: 34,
                        location: 'Mexico'
                    });
                })
                .end(done);
        });
    });
});