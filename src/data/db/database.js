import Mock from "../mock";

const database = {
  information: {
    name: "Street Coder Nate",
    aboutContent:
      "Welcome to da home of the Great Nate. Here you will learn a bunch about my journey through tech, which I pray you take advantage of and replicate in yo own lives 🙏🏾",
    age: 24,
    phone: "",
    skinColor: "Black",
    language: "Ebonics, English, Spanish",
    email: "",
    address: "Virtual...I'm ErrWhere!",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "https://www.facebook.com/nate.baker.944/",
      twitter: "https://twitter.com/streetcodernate",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/in/nate-baker-30259010a/",
      dribbble: "",
      github: "https://github.com/nate2427",
    },
    brandImageLight: "/images/beater.jpeg",
    brandImageDark: "/images/dusse.jpeg",
    aboutImage: "/images/smile.JPG",
    aboutImageLg: "/images/smile.JPG",
    cvfile: "/files/empty.pdf",
  },
  services: [
    {
      title: "Segmented Courses",
      icon: "color-pallet",
      details:
        "Ditch the premitive approaches to learning from traditional schools & learn concepts within FIVE days !",
    },
    {
      title: "Automation Creation",
      icon: "code",
      details:
        "I honestly hate doing the same thing over and over, but computers don't! Automate your processes today !",
    },
    {
      title: "Mobile Application",
      icon: "mobile",
      details:
        "Want a professional app built by a professional in the most modern and professional way? Hit me up!",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Nate is very thorough in his explanations and doesn’t make it feel as if it is hard to understand the material...he always has a variety of options on how to solve problems...He is someone you can always rely on if you have any questions in Software Engineering. 10/10 service and would highly recommend!",
      author: {
        name: "Tia Lee Fowlkes",
        designation:
          "Beta Test Program Manager - Google, Michigan State Graduate",
      },
    },
    {
      id: 2,
      content:
        "I've had the honor of working with Nate to complete social media applications, search engines, and an virtual education platform. He shows tremendous ability being a leader during architecture designs of applications and shows proficient ability with full stack development on all of his products.",
      author: {
        name: "Thomas Hoang",
        designation: "Software Engineer - JPMorgan Chase & Co.",
      },
    },
    {
      id: 4,
      content:
        "As a former student of one of Nate Baker’s classes, I can easily say that I’ve never understood coding more clear! He makes it easy to follow along and enjoy.",
      author: {
        name: "Olivia Starnes",
        designation: "High School Senior - Nashville, TN",
      },
    },
    {
      id: 5,
      content:
        "After meeting with Nate, I am learning more and more about web development and I love it! His tutoring style is phenomenal and I would definitely recommend him to anyone trying to enhance their skills.",
      author: {
        name: "Luke",
        designation: "Wyzant Tutoring - 10+ Sessions",
      },
    },
    {
      id: 3,
      content:
        "He made Web Development clearer to me in a few weeks than university did in an entire semester.",
      author: {
        name: "Alexus McGriff",
        designation: "Business Analyst - Citigroup",
      },
    },
    {
      id: 6,
      content:
        "Just did my second tutoring session with Nate Baker and tbh at this point anyone who asks for direction on learning how to code imma point y'all to Nate.",
      author: {
        name: "Christine",
        designation: "Wyzant Tutoring - 4 Sessions",
      },
    },
    {
      id: 7,
      content:
        "I am currently studying Computer Science overseas at the University of Manchester in the UK, and needed help with a tricky project. Nate helped me understand any concept I did not understand and not only did he help me accomplish what I set out to do, he taught me new things about coding I didn't expect to learn. Very good tutor, and a really fun guy.",
      author: {
        name: "Alexander",
        designation: "Wyzant Tutoring - 5 Sessions",
      },
    },
    {
      id: 8,
      content:
        "Nate helped me learn the Big-O notation: 1st) explaining the table of run times 2nd) caterring to my visual learning style by using the whiteboard to highlight and work through examples 3rd) applying what he taught me to show how I can identify and calculate run times from code.",
      author: {
        name: "Sofie",
        designation: "Wyzant Tutoring - 10+ Sessions",
      },
    },
    {
      id: 9,
      content:
        "In a one-hour session, I learned more than in hours in school. Will definitely be booking more sessions in the future.",
      author: {
        name: "Sofie",
        designation: "Wyzant Tutoring - 10+ Sessions",
      },
    },
    {
      id: 10,
      content:
        "He helped me on a difficult project for C and went over each line of code to make sure | knew what the code was doing which is extremely helpful. If you need a tutor, definitely recommending Nate! He's awesome!",
      author: {
        name: "Ramneet",
        designation: "Wyzant Tutoring - 8 Sessions",
      },
    },
    {
      id: 11,
      content:
        "Nate has been vital in my understanding of C++. He has helped me understand and apply concepts which before were daunting to me. If you are looking for a tutor you cannot go wrong with Nate.",
      author: {
        name: "Leonardo",
        designation: "Wyzant Tutoring - 7 Sessions",
      },
    },
  ],
  skills: [
    {
      title: "Computer Systems",
      value: 95,
    },
    {
      title: "Web Development",
      value: 98,
    },
    {
      title: "Mobile Development",
      value: 90,
    },
    {
      title: "Automations",
      value: 92,
    },
    {
      title: "NueroNets",
      value: 65,
    },
    {
      title: "Raspberry Pi",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "UMSEP Annual Report",
      subtitle: "University of Michigan Public Health",
      imageUrl: "/images/umsep.jpg",
      largeImageUrl: ["/images/umsep.jpg"],
      url: "https://umsep-annualreport.com/",
    },
    {
      id: 6,
      title: "Street Coder Nate",
      subtitle: "Version 2.0 of my portfolio app",
      imageUrl: "/images/natebakerv2.jpg",
      largeImageUrl: ["/images/natebakerv2.jpg"],
      url: "/",
    },
    {
      id: 2,
      title: "NateBaker.Me V1",
      subtitle: "First version of my portfolio site",
      imageUrl: "/images/natebakerv1.jpg",
      largeImageUrl: ["/images/natebakerv1.jpg"],
      url: "https://natebaker.me/",
    },
    {
      id: 3,
      title: "Kaptin Quality Home Services",
      subtitle: "Pest Company in Grand Rapids, MI",
      imageUrl: "/images/kqhs.jpg",
      url: "https://www.kqhsllc.com/",
      largeImageUrl: ["/images/kqhs.jpg"],
    },
    {
      id: 4,
      title: "Animation Site",
      subtitle: "Practicing Ui and Animations",
      imageUrl: "/images/practice.jpg",
      largeImageUrl: ["/images/practice.jpg"],
      url: "https://nate2427-makes-great-sites.netlify.app/",
    },
    {
      id: 5,
      title: "Insta Scrapa",
      subtitle: "From Street Coders youtube follow along",
      imageUrl: "/images/insta.jpg",
      largeImageUrl: ["/images/insta.jpg"],
      url: "https://enigmatic-waters-73588.herokuapp.com/",
    },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2021 - Present",
        position: "Software Engineer Office Protection Service Team",
        company: "Microsoft",
        details: `Currently working on the Security Policy Advisor features which allow enterprise users to apply certain office cloud policies to the users under their license. We use Machine Learning algorithms on the telemetry we scrape as users interact with the client side applications (word, powerpoint, excel, etc.), and we show these suggestions through a frontend portal. We use C++ for client side apps, C# for server side machine learning, and React for the Admin portal. There are various scripts we maintain that moves data from the central repo of data to a DB specific for this project. Lots of great tech being played wit on this project.`,
      },
      {
        id: 2,
        year: "2020 - Present",
        position: "Freelance Software Engineer",
        company: "Self Employed",
        details:
          "Worked on a project for the University of Michigan School of Public Health Summer Enrichment Program and various other projects. Used technologies like ReactJS, NodeJS, and MongoDB to implement the applications that these organizations use today! After awhile, I got tired of freelance web developing, so I began tutoring online. I took off pretty quickly and started having students from all over the world! It really amaizes me when I can properly transfer the knowledge of a complicated concept to my students with engaging teaching methods!",
      },
      {
        id: 3,
        year: "2019 - 2020",
        position: "Frontend Developer",
        company: "Citibank",
        details:
          "This was my first real corporate job fresh outta college. I learned a lot working at Citi and had an amazing time working with everybody. As an Angular developer on the Cards Replacement Team, I led the creation for two webpages they now have on their production website --> online.citi.com . The pages I created were Quick Lock, which allows users to lock their credit or debit cards through an app. If the card is locked on the app, it cannot be used to purchase anything. The other page I created was Virtual Account Number, which allows users to take their credit cards and create temporary virtual credit cards that have their own expiration date and maximum fund. The idea is to make online shopping safer becuase if a hacker retreives the virtual card info, it only has a certain amount of money on it before its invalid. Smart move and I had a lot of fun working on this project especially becuase I had to work with the Mastercard company often as they provided the backend services for the frontend I created.",
      },
      {
        id: 4,
        year: "2018 - 2019",
        position:
          "Electrical Engineering and Computer Science Instructional Aide",
        company: "University of Michigan - Ann Arbor",
        details:
          "As a student at the University of Michigan, I was granted a student teaching job for two different courses. The first course was EECS 402 and in this course I worked under professor Andrew Morgan who taught an excelerated version of Intro to Computer Science with C++ to graduate students needing computer science skills in their daily jobs. I led my own lab section each week where I reviewed the material students learned in lecture throughout the week. Also, I held office hours each week where I helped students complete their projects successfully. The second course I worked was EECS 388 Intro to Computer Security. This course was setup the same as 402 (two lectures a week and one lab that the IAs ran). My favorite thing about teaching security is that I was showing students how to use real world hacking tactics to get access to websites without having credentials, access to wifi without the creds, and also access to data through the hardware level without having the password to the harddrive!",
      },
    ],
    educationExperience: [
      {
        id: 2,
        year: "2019 - Current",
        graduation: "Self Taught Programmer",
        university: "Street Coders",
        details:
          "After I graduated college, I realized I had a bunch of time on my hands after I finished working for the day...this was my first time in 12 years not having school over my head. I loved it, but I still loved learning, so I began to learn all typa CS concepts...This journey hasn't ended yet which is hella exciting lol.",
      },
      {
        id: 1,
        year: "2015 - 2019",
        graduation: "Bachelor of Science",
        university: "University of Michigan",
        details:
          "Studied computer science and got my ass kicked! But it was hella worth it and it taught me a lot about grit, motvation, and determination.",
      },
      {
        id: 3,
        year: "2012 - 2015",
        graduation: "High School",
        university: "City High/Middle School",
        details:
          "International Bachelorette high school in Grand Rapids, Michigan. Ranked number #1 in the state for acedmics my graduating year in 2015.",
      },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "We Out Chea Tryna Function!",
      featuredImage: "/images/port1.jpg",
      filesource: "../../blog/We-Out-Chea-Tryna-Function.md",
      createDay: "16",
      createMonth: "July",
      createYear: "2021",
    },
  ],
  contactInfo: {
    phoneNumbers: ["616.410.3799"],
    emailAddress: ["nate.baker@mibase.net", "natebaker@microsoft.com"],
    address: "Michigan, USA",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
