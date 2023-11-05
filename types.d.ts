export interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant';
    content: string;
}
export interface AudioResponse {
    audio: string;
    spectrogram: string;
}