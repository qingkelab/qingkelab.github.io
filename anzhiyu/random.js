var posts=["2025-03-23/","2025-03-24/","AIGC/2024-06-23/","AIGC/2024-06-25/","AIGC/2024-09-01/","AIGC/2024-11-04/","AIGC/2024-07-07/","AIGC/2024-07-04/","AIGC/2024-12-07/","AIGC/AnimateAnyone/","JD/Zhengzhong Tu/","JD/alijd/","JD/wanghuan/","JD/2024-11-6/","JD/zhuang/","JD/2024-09-18/","Weekly/2024-12-16/","Weekly/2024-12-23/","Weekly/2024-12-30/","Weekly/2025-01-06/","Weekly/2025-01-13/","LLM/2024-03-20/","LLM/2024-03-11/","LLM/2024-04-21/","LLM/2024-05-22/","LLM/2024-05-08/","LLM/2024-05-09/","LLM/2024-03-21/","LLM/2024-05-31/","LLM/2024-08-25/","LLM/2024-08-17/","LLM/2024-09-01/","LLM/2024-08-14/","LLM/2024-09-05/","LLM/2024-09-04/","LLM/2024-09-09/","LLM/2024-08-20/","LLM/2024-09-10/","LLM/2024-09-20/","LLM/2024-09-19/","LLM/2024-09-25/","LLM/2024-09-24/","LLM/2024-09-23/","LLM/2024-10-02/","LLM/2024-10-03/","LLM/2024-10-09/","LLM/2024-10-08/","LLM/2024-10-10/","LLM/2024-10-23/","LLM/2024-11-11/","LLM/2024-11-09/","LLM/2024-11-10/","LLM/2024-11-29/","LLM/2024-11-17/","LLM/2024-11-28/","LLM/2024-11-23/","LLM/2024-12-10/","LLM/2024-11-30/","LLM/2025-01-08/","LLM/2024-12-11/","LLM/2025-01-12/","LLM/2024-12-12/","LLM/2025-01-15/","LLM/2025-03-22/","LLM/2025-01-16/","LLM/2025-02-05/","LLM/2025-02-14/","LLM/2025-02-13/","LLM/marscode/","3D/Manydepth2/","LLM/AI Agent/2024-06-21/","LLM/AI Agent/20240204/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };