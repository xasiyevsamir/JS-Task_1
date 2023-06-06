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
      if (maais === null && confirm("Cixisi tesdiq edirsiz ?")) {
        alert("Cixis olundu !");
        break;
      } else if (maais != null) {
        check = Boolean(maais);
        console.log(check);
        console.log(`salam${maais}salam`);
        if (!check) {
          alert("Yalniz reqem daxil edin !");
          continue;
        } else {
          console.log("Ugurla qeydiyyatdan kecdiz !");
        }
      }
    } while (!check);
  }
  var passwordcount = 3;
  var balans = 1000;
  var kredit = 0;
  while (passwordcount > 0 && check) {
    var password1 = prompt("Hesaba daxil olmaq ucun Sifrenizi daxil edin !");
    if (password === password1) {
      console.log("Hesabina xos geldin !");
      do {
        if (kredit != 0 && confirm("Kredit odeneisi edeceksiz ?")) {
          do {
            console.log(`Balansiniz:${balans} Tarix:${new Date()}`);
            do {
              var data = Number(prompt(`Sizin balansiniz:${balans}`));
              check = Boolean(data);
              if (!check || data <= 0) {
                alert("Yalniz musbet reqem daxil edin !");
              }
            } while (data < 0 || !check);
            if (balans === 0) {
              alert(
                `Odenis etmek ucun balansinizi artirin: Balansiniz (${balans})-AZN.`
              );
              continue;
            }
            if (balans < data) {
              console.error("Balansiniz yeterli deyil.");
              alert(`Odenis etmek ucun max ${balans}-AZN daxil edin.`);
              continue;
            } else {
              if (data > kredit) {
                balans -= data;
                kredit -= data;
                balans = balans - kredit;
                kredit = 0;
                console.log(`Kredit odenisi bitdi. Tarix:${new Date()}`);
              } else {
                balans -= data;
                kredit -= data;
              }
              console.log("Odenis ugurludur !");
              console.log(`Qalan kredit borcu:${kredit}`);
              if (kredit != 0) {
                var data1 = confirm("Yeniden odenis etmek isdiyirsiz ?");
              } else {
                if (confirm("Yeniden kredit goturmek isdiyirsiz ?")) {
                  kredit = maais * 0.45 * 12;
                  balans += kredit - (kredit * 2) / 100;
                  console.log(
                    `Qalan kredit borcu:${kredit} Tarix:${new Date()}`
                  );
                  break;
                } else {
                  break;
                }
              }
            }
          } while (data1);
        } else if (confirm("Pul cixarmaq ?")) {
          do {
            console.log(`Balansiniz:${balans} Tarix:${new Date()}`);
            do {
              var data = Number(prompt(`Sizin balansiniz:${balans}`));
              check = Boolean(data);
              if (!check || data <= 0) {
                alert("Yalniz musbet reqem daxil edin !");
              }
            } while (data < 0 || !check);
            if (data <= balans) {
              balans -= data;
              console.log(
                `${data}-AZN odenildi  Balans:${balans} Tarix:${new Date()}`
              );

              if (balans != 0 && confirm("Odenisi tekirarla.")) {
                if (balans != 0) {
                  continue;
                } else {
                  console.error("Balans bitdi!");
                  if (kredit === 0 && confirm("Kredit goturmek isdiyirsiz ?")) {
                    kredit = maais * 0.45 * 12;
                    balans += kredit - (kredit * 2) / 100;
                    console.log(
                      `Qalan kredit borcu:${kredit} Tarix:${new Date()}`
                    );
                    if (balans != 0 && confirm("Yeniden odenis et.")) {
                      continue;
                    } else {
                      break;
                    }
                  }
                }
              } else {
                alert("Balans:0");
                continue;
              }
            } else {
              if (
                kredit === 0 &&
                confirm(`Balans:${balans}.AZN.Kredit goturmek isdiyirsiz ?`)
              ) {
                kredit = maais * 0.45 * 12;
                balans += kredit - (kredit * 2) / 100;
                console.log(`Qalan kredit borcu:${kredit} Tarix:${new Date()}`);
                if (confirm("Yeniden odenis et.")) {
                  continue;
                } else {
                  alert("Odenisi tekirarlamaqdan imtina etdiz.");
                  break;
                }
              } else if (kredit != 0) {
                alert("Sizin artiq kreditiniz var !");
              } else {
                alert("Siz kredit goturmek isdemediz.");
                break;
              }
            }
          } while (true);
        } else {
          alert("Hesabdan cixis olundu !");
        }
      } while (true);
    } else {
      if (!confirm("Sifre yanlış,Yeniden cehd edin !")) {
        alert("Hesabdan cixis olundu seciz !");
        break;
      } else {
        passwordcount--;
        console.log(`Cehd sayi:${passwordcount}`);
        if (passwordcount === 0) {
          alert("Kart bloklandi,Banka muraciet et");
          break;
        } else {
          continue;
        }
      }
    }
  }
} else {
  alert("Qeydiyat dayandirildi !");
}

//Ulduz taskininin helli.
/*var data;
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
}*/
