var posts=["2024/02/04/AI Agent/20240204/","2024/01/19/JD/alijd/","2023/12/02/AIGC/AnimateAnyone/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };