function containsWord(text, wordList) {
    return wordList.some(word =>
        new RegExp(`\\b${word}\\b`, "i").test(text)
    );
}

function handleDateRequest(userMessage) {
    const msg = userMessage.toLowerCase();

    const acceptWords = ["yes", "i agree", "sure", "ok", "okay", "alright", "yeah", "yep"];
    const rejectWords = ["no", "nope", "never", "not interested", "nah"];

    if (containsWord(msg, acceptWords)) {
        return "Thank you 😊";
    }

    if (containsWord(msg, rejectWords)) {
        return "Alright 👍 Let’s talk about something else. What would you like help with?";
    }

    return "Okay 👍 Let’s switch topic. What would you like to do or learn about?";
}