const axios = require('axios');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;


//`https://restcountries.com/v3.1/name/brazil?fullText=true`
let html: any = [];




// function teste () {
//   axios.get('https://www.amazon.com/s?k=pen', {
//     proxy: {
//         host: "45.90.218.210", // IP do proxy
//         port: 80,              // Porta
//       },
//   headers: {
//      "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0.0.0 Safari/537.36",
//         "Accept-Language": "en-US,en;q=0.9",
//         "Accept-Encoding": "gzip, deflate, br",
//         "Cache-Control": "no-cache",
//         "Connection": "keep-alive",
//         "Upgrade-Insecure-Requests": "1",
//         "Sec-Ch-Ua": "\"Chromium\";v=\"128\", \"Not_A Brand\";v=\"24\"",
//         "Sec-Ch-Ua-Mobile": "?0",
//         "Sec-Ch-Ua-Platform": "\"Windows\"",
//         // Cookie fake para simular sessão
//         "Cookie": 'i18n-prefs=USD; sp-cdn="L5Z9:BR"; ubid-main=131-2351121-2023308; lc-main=en_US; av-timezone=America/Sao_Paulo; session-id-apay=146-6261771-3562968; session-id=142-0009556-6817776; skin=noskin; session-id-time=2082787201l; rxc=AMVWbQoKxDwmjcaYLBs; session-token=7Pu5zLuecLkukbNaDEPGSd7IYf1hI3fCh930PF/PtcyXI6YMFnQugXQlmDxo0lH91S2LWu9vSGP0a4IYN/6GpkiW/qpenwhAcOS5WjL3J2a+2ipIcIdAYGCNc53O55XQHe0pOjVDycPWR/1utvi5lVmcBWhe0wrEcWVpEU2i68XWPqQuqjl/WZfQ/6lQu3fn6Owcw8rAEoxikcTA3gNEBgRnsM9v1qvrx6qlyzkALqZCIGtQKRhEkE7Qs35pi6IiR7PHBzCSThJGGTfbbPHe99sMtuXgb5oXr0AwVCj/Csdmh6K0IBYCdP0MykAXi7zuTsC2oJ1r2HJjQFl/OWidt4EuO9I/A3lC; csm-hit=tb:s-J7TBQ9NPNCT8WJDW8A2H|1755179966190&t:1755179966820&adb:adblk_no',
//   }
// })
//   .then(function (response: any) {
//     // manipula a resposta da requisição
//     html = response.data;
//     console.log(response);
//   })
//   .catch(function (error: any) {
//     // manipula os erros
//     //html = error.response.data;
//     console.log(error);
//   });
// }

// teste();




//===========

let dom ;
// async function scrapeAmazon() {
//   try {
//     const response = await axios.get("https://www.amazon.com/s?k=iphone", {
//       headers: {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
//         "cache-control": "no-cache",
//         "device-memory": "8",
//         'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
//         "downlink": "10",
//         "dpr": "1",
//         "ect": "4g",
//         "pragma": "no-cache",
//         "priority": "u=1, i",
//         "rtt": "0",
//         "Sec-Ch-device-memory": "8",
//         "Sec-Ch-dpr": "1",
//         "Sec-Ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
//         "Sec-Ch-ua-mobile": "?0",
//         "Sec-Ch-ua-platform": "\"Windows\"",
//         "Sec-Ch-ua-platform-version": "\"19.0.0\"",
//         "Sec-Ch-Viewport-Width": "981",
//         "Sec-Fetch-Dest": "empty",
//         "Sec-Fetch-Mode": "cors",
//         "Sec-Fetch-Site": "same-origin",
//         "Sec-Private-State-Token": "AAMEldKx31yCJc5R31nBBrJdt5MKKz56MTy/1yUnJlkAUUzzb0tWa/aAf80m28+F//Mc+JLaj7yKa4mq4df8jZE1/Ksk1GNyWLx5KJdBZLw0+CRxJ+3iioqrmtW+3ju/10vIBM8gPLcc+F77v3OV2ulMn4Yd6sJLKwPlyikoX/PvwTxtfqPE9qV03KTAvxapTHCmw+pRuwaub50CMvz0CgJvlROFR46z9i5Lu/+3InVEV/V1i3j6bHyQ3bmODW4/ISZwFQQN+j14HGjjDksmm8nuQtQYVTgh4oRZnbm3uJDrdU8frJtwYavwEUQA0aNXINXdXvxNMwTnJ7meSu+M45Hw/51oQ0g3htuYbL4l8X85/58qIkhrSnQLbYWV8MtiUYX5vXg=",
//         "Sec-Private-State-Token-Crypto-Version": "PrivateStateTokenV1VOPRF",
//         "Viewport-Width": "981",
//         "cookie": "i18n-prefs=USD; sp-cdn=\"L5Z9:BR\"; ubid-main=131-2351121-2023308; lc-main=en_US; av-timezone=America/Sao_Paulo; session-id-apay=146-6261771-3562968; session-id=142-0009556-6817776; session-id-time=2082787201l; session-token=VMU9JSQkM/JV4JQV1N53eU9sbFlJta7vTi9h/l+sRFEHn1tROYEUREAs1pT9IhYmuaX+wqhSmtqX1fnBq2SQ60nFRXXOqtOcBuf18HZYd9CgJ38xLvwXQCnoNFttXF1DnJhC8Ik9JlI8v+5c3eJ3d0rVAtSj/tnqo417NlJoxUoyEb1A7pZr96ii9dpqV7sRaqRFa/LdpFZmS7pVA9YnEq4216mQzug+d+/ebuuqLVqyTwMlr94iuP74bDrSBlM7qGcDTlKB/Ux/qFLOp2NcnRJ6cuzncJ5lcWMm6/+tmyoyMsWIcjn14o2RPFsEai3/EB5EHZvPWmnvge+R4Kmhz4mft25oscFH; skin=noskin; rxc=AMVWbQoR+j8mjcaYTBs; csm-hit=tb:s-ANCM4V9NXNF55V6KWPBB|1755239673821&t:1755239673821&adb:adblk_no",
//         "Referer": "https://www.amazon.com/s?k=iphone&crid=36TL6DQGK5QNU&sprefix=ipho%2Caps%2C279&ref=nb_sb_noss_2"
//       }
//     });

//     //console.log(response.data);
//     html = response.data;
//     dom = new JSDOM(response.data);
//     console.log(dom.window.document.getElementsByClassName("a-size-base-plus a-spacing-none a-color-base a-text-normal").textContent);
//   } catch (error) {
//     console.error("Erro ao tentar scrapear:", error.message);
//   };



// }

// scrapeAmazon();


//==========












async function scrapeAmazon() {
  try {
    const response = await axios.get("https://www.amazon.com/tt/", {
      headers: {
        "accept": "*/*",
        "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
        "cache-control": "no-cache",
        "device-memory": "8",
        "downlink": "10",
        "dpr": "1",
        "ect": "4g",
        "pragma": "no-cache",
        "priority": "u=1, i",
        "rtt": "0",
        "sec-ch-device-memory": "8",
        "sec-ch-dpr": "1",
        "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"Windows\"",
        "sec-ch-ua-platform-version": "\"19.0.0\"",
        "sec-ch-viewport-width": "1834",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "sec-private-state-token": "AAMEldKx31yCJc5R31nBBrJdt5MKKz56MTy/1yUnJlkAUUzzb0tWa/aAf80m28+F//Mc+JLaj7yKa4mq4df8jZE1/Ksk1GNyWLx5KJdBZLw0+CRxJ+3iioqrmtW+3ju/10vIBM8gPLcc+F77v3OV2ulMn4Yd6sJLKwPlyikoX/PvwTxtfqPE9qV03KTAvxapTHCmw+pRuwaub50CMvz0CgJvlROFR46z9i5Lu/+3InVEV/V1i3j6bHyQ3bmODW4/ISZwFQQN+j14HGjjDksmm8nuQtQYVTgh4oRZnbm3uJDrdU8frJtwYavwEUQA0aNXINXdXvxNMwTnJ7meSu+M45Hw/51oQ0g3htuYbL4l8X85/58qIkhrSnQLbYWV8MtiUYX5vXg=",
        "sec-private-state-token-crypto-version": "PrivateStateTokenV1VOPRF",
        "viewport-width": "1834",
        "cookie": "i18n-prefs=USD; sp-cdn=\"L5Z9:BR\"; ubid-main=131-2351121-2023308; lc-main=en_US; av-timezone=America/Sao_Paulo; session-id-apay=146-6261771-3562968; session-id=142-0009556-6817776; session-id-time=2082787201l; session-token=VMU9JSQkM/JV4JQV1N53eU9sbFlJta7vTi9h/l+sRFEHn1tROYEUREAs1pT9IhYmuaX+wqhSmtqX1fnBq2SQ60nFRXXOqtOcBuf18HZYd9CgJ38xLvwXQCnoNFttXF1DnJhC8Ik9JlI8v+5c3eJ3d0rVAtSj/tnqo417NlJoxUoyEb1A7pZr96ii9dpqV7sRaqRFa/LdpFZmS7pVA9YnEq4216mQzug+d+/ebuuqLVqyTwMlr94iuP74bDrSBlM7qGcDTlKB/Ux/qFLOp2NcnRJ6cuzncJ5lcWMm6/+tmyoyMsWIcjn14o2RPFsEai3/EB5EHZvPWmnvge+R4Kmhz4mft25oscFH; skin=noskin; rxc=AMVWbQoR+j8mjcaYTBs; csm-hit=tb:s-ANCM4V9NXNF55V6KWPBB|1755239673821&t:1755239673821&adb:adblk_no",
        "Referer": "https://www.amazon.com/s?k=teste"
      }
    });

    console.log(response.data);
  } catch (error) {
    console.error("Erro ao tentar scrapear:", error.message);
  }
}

