const expect = require('expect');

const utils = require('./utils');

describe('Utils', () => {

    describe('#add', () => {
        it('should add two numbers', () => {
            var res = utils.add(33, 11);

            expect(res).toBe(44).toBeA('number');

            // if (res !== 44) {
            //     throw new Error(`Expected 44, but got ${res}`);
            // }
        });
    });

    it('should square a number', () => {
        var sqr = utils.square(3);

        expect(sqr).toBe(9).toBeA('number');
        // if (sqr !== 9) {
        //     throw new Error(`Expected 9 but got ${sqr}`);
        // }
    });

    it('should async add two numbers', (done) => {
        utils.asyncAdd(4, 3, (sum) => {
            expect(sum).toBe(7).toBeA('number');
            done();
        });
    });

    it('should async square a number', (done) => {
        utils.asyncSquare(5, (res) => {
            expect(res).toBe(25).toBeA('number');
            done();
        });
    });
});



it('should expect some values', () => {
    // expect(12).toNotBe(12);
    // expect({name: 'Daniel'}).toEqual({name: 'Daniel'});
    // expect([2,3,4]).toInclude(3);
    // expect([2, 3, 4]).toExclude(5);
    expect({
        name: 'Daniel',
        age: 34,
        location: 'México'
    }).toInclude({
        age: 34
    })
});

it('should set firstName and lastName', () => {
    var user = {location: 'México', age: 34};
    var res = utils.setName(user, 'Daniel Galvan');

    expect(res).toInclude({
        firstName: 'Daniel',
        lastName: 'Galvan'
    });
});