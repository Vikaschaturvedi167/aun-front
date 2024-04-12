import React, { useEffect,useState } from "react";
import "./Styling/blog.css";
import b1 from "./images/blogback01.mp4";
import skin from "./images/skin-back.jpg"
import video from "./images/blog19.mp4"
const Blog = () => {
  
  const [isStopped, setIsStopped] = useState(false);

  // Pause the animation after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsStopped(true);
    }, 5000); // Adjust the delay time as needed

    // Clear the timer to avoid memory leaks
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="main-container">
      <div className="background-img">
      <video src={b1} controls loop autoPlay muted   className="image" />
        <div className="text-overlay">
          <p>
            यूनानी चिकित्सा, प्राचीन यूनान से उत्पन्न और फिर मध्य पूर्व और
            दक्षिण एशिया में विकसित होने वाली परंपरागत चिकित्सा प्रणाली है। इसकी
            आधारशिक्षा शारीरिक रसों को संतुलित करने और शरीर में सामंजस्य बनाए
            रखने के सिद्धांतों पर आधारित है। यह शारीर, मन और आत्मा के अंतरज़ुन
            को महत्व देती है, और विभिन्न उपचार पद्धतियों का उपयोग करती है, जैसे
            की जड़ी-बूटियों की चिकित्सा, आहार और जीवनशैली में परिवर्तन, सैन्य
            चिकित्सा और सर्जरी। यूनानी चिकित्सा में रोगी के स्वभाव की जांच और
            नाड़ी परीक्षण महत्वपूर्ण होता है, और उपचार का उद्देश्य संतुलन को
            पुनः स्थापित करना और समग्र कल्याण को बढ़ावा देना है। अपने
            पूर्णतावादी दृष्टिकोण और वैश्विक प्रभाव के साथ, यूनानी चिकित्सा
            दुनिया के कई हिस्सों में प्रचलित है, जो प्राचीन ज्ञान को आधुनिक
            प्रयोगों के साथ मिलाती है।
          </p>
        </div>
      </div>
      <div className="blogs">
        <h1 className="heading">Latest Blogs</h1>
        <div className="blog-container">
          <div className="menstrual-hygiene">
            <h1>MENSTURAL HYGIENE:</h1>
            <p>
              Menstrual hygiene is something that many women don’t think about
              or consider, but it’s an important part of staying healthy and
              comfortable during your period. Knowing what to do and what not to
              do when it comes to menstrual hygiene can help you have a safer
              and more comfortable menstrual experience. The first thing to
              remember about menstrual hygiene is that it’s important to keep
              your genitals clean. While you may not feel like taking a shower
              every day during your period, it’s still important to clean the
              area with warm water and mild soap. This helps to reduce bacteria
              and odor during your cycle. It’s also important to change your pad
              or tampon regularly, even if you don’t feel like you need to do
              so. This helps to keep the area free of germs and bacteria that
              could cause infection. When it comes to menstrual products, it’s
              important to choose the right ones for your needs. Pads and
              tampons come in different sizes and absorbencies, so make sure you
              choose one that fits you well and provides enough protection for
              your flow. You should also make sure to check the expiration date
              on pads and tampons before using them, as they can become less
              effective over time. Additionally, it’s important to use only one
              type of menstrual product at a time, as using multiple can
              increase the risk of yeast infections or irritation. It’s also
              important to take care of your menstrual cup, if you choose to use
              one. Be sure to wash your cup with mild soap and water after each
              use, and wash your hands well before and after inserting or
              removing your cup. Additionally, be sure to empty, rinse, and
              re-insert your cup after 12 hours of wear. Doing this will help
              reduce the risk of infection. Finally, it’s important not to
              douche or use any scented products near the genitals during your
              period. Doing so can disrupt the natural balance of bacteria in
              the vagina and increase the risk of infection. Additionally, be
              sure to avoid wearing tight-fitting clothing during your period,
              as this can trap moisture close to the skin and increase the risk
              of bacteria growth. It’s also important to avoid using heavily
              scented bubble baths or body washes during your cycle as these can
              also disrupt the natural balance of bacteria in the vagina. By
              following these simple tips for menstrual hygiene, you can help
              ensure that you have a safe and comfortable period each month.
              Remember that taking care of yourself during menstruation is just
              as important as taking care of yourself during any other time of
              the month - so make sure you practice good menstrual hygiene
              habits!
            </p>
          </div>
          <div className="digestion">
            <h1>Digestion</h1>
            In today's fast-paced lifestyle, stomach problems have become a
            common issue that bothers people. Especially, the problem of good
            digestion, which often manifests as indigestion and excessive gas.
            In Greek medicine, many ancient remedies are used to treat digestion
            and gas-related issues. Greek medicine also uses many remedies for
            stomach comfort, which help improve digestion. Some prominent
            remedies include deepana, pachana, acidity, and various types of
            herbs. These remedies help in improving the digestive process and
            alleviating depression and chronic-related problems. According to
            Greek medicine, the combination of the right diet with proper
            seasoning is also essential for good digestion. Avoid more fat,
            fried, and spicy foods during meals, and instead, consume healthy
            and easily digestible foods like spinach, bottle gourd, and lentils.
            Yoga and meditation can also be helpful in reducing stomach problems
            as they help reduce physical and mental stress. Greek medicine has
            many remedies for treating digestion problems, including cumin,
            ginger, mint, carom seeds, and fennel. Regular use of these remedies
            improves the digestion process and can alleviate stomach-related
            problems. However, note that these treatments are only for common
            problems, and it is advisable to consult a doctor for serious
            problems. In this way, Greek medicine uses various ancient remedies
            to improve stomach problems during menstruation. These remedies can
            help alleviate stomach problems and make you feel healthy and
            comfortable.
          </div>
          <div className="skin">
            <h1>Skin Diseases</h1>
            <p>
              यूनानी चिकित्सा में त्वचा की बीमारियों का इलाज करने के लिए कई
              प्राचीन औषधियों का उपयोग किया जाता है जो त्वचा को स्वस्थ और सुंदर
              बनाए रखने में मदद करते हैं। यहां कुछ प्रमुख उपाय हैं जो यूनानी
              चिकित्सा में त्वचा संबंधित समस्याओं को दूर करने के लिए प्रयोग किए
              जाते हैं: नीम: नीम के पत्तों और नीम के तेल में एंटीबैक्टीरियल और
              एंटीफंगल गुण होते हैं जो त्वचा के कई प्रकार की समस्याओं को ठीक
              करने में मदद करते हैं, जैसे कि दाद, खुजली, और त्वचा के अन्य
              इंफेक्शन। संतरा: संतरा में विटामिन C और अन्य पोषक तत्व होते हैं जो
              त्वचा को नरम और चमकदार बनाए रखने में मदद करते हैं। यह त्वचा के
              डार्क स्पॉट्स, त्वचा की सूजन और त्वचा के अन्य समस्याओं को भी कम
              करता है। हल्दी: हल्दी में एंटीबैक्टीरियल, एंटीफंगल, और
              एंटीऑक्सीडेंट गुण होते हैं जो त्वचा की समस्याओं को ठीक करने में
              मदद करते हैं। यह त्वचा की झुर्रियों, मुहांसों, और अन्य समस्याओं को
              भी कम करता है। अजवाइन: अजवाइन में एंटीऑक्सीडेंट और
              एंटीइन्फ्लेमेटरी गुण होते हैं जो त्वचा को स्वस्थ और ग्लोइंग बनाए
              रखने में मदद करते हैं। यह त्वचा की रूखापन, चमक, और अन्य समस्याओं
              को दूर करता है। गुलाब जल: गुलाब जल में त्वचा को मोइस्चराइज़ करने
              और त्वचा की संरक्षण करने के लिए आवश्यक तत्व होते हैं। यह त्वचा को
              सुंदर और स्वस्थ बनाए रखने में मदद करता है। ये थे कुछ प्रमुख उपाय
              जो यूनानी चिकित्सा में त्वचा संबंधित समस्याओं को दूर करने के लिए
              प्रयोग किए जाते हैं। लेकिन ध्यान दें कि ये उपचार केवल सामान्य
              समस्याओं के लिए हैं, और गंभीर समस्याओं के लिए चिकित्सक की सलाह
              लेना उचित है।
            </p>

          </div>
        </div>
        </div>
        <div className="back-skin-img">
        <img src={skin} alt="back" className="image-skin" />
        {/* <img src={skin} alt="back" className="image-skin" /> */}
        <div id="scroll"> 

        
        <div className="text-overlay-skin" id="text-overlay-skin">
        
      <h1 className="skin-head">Herbal Remedies for Face:</h1>
      
      <p>A face mask is one of the most loved steps of any skincare routine and today we are here to give you some of the best herbal face packs for pigmentation, acne, brightening and more, get ready to keep your skin in check and indulge in the goodness of therapeutic ingredients right from the kitchen.</p>

      <h3>1. Herbal Face pack for Whitening:</h3>
      <p>Curd & Besan:</p>
      <ul>
        <li>Take 4tbsp of besan & mix it with 1 tbsp of turmeric.</li>
        <li>Add 2 tbsp of curd in the mix and create a thick paste.</li>
        <li>Apply it evenly onto the skin & keep it for 15min.</li>
        <li>Wash & Pat dry.</li>
      </ul>

      <h3>2. Herbal Face Pack for Glowing Skin:</h3>
      <p>Rice flour & Sandalwood:</p>
      <ul>
        <li>Take 1tbsp of rice flour & 1tbsp of sandalwood powder.</li>
        <li>Mix the formula with 1/2 tsp of aloe vera gel or milk & create a thick paste.</li>
        <li>Apply it evenly onto your skin & let it dry for 20min.</li>
        <li>Wash it off.</li>
      </ul>

      <h3>3. Herbal Face Pack to Control Oily Skin:</h3>
      <p>Mint & Multani Mitti:</p>
      <ul>
        <li>Mix 1tsp of multani mitti with honey and curd & form a paste.</li>
        <li>Add crushed mint leaves in the batter and mix well.</li>
        <li>Apply it evenly onto the skin & let it dry for 10min.</li>
        <li>Wash it off.</li>
      </ul>

      <h3>4. Herbal Face Pack to Tackle Aging:</h3>
      <p>Marigold flower:</p>
      <ul>
        <li>Take the dry marigold petals and ground them properly, Add 1/2 tsp of turmeric.</li>
        <li>Add 1tbsp of milk to make a thin paste.</li>
        <li>Apply it evenly onto the skin & let it dry for 10min.</li>
        <li>Wash it off.</li>
      </ul>

      
      </div>
      </div>
