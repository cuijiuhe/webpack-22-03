export const con = () => {
  console.log('hello webpack!!!')
}

function getString() {
  return new Promise((resolve, reject) => {
    setTimeout(()=> {
      resolve('hello 异步;')
    }, 2000)
  })
}

export async function sayHello() {
  const string = await getString()
  console.log(string)
  return string
}

sayHello()



