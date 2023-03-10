const a = Symbol("a")

const b = {
    [a]: 1
}

const c = {...b}

console.log(c)