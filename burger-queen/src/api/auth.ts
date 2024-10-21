import axios from 'axios';
import { LoginCredentials, LoginResponse } from '../types/index';

const API_URL = 'http://localhost:8080'; // aqui la url del burger api

export const login = async (credentials: LoginCredentials): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error) && error.response) {
      throw new Error(error.response.data.message || 'Error de autenticación');
    }
    throw new Error('Error de red');
  }
};