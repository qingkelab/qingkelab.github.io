var posts=["2024/09/18/JD/2024-09-18/","2024/11/06/JD/2024-11-6/","2024/05/07/JD/Zhengzhong Tu/","2024/04/12/JD/wanghuan/","2024/09/22/3D/Manydepth2/","2024/01/19/JD/alijd/","2024/06/13/JD/zhuang/","2024/06/23/AIGC/2024-06-23/","2024/06/25/AIGC/2024-06-25/","2024/07/04/AIGC/2024-07-04/","2024/07/07/AIGC/2024-07-07/","2024/09/01/AIGC/2024-09-01/","2024/11/04/AIGC/2024-11-04/","2023/12/02/AIGC/AnimateAnyone/","2024/03/11/LLM/2024-03-11/","2024/03/21/LLM/2024-03-20/","2024/04/21/LLM/2024-04-21/","2024/05/09/LLM/2024-05-09/","2024/05/08/LLM/2024-05-08/","2024/03/21/LLM/2024-03-21/","2024/05/22/LLM/2024-05-22/","2024/05/31/LLM/2024-05-31/","2024/08/25/LLM/2024-08-25/","2024/08/20/LLM/2024-08-20/","2024/09/09/LLM/2024-09-09/","2024/08/17/LLM/2024-08-17/","2024/09/01/LLM/2024-09-01/","2024/09/04/LLM/2024-09-04/","2024/09/09/LLM/2024-09-10/","2024/09/05/LLM/2024-09-05/","2024/09/20/LLM/2024-09-20/","2024/08/16/LLM/2024-08-14/","2024/09/18/LLM/2024-09-19/","2024/10/02/LLM/2024-10-02/","2024/09/24/LLM/2024-09-25/","2024/09/18/LLM/2024-09-23/","2024/10/08/LLM/2024-10-08/","2024/09/23/LLM/2024-09-24/","2024/10/08/LLM/2024-10-09/","2024/10/03/LLM/2024-10-03/","2024/10/09/LLM/2024-10-10/","2024/03/31/zhibo/Talk/2024-03-31-ChatDev/","2024/04/15/zhibo/Talk/2024-04-19/","2024/03/31/zhibo/Talk/2024-03-31-SceneTex/","2024/05/06/zhibo/Talk/2024-05-10/","2024/04/19/zhibo/Talk/2024-04-24/","2024/05/21/zhibo/Talk/2024-05-24/","2024/05/19/zhibo/Talk/2024-05-21/","2024/05/29/zhibo/Talk/2024-06-06/","2024/06/03/zhibo/Talk/2024-06-13/","2024/10/27/LLM/2024-10-23/","2024/05/26/zhibo/Talk/2024-05-29/","2024/06/23/zhibo/Talk/2024-06-27/","2024/06/13/zhibo/Talk/2024-06-17/","2024/07/04/zhibo/Talk/2024-07-08/","2024/07/11/zhibo/Talk/2024-07-15/","2024/07/17/zhibo/Talk/2024-07-23/","2024/07/24/zhibo/Talk/2024-07-30/","2024/07/08/zhibo/Talk/2024-07-11/","2024/08/11/zhibo/Talk/2024-08-14/","2024/08/20/zhibo/Talk/2024-08-26/","2024/08/04/zhibo/Talk/2024-08-06/","2024/08/29/zhibo/Talk/2024-09-03/","2024/09/02/zhibo/Talk/2024-09-10/","2024/09/13/zhibo/Talk/2024-09-23/","2024/10/08/zhibo/Talk/2024-10-11/","2024/10/11/zhibo/Talk/2024-10-14/","2024/10/31/zhibo/Talk/2024-11-05/","2024/09/20/zhibo/SGLang/2024-09-20/","2024/10/13/zhibo/Talk/2024-10-17/","2024/10/09/zhibo/SGLang/2024-10-17/","2024/02/26/zhibo/Panel/20240302/","2024/09/22/zhibo/Talk/2024-09-26/","2024/06/21/LLM/AI Agent/2024-06-21/","2024/02/04/LLM/AI Agent/20240204/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };