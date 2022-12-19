// eslint-disable-next-line import/no-anonymous-default-export
export default (message = [], action) =>{
     switch(action.type){
        case 'CREATE':
          return [ ...message, action.payload]
         default: 
         return message;
     }
}