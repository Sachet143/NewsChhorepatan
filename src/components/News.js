import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  articles = [
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Lily Kuo",
      title:
        "China's premier, trying to boost economy, says west is sowing division - The Washington Post",
      description:
        "China's economy is slowing and unemployment rising as the country struggles to emerge from zero covid policies. Talk of « de-risking » isn't helping either.",
      url: "https://www.washingtonpost.com/world/2023/06/27/china-economy-li-qiang-west/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/UFVF46DBFUDEC5MBAOVHUNHGGQ_size-normalized.jpg&w=1440",
      publishedAt: "2023-06-27T08:17:00Z",
      content:
        "Comment on this story\r\nComment\r\nTIANJIN, China Chinese Premier Li Qiang on Tuesday accused Western nations of sowing division and confrontation, in thinly veiled criticisms of Washington, as he sough… [+5109 chars]",
    },
    {
      source: { id: null, name: "nj.com" },
      author: "Holiday Mathis",
      title: "Today’s daily horoscope for June 27, 2023 - NJ.com",
      description:
        "Zodiac signs and horoscopes on 6/27/23 for Aquarius, Pisces, Aries, Taurus, Gemini, Cancer, Leo, Virgo, Libra, Scorpio, Sagittarius, Capricorn.",
      url: "https://www.nj.com/advice/2023/06/todays-daily-horoscope-for-june-27-2023.html",
      urlToImage:
        "https://www.nj.com/resizer/y0GkxcEcKp6NoyUc0LAtx7APmMY=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SAGJVB5QCZCNFBN2U2NE2O4GTE.png",
      publishedAt: "2023-06-27T04:01:00Z",
      content:
        "Lovers Moon\r\nA service announcement from the Libra moon: Healthy relationships are built on mutual understanding, support and a genuine desire for each others well-being. Dysfunctional relationships … [+4217 chars]",
    },
    {
      source: { id: "the-washington-post", name: "The Washington Post" },
      author: "Jacqueline Alemany",
      title:
        "Listen: In audio recording, Trump heard discussing sensitive Iran document - The Washington Post",
      description:
        "The recording is an important piece of evidence in the federal case against the former president.",
      url: "https://www.washingtonpost.com/national-security/2023/06/26/donald-trump-audio-recording-iran-documents/",
      urlToImage:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/06-27-2023/t_5f366b51ec8346e48f8f86c4d97a21d6_name_Trump_audio.jpg&w=1440",
      publishedAt: "2023-06-27T03:46:57Z",
      content:
        "Comment on this story\r\nComment\r\nThe Washington Post has obtained the 2021 audio recording in which former president Donald Trump appears to brag about possessing a classified document related to Iran… [+4113 chars]",
    },
    {
      source: { id: null, name: "WVIR" },
      author: null,
      title:
        "Texas medical examiner says airline worker pulled into jet engine died by suicide - NBC 29",
      description:
        "The Federal Aviation Administration indicated that it would investigate.",
      url: "https://www.nbc29.com/2023/06/27/texas-medical-examiner-says-airline-worker-pulled-into-jet-engine-died-by-suicide/",
      urlToImage:
        "https://gray-wvir-prod.cdn.arcpublishing.com/resizer/XCL-wq4_IvLP1ovxbbjkT4hqnZE=/1200x600/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ONOIB2EM65HMNDHS4WX2ZOEJL4.jpg",
      publishedAt: "2023-06-27T03:35:00Z",
      content:
        "SAN ANTONIO (AP) - A ground worker died Friday night when he was sucked into an engine of a jet that had just landed at San Antonio International Airport, and the local medical examiner is ruling it … [+2265 chars]",
    },
    {
      source: { id: "abc-news", name: "ABC News" },
      author: "Hannah Demissie, Will McDuffie",
      title:
        "DeSantis asks judge to dismiss Disney lawsuit, claims immunity - ABC News",
      description:
        "The company has accused the governor of illegal retaliation.",
      url: "https://abcnews.go.com/Politics/desantis-asks-judge-dismiss-disney-lawsuit-claims-immunity/story?id=100394511",
      urlToImage:
        "https://s.abcnews.com/images/Politics/desantis2-file-ap-ml-230526_1685107572918_hpMain_2_16x9_992.jpg",
      publishedAt: "2023-06-27T03:25:14Z",
      content:
        "Florida Gov. Ron DeSantis on Monday asked a federal court to dismiss The Walt Disney Co.'s lawsuit against him, which claims illegal retaliation over a political dispute.\r\nIn the motion, obtained by … [+1980 chars]",
    },
    {
      source: { id: null, name: "CBS Sports" },
      author: "Dayn Perry",
      title:
        "LSU vs. Florida score, takeaways: Tigers trounce Gators in College World Series for NCAA baseball title - CBS Sports",
      description: "LSU defeats Florida, 18-4, in Game 3 of championship",
      url: "https://www.cbssports.com/mlb/news/lsu-vs-florida-score-takeaways-tigers-trounce-gators-in-college-world-series-for-ncaa-baseball-title/live/",
      urlToImage:
        "https://sportshub.cbsistatic.com/i/r/2023/06/27/a768fa77-9d7e-4ee8-82cb-b9393c333566/thumbnail/1200x675/004de1c0f0fb93aaaf8e3b02b7a01867/untitled-design-393.png",
      publishedAt: "2023-06-27T03:13:00Z",
      content:
        "OMAHA, Neb. -- LSU's 2023 baseball season began with heavy preseason expectations, as the consensus No. 1 across every major poll. It ended with those expectations met and in a dog-pile near the moun… [+5244 chars]",
    },
    {
      source: { id: null, name: "News12.com" },
      author: null,
      title:
        "Storms force airline delays and cancellations at Newark Liberty International Airport - News 12 New Jersey",
      description:
        "Flight delays and cancellations are piling up at Newark Liberty International Airport as two rounds of storms pass through New Jersey.",
      url: "https://newjersey.news12.com/storms-force-airline-delays-and-cancellations-at-newark-liberty-international-airport",
      urlToImage:
        "https://images.ctfassets.net/3kqcuzntcg31/3NeCHm5lgUIzIByZNrIJvT/132914102515076df75fd05f7c6e6dd9/0a761771-fa56-4bc0-8fba-f1b7203714c7.jpg?fit=thumb&w=600&h=340&q=80",
      publishedAt: "2023-06-27T02:03:14Z",
      content: null,
    },
    {
      source: { id: "financial-times", name: "Financial Times" },
      author: "Max Seddon, Polina Ivanova, Lucy Fisher",
      title:
        "Vladimir Putin accuses Wagner Group leaders of betraying Russia - Financial Times",
      description:
        "President insists insurrection was doomed from outset in first public comments since shortlived mutiny",
      url: "https://www.ft.com/content/3bc853e9-30c4-47a8-9d0a-9f9f5b384447",
      urlToImage:
        "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Ff811165a-8d94-47f7-a68c-808629ec4412.jpg?source=next-opengraph&fit=scale-down&width=900",
      publishedAt: "2023-06-27T01:30:00Z",
      content:
        "Russian president Vladimir Putin has condemned the organisers of last weekends shortlived mutiny, saying they had betrayed their country and the fighters in their command.\r\nIn his first public commen… [+4489 chars]",
    },
    {
      source: { id: null, name: "Nbcsportsbayarea.com" },
      author: "Tristi Rodriguez",
      title:
        "Wembanyama includes Steph in starting five to save planet - Yahoo Sports",
      description:
        "If the planet was in danger, Victor Wembanyama knows just who to call.",
      url: "https://www.nbcsportsbayarea.com/nba/golden-state-warriors/victor-wembanyama-steph-curry/1636523/",
      urlToImage:
        "https://media.nbcsportsbayarea.com/2023/06/steph-curry-victor-wembanyama-USATSI.jpg?quality=85&strip=all&resize=1200%2C675",
      publishedAt: "2023-06-27T00:59:00Z",
      content:
        "If the planet were in danger, Victor Wembanyama knows just who to call. \r\nThe 7-foot-5 No. 1 overall pick in the 2023 NBA Draft was asked by For The Win to put together a starting five of former and … [+902 chars]",
    },
    {
      source: { id: null, name: "Deadline" },
      author: "Armando Tinoco",
      title:
        "‘Vanderpump Rules’ Season 11 Sets Filming Start Date; Lala Kent Says It’s Giving Her “Anxiety” - Deadline",
      description:
        "Lala Kent is experiencing “anxiety” as Vanderpump Rules Season 11 starts filming. The fallout of “Scandoval” continues and the Bravo cameras are set to start capturing the d…",
      url: "https://deadline.com/2023/06/vanderpump-rules-season-11-sets-filming-start-date-lala-kent-1235425042/",
      urlToImage:
        "https://deadline.com/wp-content/uploads/2023/01/vanderpump-rules-season-10.jpg?w=1000",
      publishedAt: "2023-06-27T00:57:00Z",
      content:
        "Lala Kent is experiencing “anxiety” as Vanderpump Rules Season 11 starts filming. The fallout of “Scandoval” continues and the Bravo cameras are set to start capturing the drama this week according t… [+1343 chars]",
    },
    {
      source: { id: "cbs-news", name: "CBS News" },
      author: "Aliza Chasan",
      title:
        "Malaria cases in Florida and Texas are first locally acquired infections in U.S. in 20 years, CDC warns - CBS News",
      description:
        "Locally acquired mosquito-borne malaria has not occurred in the U.S. since 2003, when there were 8 cases identified in Florida.",
      url: "https://www.cbsnews.com/news/malaria-cdc-health-alert-locally-acquired-cases-florida-texas-first-in-20-years/",
      urlToImage:
        "https://assets2.cbsnewsstatic.com/hub/i/r/2023/06/26/ab8db56a-cbe8-4add-83b4-a93fa6b1de98/thumbnail/1200x630/6b0fa9586f4109f3a00953a96d240ef9/gettyimages-509399272.jpg?v=da961fb78efc3933073ecc68b1f3f72b",
      publishedAt: "2023-06-27T00:28:00Z",
      content:
        "The Centers for Disease Control and Prevention on Monday warned of the return of locally acquired cases of malaria, meaning the infections were not linked to foreign travel and appear to have been tr… [+2319 chars]",
    },
    {
      source: { id: "cnn", name: "CNN" },
      author: "Andi Babineau, Holly Yan, Christina Maxouris",
      title:
        "Club Q mass shooter sentenced to over 2,000 years in prison after family begs judge to ‘lock this animal away to the depths of hell’ - CNN",
      description:
        "The suspect accused of using an AR-style rifle to terrorize a Colorado LGBTQ nightclub – killing five people and injuring 19 others – pleaded guilty to five counts of first-degree murder and 46 counts of attempted murder.",
      url: "https://www.cnn.com/2023/06/26/us/club-q-shooting-suspect-court-appearance/index.html",
      urlToImage:
        "https://media.cnn.com/api/v1/images/stellar/prod/230626105314-01-club-q-hearing-plea-0626.jpg?c=16x9&q=w_800,c_fill",
      publishedAt: "2023-06-27T00:13:00Z",
      content:
        "Colorado Springs, ColoradoCNN\r\n  — \r\nThe suspect accused of using an AR-style rifle to terrorize a Colorado LGBTQ nightclub killing five people and injuring 19 others pleaded guilty to five counts of… [+7139 chars]",
    },
    {
      source: { id: null, name: "POLITICO.eu" },
      author: "Jamie Dettmer",
      title: "Putinism’s demise will be chaotic and violent - POLITICO Europe",
      description:
        "Russia’s opposition — much like the West — seems doomed to watch helplessly from the sidelines.",
      url: "https://www.politico.eu/article/russia-wagner-group-rebellion-vladimir-putin-demise-will-be-chaotic-and-violent/",
      urlToImage:
        "https://www.politico.eu/cdn-cgi/image/width=1200,height=630,fit=crop,quality=80,onerror=redirect/wp-content/uploads/2023/06/27/GettyImages-1258636052-scaled.jpg",
      publishedAt: "2023-06-26T22:59:00Z",
      content:
        "Press play to listen to this article\r\nVoiced by artificial intelligence.\r\nYevgeny Prigozhins aborted putsch has demonstrated the fragility of Vladimir Putins grip on power. Or as Russian opposition l… [+10307 chars]",
    },
    {
      source: { id: "ars-technica", name: "Ars Technica" },
      author: "John Timmer",
      title:
        "World's largest predatory shark had elevated body temperature - Ars Technica",
      description: "A warmer body would have made for a faster shark.",
      url: "https://arstechnica.com/science/2023/06/worlds-largest-predatory-shark-had-elevated-body-temperature/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2023/06/image-6-590x380.jpeg",
      publishedAt: "2023-06-26T21:44:38Z",
      content:
        "10 with \r\nThe largest shark alive today, reaching up to 20 meters long, is the whale shark, a sedate filter feeder. As recently as 4 million years ago, however, sharks of that scale likely included t… [+5151 chars]",
    },
    {
      source: { id: null, name: "Medscape" },
      author: "Lori Youmshajekian",
      title:
        "Intermittent Fasting, Cutting Calories Give Same Weight Loss - Medscape",
      description:
        "Eating within a narrow time window is just as effective as counting calories, according to a new study from the University of Illinois, Chicago.",
      url: "https://www.medscape.com/viewarticle/993704",
      urlToImage:
        "https://img.medscape.com/thumbnail_library/dt_230626_16_hour_fasting_800x450.jpg",
      publishedAt: "2023-06-26T21:04:19Z",
      content:
        "Eight-hour intermittent fasting had similar weight-loss results to calorie counting in adults with obesity, a new study published online in the Annals of Internal Medicine has found. \r\nThe small, unb… [+3452 chars]",
    },
    {
      source: { id: null, name: "MMA Fighting" },
      author: "MMA Fighting Newswire",
      title:
        "Chael Sonnen defends Dana White, confident Zuckerburg vs. Musk fight could do up to 25 million PPV buys - MMA Fighting",
      description:
        "Chael Sonnen is all-in on the would-be battle of the billionaires between Mark Zuckerberg and Elon Musk.",
      url: "https://www.mmafighting.com/2023/6/26/23774439/chael-sonnen-defends-dana-white-confident-zuckerburg-vs-musk-fight-could-do-25-million-ppv-buys",
      urlToImage:
        "https://cdn.vox-cdn.com/thumbor/_FG9DWpMRJCoeM99N93gnUpN70s=/909x185:4333x1978/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24753925/1429505880.jpg",
      publishedAt: "2023-06-26T21:00:00Z",
      content:
        "Chael Sonnen is all-in on the would-be battle of the billionaires.\r\nThe American Gangster is well versed in the ingredients that make for a blockbuster pay-per-view, dating all the way back to his tw… [+4825 chars]",
    },
    {
      source: { id: null, name: "SciTechDaily" },
      author: null,
      title:
        "Can't Take Statin Side Effects? Bempedoic Acid Lowers LDL Cholesterol and Reduces Cardiovascular Risks - SciTechDaily",
      description:
        "Drug lowers LDL cholesterol and reduces the risk of serious cardiovascular outcomes in a large trial. The cholesterol-lowering drug bempedoic acid reduced the combined rate of major adverse cardiovascular events by 13%, meeting its primary endpoint in a large…",
      url: "https://scitechdaily.com/cant-take-statin-side-effects-bempedoic-acid-lowers-ldl-cholesterol-and-reduces-cardiovascular-risks/",
      urlToImage:
        "https://scitechdaily.com/images/Heart-Health-Boost-Concept-Art.jpg",
      publishedAt: "2023-06-26T20:55:19Z",
      content:
        "ByAmerican College of CardiologyJune 26, 2023\r\nBempedoic acid, a cholesterol-lowering drug, has shown positive results in a large trial, reducing major adverse cardiovascular events by 13% in patient… [+6383 chars]",
    },
    {
      source: { id: "the-times-of-india", name: "The Times of India" },
      author: "Surendra Singh",
      title:
        "Nasa recovers 98% water from urine and sweat on ISS; breakthrough to help in long space missions - Indiatimes.com",
      description:
        "Science News: In a major breakthrough, astronauts on board the International Space Station (ISS) have attained a 98% water restoration rate using an advanced system",
      url: "https://timesofindia.indiatimes.com/home/science/nasa-recovers-98-water-from-urine-and-sweat-on-iss-breakthrough-to-help-in-long-space-missions/articleshow/101288702.cms",
      urlToImage:
        "https://static.toiimg.com/thumb/msid-101288808,width-1070,height-580,imgsize-26816,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2023-06-26T20:54:00Z",
      content:
        "<ul><li>News</li>\r\n<li>Science News</li>\r\n<li>Nasa recovers 98% water from urine and sweat on ISS; breakthrough to help in long space missions</li></ul>\r\nFOLLOW US ON SOCIAL MEDIAFacebookTwitterInsta… [+17 chars]",
    },
  ];
  constructor() {
    super();
    console.log("Hello I am a costructor from News Component");
    this.state = {
      articles: this.articles,
      loading: false,
    };
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewsChhorepatan - Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title.slice(0, 45)}
                  description={element.description.slice(0, 80)}
                  imgUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default News;
