var posts=["2023/12/02/AIGC/AnimateAnyone/","2024/03/11/LLM/2024-03-11/","2024/03/21/LLM/2024-03-20/","2024/01/19/JD/alijd/","2024/04/12/JD/wanghuan/","2024/03/21/LLM/2024-03-21/","2024/02/04/LLM/AI Agent/20240204/","2024/02/26/zhibo/Panel/20240302/","2024/03/31/zhibo/Talk/2024-03-31-ChatDev/","2024/03/31/zhibo/Talk/2024-03-31-SceneTex/","2024/04/15/zhibo/Talk/2024-04-19/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };