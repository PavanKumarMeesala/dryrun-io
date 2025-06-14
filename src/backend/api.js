import axios from 'axios';
import { LANGUAGE_VERSIONS } from '../constants.js';

const API = axios.create({ baseURL: 'https://emkc.org/api/v2/piston' });

export const executeCode = async (language, code) => {

    console.log('Executing code:', { language, code });
  try {
    const response = await API.post('/execute', {
      language: language,
      version: LANGUAGE_VERSIONS[language],
      files: [
        {
          name: `Main.${language}`,
          content: code,
        },
      ],
    });

    console.log('Code execution response:', response);
    return response.data['run']['output'];
  } catch (error) {
    console.error('Error executing code:', error.response?.data || error.message);
    throw error;
  }
};
