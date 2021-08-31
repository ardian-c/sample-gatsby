const apiRootPath = 'https://mhupw0n8q2.execute-api.us-east-1.amazonaws.com/qa';

class NewsletterService {

    async signupForNewsletter(options) {
        const request = {
            method: 'POST',
            body: JSON.stringify(options),
            mode: 'cors',
            headers: new Headers()
        };
        request.headers.append('Content-Type', 'application/json; charset=utf-8');
        const url = `${apiRootPath}/newsletters/subscriptions`;
        const result = await fetch(url, request);
        if (result.ok) return { status: 'ok' };
        const errorObject = await result.json();
        if (errorObject.type === 'ValidationException') throw errorObject;
        throw { status: 'error', message: errorObject.message };
    }
}

export default new NewsletterService();