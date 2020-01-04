
var data =[{
    "posts":[
        {   
            "id":new Date().getTime,
            "post":"photo1",
            "commets":[{
                "comment1":"p1comment1",
                {
                    "id":new Date().getTime,
                    "likes":["name11","name12"]}},
                "p1comment2",
                {
                    "id":new Date().getTime,
                    "likes":["name21","name22"]},
                "p1comment3",
                {
                    "id":new Date().getTime,
                    "likes":["name31","name32"]
                },
            ]
        },
        {   
            "id":new Date().getTime,
            "post":"photo1",
            "commets":[
                "p2comment1",
                {"likes":["name11","name12"]},
                "p2comment2",
                {"likes":["name21","name22"]},
                "p2comment3",
                {"likes":["name31","name32"]},
            ]
        },
        {   
            "id":new Date().getTime,
            "post":"photo1",
            "commets":[
                "p3comment1",
                {"likes":["name11","name12"]},
                "p3comment2",
                {"likes":["name21","name22"]},
                "p3comment3",
                {"likes":["name31","name32"]},
            ]
        },
        {   
            "id":new Date().getTime,
            "post":"photo1",
            "commets":[
                "p4comment1",
                {"likes":["name11","name12"]},
                "p4comment2",
                {"likes":["name21","name22"]},
                "p4comment3",
                {"likes":["name31","name32"]},
            ]
        }
    ]
}]

function searchingUserInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        //var a ='';
      if (this.readyState == 4 && this.status == 200) {
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    xhttp.open("POST", "http://localhost:3000/", true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    var data={
        "username":document.querySelector(".username").value,
        "password":document.querySelector(".password").value
    }
    xhttp.send(data);
  }

  function gettingUserInfo() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    // username=document.querySelector(".username").value;
    // var id = encodeURIComponent(username);
    xhttp.open("GET", "http://localhost:3000/username", true);
    xhttp.send();
  }
  function gettingUserPost(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    // username=document.querySelector(".username").value;
    var id = event.currentTarget.dataset.id;
    // var id = encodeURIComponent(username);
    xhttp.open("GET", "http://localhost:3000/username/post?id="+id, true);
    xhttp.send();
  }
  function gettingUserPostComments(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    // username=document.querySelector(".username").value;
    // var id = encodeURIComponent(username);
    var id = event.currentTarget.dataset.id;
    xhttp.open("GET", "http://localhost:3000/username/post/comments?id="+id, true);
    xhttp.send();
  }
  function gettingUserPostCommentsLikesInfo(event) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4) {
         a =this.responseText;
        a=JSON.parse(a);
        console.log('a....', a)
      }
    };
    // username=document.querySelector(".username").value;
    // var id = encodeURIComponent(username);
    var id = event.currentTarget.dataset.id;
    xhttp.open("GET", "http://localhost:3000/username/post/comments/likes?id="+id, true);
    xhttp.send();
  }
