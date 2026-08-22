(() => {
  const translations = {
    ja: {
      "nav.bio": "プロフィール",
      "nav.publications": "研究業績",
      "nav.activities": "学術活動",
      "bio.current": "現在、<a href=\"https://www.sbintuitions.co.jp/\">SB Intuitions株式会社</a>でリサーチサイエンティストとして、大規模言語モデルおよび視覚言語モデルの研究に取り組んでいます。",
      "bio.education": "2025年、<a href=\"https://www.i.u-tokyo.ac.jp/index_e.shtml\">東京大学</a>にて博士（情報理工学）を取得しました。<a href=\"https://www.nlab.ci.i.u-tokyo.ac.jp/index-e.html\">中山研究室</a>で<a href=\"https://www.nlab.ci.i.u-tokyo.ac.jp/~nakayama/index_en.html\">中山英樹教授</a>の指導を受けました。それ以前には、<a href=\"https://www.sjtu.edu.cn/\">上海交通大学</a>にて修士（工学）を、<a href=\"https://www.shu.edu.cn/\">上海大学</a>にて学士（工学）を取得し、それぞれ<a href=\"https://yuyeling.com/\">凌玉烨教授</a>、<a href=\"https://ivp.shu.edu.cn/zwb.htm\">劉志教授</a>の指導を受けました。",
      "bio.interests": "主な研究テーマは、<b>マルチモーダル推論</b>、<b>ハルシネーションの軽減</b>、<b>知識グラウンディング</b>、<b>信頼できるAI</b>です。",
      "bio.collaboration": "マルチモーダルAIおよび信頼できるAIに関する共同研究のご相談を歓迎しています。ご興味をお持ちの方は、<a href=\"mailto:jiaxuanli.work@gmail.com\">お気軽にご連絡ください</a>。",
      "section.news": "お知らせ",
      "date.emnlp": "2026年8月",
      "date.job": "2025年4月",
      "date.phd": "2025年3月",
      "date.daad": "2024年10月",
      "date.miru": "2024年8月",
      "date.google": "2024年5月",
      "date.icvss": "2024年4月",
      "date.cvpr": "2024年2月",
      "date.iccv": "2023年7月",
      "date.jsps": "2023年4月",
      "date.spring": "2022年4月",
      "news.emnlp": "論文「Do VLMs Share Safety Neurons Across Modalities?」が<a href=\"https://2026.emnlp.org/\">EMNLP 2026（Main）</a>に採択されました。",
      "news.job": "<a href=\"https://www.sbintuitions.co.jp/\"><strong>SB Intuitions株式会社</strong></a>にリサーチサイエンティストとして入社し、責任あるAIの研究に取り組んでいます。",
      "news.phd": "<a href=\"https://www.i.u-tokyo.ac.jp/index_e.shtml\">東京大学</a>で<strong>博士（情報理工学）</strong>を取得しました。",
      "news.daad": "ドイツ学術交流会（DAAD）の<a href=\"https://www.daad.de/en/the-daad/postdocnet/\">AInet Fellow</a>に選出されました。",
      "news.miru": "熊本で開催された<a href=\"https://miru-committee.github.io/miru2024/en/\">MIRU 2024</a>にて、<a href=\"https://jiaxuan-li.github.io/EVCap\">EVCap</a>に関する招待講演を行いました。",
      "news.google": "<a href=\"https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships\">Google Student Travel Grant（East Asia）</a>を受給しました。",
      "news.icvss": "イタリア・シチリアで開催された<a href=\"https://iplab.dmi.unict.it/icvss2024\">International Computer Vision Summer School（ICVSS 2024）</a>の参加者に選出されました。",
      "news.cvpr": "論文1本が<a href=\"https://cvpr.thecvf.com/Conferences/2024\">CVPR 2024</a>に採択されました。",
      "news.iccv": "論文1本が<a href=\"https://iccv2023.thecvf.com\">ICCV 2023</a>に採択されました。",
      "news.jsps": "日本学術振興会（JSPS）特別研究員（<a href=\"https://www.jsps.go.jp/j-pd/pd_saiyoichiran.html\">DC2</a>）に採用されました。",
      "news.spring": "科学技術振興機構（JST）が支援する<a href=\"https://www.cis-trans.jp/spring_gx/index-e.html\">SPRING GXフェローシップ</a>に採択されました。",
      "section.publications": "主要論文",
      "publication.more": "（<a href=\"publications.html\">全論文リスト</a>または<a href=\"https://scholar.google.com/citations?hl=en&amp;user=49tpDmAAAAAJ\">Google Scholar</a>）",
      "section.full_publications": "論文一覧",
      "publication.back": "（<a href=\"index.html#publications\">ホームに戻る</a>）",
      "publication.home": "ホーム",
      "footer.updated": "最終更新：2026年8月",
      "section.international": "国際論文",
      "publication.equal": "<sup>*</sup> 共同筆頭著者",
      "section.domestic": "国内会議発表（査読なし）",
      "section.grants": "研究費",
      "grant.jsps": "日本学術振興会（JSPS）科学研究費助成事業（特別研究員奨励費）、200万円、2023年4月–2025年3月",
      "grant.nii2024": "国立情報学研究所（NII）公募型共同研究（研究者）、120万円、2024年7月–2025年3月",
      "grant.nii2023": "国立情報学研究所（NII）公募型共同研究（研究者）、100万円、2023年7月–2024年3月",
      "grant.spring": "科学技術振興機構（JST）SPRING GXフェローシップ、62万円、2022年4月–2023年3月",
      "section.awards": "受賞・表彰",
      "award.daad": "AInet Fellow、ドイツ学術交流会（DAAD）、2024年",
      "award.jsps_allowance": "特別研究員最終年度特別手当、日本学術振興会（JSPS）、2024年",
      "award.google": "Google Student Travel Grant（East Asia）、Google、2024年",
      "award.anlp": "言語処理学会第30回年次大会 委員特別賞、2024年",
      "award.dc2": "特別研究員（DC2）、日本学術振興会（JSPS）、2023年",
      "award.spring": "SPRING GXフェローシップ、科学技術振興機構（JST）、2022年",
      "award.sjtu": "上海交通大学 優秀卒業生、2022年",
      "award.cosco": "COSCO Shipping Scholarship、上海交通大学、2021年",
      "award.huawei": "第17回「Huawei Cup」中国大学院生数学モデリングコンテスト 二等賞、2020年",
      "award.shu": "上海大学 学業奨学金、2016年",
      "section.activities": "学術活動",
      "activity.aist2025": "<b>招待講演</b>、産業技術総合研究所 知識情報研究チーム、2025年2月",
      "activity.miru": "<b>招待講演</b>、MIRU、熊本、2024年8月",
      "activity.ircn": "<b>ポスター発表</b>、東京大学ニューロインテリジェンス国際研究機構（IRCN）、2024年7月",
      "activity.aist2024": "<b>招待講演</b>、産業技術総合研究所 知識情報研究チーム、2024年7月",
      "activity.icvss": "<b>International Computer Vision Summer School（ICVSS）</b>、イタリア・シチリア、2024年7月",
      "activity.reviewer": "<b>査読実績</b>：IEEE TIP、NeurIPS、CVPR、ECCV、ACL ARR、AAAI、BMVC、ACCV",
      "section.teaching": "教育",
      "teaching.ai2614": "上海交通大学 AI2614「デジタル信号・画像処理」ティーチング・アシスタント、2021年春学期",
      "teaching.ee367": "上海交通大学 EE367「通信回路基礎」ティーチング・アシスタント、2020年春学期"
    },
    zh: {
      "nav.bio": "简介",
      "nav.publications": "论文",
      "nav.activities": "学术活动",
      "bio.current": "我目前在<a href=\"https://www.sbintuitions.co.jp/\">SB Intuitions Corp.</a>担任研究科学家，主要从事大语言模型和视觉语言模型研究。",
      "bio.education": "我于2025年获得<a href=\"https://www.i.u-tokyo.ac.jp/index_e.shtml\">东京大学</a>情报理工学博士学位，师从<a href=\"https://www.nlab.ci.i.u-tokyo.ac.jp/~nakayama/index_en.html\">中山英树教授</a>，就读于<a href=\"https://www.nlab.ci.i.u-tokyo.ac.jp/index-e.html\">中山研究室</a>。此前，我在<a href=\"https://www.sjtu.edu.cn/\">上海交通大学</a>获得工学硕士学位，师从<a href=\"https://yuyeling.com/\">凌玉烨教授</a>；在<a href=\"https://www.shu.edu.cn/\">上海大学</a>获得工学学士学位，师从<a href=\"https://ivp.shu.edu.cn/zwb.htm\">刘志教授</a>。",
      "bio.interests": "我的研究方向包括<b>多模态推理</b>、<b>幻觉缓解</b>、<b>知识增强</b>和<b>可信人工智能</b>。",
      "bio.collaboration": "欢迎就多模态学习和可信人工智能开展合作研究。如有兴趣，欢迎<a href=\"mailto:jiaxuanli.work@gmail.com\">与我联系</a>。",
      "section.news": "动态",
      "date.emnlp": "2026年8月",
      "date.job": "2025年4月",
      "date.phd": "2025年3月",
      "date.daad": "2024年10月",
      "date.miru": "2024年8月",
      "date.google": "2024年5月",
      "date.icvss": "2024年4月",
      "date.cvpr": "2024年2月",
      "date.iccv": "2023年7月",
      "date.jsps": "2023年4月",
      "date.spring": "2022年4月",
      "news.emnlp": "论文《Do VLMs Share Safety Neurons Across Modalities?》获<a href=\"https://2026.emnlp.org/\">EMNLP 2026主会</a>录用。",
      "news.job": "加入<a href=\"https://www.sbintuitions.co.jp/\"><strong>SB Intuitions</strong></a>担任研究科学家，主要从事负责任人工智能研究。",
      "news.phd": "获得<a href=\"https://www.i.u-tokyo.ac.jp/index_e.shtml\">东京大学</a><strong>情报理工学博士学位</strong>。",
      "news.daad": "入选德国学术交流中心（DAAD）的<a href=\"https://www.daad.de/en/the-daad/postdocnet/\">AInet Fellow</a>项目。",
      "news.miru": "受邀在日本熊本举行的<a href=\"https://miru-committee.github.io/miru2024/en/\">MIRU 2024</a>上作关于<a href=\"https://jiaxuan-li.github.io/EVCap\">EVCap</a>的报告。",
      "news.google": "获得<a href=\"https://buildyourfuture.withgoogle.com/scholarships/google-conference-scholarships\">Google东亚学生会议差旅资助</a>。",
      "news.icvss": "获选参加在意大利西西里举办的<a href=\"https://iplab.dmi.unict.it/icvss2024\">国际计算机视觉暑期学校（ICVSS 2024）</a>。",
      "news.cvpr": "一篇论文获<a href=\"https://cvpr.thecvf.com/Conferences/2024\">CVPR 2024</a>录用。",
      "news.iccv": "一篇论文获<a href=\"https://iccv2023.thecvf.com\">ICCV 2023</a>录用。",
      "news.jsps": "获选为日本学术振兴会（JSPS）特别研究员（<a href=\"https://www.jsps.go.jp/j-pd/pd_saiyoichiran.html\">DC2</a>）。",
      "news.spring": "入选日本科学技术振兴机构（JST）<a href=\"https://www.cis-trans.jp/spring_gx/index-e.html\">SPRING GX</a>项目。",
      "section.publications": "代表性论文",
      "publication.more": "（查看<a href=\"publications.html\">完整列表</a>或<a href=\"https://scholar.google.com/citations?hl=en&amp;user=49tpDmAAAAAJ\">Google Scholar</a>）",
      "section.full_publications": "完整论文列表",
      "publication.back": "（<a href=\"index.html#publications\">返回主页</a>）",
      "publication.home": "主页",
      "footer.updated": "最后更新：2026年8月",
      "section.international": "国际论文",
      "publication.equal": "<sup>*</sup> 共同一作",
      "section.domestic": "国内会议论文（未经同行评审）",
      "section.grants": "研究经费",
      "grant.jsps": "日本学术振兴会（JSPS）特别研究员科研费，200万日元，2023年4月–2025年3月",
      "grant.nii2024": "日本国立信息学研究所（NII）开放合作研究（研究员），120万日元，2024年7月–2025年3月",
      "grant.nii2023": "日本国立信息学研究所（NII）开放合作研究（研究员），100万日元，2023年7月–2024年3月",
      "grant.spring": "日本科学技术振兴机构（JST）SPRING GX奖学金，62万日元，2022年4月–2023年3月",
      "section.awards": "奖项与荣誉",
      "award.daad": "AInet Fellow，德国学术交流中心（DAAD），2024",
      "award.jsps_allowance": "日本学术振兴会特别研究员最终年度专项资助，2024",
      "award.google": "Google东亚学生会议差旅资助，2024",
      "award.anlp": "委员会特别奖，日本自然语言处理学会第30届年会，2024",
      "award.dc2": "日本学术振兴会（JSPS）特别研究员（DC2），2023",
      "award.spring": "SPRING GX奖学金，日本科学技术振兴机构，2022",
      "award.sjtu": "优秀毕业生，上海交通大学，2022",
      "award.cosco": "中远海运奖学金，上海交通大学，2021",
      "award.huawei": "“华为杯”第十七届中国研究生数学建模竞赛二等奖，2020",
      "award.shu": "学业奖学金，上海大学，2016",
      "section.activities": "学术活动",
      "activity.aist2025": "<b>邀请报告</b>，日本产业技术综合研究所知识与信息研究团队，2025年2月",
      "activity.miru": "<b>邀请报告</b>，MIRU 2024，日本熊本，2024年8月",
      "activity.ircn": "<b>海报展示</b>，东京大学神经智能国际研究机构（IRCN），2024年7月",
      "activity.aist2024": "<b>邀请报告</b>，日本产业技术综合研究所知识与信息研究团队，2024年7月",
      "activity.icvss": "<b>国际计算机视觉暑期学校（ICVSS）</b>，意大利西西里，2024年7月",
      "activity.reviewer": "<b>审稿人</b>：IEEE TIP、NeurIPS、CVPR、ECCV、ACL ARR、AAAI、BMVC、ACCV",
      "section.teaching": "教学经历",
      "teaching.ai2614": "上海交通大学AI2614《数字信号与图像处理》课程助教，2021年春季",
      "teaching.ee367": "上海交通大学EE367《通信电路基础》课程助教，2020年春季"
    }
  };

  const nodes = Array.from(document.querySelectorAll("[data-i18n]"));
  const english = Object.fromEntries(nodes.map((node) => [node.dataset.i18n, node.innerHTML]));
  const supported = ["en", "ja", "zh"];
  const themeButton = document.querySelector(".theme-toggle");
  const themeLabels = {
    en: { light: "Switch to light mode", dark: "Switch to dark mode" },
    ja: { light: "ライトモードに切り替える", dark: "ダークモードに切り替える" },
    zh: { light: "切换到浅色模式", dark: "切换到深色模式" }
  };

  const updateThemeButton = (language = "en") => {
    if (!themeButton) return;
    const isDark = document.documentElement.dataset.theme === "dark";
    const label = themeLabels[language][isDark ? "light" : "dark"];
    themeButton.setAttribute("aria-label", label);
    themeButton.setAttribute("title", label);
    themeButton.setAttribute("aria-pressed", String(isDark));
  };

  const setTheme = (theme, persist = false) => {
    const nextTheme = theme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = nextTheme;
    const language = document.documentElement.lang === "zh-CN" ? "zh" : document.documentElement.lang;
    updateThemeButton(supported.includes(language) ? language : "en");

    if (persist) {
      try {
        window.localStorage.setItem("site-theme", nextTheme);
      } catch (_) {
        // The theme still works when storage is disabled.
      }
    }
  };

  const preferredLanguage = () => {
    const query = new URLSearchParams(window.location.search).get("lang");
    if (supported.includes(query)) return query;

    try {
      const saved = window.localStorage.getItem("site-language");
      if (supported.includes(saved)) return saved;
    } catch (_) {
      // The page still works when storage is disabled.
    }

    const browserLanguage = (navigator.language || "en").toLowerCase();
    if (browserLanguage.startsWith("ja")) return "ja";
    if (browserLanguage.startsWith("zh")) return "zh";
    return "en";
  };

  const setLanguage = (language, updateUrl = false) => {
    const lang = supported.includes(language) ? language : "en";
    const dictionary = translations[lang] || {};

    nodes.forEach((node) => {
      const key = node.dataset.i18n;
      node.innerHTML = dictionary[key] || english[key];
    });

    document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;
    const isPublicationsPage = window.location.pathname.endsWith("/publications.html");
    if (isPublicationsPage) {
      document.title = lang === "ja" ? "Jiaxuan Li | 研究業績" : lang === "zh" ? "Jiaxuan Li | 论文" : "Jiaxuan Li | Publications";
    } else {
      document.title = lang === "ja" ? "Jiaxuan Li | ホームページ" : lang === "zh" ? "Jiaxuan Li | 学术主页" : "Jiaxuan Li | Academic Homepage";
    }

    document.querySelectorAll("[data-set-lang]").forEach((button) => {
      const active = button.dataset.setLang === lang;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    updateThemeButton(lang);

    try {
      window.localStorage.setItem("site-language", lang);
    } catch (_) {
      // Ignore storage restrictions.
    }

    if (updateUrl) {
      const url = new URL(window.location.href);
      url.searchParams.set("lang", lang);
      window.history.replaceState({}, "", url);
    }
  };

  document.querySelectorAll("[data-set-lang]").forEach((button) => {
    button.addEventListener("click", () => setLanguage(button.dataset.setLang, true));
  });

  if (themeButton) {
    themeButton.addEventListener("click", () => {
      const nextTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
      setTheme(nextTheme, true);
    });
  }

  setTheme(document.documentElement.dataset.theme);
  setLanguage(preferredLanguage());
})();
