import {MongoMemoryServer} from 'mongodb-memory-server';
import {expect} from 'chai';
import mongoose from 'mongoose';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', async function () {
            const mongoServer = await MongoMemoryServer.create();
            const uri = mongoServer.getUri();
            await mongoose.connect(mongoServer.getUri(), { dbName: "verifyMASTER" });

            // your code here

            await mongoose.disconnect();
            await mongoServer.stop();
            expect(true).to.be.true;
        });
    });
});
