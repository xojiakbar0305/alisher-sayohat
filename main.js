var airTicket = 500;
var billHotel = 250;
var forTrip = 120;
var rateDollar = 9433.34;
var rateEuro = 10354.03;

// dollorni sumga otqazish
var dollarToSum = rateDollar * (airTicket + billHotel);

// yevroni sumga otqazish
var euorToSum = forTrip * rateEuro;

// umumiy summa
var resultInSum = dollarToSum + euorToSum;

// var text = document.createElement('p')

alert(`Alisher sizga sayohat uchun ${resultInSum} sum pul kerak bo'ladi!`)
var hasMoney = parseInt(prompt(`Qancha pulingiz bor Alisher?`))
if (resultInSum <= hasMoney) {
  document.querySelector('.text').textContent = ('Alisher sez sayohatga 32-oktyabr kuni jo\'naysan 😛')
} else {
  document.querySelector('.text').textContent = ('afsus Alisher sez sayohatga endi hapshanba kuni borasan sening puling ' + hasMoney + ' sum 😛')
}