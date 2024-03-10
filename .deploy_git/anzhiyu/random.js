var posts=["2024/02/04/AI Agent/20240204/","2023/12/02/AIGC/AnimateAnyone/","2024/02/26/zhibo/Panel/20240302/","2024/01/19/JD/alijd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };