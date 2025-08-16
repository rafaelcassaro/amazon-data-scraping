document.getElementById("btn_request").addEventListener("click", (e) => {
    e.preventDefault();
    const keyword = document.getElementById("keyword").value;
    const url = `http://localhost:3300/api/scrap?keyword=${encodeURIComponent(keyword)}`;
    
    //loading user ui
    document.getElementById("sections_cards").innerHTML = `<p>Loading...</p>`;
    fetch(url)
        .then(async response => {
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error); 
            }
            return response.json();
        })
        .then(data => {
            let itemsString = "";
            for (const x of data) {
                itemsString += `
                <div class='card'>
                    <div class='card_content'>
                        <img src="${x.imgUrl}" />
                        <h2>${x.title}</h2>
                        <h2>reviews: ${x.review}</h2>
                        <h2>${x.rating}</h2>
                    </div>
                </div>`;
            }
            document.getElementById("sections_cards").innerHTML = itemsString;
        })
        .catch(error => {
            console.error("Error:", error);
            //error trying to pass amazon block 
            document.getElementById("sections_cards").innerHTML =
                `<p>${error.message} (click in button one more time to try again)</p>`;
        });
});