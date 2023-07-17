function decodeToken() {
    const parts = token.split('.');
    const decodedPayload = atob(parts[1]);
    return JSON.parse(decodedPayload);
}
