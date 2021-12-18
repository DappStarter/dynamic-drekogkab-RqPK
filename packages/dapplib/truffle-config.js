require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good slice obscure suspect normal note mushroom erosion hidden kite suspect sentence'; 
let testAccounts = [
"0x10a2ced5e669fb96fc096da77e7c0df1352e83ced9494c330467bb64088076cd",
"0x27791a1e64f01e287bb673175116490e8e6bd38f64a7919fd36815eece5df150",
"0xcb9b8a1fd14d0250e15a9f4ebfd40427eec919f89def5e91a57b65480a1e0f65",
"0x25ef2468325ac588565b8c311d50d0c0140916b1539f084c1314ed14c21b8505",
"0xef0ecaf5032fe4d48aba9a3059877f042009789ace894afc9e67cf275773a149",
"0x7a113384939ad5dbb5e4d2cf8af8e98a6264c8fc67137258a486ffe5e045c18e",
"0x1ed3fa1ff7a941f28d6308e1c264baabac961f533fdb51df6a2320284f856b53",
"0x778dfd175ecdfeafc44d6428053b5104aa592aeeb90848a97782b447f6a5df2a",
"0xd4b807bee9d960b033fa2b5021ac771eb4c82fab9fc4403a22dd7cac7d0850da",
"0x03e194eb857f12a981909271938514fae2c118c15ff7d6389b9ce9737ab80356"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


