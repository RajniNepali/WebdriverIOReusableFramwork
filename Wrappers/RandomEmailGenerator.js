export function generateRandomEmailAddress() {
    let emailAddress = "WebIOFramework_" + Math.random().toString().replace('0.', '') + "@webdriverNitor.com";
    return emailAddress;
}