scrapeAmazon();





// axios.get('https://www.amazon.com/s?k=pen', {
//   headers: {
//     'authority':"www.amazon.com",
//     'Accept' :  "*/*",
//     "cache-control" : "no-cache",
//     "device-memory": "8",
//     "downlink": "10",
//     "dpr": "1",
//     "ect": "4g",
//     "pragma": "no-cache",
//     "priority": "u=1, i",
//     "rtt": "0",
//     "sec-ch-device-memory": "8",
//     "sec-ch-dpr": "1",
//     "sec-fetch-dest": "empty",
//     "sec-fetch-mode": "cors",
//     "sec-fetch-site": "same-origin",
//     "sec-private-state-token": "AAMEv0sXk5NfQvVPFTZc6Vd0cscyda2DmrVtBSYRMoDQXkHdUjCMnlvPFY4m7Xt0Dbhtb9RV07TLwDX5e+2vtbazxb9qHUAwPb8TjU27B7xyCyt6RHb5utD4h7RH+2kyR3YFBPuipwmUd1r/hRr1DHZQz+wdZPmNYkpUMZiSfi5q/xldQmuBYMI/DrKYturY/5kKEXsTvnvI2Et7WFSyc+rlv6q5xS/9UufVgijh79Py0BI64D9R6hiMMItzBU+drBUa3ATurcmc0+c4TSh/+THYG5S5R+VnHQhbyhi1d9nSckRI95nFUkaaZQtZ31C87bCqQTqf7jG55i18B1Ya0BHx0jLTNG7IDlijAWlTduaZDx1uZC34y+UaJXbpa0V9QJTmwW4=",
//     "sec-private-state-token-crypto-version": "PrivateStateTokenV1VOPRF",
//     "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36",
//     "Accept-Language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
//     "cookie": "i18n-prefs=USD; sp-cdn=\"L5Z9:BR\"; ubid-main=131-2351121-2023308; lc-main=en_US; av-timezone=America/Sao_Paulo; session-id-apay=146-6261771-3562968; session-id=142-0009556-6817776; skin=noskin; session-id-time=2082787201l; rxc=AMVWbQoXyTwmjcaYAhs; session-token=t/jt2fH67a8u2dYp9fSvxrIi1ojWzFI9GVkXc2vfLjGC72boejCVYbxdutI5WpfRpbHrSm9d8sUL3lWo9BcY5T+lzC3xuoQn5shwCzDMvWga7vqmiSZJYJrLJEuetGvS+4DFIKnhHtHzrtV2fTMgn12acYDZ3/DYz/uBifvJHptwIKLAMALYAXC3zNf2wXjQGoLVzSItDwSFhbkY+PPBsA8JIm2YX2gvUG3eUmmdHekhjp8DxBjijHmi5+30LC9kXTQtVknh8/mHt2s4HsTDBCyi6l0rE+K2WR+RLGy30O5Fizc+P0EZloXaiWI1BGIrLNjB/hXDFSoRlqzgkLrAzySxUWGk8KMM; csm-hit=tb:s-J5M8RHPW9R08WJ9ZRJG5|1755179007527&t:1755179007527&adb:adblk_no",
//   },
//   body: null,
//   method: "GET",
// })
//   .then(function (response: any) {
//     // manipula a resposta da requisição
//     html = response.data;

//     // const dom = new JSDOM(html);
//     // const document = dom.window.document;

//     // // 3. Extrair dados usando seletores DOM
//     // const title = document.querySelector('title')?.textContent;
//     // const headings = Array.from(document.querySelectorAll('h2')).map(h => h.textContent?.trim());

//     // console.log('📄 Título da página:', title);
//     // console.log('📌 Cabeçalhos H2 encontrados:');
//     // headings.forEach((h, i) => console.log(`${i + 1}. ${h}`));


//     //console.log(response);
//   })
//   .catch(function (error: any) {
//     // manipula os erros
//     html = error.response.data;
//     console.log(error);
//   });



