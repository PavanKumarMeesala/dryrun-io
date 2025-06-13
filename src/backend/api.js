import axios from 'axios';
const API = axios.create( {baseURL : 'https://emkc.org/api/v2/piston'} );

export const executeCode = async (language, code, input) => {
try {
    const response = await API.post('/execute', {
        language,
        source: code,
        stdin: input,
        })
    }
catch (error) {
    console.error('Error executing code:', error);
    throw error; 
  }
}; 
