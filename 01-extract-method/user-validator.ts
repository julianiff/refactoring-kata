export interface User {
    email?: string;
    password?: string;
    age?: number;
}

export function validateUser(user: User): boolean {
    if (
        !user.email ||
        !user.email.includes("@") ||
        !user.email.includes(".") ||
        user.email.length < 5
    ) {
        return false;
    }
    if (
        !user.password ||
        user.password.length < 8 ||
        !/[A-Z]/.test(user.password) ||
        !/[0-9]/.test(user.password)
    ) {
        return false;
    }
    if (!user.age || user.age < 18 || user.age > 120) {
        return false;
    }
    return true;
}
