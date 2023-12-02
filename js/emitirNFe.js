// Emissao de NFe @ NS Tecnologia

const nsAPI = require('ns-nfe-node/ns_modules/nfe_module/emissao/emitirSincrono')
const nfeJSON = require('./nfe.json')

var retornoEmissao = nsAPI.emitirNFeSincrono(nfeJSON, "2", "X", "Documentos/NFe")
retornoEmissao.then(()=>console.log(retornoEmissao))