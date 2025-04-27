import { useLanguage } from "@/contexts/LanguageContext";

export interface LearnResource {
  id: string;
  categoryEn: string;
  categoryHi: string;
  titleEn: string;
  titleHi: string;
  descriptionEn: string;
  descriptionHi: string;
  contentEn: string;
  contentHi: string;
  imageUrl: string;
}

export const learnResources: LearnResource[] = [
  {
    id: "basics-investing",
    categoryEn: "Basics",
    categoryHi: "बुनियादी बातें",
    titleEn: "Introduction to Investing",
    titleHi: "निवेश का परिचय",
    descriptionEn: "Learn the fundamentals of investing and how to get started on your investment journey.",
    descriptionHi: "निवेश की मूल बातें जानें और अपनी निवेश यात्रा शुरू करने के तरीके।",
    contentEn: `
      <h2>Why Should You Invest?</h2>
      <p>Investing is one of the most effective ways to build wealth and achieve your financial goals. When you invest, you're putting your money to work for you. Over time, your investments can grow through compound interest, allowing you to build wealth more efficiently than simply saving money.</p>
      
      <h2>Key Investment Principles</h2>
      <ul>
        <li><strong>Start Early:</strong> The sooner you start investing, the more time your money has to grow.</li>
        <li><strong>Diversify:</strong> Don't put all your eggs in one basket. Spread your investments across different asset classes.</li>
        <li><strong>Stay Consistent:</strong> Regularly investing small amounts is better than occasional large investments.</li>
        <li><strong>Long-term Focus:</strong> The stock market may fluctuate in the short term, but historically has provided positive returns over the long term.</li>
      </ul>
      
      <h2>Common Investment Options for Beginners</h2>
      <ul>
        <li><strong>Mutual Funds:</strong> Professionally managed funds that pool money from many investors to invest in a diversified portfolio.</li>
        <li><strong>Index Funds:</strong> A type of mutual fund that tracks a market index, offering low costs and broad market exposure.</li>
        <li><strong>Fixed Deposits:</strong> Low-risk investments with guaranteed returns, though typically lower than market-linked investments.</li>
        <li><strong>Public Provident Fund (PPF):</strong> A government-backed long-term savings scheme with tax benefits.</li>
      </ul>
      
      <h2>How to Get Started</h2>
      <ol>
        <li>Determine your financial goals and investment timeframe</li>
        <li>Build an emergency fund before investing in the market</li>
        <li>Understand your risk tolerance</li>
        <li>Start with simple investments like index funds or mutual funds</li>
        <li>Consider consulting with a financial advisor for personalized guidance</li>
      </ol>
    `,
    contentHi: `
      <h2>आपको निवेश क्यों करना चाहिए?</h2>
      <p>निवेश धन बनाने और अपने वित्तीय लक्ष्यों को प्राप्त करने के सबसे प्रभावी तरीकों में से एक है। जब आप निवेश करते हैं, तो आप अपने पैसे को अपने लिए काम करवा रहे होते हैं। समय के साथ, आपके निवेश चक्रवृद्धि ब्याज के माध्यम से बढ़ सकते हैं, जिससे आप केवल पैसे बचाने की तुलना में अधिक कुशलता से धन बना सकते हैं।</p>
      
      <h2>प्रमुख निवेश सिद्धांत</h2>
      <ul>
        <li><strong>जल्दी शुरू करें:</strong> आप जितनी जल्दी निवेश शुरू करते हैं, आपके पैसे के पास बढ़ने के लिए उतना ही अधिक समय होता है।</li>
        <li><strong>विविधता लाएं:</strong> अपने सभी अंडे एक टोकरी में न रखें। अपने निवेश को विभिन्न संपत्ति वर्गों में फैलाएं।</li>
        <li><strong>सुसंगत रहें:</strong> नियमित रूप से छोटी राशि का निवेश करना कभी-कभार बड़े निवेशों से बेहतर है।</li>
        <li><strong>दीर्घकालिक फोकस:</strong> शेयर बाजार अल्पकालिक में उतार-चढ़ाव कर सकता है, लेकिन ऐतिहासिक रूप से लंबे समय में सकारात्मक रिटर्न प्रदान किया है।</li>
      </ul>
      
      <h2>शुरुआती निवेशकों के लिए सामान्य निवेश विकल्प</h2>
      <ul>
        <li><strong>म्यूचुअल फंड:</strong> पेशेवर रूप से प्रबंधित फंड जो विविध पोर्टफोलियो में निवेश करने के लिए कई निवेशकों से पैसा एकत्र करते हैं।</li>
        <li><strong>इंडेक्स फंड:</strong> म्यूचुअल फंड का एक प्रकार जो मार्केट इंडेक्स को ट्रैक करता है, कम लागत और व्यापक बाजार एक्सपोजर प्रदान करता है।</li>
        <li><strong>फिक्स्ड डिपॉजिट:</strong> गारंटीड रिटर्न के साथ कम जोखिम वाले निवेश, हालांकि आमतौर पर मार्केट से जुड़े निवेशों की तुलना में कम होते हैं।</li>
        <li><strong>पब्लिक प्रोविडेंट फंड (PPF):</strong> कर लाभों के साथ सरकार समर्थित दीर्घकालिक बचत योजना।</li>
      </ul>
      
      <h2>शुरुआत कैसे करें</h2>
      <ol>
        <li>अपने वित्तीय लक्ष्यों और निवेश समय सीमा का निर्धारण करें</li>
        <li>बाजार में निवेश करने से पहले एक आपातकालीन कोष बनाएं</li>
        <li>अपने जोखिम सहनशीलता को समझें</li>
        <li>इंडेक्स फंड या म्यूचुअल फंड जैसे सरल निवेशों से शुरुआत करें</li>
        <li>व्यक्तिगत मार्गदर्शन के लिए वित्तीय सलाहकार से परामर्श करने पर विचार करें</li>
      </ol>
    `,
    imageUrl: "https://images.unsplash.com/photo-1604594849809-dfedbc827105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "stock-market",
    categoryEn: "Stock Market",
    categoryHi: "शेयर बाजार",
    titleEn: "Understanding the Stock Market",
    titleHi: "शेयर बाजार को समझना",
    descriptionEn: "Learn about how the stock market works and how to analyze stocks.",
    descriptionHi: "शेयर बाजार कैसे काम करता है और स्टॉक का विश्लेषण कैसे करें, इसके बारे में जानें।",
    contentEn: `
      <h2>What is the Stock Market?</h2>
      <p>The stock market is a marketplace where shares of publicly listed companies are bought and sold. When you buy a share of a company, you're buying a small piece of ownership in that company. As the company grows and becomes more valuable, the value of your shares may increase.</p>
      
      <h2>Key Stock Market Concepts</h2>
      <ul>
        <li><strong>Stock Exchange:</strong> A platform where buyers and sellers meet to trade stocks. In India, the main exchanges are the National Stock Exchange (NSE) and the Bombay Stock Exchange (BSE).</li>
        <li><strong>Market Index:</strong> A measurement of a section of the stock market. For example, the Sensex represents 30 large, financially sound companies from the BSE.</li>
        <li><strong>Bull Market:</strong> A period when stock prices are rising.</li>
        <li><strong>Bear Market:</strong> A period when stock prices are falling.</li>
        <li><strong>Dividend:</strong> A portion of a company's profits distributed to shareholders.</li>
      </ul>
      
      <h2>Stock Analysis Methods</h2>
      <h3>Fundamental Analysis</h3>
      <p>This involves analyzing a company's financial health, management quality, competitive advantages, and growth potential. Key metrics include:</p>
      <ul>
        <li><strong>Price-to-Earnings (P/E) Ratio:</strong> Compares a company's share price to its earnings per share.</li>
        <li><strong>Return on Equity (ROE):</strong> Measures a company's profitability relative to shareholders' equity.</li>
        <li><strong>Debt-to-Equity Ratio:</strong> Shows how much debt a company is using to finance its assets relative to equity.</li>
      </ul>
      
      <h3>Technical Analysis</h3>
      <p>This involves studying historical price movements and trading volumes to predict future price movements. Key concepts include:</p>
      <ul>
        <li><strong>Support and Resistance Levels:</strong> Price levels where a stock tends to stop falling or rising.</li>
        <li><strong>Moving Averages:</strong> Average price of a stock over a specific time period.</li>
        <li><strong>Volume:</strong> The number of shares traded in a given period.</li>
      </ul>
      
      <h2>Tips for Stock Market Investing</h2>
      <ol>
        <li>Do your research before investing in any company</li>
        <li>Invest for the long term rather than trying to time the market</li>
        <li>Diversify your investments across different sectors</li>
        <li>Start with blue-chip stocks (established, financially sound companies) if you're a beginner</li>
        <li>Consider using a systematic investment plan (SIP) to regularly invest in stocks</li>
      </ol>
    `,
    contentHi: `
      <h2>शेयर बाजार क्या है?</h2>
      <p>शेयर बाजार एक ऐसा बाजार है जहां सार्वजनिक रूप से सूचीबद्ध कंपनियों के शेयर खरीदे और बेचे जाते हैं। जब आप किसी कंपनी का शेयर खरीदते हैं, तो आप उस कंपनी का एक छोटा सा स्वामित्व खरीद रहे होते हैं। जैसे-जैसे कंपनी बढ़ती है और अधिक मूल्यवान होती जाती है, आपके शेयरों का मूल्य बढ़ सकता है।</p>
      
      <h2>प्रमुख शेयर बाजार अवधारणाएं</h2>
      <ul>
        <li><strong>स्टॉक एक्सचेंज:</strong> एक प्लेटफॉर्म जहां खरीदार और विक्रेता स्टॉक का व्यापार करने के लिए मिलते हैं। भारत में मुख्य एक्सचेंज नेशनल स्टॉक एक्सचेंज (NSE) और बॉम्बे स्टॉक एक्सचेंज (BSE) हैं।</li>
        <li><strong>मार्केट इंडेक्स:</strong> शेयर बाजार के एक हिस्से का मापन। उदाहरण के लिए, सेंसेक्स BSE की 30 बड़ी, वित्तीय रूप से मजबूत कंपनियों का प्रतिनिधित्व करता है।</li>
        <li><strong>बुल मार्केट:</strong> वह अवधि जब शेयर की कीमतें बढ़ रही होती हैं।</li>
        <li><strong>बेयर मार्केट:</strong> वह अवधि जब शेयर की कीमतें गिर रही होती हैं।</li>
        <li><strong>लाभांश:</strong> कंपनी के मुनाफे का एक हिस्सा जो शेयरधारकों को वितरित किया जाता है।</li>
      </ul>
      
      <h2>स्टॉक विश्लेषण विधियां</h2>
      <h3>मौलिक विश्लेषण</h3>
      <p>इसमें कंपनी के वित्तीय स्वास्थ्य, प्रबंधन गुणवत्ता, प्रतिस्पर्धात्मक लाभ और विकास क्षमता का विश्लेषण शामिल है। प्रमुख मैट्रिक्स में शामिल हैं:</p>
      <ul>
        <li><strong>मूल्य-से-आय (P/E) अनुपात:</strong> किसी कंपनी के शेयर मूल्य की तुलना उसके प्रति शेयर आय से करता है।</li>
        <li><strong>इक्विटी पर रिटर्न (ROE):</strong> शेयरधारकों की इक्विटी के सापेक्ष कंपनी की लाभप्रदता को मापता है।</li>
        <li><strong>ऋण-से-इक्विटी अनुपात:</strong> दिखाता है कि कंपनी अपनी संपत्तियों को इक्विटी के सापेक्ष वित्त देने के लिए कितना ऋण का उपयोग कर रही है।</li>
      </ul>
      
      <h3>तकनीकी विश्लेषण</h3>
      <p>इसमें भविष्य की कीमत के उतार-चढ़ाव की भविष्यवाणी करने के लिए ऐतिहासिक मूल्य आंदोलनों और ट्रेडिंग वॉल्यूम का अध्ययन शामिल है। प्रमुख अवधारणाओं में शामिल हैं:</p>
      <ul>
        <li><strong>सपोर्ट और रेजिस्टेंस लेवल:</strong> मूल्य स्तर जहां स्टॉक गिरना या बढ़ना बंद कर देता है।</li>
        <li><strong>मूविंग एवरेज:</strong> एक विशिष्ट समय अवधि में स्टॉक का औसत मूल्य।</li>
        <li><strong>वॉल्यूम:</strong> एक निश्चित अवधि में व्यापार किए गए शेयरों की संख्या।</li>
      </ul>
      
      <h2>शेयर बाजार में निवेश के लिए टिप्स</h2>
      <ol>
        <li>किसी भी कंपनी में निवेश करने से पहले अपना शोध करें</li>
        <li>बाजार के समय का अनुमान लगाने की कोशिश करने के बजाय लंबे समय के लिए निवेश करें</li>
        <li>अपने निवेश को विभिन्न क्षेत्रों में विविधतापूर्ण करें</li>
        <li>यदि आप एक शुरुआती हैं, तो ब्लू-चिप स्टॉक (स्थापित, वित्तीय रूप से मजबूत कंपनियां) से शुरुआत करें</li>
        <li>स्टॉक में नियमित रूप से निवेश करने के लिए व्यवस्थित निवेश योजना (SIP) का उपयोग करने पर विचार करें</li>
      </ol>
    `,
    imageUrl: "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "mutual-funds",
    categoryEn: "Mutual Funds",
    categoryHi: "म्यूचुअल फंड",
    titleEn: "Guide to Mutual Fund Investing",
    titleHi: "म्यूचुअल फंड निवेश के लिए मार्गदर्शिका",
    descriptionEn: "Everything you need to know about investing in mutual funds.",
    descriptionHi: "म्यूचुअल फंड में निवेश के बारे में आपको जानने की ज़रूरत सब कुछ।",
    contentEn: `
      <h2>What are Mutual Funds?</h2>
      <p>Mutual funds are investment vehicles that pool money from many investors to buy a diversified portfolio of stocks, bonds, or other securities. They are managed by professional fund managers who make investment decisions on behalf of the investors.</p>
      
      <h2>Types of Mutual Funds</h2>
      <h3>Based on Asset Class</h3>
      <ul>
        <li><strong>Equity Funds:</strong> Primarily invest in stocks. They offer high potential returns but come with higher risk.</li>
        <li><strong>Debt Funds:</strong> Invest in fixed-income securities like government bonds and corporate bonds. They are generally less risky than equity funds.</li>
        <li><strong>Hybrid Funds:</strong> Invest in a mix of equity and debt instruments to balance risk and return.</li>
        <li><strong>Money Market Funds:</strong> Invest in short-term, high-quality debt instruments. They are low-risk investments.</li>
      </ul>
      
      <h3>Based on Investment Objective</h3>
      <ul>
        <li><strong>Growth Funds:</strong> Aim for capital appreciation by investing in high-growth potential stocks.</li>
        <li><strong>Income Funds:</strong> Focus on generating regular income through dividends and interest.</li>
        <li><strong>Value Funds:</strong> Invest in undervalued stocks that have potential for price appreciation.</li>
        <li><strong>Index Funds:</strong> Track a specific market index, such as the Sensex or Nifty.</li>
      </ul>
      
      <h2>Key Mutual Fund Terms</h2>
      <ul>
        <li><strong>Net Asset Value (NAV):</strong> The price per unit of a mutual fund.</li>
        <li><strong>Expense Ratio:</strong> The annual fee charged by the fund for managing your money.</li>
        <li><strong>Load:</strong> A sales charge or commission paid when buying or selling mutual fund units.</li>
        <li><strong>Systematic Investment Plan (SIP):</strong> A method of investing a fixed amount regularly in mutual funds.</li>
      </ul>
      
      <h2>Benefits of Mutual Fund Investing</h2>
      <ul>
        <li><strong>Professional Management:</strong> Your investments are managed by experienced professionals.</li>
        <li><strong>Diversification:</strong> Even with a small investment, you get exposure to a wide range of securities.</li>
        <li><strong>Liquidity:</strong> Most mutual funds can be bought or sold on any business day at the current NAV.</li>
        <li><strong>Affordability:</strong> You can start investing with as little as ₹500 through SIPs.</li>
        <li><strong>Transparency:</strong> Mutual funds are regulated by SEBI and disclose their portfolios regularly.</li>
      </ul>
      
      <h2>How to Invest in Mutual Funds</h2>
      <ol>
        <li>Determine your financial goals and investment timeframe</li>
        <li>Understand your risk tolerance</li>
        <li>Research different mutual funds and their performance</li>
        <li>Choose between direct plans (lower expense ratio) or regular plans (through a distributor)</li>
        <li>Decide on a lump sum investment or a Systematic Investment Plan (SIP)</li>
        <li>Complete the KYC (Know Your Customer) process</li>
        <li>Start investing either online or through a mutual fund distributor</li>
      </ol>
      
      <h2>Tax Implications of Mutual Fund Investments</h2>
      <p>The tax on mutual fund returns depends on the type of fund and the holding period:</p>
      <ul>
        <li><strong>Equity Funds:</strong> Long-term capital gains (held for more than 1 year) are taxed at 10% for gains exceeding ₹1 lakh. Short-term gains are taxed at 15%.</li>
        <li><strong>Debt Funds:</strong> Long-term capital gains (held for more than 3 years) are taxed at 20% with indexation benefit. Short-term gains are added to your income and taxed as per your income tax slab.</li>
        <li><strong>ELSS (Equity Linked Savings Scheme):</strong> These are equity funds that qualify for tax deduction under Section 80C, up to ₹1.5 lakh.</li>
      </ul>
    `,
    contentHi: `
      <h2>म्यूचुअल फंड क्या हैं?</h2>
      <p>म्यूचुअल फंड निवेश वाहन हैं जो स्टॉक, बॉन्ड, या अन्य प्रतिभूतियों के विविध पोर्टफोलियो खरीदने के लिए कई निवेशकों से धन एकत्र करते हैं। इनका प्रबंधन पेशेवर फंड मैनेजर द्वारा किया जाता है जो निवेशकों की ओर से निवेश निर्णय लेते हैं।</p>
      
      <h2>म्यूचुअल फंड के प्रकार</h2>
      <h3>एसेट क्लास के आधार पर</h3>
      <ul>
        <li><strong>इक्विटी फंड:</strong> मुख्य रूप से स्टॉक में निवेश करते हैं। वे उच्च संभावित रिटर्न प्रदान करते हैं लेकिन उच्च जोखिम के साथ आते हैं।</li>
        <li><strong>डेट फंड:</strong> सरकारी बॉन्ड और कॉर्पोरेट बॉन्ड जैसी फिक्स्ड-इनकम सिक्योरिटीज में निवेश करते हैं। वे आम तौर पर इक्विटी फंडों की तुलना में कम जोखिम वाले होते हैं।</li>
        <li><strong>हाइब्रिड फंड:</strong> जोखिम और रिटर्न को संतुलित करने के लिए इक्विटी और डेट इंस्ट्रूमेंट्स के मिश्रण में निवेश करते हैं।</li>
        <li><strong>मनी मार्केट फंड:</strong> अल्पकालिक, उच्च-गुणवत्ता वाले ऋण साधनों में निवेश करते हैं। वे कम जोखिम वाले निवेश हैं।</li>
      </ul>
      
      <h3>निवेश उद्देश्य के आधार पर</h3>
      <ul>
        <li><strong>ग्रोथ फंड:</strong> उच्च विकास क्षमता वाले स्टॉक में निवेश करके पूंजी वृद्धि का लक्ष्य रखते हैं।</li>
        <li><strong>इनकम फंड:</strong> लाभांश और ब्याज के माध्यम से नियमित आय उत्पन्न करने पर ध्यान केंद्रित करते हैं।</li>
        <li><strong>वैल्यू फंड:</strong> कम मूल्यांकित स्टॉक में निवेश करते हैं जिनमें मूल्य वृद्धि की क्षमता है।</li>
        <li><strong>इंडेक्स फंड:</strong> सेंसेक्स या निफ्टी जैसे एक विशिष्ट मार्केट इंडेक्स को ट्रैक करते हैं।</li>
      </ul>
      
      <h2>प्रमुख म्यूचुअल फंड शब्द</h2>
      <ul>
        <li><strong>नेट एसेट वैल्यू (NAV):</strong> म्यूचुअल फंड की प्रति यूनिट कीमत।</li>
        <li><strong>एक्सपेंस रेशियो:</strong> आपके पैसे के प्रबंधन के लिए फंड द्वारा लिया जाने वाला वार्षिक शुल्क।</li>
        <li><strong>लोड:</strong> म्यूचुअल फंड यूनिट्स खरीदते या बेचते समय भुगतान किया गया सेल्स चार्ज या कमीशन।</li>
        <li><strong>सिस्टेमैटिक इन्वेस्टमेंट प्लान (SIP):</strong> म्यूचुअल फंड में नियमित रूप से एक निश्चित राशि निवेश करने का तरीका।</li>
      </ul>
      
      <h2>म्यूचुअल फंड निवेश के लाभ</h2>
      <ul>
        <li><strong>पेशेवर प्रबंधन:</strong> आपके निवेश का प्रबंधन अनुभवी पेशेवरों द्वारा किया जाता है।</li>
        <li><strong>विविधीकरण:</strong> छोटे निवेश के साथ भी, आपको विभिन्न प्रकार की प्रतिभूतियों तक पहुंच मिलती है।</li>
        <li><strong>तरलता:</strong> अधिकांश म्यूचुअल फंड वर्तमान NAV पर किसी भी कार्य दिवस पर खरीदे या बेचे जा सकते हैं।</li>
        <li><strong>किफायती:</strong> आप SIP के माध्यम से केवल ₹500 से निवेश शुरू कर सकते हैं।</li>
        <li><strong>पारदर्शिता:</strong> म्यूचुअल फंड SEBI द्वारा नियंत्रित होते हैं और नियमित रूप से अपने पोर्टफोलियो का खुलासा करते हैं।</li>
      </ul>
      
      <h2>म्यूचुअल फंड में निवेश कैसे करें</h2>
      <ol>
        <li>अपने वित्तीय लक्ष्यों और निवेश समय सीमा का निर्धारण करें</li>
        <li>अपने जोखिम सहनशीलता को समझें</li>
        <li>विभिन्न म्यूचुअल फंड और उनके प्रदर्शन पर शोध करें</li>
        <li>डायरेक्ट प्लान (कम एक्सपेंस रेशियो) या रेगुलर प्लान (डिस्ट्रीब्यूटर के माध्यम से) के बीच चुनाव करें</li>
        <li>एकमुश्त निवेश या सिस्टेमैटिक इन्वेस्टमेंट प्लान (SIP) पर निर्णय लें</li>
        <li>KYC (अपने ग्राहक को जानें) प्रक्रिया पूरी करें</li>
        <li>ऑनलाइन या म्यूचुअल फंड डिस्ट्रीब्यूटर के माध्यम से निवेश शुरू करें</li>
      </ol>
      
      <h2>म्यूचुअल फंड निवेश के कर प्रभाव</h2>
      <p>म्यूचुअल फंड रिटर्न पर कर फंड के प्रकार और होल्डिंग अवधि पर निर्भर करता है:</p>
      <ul>
        <li><strong>इक्विटी फंड:</strong> दीर्घकालिक पूंजीगत लाभ (1 वर्ष से अधिक समय तक रखे गए) ₹1 लाख से अधिक के लाभ पर 10% की दर से कर लगाया जाता है। अल्पकालिक लाभ पर 15% कर लगता है।</li>
        <li><strong>डेट फंड:</strong> दीर्घकालिक पूंजीगत लाभ (3 वर्ष से अधिक समय तक रखे गए) पर इंडेक्सेशन लाभ के साथ 20% की दर से कर लगाया जाता है। अल्पकालिक लाभ को आपकी आय में जोड़ा जाता है और आपके आयकर स्लैब के अनुसार कर लगाया जाता है।</li>
        <li><strong>ELSS (इक्विटी लिंक्ड सेविंग्स स्कीम):</strong> ये इक्विटी फंड हैं जो धारा 80C के तहत ₹1.5 लाख तक के कर कटौती के लिए योग्य हैं।</li>
      </ul>
    `,
    imageUrl: "https://images.unsplash.com/photo-1565372595781-e41581134805?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: "tax-planning",
    categoryEn: "Tax Planning",
    categoryHi: "कर नियोजन",
    titleEn: "Tax-Saving Investment Options",
    titleHi: "कर-बचत निवेश विकल्प",
    descriptionEn: "Learn about various tax-saving investment options available under the Income Tax Act.",
    descriptionHi: "आयकर अधिनियम के तहत उपलब्ध विभिन्न कर-बचत निवेश विकल्पों के बारे में जानें।",
    contentEn: `
      <h2>Why Tax Planning is Important</h2>
      <p>Tax planning is an essential part of financial planning. It helps you legally reduce your tax liability while also creating wealth through tax-saving investments. Effective tax planning ensures that you save money that would otherwise go to the government as taxes.</p>
      
      <h2>Tax-Saving Investment Options Under Section 80C</h2>
      <p>Section 80C of the Income Tax Act allows deductions up to ₹1.5 lakh from your total income for investments made in specified instruments:</p>
      
      <h3>Equity Linked Savings Scheme (ELSS)</h3>
      <ul>
        <li><strong>Features:</strong> Mutual funds that primarily invest in equity markets.</li>
        <li><strong>Lock-in Period:</strong> 3 years (shortest among all tax-saving instruments).</li>
        <li><strong>Returns:</strong> Potentially high returns as they invest in equity markets.</li>
        <li><strong>Taxation:</strong> Long-term capital gains above ₹1 lakh are taxed at 10%.</li>
      </ul>
      
      <h3>Public Provident Fund (PPF)</h3>
      <ul>
        <li><strong>Features:</strong> Government-backed long-term savings scheme.</li>
        <li><strong>Lock-in Period:</strong> 15 years (can be extended in blocks of 5 years).</li>
        <li><strong>Returns:</strong> Currently around 7.1%, reviewed quarterly by the government.</li>
        <li><strong>Taxation:</strong> Both investment and returns are tax-free.</li>
      </ul>
      
      <h3>National Pension System (NPS)</h3>
      <ul>
        <li><strong>Features:</strong> Retirement savings scheme regulated by PFRDA.</li>
        <li><strong>Lock-in Period:</strong> Until retirement (60 years), partial withdrawals allowed after 3 years for specific purposes.</li>
        <li><strong>Returns:</strong> Market-linked returns, typically 8-10% for the long term.</li>
        <li><strong>Taxation:</strong> Additional deduction of up to ₹50,000 under Section 80CCD(1B). 60% of the corpus can be withdrawn tax-free at maturity.</li>
      </ul>
      
      <h3>Tax-Saving Fixed Deposits</h3>
      <ul>
        <li><strong>Features:</strong> Fixed deposits with a lock-in period offered by banks.</li>
        <li><strong>Lock-in Period:</strong> 5 years.</li>
        <li><strong>Returns:</strong> Currently around 6-7%, depending on the bank.</li>
        <li><strong>Taxation:</strong> Interest earned is taxable as per your income tax slab.</li>
      </ul>
      
      <h3>Unit Linked Insurance Plans (ULIPs)</h3>
      <ul>
        <li><strong>Features:</strong> Combination of insurance and investment.</li>
        <li><strong>Lock-in Period:</strong> 5 years.</li>
        <li><strong>Returns:</strong> Market-linked returns, can vary significantly.</li>
        <li><strong>Taxation:</strong> Tax-free returns if the annual premium is up to ₹2.5 lakh.</li>
      </ul>
      
      <h2>Other Tax-Saving Options</h2>
      
      <h3>Health Insurance Premium (Section 80D)</h3>
      <ul>
        <li><strong>Features:</strong> Premium paid for health insurance policies.</li>
        <li><strong>Deduction Limit:</strong> Up to ₹25,000 for self, spouse, and children. Additional ₹25,000 for parents below 60 years and ₹50,000 for parents above 60 years.</li>
      </ul>
      
      <h3>Home Loan Interest (Section 24)</h3>
      <ul>
        <li><strong>Features:</strong> Interest paid on home loans for self-occupied properties.</li>
        <li><strong>Deduction Limit:</strong> Up to ₹2 lakh per year.</li>
      </ul>
      
      <h3>Education Loan Interest (Section 80E)</h3>
      <ul>
        <li><strong>Features:</strong> Interest paid on education loans for higher education.</li>
        <li><strong>Deduction Limit:</strong> No limit on the amount. Deduction available for a maximum of 8 years.</li>
      </ul>
      
      <h2>Tax-Saving Strategy Tips</h2>
      <ol>
        <li>Plan your investments at the beginning of the financial year rather than rushing at the end</li>
        <li>Consider your financial goals, risk tolerance, and investment horizon before choosing tax-saving instruments</li>
        <li>Diversify your tax-saving investments across different instruments</li>
        <li>Review your tax-saving portfolio regularly and make adjustments as needed</li>
        <li>Consider the post-tax returns rather than just the tax benefits</li>
        <li>Be aware of the new optional tax regime introduced in the 2020 budget, which offers lower tax rates but without most deductions and exemptions</li>
      </ol>
    `,
    contentHi: `
      <h2>कर नियोजन महत्वपूर्ण क्यों है</h2>
      <p>कर नियोजन वित्तीय योजना का एक अनिवार्य हिस्सा है। यह आपको कर-बचत निवेश के माध्यम से धन सृजन करते हुए कानूनी रूप से अपनी कर देयता को कम करने में मदद करता है। प्रभावी कर नियोजन यह सुनिश्चित करता है कि आप ऐसे पैसे बचाएं जो अन्यथा करों के रूप में सरकार को जाते।</p>
      
      <h2>धारा 80C के तहत कर-बचत निवेश विकल्प</h2>
      <p>आयकर अधिनियम की धारा 80C निर्दिष्ट साधनों में किए गए निवेश के लिए आपकी कुल आय से ₹1.5 लाख तक की कटौती की अनुमति देती है:</p>
      
      <h3>इक्विटी लिंक्ड सेविंग्स स्कीम (ELSS)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> म्यूचुअल फंड जो मुख्य रूप से इक्विटी बाजारों में निवेश करते हैं।</li>
        <li><strong>लॉक-इन अवधि:</strong> 3 वर्ष (सभी कर-बचत साधनों में सबसे छोटी)।</li>
        <li><strong>रिटर्न:</strong> संभावित उच्च रिटर्न क्योंकि वे इक्विटी बाजारों में निवेश करते हैं।</li>
        <li><strong>कराधान:</strong> ₹1 लाख से ऊपर के दीर्घकालिक पूंजीगत लाभ पर 10% कर लगाया जाता है।</li>
      </ul>
      
      <h3>पब्लिक प्रोविडेंट फंड (PPF)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> सरकार समर्थित दीर्घकालिक बचत योजना।</li>
        <li><strong>लॉक-इन अवधि:</strong> 15 वर्ष (5 वर्ष के ब्लॉक में बढ़ाया जा सकता है)।</li>
        <li><strong>रिटर्न:</strong> वर्तमान में लगभग 7.1%, सरकार द्वारा त्रैमासिक समीक्षा की जाती है।</li>
        <li><strong>कराधान:</strong> निवेश और रिटर्न दोनों कर-मुक्त हैं।</li>
      </ul>
      
      <h3>नेशनल पेंशन सिस्टम (NPS)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> PFRDA द्वारा नियंत्रित सेवानिवृत्ति बचत योजना।</li>
        <li><strong>लॉक-इन अवधि:</strong> सेवानिवृत्ति (60 वर्ष) तक, विशिष्ट उद्देश्यों के लिए 3 वर्ष के बाद आंशिक निकासी की अनुमति है।</li>
        <li><strong>रिटर्न:</strong> मार्केट से जुड़े रिटर्न, आमतौर पर लंबी अवधि के लिए 8-10%।</li>
        <li><strong>कराधान:</strong> धारा 80CCD(1B) के तहत ₹50,000 तक की अतिरिक्त कटौती। परिपक्वता पर 60% कोष कर-मुक्त निकाला जा सकता है।</li>
      </ul>
      
      <h3>टैक्स-सेविंग फिक्स्ड डिपॉजिट</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> बैंकों द्वारा प्रदान की जाने वाली लॉक-इन अवधि के साथ फिक्स्ड डिपॉजिट।</li>
        <li><strong>लॉक-इन अवधि:</strong> 5 वर्ष।</li>
        <li><strong>रिटर्न:</strong> वर्तमान में लगभग 6-7%, बैंक के आधार पर।</li>
        <li><strong>कराधान:</strong> अर्जित ब्याज आपके आयकर स्लैब के अनुसार कर योग्य है।</li>
      </ul>
      
      <h3>यूनिट लिंक्ड इंश्योरेंस प्लान (ULIPs)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> बीमा और निवेश का संयोजन।</li>
        <li><strong>लॉक-इन अवधि:</strong> 5 वर्ष।</li>
        <li><strong>रिटर्न:</strong> मार्केट से जुड़े रिटर्न, काफी भिन्न हो सकते हैं।</li>
        <li><strong>कराधान:</strong> वार्षिक प्रीमियम ₹2.5 लाख तक होने पर कर-मुक्त रिटर्न।</li>
      </ul>
      
      <h2>अन्य कर-बचत विकल्प</h2>
      
      <h3>स्वास्थ्य बीमा प्रीमियम (धारा 80D)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> स्वास्थ्य बीमा पॉलिसियों के लिए भुगतान किया गया प्रीमियम।</li>
        <li><strong>कटौती सीमा:</strong> स्वयं, पति या पत्नी और बच्चों के लिए ₹25,000 तक। 60 वर्ष से कम उम्र के माता-पिता के लिए अतिरिक्त ₹25,000 और 60 वर्ष से अधिक उम्र के माता-पिता के लिए ₹50,000।</li>
      </ul>
      
      <h3>होम लोन ब्याज (धारा 24)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> स्व-कब्जे वाली संपत्तियों के लिए गृह ऋण पर भुगतान किया गया ब्याज।</li>
        <li><strong>कटौती सीमा:</strong> प्रति वर्ष ₹2 लाख तक।</li>
      </ul>
      
      <h3>शिक्षा ऋण ब्याज (धारा 80E)</h3>
      <ul>
        <li><strong>विशेषताएं:</strong> उच्च शिक्षा के लिए शिक्षा ऋण पर भुगतान किया गया ब्याज।</li>
        <li><strong>कटौती सीमा:</strong> राशि पर कोई सीमा नहीं। कटौती अधिकतम 8 वर्षों के लिए उपलब्ध है।</li>
      </ul>
      
      <h2>कर-बचत रणनीति टिप्स</h2>
      <ol>
        <li>अंत में जल्दबाजी करने के बजाय वित्तीय वर्ष की शुरुआत में अपने निवेश की योजना बनाएं</li>
        <li>कर-बचत साधनों का चुनाव करने से पहले अपने वित्तीय लक्ष्यों, जोखिम सहनशीलता और निवेश क्षितिज पर विचार करें</li>
        <li>अपने कर-बचत निवेश को विभिन्न साधनों में विविधता दें</li>
        <li>अपने कर-बचत पोर्टफोलियो की नियमित रूप से समीक्षा करें और आवश्यकतानुसार समायोजन करें</li>
        <li>केवल कर लाभों के बजाय पोस्ट-टैक्स रिटर्न पर विचार करें</li>
        <li>2020 बजट में पेश किए गए नए वैकल्पिक कर व्यवस्था के बारे में जानें, जो कम कर दरों की पेशकश करता है लेकिन अधिकांश कटौती और छूट के बिना</li>
      </ol>
    `,
    imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
];

export function useLearnResources() {
  const { language } = useLanguage();
  
  const getResourceById = (id: string) => {
    return learnResources.find(resource => resource.id === id);
  };
  
  return {
    resources: learnResources,
    getResourceById
  };
}