</div>
    <div className="daily_cont">
    <div  className="daily">
      <h1 style={{color: "green", marginBottom : "15px"}}>Tips for incorporating Unani and Ayurvedic practices into your daily routine</h1>
      <p style={{color: "rgb(225, 43, 7)",marginBottom : "8px" }}>Incorporating Ayurvedic practices into your daily routine can have profound effects on your overall health and well-being. Here are some tips to help you seamlessly integrate these ancient practices into your modern lifestyle</p>
     
      <ol className="circle-list" > 
        <li>Start with a Morning Routine: Begin your day with a glass of warm water with lemon to kickstart your digestion and cleanse your system. Follow this up with some gentle stretching or yoga to awaken your body and mind.</li>
        <li>Eat Mindfully: Opt for fresh, seasonal, and organic foods that are in line with your dosha (body type) to maintain balance. Chew your food slowly and savor each bite to aid digestion.</li>
        <li>Practice Abhyanga: Treat yourself to a daily self-massage using warm Unani or Ayurvedic oils to nourish your skin, relax your muscles, and promote detoxification.</li>
        <li>Embrace Herbal Remedies: Incorporate Unani or Ayurvedic herbs and spices into your cooking and daily routine to support various aspects of your health. Turmeric, ashwagandha, and Triphala are just a few examples of potent Unani and Ayurvedic remedies.</li>
        <li>Tune into Nature's Rhythms: Align your routine with the natural cycles of the day by waking up with the sun, eating your largest meal at lunchtime, and winding down in the evening to promote restful sleep.</li>
      </ol>
      
      <p  style={{color: "rgb(225, 43, 7)",marginTop : "15px" }}>By incorporating these simple Ayurvedic practices into your daily routine, you can experience the transformative power of this ancient healing system and cultivate health, happiness, and balance in your life.</p>
    </div>
    <video src={video} controls loop autoPlay muted  id="vid"   ></video>
  
    </div>

    </div>
  );
};

export default Blog;
