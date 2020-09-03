export const initialState = {
    idLogin: '',
    validacoes: '',
    IdValidacao: '',
    ticket: ''

};

export const UserReducer = (state, action) => {
    switch(action.type) {
        case 'setIdLogin':
            return { ...state, idLogin: action.payload.idLogin };
            break;
        case 'setValidacoes':
            return { ...state, validacoes: action.payload.validacoes} 
            break;
        case 'setIdValidacao':
            return { ...state, IdValidacao: action.payload.IdValidacao }
            break;
        case 'setTicket':
            return { ...state, ticket: action.payload.ticket }
            break;
        default: 
            return state;
    }
}