export class Regex {
    // This class needs no constructor since it just interprets regex.
    // A set for what we are tring to detect, if we are trying to implement regex ourselves:
    runExpression(input: string, pattern: string): boolean {
        const regex = new RegExp(pattern); // Does typeScript already support regex?
        return regex.test(input);
    }
}