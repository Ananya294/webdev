const URL = "https://cataas.com/api/cats";

// let promise = fetch(URL);
// console.log(promise);


// const getFacts = async () => {
//     console.log("getting data");
//     let response = await fetch(URL);
//     console.log(response);
//     console.log("getting data1");
//     let data = await response.json();

// const cat = data[1];
// const imageURL = `https://cataas.com/cat/${cat.id}`;

// const img = document.createElement('img');
// img.src = imageURL;
// img.alt = "Random Cat Image";
// img.style.width = "300px";
// img.style.borderRadius = "10px";
// img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
// document.body.appendChild(img);
// console.log("done");
// };

function getFacts() {
    fetch(URL)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            const cat = data[1];
            const imageURL = `https://cataas.com/cat/${cat.id}`;

            const img = document.createElement('img');
            img.src = imageURL;
            img.alt = "Random Cat Image";
            img.style.width = "300px";
            img.style.borderRadius = "10px";
            img.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            document.body.appendChild(img);
            console.log("done");
        });
}

