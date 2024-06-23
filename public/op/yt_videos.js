



function body1(){
    const body1value = document.querySelectorAll(".body1")[0].style.display=="none"
   
    if (body1value==false) {
        document.querySelectorAll(".body1")[0].style.display="none"
        document.querySelectorAll(".body2")[0].style.display="none"
        document.getElementsByClassName("body1_small")[0].style.display = "block"
        document.querySelectorAll(".box").forEach(element => {
           element.style.width= '336px' 
          
        });
        document.querySelectorAll(".video_box").forEach(element => {
           element.style.width= '336px' 
           element.style.height= '189px' 
        });
        document.querySelectorAll(".video_box1").forEach(element => {
           element.style.width= '336px' 
           element.style.height= '189px' 
        });


        
    } else {
        document.querySelectorAll(".body1")[0].style.display="block"
        document.querySelectorAll(".body2")[0].style.display="block"
        document.getElementsByClassName("body1_small")[0].style.display = "none"
        document.querySelectorAll(".box").forEach(element => {
            element.style.width= '373px' 
           
         });
         document.querySelectorAll(".video_box").forEach(element => {
            element.style.width= '373px' 
            element.style.height= '209px' 
         });
         document.querySelectorAll(".video_box1").forEach(element => {
            element.style.width= '373px' 
            element.style.height= '209px' 
         });
        
    }

}




// console.log(this.dataset.videoid)





//  const boxes = document.querySelectorAll(".box")



//  boxes.forEach((box)=>{
//     box.addEventListener('click',()=>{
        
//         window.location.href = "/video_play?videoid=" + this.dataset.videoid;

//     })
//  })
























// // const key = "AIzaSyCStr5pAAQ6Kj_XQh8PeJNC349pFDm_Evo" ;
// const key = "AIzaSyCyUv_7o79GOu32bKq7nD9UVEbnbF0_h88" ;
// const yt_url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=9&order=viewCount&";
// // document.getElementById("btn").addeventlisterner("click",yt)
// const channel_url = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet";

// const q =   document.getElementById("opk").textContent
//     console.log(q)

// const yt = async ()=>{
//     try {
    // const q = "multikiller";
    // const q =   document.getElementById("opk").textContent
    // console.log(q)


        //  const response = await fetch(`${yt_url}&q=${q}&type=video&key=${key}`)
        //  const data = await response.json()

         
        //  console.log(data)
         


        //  document.getElementById("image").src = data.items[0].snippet.thumbnails.default.url




        //  const box = document.querySelectorAll(".box")
        //  console.log(box)
        //  let channel_Id;
         
         
        //  const boxes =box.forEach(async(i,index) => {
             
            //  console.log(index)
             
            //   data.items.forEach(j =>{
                // console.log(j)
               
                // document.querySelectorAll(".video_box")[index].src = q;
                // document.querySelectorAll(".video_title")[index].textContent = data.items[index].snippet.title
                // document.querySelectorAll(".channel_name")[index].textContent = data.items[index].snippet.channelTitle
                
                // channel_Id = data.items[index].snippet.channelId
                // const channel_url_response = await fetch(`${channel_url}&key=${key}&id=${channel_Id}`)
                // const channel_image = await channel_url_response.json()
                // document.querySelectorAll(".video_user_logoIn")[index].src = channel_image.items[0].snippet.thumbnails.high.url
                // console.log(channel_image)


                
                // console.log(channel_Id)
                
                // })
                
                // } );

       


        //  document.getElementById("image").style.height = data.items[0].snippet.thumbnails.default.height
        //  document.getElementById("image").style.width = data.items[0].snippet.thumbnails.default.width
        
        
//     } catch (error) {
//         console.log("yt not fetch ",error)
        
//     }
// }

// yt()

