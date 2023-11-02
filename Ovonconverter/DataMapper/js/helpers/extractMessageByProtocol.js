const extractMessageV03 = (request, eventType) => {
    const events = request.ovon.events;
    const whisperEvent = events.filter(events => events.eventType === eventType);
    return whisperEvent[0].parameters.message;
}

export function extractMessageByProtocol(requestJson, version, eventType) {
    switch(version) {
        case 'ovon_0.3' :
            return extractMessageV03(requestJson, eventType);
        default:
            return extractMessageV03(requestJson, eventType);
    }
}