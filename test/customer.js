'use strict';

var expect = require('chai').expect;

var processout = require('..');
var client = new processout.ProcessOut('test-proj_gAO1Uu0ysZJvDuUpOGPkUBeE3pGalk3x', 
    'key_sandbox_mah31RDFqcDxmaS7MvhDbJfDJvjtsFTB');

function handleError(done, fn) {
    try { // boilerplate to be able to get the assert failures
        fn();
    } catch (error) {
        done(error);
    }
}

describe('Customer', function() {
    it('should timeout', function(done) {
        client.newCustomer().all({
            "timeout": 10,
        }).then(function(customers) {
            done("should timeout")
        }, function(err) {
            done();
        });
    });
    it('should fetch the customers list', function(done) {
        client.newCustomer().all().then(function(customers) {
            done();
        }, function(err) {
            done(err);
        });
    });
    it('should create and delete a customer', function(done) {
        client.newCustomer().create({
            first_name: "John",
            last_name:  "Smith"
        }).then(function(customer) {
            handleError(done, function() {
                expect(customer.getId()).not.to.be.empty;

                customer.delete().then(function() {
                    done();
                }, function(err) {
                    done(err);
                });
            });
        }, function(err) {
            done(err);
        });
    });
});
