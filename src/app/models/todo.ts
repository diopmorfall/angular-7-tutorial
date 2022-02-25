export class Todo{
    constructor(
        public readonly userId: number,
        public readonly id: number,
        public title: string,
        public isCompleted: boolean
    ){}
}