const fetch1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ id: 1 })
    }, 2000)
  })
}

// fetch1()
//   .then(response => {
//     console.log(response)

//     fetch2(response.id)
//       .then(response => {
//         console.log(response)

//         fetch3()
//           .then(response => {
//             console.log(response)
//           })
//       })
//   })

// fetch1()
//   .then()
//   .catch(err => console.log(err))

const saySomethingInTwoSeconds = async () => {
  try {
    const user = await fetch1()
    console.log(user)
  } catch(err) {
    console.log(err)
  }
}

saySomethingInTwoSeconds()