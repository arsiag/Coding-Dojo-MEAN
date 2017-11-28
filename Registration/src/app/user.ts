export class User {
    constructor(
        public id: number = null,
        public firstName: string = '',
        public lastName: string = '',
        public password: string = '',
        public email: string = '',
        public street: string = '',
        public apt: string = '',
        public city: string = '',
        public state: string = '',
        public feel: string = '',
        public created_at: Date = new Date(),
        public updated_at: Date = new Date()
    ) {}
}
