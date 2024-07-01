import { Message } from '../types/chat';
import axiosInstance from './axiosInstance';

export const fetchMessagesApi = async (): Promise<Message[]> => {
  const response = await axiosInstance.get('/comments');
  return response.data;
};

export const sendMessageApi = async (message: Message): Promise<Message> => {
  const response = await axiosInstance.post('/comments', message);
  return response.data;
};

export const editMessageApi = async (message: Message): Promise<Message> => {
  const response = await axiosInstance.put(`/comment/${message.id}`, message);
  return response.data;
};

export const deleteMessageApi = async (id: string): Promise<void> => {
  await axiosInstance.delete(`/comment/${id}`);
};
