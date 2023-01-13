import { Api, JsonRpc, RpcError, JsSignatureProvider } from 'ineryjs/dist/index.js'
const url = "http://65.108.250.118:8888"

const json_rpc = new JsonRpc(url) 
const private_key = "Private_key"; 
const actor = "alter.serv1"

const account = "bordomavi"
const signature  = new JsSignatureProvider([private_key]); 

const api = new Api({
    rpc: json_rpc,
    signatureProvider: signature
})

async function create(id, user, data){
    try{
        const tx = await api.transact({
            actions:[
                {
                    account,
                    name:"olustur",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        id, user, data
                    }
                }
            ]
        },{broadcast:true,sign:true})

        
        console.log("_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O")
        console.log("_O_O_O_O_O_O_O_O_O_O_O Islem Ayrıntılarını olustur _O_O_O_O_O_O_O_O_O_O_O")
        console.log("_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O")
        console.log(tx, "\n")
        console.log("Response from contract :", tx.processed.action_traces[0].console)
        console.log("\n")
    }catch(error){
        console.log(error)
    }
}

async function read(id){
    try{
        const tx = await api.transact({
            actions:[
                {
                    account,
                    name:"oku",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        id
                    }
                }
            ]
        },{broadcast:true,sign:true})
        
        console.log("_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O")
        console.log("_O_O_O_O_O_O_O_O_O_O_O Islem detaylarını oku _O_O_O_O_O_O_O_O_O_O_O")
        console.log("_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O")
        console.log(tx, "\n")
        console.log("Response from contract :", tx.processed.action_traces[0].console)
        console.log("\n")
    }catch(error){
        console.log(error)
    }
}

async function update(id, data){
    try{
        const tx = await api.transact({
            actions:[
                {
                    account,
                    name:"guncelle",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        id, data
                    }
                }
            ]
        },{broadcast:true,sign:true})

        
        console.log("_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_")
        console.log("_O_O_O_O_O_O_O_O_O_O_ Islem Detaylarını Guncelle _O_O_O_O_O_O_O_O_O_O_")
        console.log("O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_O_")
        console.log(tx, "\n")
        console.log("Response from contract :", tx.processed.action_traces[0].console)
        console.log("\n")
    }catch(error){
        console.log(error)
    }
}

async function destroy(id){
    try{
        const tx = await api.transact({
            actions:[
                {
                    account,
                    name:"yik",
                    authorization:[
                        {
                            actor,
                            permission:"active"
                        }
                    ],
                    data:{
                        id
                    }
                }
            ]
        },{broadcast:true,sign:true})

        
        console.log("=======================================================================")
        console.log("===================== İşlem detaylarını yık =====================")
        console.log("=======================================================================")
        console.log(tx, "\n")
        console.log("Response from contract :", tx.processed.action_traces[0].console)
        console.log("\n")
    }catch(error){
        console.log(error)
    }
}


async function main(id, user, data){
    await olustur(id, user, data)
    await oku(id)
    await guncelle(id, data)
    await yik(id)
}

main(1, account, "CRUD aracılıgıyla JSON RPC islemi")
