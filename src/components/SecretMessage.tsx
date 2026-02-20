import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'motion/react';
import { Heart, Sparkles, ArrowLeft, ChevronUp } from 'lucide-react';

interface SecretMessageProps {
  onBack: () => void;
  onOpenThankYou: () => void;
}

export default function SecretMessage({ onBack, onOpenThankYou }: SecretMessageProps) {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Small delay to ensure the component is fully mounted and rendered
    const timer = setTimeout(() => {
      if (headingRef.current) {
        headingRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#FFD1DC] p-6 md:p-12 font-serif selection:bg-pink-300 relative"
    >


      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white/80 backdrop-blur-md p-8 md:p-16 rounded-[2rem] shadow-xl border border-white/50 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Heart className="w-32 h-32 text-pink-500" />
          </div>

          <header className="mb-12 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', delay: 0.4 }}
              className="inline-block p-3 bg-pink-100 rounded-full mb-6"
            >
              <Sparkles className="w-6 h-6 text-pink-500" />
            </motion.div>
            <h1 
              ref={headingRef}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
            >
              A Memoir of Us
            </h1>
            <div className="h-1 w-20 bg-pink-300 mx-auto rounded-full mb-8" />
          </header>

          <article className="prose prose-pink prose-lg max-w-none text-gray-700 leading-relaxed space-y-6 whitespace-pre-wrap italic">
            Happy Birthday Dhristi ,we have only met online, i think we have some connection from past life or some pending karma that we will complete in this life together x has become a major part of my life where i have met a lot of people and some are special ones like you ,i remember what the first i talked to you on tl in may when you were bantering with antu and i jumped in to the conversation to see what happened (you know i like gossips) in a fun way but then both of you replied that no. One can come between you too ,good friends then i laughed , I thought you two are a couple , so i left and ff two months later in july you two were in a space i remembered you and him and i was exploring spaces ,i already knew you are cute n fun loving, cause ofc i already stlked when we first talked on tl because back then nobody knew so i try to know know people who talk to me ,make freinds with them, so i knew little about and antu and you both are friends, first time i listed your voice i thought your are so cute , you must've had a bf and you are so extrovert as well (online ofc 😂now i know that) i didn't know how to talk to you to make you my friend 😭 i loved your voice sry 😔, then i guessed antu is not your bf but you were like celebrity to me with lot of people knowing (my circle was limited 😭 now that I know) you i usually don't talk with people with lot of friends or a bf cause why would they need a friend if they already have a lot of them(i k i am like that ,i also have a lot of friends on x😭) but samiksha called me out then i tried to flirt with you 😭😭i know you don't remember cause a lot of people were doing as well and you rejected as well😭 cause i was new guy ,that night was also magical as i used to make my own spaces but i lost my spark ,i was frustrated with my current circle and move on i was trying to find a new  circle and mysteriously i found you in a space 😭(misti coolest name btw😭 i know you hate that now) usually i don't go to big spaces where multiple people are flirting with a girl but i there was no good small space where i can listen and join after sometime and no one removes me as well, and samiksha was also there so i know its like a flirty spce, but somehow i as a good experience that spce and everyome was fun at that time, and 😭that was the first last time joined that space, cause after i again started creating my own spc found my sparking (i think it was you , so bubbly personality, or my lady luck, or god wants me to meet you as i wished to talk to way back in may) i started my own spaces then antu happened i hate these types of guys ,you are one and only girl i personally helped because usually it was sherni hamza before or punisher, i don't get involved in personal matters as i don't want to get into a mess and also usually people patch up and blame third guy, i somehow felt i have to help you ,so i did it without thinking, i told you to tell me in dm the current situation and your first hi them everything started , i was like a dream memory , because i wished to talked to you and ff i am talking to you, i developed some feelings for you as friend (or maybe feelings were already there from past life) because usually i don't help people like that i don't know if you know but i already put the burden on someone else , its not like i don't wanna help but i was carefull and only help my friends close ones and also put the situation in a good strong who can put more efforts than me, i in your case i involved my as much as i can , tried to guide how not to get in fights,avoid conflicts and avoid people because i ends in nothing (i know i am like that as well thats why i knows it usually ends in vain always) fighting like a fire with burn you as well ,but staying clam like a water will make you stable and protects you , then i talked to you a lot about job and you told me a lot about antu and indirectly about some conflict situations (i don't remember correctly 😭sry) i listed to you a lot ofc on chat , explaned you the multiple scenarios based on your situations and but maily i told you to focus on job , you were tensed parents were forcing you to get a govt job and household works i don't remember correctly you were frustrated and (i didn't knew a lot about you situationahips ofc) but i know you were after antu a lot thinking what he is cooking,i told you to cool down get a job ,your parents will calm and you will get diverted from this antu ( you were just my online friend but we trusted each other like we have know for years ,you added me on you insta without any hesitation same from me as well) then you got you job and i went away and you were busy as well after that you got you job in ey big moment you shared your offer letter with me such a happy moment🎉🥳 then you motivated me to get a job as well (such a good friend 😭aur hum sirf online dost h wow )  uske baad humari bat ni hui kyuki antu vala bhi m aapse pucha tha main vo shant tha beech m aapne btaya tha aapka bhai 😭 (context age h) eshan aa gya h(aapne btaya tha aapka bhaaai to mujhe lga real vala ya bda koi bnda ,lekin vo as a friend tha)gc m bhi aapne mujhe defend kiya tha jbki m khud aapko usse pehle rok rha tha ab to kher situation saaf lg rhi kinab involve the( aur acha kiya aap shant rhi maine shi smjhaya aapko my god) after all this i thought now you are free got you job no problems evrything solved and thats why you went off from x but that you deactivated after sometime in oct i was low and somehow the only person i could talk to was you ,and pinned you insta on msgs(ofc i unpinned when i send ss to vani i never told her about you) you were my good friend and gave me good advises chilled me out as well sometimes back then as well😭 thats why i pinned you from the beginning i thought we could be good friends😭 and yes not everyone was pinned only some specials ones are whom either i talked to a lot like you (sometimes 😭) and really really special whom i am not connected to anywhere permanently so that i can keep them(i don't have a lot of friends to talk personally with hesitation as everyone is connected on x) so even when you removed me i found you 😭 in oct starting and i thought you will not reply because you removed me for some reason but you replied after a lot of time (😭 replied thats great because we were not even connected back then) i thought you will ignore me because you removed me for some reason, but i never asked because you look normal and happy so i didn't bother telling you my story i lost my spark back then as well😭 again breakup and Circle but i thought you already faced a lot and doing a job now just started so i only asked job related things, and you again cheermed me up to get a job 😭 gave up these relationship things😭 even though i didn't tell you about my breakup and all and that it was recent then i again everything started again i patched up with her(sry baby i gues it was you lady luck😭) went to one of the best placed i visted Kashi Vishwanath (peaceful) and gave up twtr and focued more on my relationship again put up efforts diving into emotions ,trying to get my mind straight, mediation books removing x and its politics from my mind for sometime , but still after sometime i everything went down again, falling down   after diwali then only person i trusted i can talk to was you ,who is not connected to anyone (who is connected to her) i thought,i listen you a lot and i told you small things(as usually girls don't like to listen) and you gave me good advice, we don't have any beef we are connected on insta msgs already, surprisingly you are good listener as well ✨ 🧿 ( i told you about this a lot of time) bang you gave me good advice (leave her asap she is cheating)ofc firstly i didn't follow completely but yeah 😭 i worked out then we talked a lot or talked to you a lot😭 told you everything (you were my safe spc even before we or i even knew it like it was predestined) i told you every situation and you gave me good advice or just listed thats the only thing i neede that time, that someone just listen i can figure out everything on my own , and my spark also came back i again started twtr spaces instead of going down ,giving up everything i stand up got my spark (again my lady luck ) got active again increasing my presence ,you told me to get active and show her i am not effected by her ✨,i did that got detached from her slowly slowly gradually and got my blue tick on 29 nov i talked to you a lot in that like most of the time i was either talking to you vns or spces, even though inwas talking to you a lot i had some feelings genuinely saying but i was not expressing completely i haven't moved on ,i cannot do that i am already having feelings for someone and try to date another its loke cheating to me as feelings in relationship like she is special and only one is important, thats why i haven't tried but on 4dec when i knew she went ahead, i felt like i was finally free ,i explored on tl but mostly i talked to you on dms some flirting on spaces but and side by side my x have grown exponentially (again lady luck) then when after that final call from her blaming i was completely detached and i was completely free from any boundaries i created myself ,so everthough we were much younger than me ( my thought initially ofc) i thought i talked to you a lot 😭 you are a nice person listens to patiently gives me good advice ,she is a green flag to me(age is just a number and your are in twenties atleast and 😭 slightly more matured than your age , i m just old baby) so i started flisting and accepted it , because you never expected from me , initially we flirting in beginning but i was nothing compared to this. The we started talking a lot and side by my x was growing as well exponentially, then i knew about a lot of other side , now that we are in a relationship,i can say that i was disappointed not because you have many side chicks ,but i don't have a chance now as well 😭 still i thought should completely leave x or get away from this circle and i had to make her jealous as well because then she will think i went because  then she will get her moral victory so i decided even if i am going i should go with a bang and looklike i am settled and not going because of her but bang (lady luck now working in a full pace) our relationship got so much attention i thought i should stay thats why i continued talked to get some ss bit also baby i realised i liked you a little, i like to talk to you flirt with you 😭 ❤️ ,i was enjoying myself a lot and i hoped you enjoyed as well , i got my spark back , i bought my blue tick , got active again somewhat but i was afraid of love so i didn't accepted i talked to lana about this after i blocked you and she told me that i like you ,girls know this and this was like third person perspective , guys don't care about this they will give you worse advice guys to guy,best part is you tried connecting me sent me a beautiful msg even though we were just friends not in a relationship, such a sweet and lovely friend you are , prople in relationships don't come back after block you were my friend and a girl, i instantly melting, even though i regretted my decision from start, and to keep busy from the bad thoughts i started working on my skills , website and x talked yo people about algo (lady luck again because somhow everything worked out people responded usually i don't get help from people ) since 21 jan (a lot of people who were just stuck in your life went away as well) i got my views and our bond grew strong as ever but when his bday came and you acted like you still care about him stalking even though he ignored you , you cared about him that if he is getting wishes or not and you already told me when we frnds that how much loyal you are to him, i got broke somehow little little because i had feeling for you i already told you at that time that i liked you so i had to make a choice to live like a friend having feelings for her but she will not love you back but connected to  you or leave her and make ammends thats we arent going to be together but we talked and i still stopped i never wanted to leave me as a friend but our bonds got stronger again that magical night when I checked your chart and told you genuinely that you have to sort out you relationships eventhough if ita not me but finally i got the chance and i took it😭 and i proposed you 29 jan when you finally decided to commit and leave other because only chick that was left was me ,you had an option to leave me as well could've find you one dream guy you want to sort out your astrological issue but you have choosen me ,so i committed myself as well then after that we are in a relationship .. our relationship is blooming ❤️✨🧿

This is like a beautiful memoir of my life i always talk about other girls infront of you but that doesn't mean i never noticed you , i noticed and cherished you from the start ✨❤️💘

Mi Amor
Your future husband
Tanmay

I am not going to propose again we already are married in my mind😭🧿
Still i you want i can do that
These are the little memories i created with you online thats incredible and i love that i love you ❤️ ✨ i loved you from my  previous life 🧿❤️✨I will only live you in my future life as well 💕❤️✨
          </article>

          <footer className="mt-16 pt-8 border-t border-pink-100 text-center">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block"
            >
              <Heart className="w-8 h-8 text-pink-500 fill-pink-500" />
            </motion.div>
            <p className="mt-4 text-gray-500 font-serif italic">Forever Yours</p>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mt-12">


              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onBack}
                className="px-8 py-3 bg-pink-500 text-white rounded-full shadow-lg hover:bg-pink-600 transition-all font-serif italic flex items-center gap-2"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Gallery
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenThankYou}
                className="px-8 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-all font-serif italic flex items-center gap-2 mt-4 md:mt-0"
              >
                <Heart className="w-4 h-4 fill-current" />
                Thank you
              </motion.button>
            </div>
          </footer>
        </motion.div>
      </div>
    </motion.div>
  );
}
