export class Progress {
    current: number = 0;

    public increment(): void {
        this.current++;
    }
}