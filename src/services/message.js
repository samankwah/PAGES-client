import { apiClient } from "./config";

export const getChatSession = async (sessionId) => {
  return await apiClient.get(`/chat-sessions/${sessionId}/messages`);
};

export const sendMessage = async (sessionId, payload) => {
  return await apiClient.post(`/chat-sessions/${sessionId}/messages`, payload);
};

export const startChatSession = async () => {
  return await apiClient.post("/chat-sessions");
};
