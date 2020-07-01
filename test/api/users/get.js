const expect = require('chai').expect;
const request = require('supertest');

const app = require('../../../server');
const con = require('../../../con');

describe('GET /users', () =>{
    before ((done)=>{
        con.connect().then(()=> done()).catch((err)=>done());
    })

    after((done) =>{
        con.close().then(()=>done()).catch((err)=>done());
    })
})