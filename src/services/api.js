import axios from 'axios';

const api = axios.create({
    baseURL: 'http://valltechvpn.dyndns.org:8086/api/EstacaoMovel',

});

export default {
    loginOperador: async (loginId, senha) => {
        const rest = await api.get('/GET/LoginOperadorValidacao',{
            params: {
                strLoginID: loginId,
                strSenha: senha
            }
        }); 
        return rest;
    },
    alterarSenha: async (loginId, senhaAntiga, senhaNova) => {
        const rest = await api.get('/GET/AlteraSenhaOperador',{
            params: {
                strLoginID: loginId,
                strSenhaAntiga: senhaAntiga,
                strSenhaNova: senhaNova
            }
        }); 
        return rest;
    },
    simula: async (loginId,codigoTicket) => {
        const rest = await api.get('/GET/SimulaValidacao',{
            params: {
                strLoginID: loginId,
                strCodigoTicket: codigoTicket,
            }
        }); 
        return rest;

    },
    efetuarValidacao: async (loginId, idValidacao,codigoTicket) => {
        const rest = await api.get('/GET/EfetuaValidacao',{
            params: {
                strLoginID: loginId,
                lngIDValidacao: idValidacao,
                strCodigoTicket: codigoTicket,
            }
        }); 
        return rest;

    },
    geraTicket: async () => {
        const rest = await api.post('/POST/Ticket',{
            
                lngIdentificadorDispositivo: "1",
                datEntrada: "2020-09-02T12:13:00",
                strPrisma: "",
                strPlacaVeiculo: "",
                strLoginIDOperador: "",
                intTipoVeiculo: ""
            
        });
        return rest;
    },
}