// axios.get('https://www.amazon.com/s?k=pen', {
//   headers: {
//         "accept": "*/*",
//         "accept-language": "en-US,en;q=0.9,pt-BR;q=0.8,pt;q=0.7",
//         "cache-control": "no-cache",
//         "device-memory": "8",
//         "downlink": "10",
//         "dpr": "1",
//         "ect": "4g",
//         "pragma": "no-cache",
//         "priority": "u=1, i",
//         "rtt": "0",
//         "sec-ch-device-memory": "8",
//         "sec-ch-dpr": "1",
//         "sec-ch-ua": "\"Not;A=Brand\";v=\"99\", \"Google Chrome\";v=\"139\", \"Chromium\";v=\"139\"",
//         "sec-ch-ua-mobile": "?0",
//         "sec-ch-ua-platform": "\"Windows\"",
//         "sec-ch-ua-platform-version": "\"19.0.0\"",
//         "sec-ch-viewport-width": "1834",
//         "sec-fetch-dest": "empty",
//         "sec-fetch-mode": "cors",
//         "sec-fetch-site": "same-origin",
//         "sec-private-state-token": "AAMEldKx31yCJc5R31nBBrJdt5MKKz56MTy/1yUnJlkAUUzzb0tWa/aAf80m28+F//Mc+JLaj7yKa4mq4df8jZE1/Ksk1GNyWLx5KJdBZLw0+CRxJ+3iioqrmtW+3ju/10vIBM8gPLcc+F77v3OV2ulMn4Yd6sJLKwPlyikoX/PvwTxtfqPE9qV03KTAvxapTHCmw+pRuwaub50CMvz0CgJvlROFR46z9i5Lu/+3InVEV/V1i3j6bHyQ3bmODW4/ISZwFQQN+j14HGjjDksmm8nuQtQYVTgh4oRZnbm3uJDrdU8frJtwYavwEUQA0aNXINXdXvxNMwTnJ7meSu+M45Hw/51oQ0g3htuYbL4l8X85/58qIkhrSnQLbYWV8MtiUYX5vXg=",
//         "sec-private-state-token-crypto-version": "PrivateStateTokenV1VOPRF",
//         "viewport-width": "1834",
//         "cookie": "i18n-prefs=USD; sp-cdn=\"L5Z9:BR\"; ubid-main=131-2351121-2023308; lc-main=en_US; av-timezone=America/Sao_Paulo; session-id-apay=146-6261771-3562968; session-id=142-0009556-6817776; session-id-time=2082787201l; session-token=VMU9JSQkM/JV4JQV1N53eU9sbFlJta7vTi9h/l+sRFEHn1tROYEUREAs1pT9IhYmuaX+wqhSmtqX1fnBq2SQ60nFRXXOqtOcBuf18HZYd9CgJ38xLvwXQCnoNFttXF1DnJhC8Ik9JlI8v+5c3eJ3d0rVAtSj/tnqo417NlJoxUoyEb1A7pZr96ii9dpqV7sRaqRFa/LdpFZmS7pVA9YnEq4216mQzug+d+/ebuuqLVqyTwMlr94iuP74bDrSBlM7qGcDTlKB/Ux/qFLOp2NcnRJ6cuzncJ5lcWMm6/+tmyoyMsWIcjn14o2RPFsEai3/EB5EHZvPWmnvge+R4Kmhz4mft25oscFH; skin=noskin; rxc=AMVWbQoR+j8mjcaYTBs; csm-hit=tb:s-ANCM4V9NXNF55V6KWPBB|1755239673821&t:1755239673821&adb:adblk_no",
//         "Referer": "https://www.amazon.com/s?k=teste&crid=1G9FL0F26HNLY&sprefix=teste%2Caps%2C347&ref=nb_sb_noss_2"
//       }
//     })
//   .then(function (response: any) {
//     // manipula a resposta da requisição
//     html = response.data;

//     // const dom = new JSDOM(html);
//     // const document = dom.window.document;

//     // // 3. Extrair dados usando seletores DOM
//     // const title = document.querySelector('title')?.textContent;
//     // const headings = Array.from(document.querySelectorAll('h2')).map(h => h.textContent?.trim());

//     // console.log('📄 Título da página:', title);
//     // console.log('📌 Cabeçalhos H2 encontrados:');
//     // headings.forEach((h, i) => console.log(`${i + 1}. ${h}`));


//     //console.log(response);
//   })
//   .catch(function (error: any) {
//     // manipula os erros
//     html = error.response.data;
//     console.log(error);
//   });




const server = Bun.serve({
  port: 3000,
  fetch(req) {
    let teste = JSON.stringify(html)
    return new Response(teste);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);


