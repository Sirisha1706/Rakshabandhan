/**
 * Raksha Bandhan Gift Website - Content Configuration
 * 
 * Feel free to edit the text and swap image paths below to personalize your gift!
 * If you have your own photos, copy them to the `assets/` directory and update the file paths.
 */

window.CONFIG = {
  // Website metadata
  meta: {
    title: "To My Brother, Vamsi Krishna ❤️ | Happy Raksha Bandhan",
    description: "A digital scrapbook and personal letter from Sirisha to Vamsi Krishna.",
  },

  // 1. Hero / Opening Section
  hero: {
    title: "To My Brother, Vamsi Krishna ❤️",
    subheading: "Some people are given to us by life. Some become a part of who we are.",
    personalMessage: "Dear Brother, this Raksha Bandhan, I wanted to create something as unique as the bond we share. Here's a little walk down memory lane — a compilation of all our silly childhood fights, loud laughs, and the silent support we've given each other over the years. Happy Raksha Bandhan!",
    image1: "assets/13.png", // Where it all started (Vamsi holding baby Sirisha)
    image2: "assets/10.png", // Childhood double trouble matching chairs
    image3: "assets/2.jpeg", // Modern balcony portrait
    scrollButtonText: "Start our story ↓"
  },

  // 2. "Before You Judge Me..." - Funny childhood moments
  funnyMemories: {
    title: "Before You Judge Me...",
    subtitle: "A quick reminder that we weren't always this mature (well, at least one of us wasn't!).",
    introQuotes: [
      "Yes, we fought over stupid things.",
      "You annoyed me more than anyone else.",
      "And somehow, I still ended up missing you when you weren't around."
    ],
    cards: [
      {
        id: "playmate-chronicles",
        title: "My Favorite Playmate",
        description: "You've always been the most patient brother, sitting down to play with me and keeping me entertained even when I was just a tiny baby. No matter how silly the games were, you always made sure I was having fun.",
        image: "assets/12.png", // Patient playtime childhood photo
        playfulNote: "Patience Level: 100/100 (Even though I probably broke half of your favorite toys!)."
      },
      {
        id: "birthday-cake-feeding",
        title: "The Sweetest Birthday",
        description: "A sweet moment from my birthday where you fed me the first slice of cake. We might fight over the last slice in the fridge, but you always made sure I got the first and best bite on my special day.",
        image: "assets/5.jpeg", // Vamsi feeding Sirisha cake
        playfulNote: "Verdict: You definitely fed me a way bigger bite than you should have for the camera!"
      },
      {
        id: "lazy-outings",
        title: "Lazy Family Outings",
        description: "A cozy selfie from one of those lazy days when the entire family of four—Mom, Dad, you, and me—were in absolutely no mood to cook at home. We stepped out together to grab a quick bite and enjoy some quality family time.",
        image: "assets/8.png", // Swapped restaurant selfie photo
        playfulNote: "Family Rule: When nobody wants to cook, dining out is our favorite family decision!"
      }
    ]
  },

  // 3. "The Memories I Keep Coming Back To" - Scattered Scrapbook Gallery
  gallery: {
    title: "The Memories I Keep Coming Back To",
    subtitle: "The little moments that ended up becoming the big ones.",
    photos: [
      {
        title: "Where It All Started",
        caption: "You holding me when I was just a tiny baby. Sibling protection from day one.",
        date: "The Early Years",
        image: "assets/13.png",
        rotation: -4,
        objectPosition: "top",
        quiz: {
          question: "Who is the cute baby in Vamsi's arms?",
          options: ["Sirisha 👶", "An Amazon delivery 📦"]
        }
      },
      {
        title: "Mom's Birthday",
        caption: "Small celebrations at home for Mom's birthday. Look at us sitting together in those plastic chairs!",
        date: "Childhood Days",
        image: "assets/10.png",
        rotation: 3
      },
      {
        title: "Family Gatherings",
        caption: "Catching up outdoors with family. Sibling energy in full swing!",
        date: "Spring",
        image: "assets/7.jpeg",
        rotation: -2,
        quiz: {
          question: "What were we busy arguing about before this shot?",
          options: ["Nothing (we are angels) 😇", "Who got the larger chair 🪑"]
        }
      },
      {
        title: "Sunny Outings",
        caption: "Out and about, enjoying the sunny weather. Always a blast when we travel.",
        date: "Roadtrip",
        image: "assets/9.png",
        rotation: 4,
        quiz: {
          question: "What is our main travel objective here?",
          options: ["Exploring new roads 🗺️", "Finding snacks 🍟"]
        }
      },
      {
        title: "Birthday Cake Swap",
        caption: "Returning the favor by feeding you cake. It's one of those rare, peaceful moments where we actually stopped teasing each other for five seconds.",
        date: "Celebrations",
        image: "assets/6.jpeg", // Swapped cake swap photo
        rotation: -3
      },
      {
        title: "Nostalgic Childhood",
        caption: "A classic treasure from our family home. Growing up together.",
        date: "Nostalgia",
        image: "assets/4.jpeg",
        rotation: 2,
        quiz: {
          question: "Who is the real boss in this retro family photo?",
          options: ["Mom 👩", "Baby Sirisha 👶"]
        }
      }
    ]
  },

  // 4. "Things I'll Never Admit During an Argument"
  unadmittedTruths: {
    title: "Things I'll Never Admit During an Argument 😂❤️",
    cards: [
      {
        front: "You were annoying.",
        back: "But you were always there. Whenever things got tough, I knew I didn't have to face it alone because my brother was standing right behind me."
      },
      {
        front: "I call you names.",
        back: "But I may not say it often: I trust you completely. You're my confidant, and your advice is the one I secretly value the most."
      },
      {
        front: "We fight constantly.",
        back: "But you're one of the few people I can have a massive fight with and still call five minutes later to ask what we're having for dinner."
      },
      {
        front: "I pretend to be independent.",
        back: "But you'll always be someone I can count on. No matter how far we wander, knowing you're a phone call away is my comfort blanket."
      }
    ]
  },

  // 5. "You Mean More Than You Know" - Cinematic Narrative Section
  cinematicNarrative: {
    title: "You Mean More Than You Know",
    image: "assets/1.jpeg", // Using scenic photo for cinematic vibe
    paragraphs: [
      "An elder brother is a sister's very first hero, the one who stands between her and the rest of the world. From the moment you held me in your arms as a tiny baby, a bond was quietly forged that time could never wear down. You were my guide when I was small, my partner in childhood mischief, and the one who made sure I always felt safe.",
      "There is a beautiful, unwritten language in this sibling bond. It's built in the shared history of our childhood home, the sound of our family's laughter, and the quiet ways you've looked out for me without needing a single word of praise. You tested my patience, teased me endlessly, and called me annoying—yet, whenever the world felt too heavy, I always knew my brother was standing right behind me, ready to protect me.",
      "As we grow up and build our own separate lives, we carry the distance of miles, but never of the heart. We might not speak every single day, and we might be chasing different stars under different skies, but the moment we talk, it's as if no time has passed. Your presence in my life remains my steady anchor and my safest comfort.",
      "I don't say it nearly enough, but you are the greatest gift our family gave me. Thank you for tolerating my complaints, for guiding me through my mistakes, and for simply being the constant thread of support in my life. I am so incredibly proud to be your sister, and you will always mean more to me than any words could ever tell."
    ]
  },

  // 6. "Things I Wish I Said More Often" - Scroll Timeline
  timelineMessages: [
    { text: "I miss you more than I ever admit, Annaya.", icon: "💭" },
    { text: "I don't say it enough, but you are the strongest support in my life.", icon: "✨" },
    { text: "Even when we don't speak, you are the first person I want to share my happy news with.", icon: "🌍" },
    { text: "Thank you for holding my hand when childhood got scary, and for looking out for me since.", icon: "🤍" },
    { text: "I am so incredibly proud to see you succeed and grow.", icon: "🎈" },
    { text: "No matter where life takes us, you will always have my back, and I will always have yours.", icon: "🤝" }
  ],

  // 7. "I'm Missing You"
  missingYou: {
    title: "I'm Missing You.",
    message: "Maybe it's the distance. Maybe it's growing up. Maybe it's just one of those days when I wish we could sit together, laugh about something stupid, argue over nothing, and forget about everything else.",
    closingLine: "I just want you to know that I miss you, Annaya",
    image: "assets/11.png", // Scanned retro photo representing home/missing
    quiz: {
      question: "Are you missing me today?",
      options: ["Yes, of course! ❤️", "No, I enjoy the peace 🤫"]
    }
  },

  // 8. "A Letter From Sirisha" - Handwritten Letter
  letter: {
    salutation: "Dear Vamsi,",
    paragraphs: [
      "I sat down to write this because sometimes, the spoken word just isn't enough, and a regular card feels too small to hold all the memories we've shared. Looking back, it's wild to think how far we've come from those kids who used to wrestle for the sofa.",
      "I miss the days when our biggest worry was who got to play the video game first or who had to fill the water bottles. As we grow older and life gets busier, those simple days feel more and more precious. But even though we're chasing our own dreams now, nothing changes the fact that you are my anchor.",
      "Thank you for the quiet ways you look out for me, for being the person who can make me laugh when I'm stressed out, and for simply being you. I couldn't have asked for a better brother to walk through life with.",
      "Stay happy, keep smiling, and remember that no matter where we go or how busy life gets, your sister is always in your corner, cheering for you (and waiting to annoy you again!)."
    ],
    closing: "With all my love,",
    signature: "Sirisha ❤️"
  },

  // 9. Final Surprise
  surprise: {
    triggerText: "One last thing...",
    title: "No matter how much we grow up,",
    lines: [
      "No matter how far life takes us,",
      "No matter how many stupid fights we have..."
    ],
    highlightText: "You'll always be my brother. And I'll always be your sister.",
    wishesText: "Happy Raksha Bandhan, Annaya. ❤️",
    signatureText: "— Sirisha",
    image: "assets/3.jpeg" // Celebrate attire portrait for the final happy wishes
  }
};
