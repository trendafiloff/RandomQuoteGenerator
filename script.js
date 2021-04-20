let quotes = [
    "“Never fear the darkness… The strongest trees are rooted in the dark places of the earth. Darkness will be your cloak, your shield, your mother’s milk. Darkness will make you strong.”<br> — George R. R. Martin",
    "“There is nothing noble in being superior to your fellow man; true nobility is being superior to your former self.”<br> — Ernest Hemingway",
    "“I was never afraid of failure; for I would sooner fail than not be among the greatest”.<br> — John Keats",
    "“If you have built castles in the air, your work need not be lost; that is where they should be. Now put the foundations under them.”<br> — Henry David Thoreau",
    "“It is what you read when you don’t have to that determines what you will be when you can’t help it.”<br> — Oscar Wilde",
    "“Tomorrow we will run faster, stretch out our arms farther….” <br> — F. Scott Fitzgerald",
    "“Most of the important things in the world have been accomplished by people who have kept on trying when there seemed to be no hope at all.”<br> — Dale Carnegie",
    "“There is a stubbornness about me that never can bear to be frightened at the will of others. My courage always rises at every attempt to intimidate me.”<br> — Jane Austen",
    "“If you’re always trying to be normal you will never know how amazing you can be.”<br> — Maya Angelou",
    "“Suffering has been stronger than all other teaching, and has taught me to understand what your heart used to be. I have been bent and broken, but — I hope — into a better shape.”<br> — Charles Dickens",
    "“If you can feel that staying human is worthwhile, even when it can’t have any result whatever, you’ve beaten them.”<br> — George Orwell",
    "“It is impossible to live without failing at something, unless you live so cautiously that you might as well not have lived at all – in which case, you fail by default.”<br> — J. K. Rowling",
    "“Never fear the darkness… The strongest trees are rooted in the dark places of the earth. Darkness will be your cloak, your shield, your mother’s milk. Darkness will make you strong.”<br> — George R. R. Martin",
    "“Integrity is doing the right thing, even when no one is watching.”<br> — C. S. Lewis",
    "“You never really understand a person until you consider things from his point of view. Until you climb inside of his skin and walk around in it.”<br> — Harper Lee",
    "“All we have to decide is what to do with the time that is given us.”<br> — J. R. R. Tolkien",
    "“Sometimes you climb out of bed in the morning and you think ‘I’m not going to make it’, but you laugh inside, remembering all the times you’ve felt that way.”<br> — Charles Bukowski",
    "“You have to take risks. We will only understand the miracle of life fully when we allow the unexpected to happen.”<br> — Paulo Coelho",
    "“The fool doth think he is wise, but the wise man knows himself to be a fool.”<br> — William Shakespeare",
    "“Just as soon as you attain to one ambition you see another one glittering higher up still. It does make life so interesting.”<br> — Lucy Maud Montgomery",
    "“Keep away from people who try to belittle your ambitions. Small people always do that, but the really great make you feel that you, too, can become great.”<br> — Mark Twain",
    "“The world is not to be put in order. The world is order. It is for us to put ourselves in unison with this order.”<br> — Henry Miller",
    "“I am only one, but still I am one. I cannot do everything, but still I can do something; And because I cannot do everything I will not refuse to do the something that I can do.”<br> — Edward Everett Hale",
    "“The power of finding beauty in the humblest things makes home happy and life lovely.”<br> — Louisa May Alcott",
    "“If one by one we counted people out, for the least sin, it wouldn’t take us long to get so we had no one left to live with. For to be social is to be forgiving.”<br> — Robert Frost",
];
  function quoteSelector() {
    let selectedQuote = (document.getElementById("quoteText").innerHTML =
      quotes[Math.floor(Math.random() * quotes.length)]);
  }
  quoteSelector();

  function tweet() {
    let tweetButton = document.getElementById("tweetQuote");
    let currentQuote = document.getElementById("quoteText").innerHTML;
    let toTweet = currentQuote.replace('<br>',''); // also working: currentQuote.replace(/\<br\>/g,'');
    tweetButton.href = "https://twitter.com/intent/tweet?text=" + toTweet;
  }

  let backgrounds = [
    "/images/background1.jpg",
    "/images/background2.jpg",
    "/images/background3.png",
    "/images/background4.png",
    "/images/background5.png",
  ];

  let currentIndex = 0;
  let totalCount = 4;
  setInterval(function backgroundSwitch() {
    if (currentIndex > totalCount)
         currentIndex = 0;
         document.body.style.backgroundImage = "url('" + backgrounds[currentIndex]+ "')";
    currentIndex ++;
}, 8888);

