// Homework 1

// İstifadəçidən istifadə edərək məlumat tələb etməlisiniz
// prompt() və alert() istifadə edərək nəticəni göstərin.

// let information = prompt("Please enter the information: ");
// alert(information);

// 1. İstifadəçidən adını soruşun və cavab olaraq çap edin:
// "Salam, onun adı!"

// let name = prompt("Please enter your name: ");
// alert(`Hi, his name is ${name}.`);

// 2. İstifadəçidən onun doğum ilini soruşun, hesablayın
// onun neçə yaşı var və nəticəni çap edin. Cari ili göstərin
// kodda sabit olaraq.

// const currentYear = 2024;
// const birthYear = prompt("Please enter your birth year: ");

// if (birthYear <= 2024 && birthYear >= 1800)
//     alert(`Let me guess your age ... Is it ${currentYear - birthYear}??`);
// else
//     alert(`Please enter your age properly! No one can below 200 or under 0 years old.`);

// 3. İstifadəçidən kvadratın tərəfinin uzunluğunu soruşun və belə kvadratın perimetrini göstərin.

// let length = +prompt("Please enter rectangle's one side (in cm): ");
// var perimetr = length * 4; // The rectangle have four side. And perimetr is basicly total amount of sides
// alert(`The rectangle's perimetr (in cm) is ${perimetr}`);

// 4. İstifadəçidən dairənin radiusunu soruşun və çap edin
// belə bir dairənin sahəsi.

// const radius = +prompt("Please enter the circle's radius: ");
// const pi = 3.14;
// alert(`Circle's area is equal to ${pi * radius**2}`);

// 5. İstifadəçidən iki arasındakı məsafəni km ilə soruşun
// şəhərlər və ora neçə saat çatmaq istəyir. Hərəkət etmək üçün lazım olan sürəti hesablayın
// vaxtında almaq.

// const distance = +prompt("Please enter the distance between two cities: ");
// const time = +prompt("Please enter the time that you want reach there (in minutes): ");
// var hour = time / 60;
// var speed = distance / hour;
// alert(`If you want to reach other city in ${time} minutes, you have to go with ${speed} (km/hour).`);

// 6. Valyuta konvertorunu həyata keçirin. İstifadəçi dollara daxil olur, proqram avroya çevrilir. Valyuta məzənnəsini saxla
// Sabit.

// const exchangeRateUSDToEU = 0.92;
// let usd = +prompt("Please enter the amount in dollar: ");
// var euro = usd * exchangeRateUSDToEU;
// alert(`${usd}$ is equal to ${euro}€.`);

// 7. İstifadəçi flash sürücünün ölçüsünü GB ilə müəyyən edir. Proqram
// Bir flash sürücüyə neçə 820 MB fayl uyğun olduğunu hesablamalıyam.

// let sizeGB = +prompt("Please enter your flash disk's capacity (in GB): ");
// const fileSizeMB = 820;// mb
// var capacity = +((sizeGB * 1024) / 820);
// alert(`Your flash disk is able to conatain ${capacity} of this file.`);