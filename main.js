var qeydiyyat = confirm("Qeydiyyatdan kecin !");
if (qeydiyyat) {
  var check;
  do {
    var password = prompt("Sifreni daxil et.");
    check = Boolean(password);
    if (password === null && confirm("Cixisi tesdiq edirsiz ?")) {
      alert("Cixis olundu !");
      break;
    }
  } while (!check);
  if (check) {
    do {
      var maais = prompt("Maasinizi daxil edin.");
      check = Boolean(Number(maais));
      if (maais === null && confirm("Cixisi tesdiq edirsiz ?")) {
        alert("Cixis olundu !");
        console.log("peyser");
        break;
      } else if (maais != null) {
        if (!check) {
          alert("Yalniz reqem daxil edin !");
          continue;
        } else {
          alert("Ugurla qeydiyyatdan kecdiz !");
        }
      }
    } while (!check);
  }
  //Mayis daxil edildiye kimi
  var passwordcount = 3;
  var balans = 1000;
  var kredit = 0;
  var number = 1;
  var check7 = true;
  //En bouk while budur
  while (passwordcount > 0 && maais != null) {
    var password1 = prompt("Hesaba daxil olmaq ucun Sifrenizi daxil edin !");
    var check1 = Boolean(password1);
    if (password1 == password) {
      alert("Hesabina xos geldin");
      if (balans != 0) {
        do {
          if (balans != 0 && confirm("Pul cixarmaq ?")) {
            do {
              var number1 = prompt(`Meblegi daxil edin_(Balans:${balans})`);
              check = Boolean(Number(number1));
              if (number1 === null) {
                var check4 = confirm("Cixisi tesdiq edirsiz ?");
              } else if (!check) {
                alert("Yalniz reqem daxil edin !");
                continue;
              } else {
                if (number1 <= balans) {
                  balans -= number1;
                  console.log(
                    `${number1}-AZN odenildi  Balans:${balans} Tarix:${new Date()}`
                  );
                  alert("Odenis ugurlu !");
                  if (balans != 0) {
                    continue;
                  }
                  if (
                    kredit === 0 &&
                    balans === 0 &&
                    confirm("Balans bitdi.Kredit isdiyirsiz ?")
                  ) {
                    kredit = maais * 0.45 * 12;
                    balans += kredit - (kredit * 2) / 100;
                    console.log(
                      `Qalan kredit borcu:${kredit} Tarix:${new Date()}`
                    );
                    alert("Kredit balansina kocdu !");
                    continue;
                  } else {
                    check7 = false;
                    break;
                  }
                } else if (balans < number1) {
                  alert(
                    `Balans yeterli deyil ${number1 - balans}.AZN catmir !`
                  );
                  if (kredit === 0 && confirm("Kredit isdiyirsiz ?")) {
                    kredit = maais * 0.45 * 12;
                    balans += kredit - (kredit * 2) / 100;
                    console.log(
                      `Qalan kredit borcu:${kredit} Tarix:${new Date()}`
                    );
                    continue;
                  } else {
                    break;
                  }
                }
              }
            } while (!check4);
          } else if (
            kredit != 0 &&
            confirm(`Kredit odemek--${kredit}, Balans:${balans} ?`)
          ) {
            do {
              var number2 = prompt(`Meblegi daxil edin_(Balans:${balans})`);
              check6 = Boolean(Number(number2));
              if (number2 === null) {
                var check5 = confirm("Cixisi tesdiq edirsiz ?");
              } else if (!check6) {
                alert("Yalniz reqem daxil edin !");
                continue;
              } else {
                if (number2 > kredit) {
                  alert(
                    `Sizin max ${kredit}.AZN Odenis ede bilersiz ${balans}.AZN !`
                  );
                  continue;
                } else if (number2 <= balans) {
                  balans -= number2;
                  kredit -= number2;
                  alert("Kredit Odenisi ugurlu !");
                  console.log(
                    `${number2}-AZN kredit odenildi. Qalan kredit:${kredit} Balans:${balans} Tarix:${new Date()}`
                  );
                } else if (balans < number2) {
                  alert(`Balans yeterli deyil max ${balans}.AZN daxil edin !`);
                  if (confirm("Odenisi tekirar olunsun ?")) {
                    continue;
                  } else {
                    break;
                  }
                }
              }
            } while (!check5);
          } else {
            if (confirm("Cixis edilsin ?")) {
              break;
            } else {
              continue;
            }
          }
        } while (check7);
      } else {
        if (kredit === 0 && confirm("Kredit isdiyirsiz ?")) {
          kredit = maais * 0.45 * 12;
          balans += kredit - (kredit * 2) / 100;
          alert(`Kredit verildi:${kredit}`);
          console.log(`Qalan kredit borcu:${kredit} Tarix:${new Date()}`);
          continue;
        }
      }
    } else if (password1 === null) {
      if (confirm("Cixis edilsin ?")) {
        break;
      } else {
        continue;
      }
    } else if (passwordcount == 1) {
      console.log(`Sehv Cehd sayi:3`);
      console.error("Kart bloklandi,Banka muraciet et");
    } else {
      alert("Sifre yalnis, Yenid cehd et !");
      console.log(`Sehv Cehd sayi:${number}`);
      number++;
    }
    passwordcount--;
  }
} else {
  alert("Qeydiyat dayandirildi !");
}
/*
Ulduz taskininin helli.
var data;
for (var i = 0; i < 9; i++) {
  data = "";
  for (var j = 1; j < 9 - i; j++) {
    data += " ";
  }
  data += "*";
  for (var index = 1; index <= i; index++) {
    data += "**";
  }
  console.log(data);
}

*/
