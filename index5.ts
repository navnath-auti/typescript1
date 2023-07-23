// interfaces in typescript
// whenever your creating user these are fields are compulsory 
// it is similar to class but it is loose form of class
interface User7 {
    readonly dbId: number;
    email: string,
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

// it is called as reopening of interface which is not possible in type
interface User7{
    githubToken: string
}

// inheritance is also one of the advantage of interface
interface Admin7 extends User7 {
    role: 'admin' | 'ta' | 'learner'
}

const hitesh: User7 = {
    dbId: 22,
    email: 'h@h.com',
    userId: 2211,
    githubToken: 'github',
    startTrail: () => {
        return 'hitesh'
    },
    getCoupon: (name: 'hitesh', value: 10) => {
        return 10
    }
}

const hitesh1: Admin7 = {
    dbId: 22,
    email: 'h@h.com',
    userId: 2211,
    role: 'admin',
    githubToken: 'github',
    startTrail: () => {
        return 'hitesh'
    },
    getCoupon: (name: 'hitesh', value: 10) => {
        return 10
    }
}

hitesh.email = 'n@n.com'