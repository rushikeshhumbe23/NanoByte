declare module 'react-speech-recognition' {
    export const useSpeechRecognition: () => {
        transcript: string;
        listening: boolean;
        resetTranscript: () => void;
        browserSupportsSpeechRecognition: boolean;
    }
}

declare module 'react-speech-recognition' {
    const SpeechRecognition: {
        startListening: () => void;
        stopListening: () => void;
    };

    export default SpeechRecognition;
}

