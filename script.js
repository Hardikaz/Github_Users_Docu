 var form = document.getElementById("myForm")

 form.addEventListener('submit',function(e){
    e.preventDefault()

    var search=document.getElementById("search").value

    

    var originalName = search.split(' ').join('')
    document.getElementById("result").innerHTML=""
    fetch("https://api.github.com/users/"+originalName)
      
   
    

  
     .then((result)=>result.json())
    .then((data)=>{
         console.log(data)
    
         document.getElementById("result").innerHTML=`
         <div class="res">
         <h1>User Found</h1>
        <a target="_blank" href="https://www.github.com/${originalName}"> <img src="${data.avatar_url}"/></a>
        <p>Name:      ${data.name}</p>
        <p>Company:   ${data.company}</p>
        <p>Email Id:  ${data.email}</p>
        <p>Followers: ${data.followers}</p>
        <p>Following: ${data.following}</p>
        </div>`
        
     })
})  