export default class NotFoundError extends Error {
    constructor(e: string) {
        super(e);

        Object.setPrototypeOf(this, NotFoundError.prototype)

        Object.defineProperty(this, 'type', {
            get() {
                return 'NotFoundError';
            }
        });
    }
}