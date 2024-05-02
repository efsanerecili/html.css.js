// fetch("https://api.tvmaze.com/shows/1")
// .then(res=>res.json())
// .then(res=>{
//     console.log(res);
//     let img =new Image()
//     img.src=res.image.medium
//     document.querySelector("body").appendChild(img)
// })





axios("https://api.tvmaze.com/shows")
.then(res=>{


   console.log(res);
   for(let index=0; index < res.data.length; index++)
  {
      
     let img =document.createElement("img")
     img.src=res.data[index].image.medium
     document.querySelector("body").appendChild(img)
  }




 })