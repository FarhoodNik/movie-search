const form = document.querySelector("#form1");
form.addEventListener("submit", async function (e) {
    e.preventDefault();
    const user = form.elements.quary.value;
    const result = await axios.get(`https://api.tvmaze.com/search/shows?q=${user}`);
    makingImage(result.data);
    form.elements.quary.value = "";

});

 const makingImage = (shows) =>{
     for(let res of shows){
         if(res.show.image){
            const image = document.createElement("IMG")
            image.src= res.show.image.medium;
            document.body.append(image);
         }
     }
 }