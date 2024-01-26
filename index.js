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
// var capacity = Math.floor((sizeGB * 1024) / 820);
// alert(`Your flash disk is able to contain ${capacity} of this file.`);

// 8. İstifadəçi cüzdandakı pulun miqdarını və birinin qiymətini daxil edir
// şokoladlar. Proqram nə qədər şokoladın ola biləcəyini göstərir
// istifadəçi satın alır və nə qədər dəyişiklik qalıb.

// let budget = +prompt("Please enter your budget amount in USD: ");
// let chocoPrice = +prompt("Please enter the chocolate price in USD: ");
// var capacity = Math.floor(budget / chocoPrice);
// alert(`Your buget amount is able to buy ${capacity} of this chocolate.`);

// 9. İstifadəçidən üç rəqəmli nömrə istəyin və çap edin
// arxaya. Problemi həll etmək üçün sizə lazım olacaq
// % operatoru (bölmə qalığı).

// let number = +prompt("Please enter the 3 digit number (ex. 123, 234): ");
// const firstNumber = Math.floor(number / 100);
// const secondNumber = Math.floor(number / 10) % 10;
// const thirdNumber = number % 10;
// var reversedNumber = thirdNumber * 100 + secondNumber * 10 + firstNumber;
// alert(`Reversed number of ${number} is ${reversedNumber}`);

// 10. İstifadəçidən tam ədəd istəyin və cavab olaraq çap edin,
// rəqəmin cüt olub-olmamasından asılı olmayaraq. Tapşırıqda məntiqdən istifadə edin
// operatorlar. Tapşırıqda if və ya keçiddən istifadə etməyə ehtiyac yoxdur.

// let integer = +prompt("Please enter the integer: ");
// var isEven = (integer % 2 == 0);
// alert(`Is number even: ${isEven}`);

// 11. Restoranda bir neçə növ oturacaq var:
// 1) Kiçik masa - 2 nəfərə qədər;
// 2) Orta masa - 4 nəfərə qədər;
// 3) Böyük masa - 8 nəfərə qədər.
// Restoran bir masada 8 nəfərdən çox şirkət yerləşdirə bilməyəcək :’-(
// İstifadəçidən gələn qonaqların sayını qəbul edəcək funksiyanı yazın və ən uyğun cədvəli təklif edin.

// function proposeSchedule(guestCount){
//     if (guestCount > 0 && guestCount <= 2){
//         return "little table";
//     }else if (guestCount > 2 && guestCount <= 4){
//         return "medium table";
//     }else if (guestCount > 4 &&  guestCount <= 8){
//         return "massive table";
//     }else if (guestCount > 8){
//         return 0;
//     }
//     return -1;
// }
// let guestCount = +prompt("Please enter the count of guests: ");
// var result = proposeSchedule(guestCount);

// if (result != 0 && result != -1)
//     alert(`Offered table size is ${result}`);
// else if (result == 0)
//     alert("Sorry :( We can't accept higher than 8 guest.");
// else
//     alert("Are you kidding ? Can guest count lower than 0 ?");

// 12. Mağaza müştərilər haqqında aşağıdakı məlumatları saxlayır:
// - Adı;
// - Yaş;
// - Sifarişlərin sayı;
// - Sifarişlərin məbləğləri.
// Mağaza daimi müştərilərə və 60 yaşdan yuxarı müştərilərə endirim edir. 
// Müştəri ümumi məbləği 100 AZN və daha çox olan 4 və ya daha çox sifariş vermişsə, daimi müştəri sayılır. 
// Müştərinin məlumatlarını giriş kimi qəbul edəcək və müştərinin endirim alıb-almamasından asılı olmayaraq məlumatı qaytaracaq bir funksiya yazın.

// function CanDiscountPossible(name, age, orderCount, totalOrderPrice){
//     var isPermanentCustomer = (totalOrderPrice >= 100 && orderCount >= 4);
//     var canMakeDiscount = isPermanentCustomer || age > 60;
//     if (isPermanentCustomer && canMakeDiscount)
//         return "We can make discount!";
//     return "Sorry :( We can't make discount!";
// }
// let name = prompt("Please enter you name: ");
// let age = +prompt("Please enter your age: ");
// let orderCount = +prompt("Please enter the customer's order count: ");
// let totalOrderPrice = +prompt("Please enter the total price of orders (in USD): ");
