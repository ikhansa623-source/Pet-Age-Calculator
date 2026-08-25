console.log('hello pets');


document.querySelector(".btn").addEventListener("click",()=>{
  document.querySelector(".startbtn").style.display="block";  
})



let breedsize = {
Balinese: "medium",
    Somali : "small",
    Snowshoe: "large"
}
let breedSelect = document.querySelector("#breed")
for (const breed in breedsize) {
    let option = document.createElement("option")
    option.value = breed
    option.textContent = breed
    breedSelect.appendChild(option)
}

let months = {
    january: 0, february: 1, march: 2, april: 3, may: 4, june: 5,
    july: 6, august: 7, september: 8, october: 9, november: 10, december: 11
}
let monthSelect = document.querySelector("#month")
for (const month in months) {
    let option = document.createElement("option")
    option.value = months[month]   // number store karo, string nahi
    option.textContent = month
    monthSelect.appendChild(option)
}

let yearSelect = document.querySelector("#year")
let currentYear = new Date().getFullYear()
for (let year = currentYear; year >= currentYear - 19; year--) {
    let option = document.createElement("option")
    option.value = year
    option.textContent = year
    yearSelect.appendChild(option)
}



function calculateAge(birthMonth, birthYear) {
    let today = new Date()
    let currentYear = today.getFullYear()
    let currentMonth = today.getMonth()   // 0-11 (January=0)

    let years = currentYear - birthYear
    let months = currentMonth - birthMonth

    if (months < 0) {
        years = years - 1
        months = months + 12
    }

    let ageInYears = years + (months / 12)
    return ageInYears
}

function getHumanAge(age, breed) {
    let size = breedsize[breed]   // apna breedSizes object jo pehle banaya tha

    if (age <= 1) {
        return 15 * age
    } else if (age <= 2) {
        return 15 + (age - 1) * 9
    } else {
        let perYear = { small: 4, medium: 4.5, large: 6 }
        return 24 + (age - 2) * perYear[size]
    }
}
document.querySelector("#calculateBtn").addEventListener("click", () => {
    let month = parseInt(document.querySelector("#month").value)
    let year = parseInt(document.querySelector("#year").value)
    let breed = document.querySelector("#breed").value

    let petAge = calculateAge(month, year)
    let humanAge = getHumanAge(petAge, breed)

    document.querySelector("#result").textContent =
        `Your Cat is ${petAge.toFixed(1)} years old, which is about ${Math.round(humanAge)} human years!`
})









