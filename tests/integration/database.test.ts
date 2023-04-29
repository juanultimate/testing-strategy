import {MongoMemoryServer} from 'mongodb-memory-server';
import {expect} from 'chai';
import mongoose from 'mongoose';

describe('Array', function () {
    describe('#indexOf()', function () {
        it('should return -1 when the value is not present', async function () {
            const mongoServer = await MongoMemoryServer.create({
                instance: {
                    port: 27017
                },
            });
            const uri = mongoServer.getUri();
            await mongoose.connect(uri);

            const kittySchema = new mongoose.Schema({
                name: String
            });
            const Kitten = mongoose.model('Kitten', kittySchema);
            const silence = new Kitten({ name: 'Silence' });

            console.log(silence.name); // 'Silence'
            await silence.save();

            const response = await Kitten.findOne({ 'name': 'Silence' }).exec();
            console.log(response);
            await delay(20000);
            await mongoose.disconnect();
            await mongoServer.stop();
            expect(response.name).to.eq("Silence");
        });
    });
});


function delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
}
