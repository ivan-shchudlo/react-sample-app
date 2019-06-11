export default function delay(result, timeout) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result);
        }, timeout);
    });
}