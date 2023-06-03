var qeydiyyat = confirm("Qeydiyyatdan kecin !");
if (qeydiyyat) {
  var check;
  var password = prompt("Sifreni daxil et.");
  do {
    var maais = Number(prompt("Maasinizi daxil edin."));
    check = Boolean(maais);
    if (!check) {
      alert("Yalniz reqem daxil edin !");
    } else {
      console.log("Ugurla qeydiyyatdan kecdiz !");
    }
  } while (!check);
  var passwordcount = 3;
  var balans = 1000;
  var kredit = 20;
  while (passwordcount > 0) {
    var password1 = prompt("Hesaba daxil olmaq ucun Sifrenizi daxil edin !");
    if (password === password1) {
      console.log("Hesabina xos geldin !");
      do {
        if (kredit != 0 && confirm("Kredit odeneisi edeceksiz ?")) {
          do {
            console.log(`Balansiniz:${balans}`);
            do {
              var data = Number(prompt("Mebleg."));
              check = Boolean(data);
              if (!check || data <= 0) {
                alert("Yalniz musbet reqem daxil edin !");
              }
            } while (data < 0 || !check);
            if (balans < data) {
              console.error("Balansiniz yeterli deyil.");
              alert(`Odenis etmek ucun ${balans}-AZN daxil edin.`);
              continue;
            } else {
              console.log(data);
              console.log(balans);
              console.log(kredit);

              if (data > kredit) {
                balans = balans - kredit;
                kredit = 0;
              }
              balans -= data;
              kredit -= data;
              console.log("Odenis ugurludur !");
              console.log(`Qalan kredit borcu:${kredit}`);
              if (kredit != 0) {
                var data1 = confirm("Yeniden odenis etmek isdiyirsiz ?");
              } else {
                console.log("Kredit odenisi bitdi.");
                if (confirm("Yeniden kredit goturmek isdiyirsiz ?")) {
                  kredit = maais * 0.45 * 12;
                  balans += kredit - (kredit * 2) / 100;
                  console.log(`Qalan kredit borcu:${kredit}`);
                  break;
                } else {
                  break;
                }
              }
            }
          } while (data1);
        } else if (balans != 0 && confirm("Pul cixarmaq ?")) {
          do {
            console.log(`Balansiniz:${balans}`);
            do {
              var data = Number(prompt("Mebleg."));
              check = Boolean(data);
              if (!check || data <= 0) {
                alert("Yalniz musbet reqem daxil edin !");
              }
            } while (data < 0 || !check);
            if (data <= balans) {
              balans -= data;
              console.log(`${data}-AZN odenildi  Balans:${balans}`);
              if (confirm("Odenisi tekirarla.")) {
                if (balans != 0) {
                  continue;
                } else {
                  console.error("Balans bitdi!");
                  if (kredit === 0 && confirm("Kredit goturmek isdiyirsiz ?")) {
                    kredit = maais * 0.45 * 12;
                    balans += kredit - (kredit * 2) / 100;
                    console.log(`Qalan kredit borcu:${kredit}`);
                    if (balans != 0 && confirm("Yeniden odenis et.")) {
                      continue;
                    } else {
                      break;
                    }
                  } else {
                    console.log("Sizin artiq kreditiniz var.");
                    break;
                  }
                }
              } else {
                break;
              }
            } else {
              if (kredit === 0 && confirm("Kredit goturmek isdiyirsiz ?")) {
                kredit = maais * 0.45 * 12;
                balans += kredit - (kredit * 2) / 100;
                console.log(`Qalan kredit borcu:${kredit}`);
                if (balans != 0 && confirm("Yeniden odenis et.")) {
                  continue;
                } else {
                  break;
                }
              } else {
                console.log("Sizin artiq kreditiniz var.");
                break;
              }
            }
          } while (true);
        } else {
          alert("Hesabdan cixis olundu !");
          break;
        }
      } while (kredit != 0);
    } else {
      if (!confirm("Sifre yanlış,Yeniden cehd edin !")) {
        alert("Hesabdan cixis olundu !");
        break;
      }
      passwordcount--;
      console.log(`Cehd sayi:${passwordcount}`);
      if (passwordcount === 0) {
        alert("Kart bloklandi,Banka muraciet et");
        break;
      }
    }
  }
} else {
  alert("Qeydiyat dayandirildi !");
}

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
