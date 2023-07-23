// Arrays

const superHeros: string[] = []
// const heroPower: number[] = []

// other way to declare array
const heroPower: Array<number> = []

const player: Array<string> = ["firstName","lastName", "age", "birthDate", "mobileNumber" ]

console.log(player[0])
// declaring array by creating type
type User1 = {
    name: string,
    isActive: boolean
}

const allUsers: User1[] = [{name: 'user', isActive: true}, {name: 'user2', isActive: true}]

const MLModels: number[][] = [
    [255, 255, 255],[]
]

superHeros.push('spiderman')
heroPower.push(2)

allUsers.push({name: "", isActive: true})