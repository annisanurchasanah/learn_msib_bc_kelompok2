const readline = require('readline')

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

const getInput = (prompt) => {
  return new Promise((resolve) => {
    rl.question(prompt, (input) => {
      resolve(input)
    })
  })
}

const main = async () => {
  const angkaPertama = await getInput('Masukkan angka pertama: ')
  const angkaKedua = await getInput('Masukkan angka kedua: ')

  const hasilPerkalian = parseInt(angkaPertama) * parseInt(angkaKedua)

  console.log(`Hasil Perkalian: ${hasilPerkalian}`)
  rl.close()
}

main()