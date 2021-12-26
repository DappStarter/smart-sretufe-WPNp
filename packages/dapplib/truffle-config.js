require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict help frame tribe strong rice noise modify grid civil army ghost'; 
let testAccounts = [
"0xc8eb89e1ba210c2a7111bcc1be97832b1c0c8b1f421fc07fb542dbdf63bb3f54",
"0x4b2bab58153becb7d1931461d7b15f5be71a0b7179eb9154d3c2bf1dc0a2cc70",
"0xaaf58eaa6d2ec3262f0e9860a5b8028b58406e949b300b6467fb589f4d17243d",
"0xac822dbc4af23af808fdad2ffa4198059dbfd16db6b9e5628151ef77359dae62",
"0xdb3ebd264345ed33cf570eea4318fe8a9d8e7613e0393d5b4586e2d42f8ea88f",
"0xb46cf9b15039f28058fd03a7346dedaec6bacddc116cfc2c982b61e316e6a2f7",
"0x5a4c32695adafaff60ee8a3fc4bca8d4335a956fb8f73cc69cc36dd2361c8925",
"0x69975373ea666efb965c2a59954d83d85b50b05dae3b2fd50f18d2c4365842c2",
"0xf2361e0942c0aa6c857d2e1957794a7bbdd5aa984e1288594d00777c7e99bd55",
"0xd53d4e98c37f24b7f58ff418aad08fffb03b19d61837712bc3b5ce4afe505f86"
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


