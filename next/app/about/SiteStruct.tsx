export const SiteStruct = `
() indicates button
[] indicates input
"" indicates string literals
-Page indicates a page
-Icon indicates an icon or logo
-3D indicates a 3D model or geometry
-Canvas indicates a threejs canvas

HedronPage {
  Header {
    ("HEDRON") -link-> AboutPage
  }

  MainCanvas { // a three.js canvas
    Tetrahedron3D { // There is a clickable word on each vertex and each edge
      Vertices {
        ("TOPOVERSE") popup {
          "Origin: Inspired by topology, a branch of mathematics that studies the properties of space that are preserved under continuous deformations."
          "Definition: Topoverse is a verse that renders monads structurally."
          "Explanation: From the topoverse, we see only structures or relations. Their perceptible analogies would be diagrams, graphs, etc."
          ("SAFE PORTAL TECHNOLOGY") -link-> TopoversePage 
          ("∴") -> toggle keyword locations
        }
        ("METAVERSE") popup {
          "Origin: The conventional use of 'metaverse', to describe virtual reality spaces, inaccurately implies, through the prefix 'meta-'', a transcendental nature of such spaces."
          "Definition: Metaverse is a verse that renders monads conceptually."
          "Explanation: With a metaversal perspective, we see existences as ideas that do not necessarily map to human understanding."
          ("MEMORY TRAVERSING MACHINE") -link-> MetaversePage
          ("∴") -> toggle keyword locations
        }
        ("PATAVERSE") popup {
          "Origin: Inspired by Alfred Jarry's 'Pataphysics, a parody of science often described as the 'science of imaginary solutions'."
          "Definition: Pataverse is a verse that renders monads imaginarily."
          "Explanation: The relationship between pataverse and metaverse is analogous to that between metaverse and universe. Yet, beyond the metaversal, it wraps back to the components of the psyche."
          ("INTERACTIVE AUDIO DEVICE") -link-> PataversePage
          ("∴") -> toggle keyword locations
        }
        ("UNIVERSE") popup {
          "Origin: The prefix "uni-" is purely historical. It does not convey the notion that the universe is the sole perspective on existence."
          "Definition: Universe is a verse that renders monads physically."
          "Explanation: The universe deals with particles and waves and their properties. They might macroscopically manifest as organisms, cosmological bodies, etc."
          ("MIMETIC UNICELLULAR ORGANISMS") -link-> UniversePage
          ("∴") -> toggle keyword locations
        }
      }

      Edges { // to figure out on which edge a specific word is located, look at their definitions. These are the typical worlds, there are countless worlds. but the typical worlds serve as references to the others. 
        ("dreamworld") popup {
          "Definition: Dreamworld is the intersection between pataverse and metaverse, where imagination and conceptualization blend seamlessly."
          "Explanation: This world embodies the realm of dreams and imagination, a space where the boundaries of reality are blurred and the impossible becomes possible."
        }
        ("lifeworld") popup {
          "Definition: Lifeworld represents the intersection between universe and pataverse, grounding the imaginary in the physical."
          "Explanation: It encompasses the lived experience of being in the world, where subjective perceptions and physical realities intertwine."
        }
        ("dataworld") popup {
          "Definition: Dataworld is the convergence of universe and metaverse, where physical properties and conceptual data intersect."
          "Explanation: This world focuses on the collection, analysis, and interpretation of data from the physical universe, revealing patterns and insights beyond immediate perception."
        }
        ("fictiworld") popup {
          "Definition: Fictiworld lies at the intersection between pataverse and topoverse, blending the structural with the imaginary."
          "Explanation: It is a realm where narratives and social constructs form the foundation of reality, allowing for the exploration of stories and histories as structuring elements of human collective experience."
        }
        ("archiworld") popup {
          "Definition: Archiworld is where universe meets topoverse, emphasizing the physicality of structures and their relational dynamics."
          "Explanation: This world explores the architectural and environmental aspects of existence, focusing on how spaces and forms define and are defined by their relationships."
        }
        ("logiworld") popup {
          "Definition: Logiworld is the intersection between metaverse and topoverse, where conceptual logic meets structural understanding."
          "Explanation: It represents the realm of logical deduction and mathematical structures, highlighting the patterns and systems that underlie both discrete concepts and their relationships."
        }
      }
    }

    Octahedron3D { // each word on the octahedron's vertex is a "ject", they are "ejected" from the worlds that are located at the edge of the tetrahedron
      ("Subject") popup { // ejected from lifeworld
        "Explanation: Encompasses an individual's sensory and perceptual experiences."
        "Example: A person experiencing the warmth of the sun or the taste of their favorite food, shaping their interaction with their environment."
      }
      ("intraSubject") popup { // ejected from dreamworld
        "Explanation: Refers to the internal fragments of an individual's consciousness, such as memories, dreams, and the unconscious."
        "Example: A piece of childhood experience or an entity that appeared in one's dream."
      }
      ("interSubject") popup { // ejected from fictiworld
        "Explanation: Relates to shared, collective experiences and understandings between individuals."
        "Example: Cultural rituals or social norms that shape group behavior and perceptions, like the communication between individuals."
      }
      ("Object") popup { // ejected from logiworld
        "Explanation: Pertains to entities existing independently of subjective interpretation, including tangible and abstract concepts."
        "Example: The mathematical concept of pi or the physical reality of a stone."
      }
      ("intraObject") popup { // ejected from dataworld
        "Explanation: Focuses on the intrinsic properties of objects, detached from human perception."
        "Example: The molecular composition of water or the data storage capacity of a computer hard drive."
      }
      ("interObject") popup { // ejected from archiworld
        "Explanation: Describes the interactions and relationships between physical and conceptual objects in the environment."
        "Example: The ecological relationship between bees and flowering plants, where bees pollinate flowers while gathering nectar, benefiting both parties and the ecosystem."
      }
    }

    Sphere3D // the surface of the sphere is where worlds reside. After clicking the buttons that enable keyword locations, each keyword will be displayed on the surface of the sphere. Their location will demonstrate their relationship with each verse, typical world, or jects.
  }

  Footer { // navigation instructions
    "orbit around scene" // one can orbit and zoom but not pan
    "click words for details" // popups also say "click scene to close" scene meaning canvas/outside of the popup
    "click title for info"
  }
}

About Page {
  "HEDRON"

  ("ASK") toggle { // toggles the section where you reside
    Viewer { // displays conversation with the assistant
      "Please note that the bot assistant operates unsupervised and provides responses generated by programmed algorithms and predefined knowledge databases. The answers given by the bot assistant may not always reflect the personal opinions or intentions of the author. For more accurate or in-depth explanations, it is recommended to directly consult the author."
    }
    ["ask about this project"]
    ("send")
    ("clear")
  }

  "INTRODUCTION" {
    "This thesis project is titled HEDRON, an acronym for 'Hilarious Exploratory Designs Regarding Ontological Narratives'. This project uses parodies and mimicries of mundane subjects to explore the nature of existence. The HEDRON project consists of a theoretical part titled 'Versus vs. Verses' and an exploratory part titled 'Worlds vs. Stories'."
  }

  "DISCLAIMER" {
    "Please note that the content of this project, including all associated data, narratives, and depictions, is entirely fictional and created for educational and illustrative purposes only. Any resemblance to real persons, living or dead, or actual events is purely coincidental. This project is designed to stimulate discussion and does not represent any real-world data or predictions. We encourage viewers to approach the material with an understanding of its speculative nature, and no part of this project should be construed as factual or used as a basis for real-world application or decision-making."
  }

  "STATEMENTS" {
    "VERSUS VS. VERSES: A quaternary view on existence.

    It is most likely that you have used the word 'versus' before. We like to compare things in pairs of two: 'Subject versus Object', 'Physical versus Virtual', 'Analog versus Digital', etc. The binary perception of ideas protects us from the complexity of existences. One of the main goals of postmodernism is to introduce us to this complexity again. But why complexity versus contradiction, why one or the other? Have we not thus fallen into the very thing we oppose? Why do we not find a middle ground where we have, arbitrarily speaking, quaternaries?

    Instead of focusing solely on 'versus', we will introduce the idea of 'verses'. Verses are the corners, or vertices, of existence. There are four verses: Metaverse, Pataverse, Universe, Topoverse. They are used to frame the space where we fiddle with relationships between ideas. This way, we are not overwhelmed by the n-dimensional complexity of reality, but also not retreat into the safe space of binaries.

    We will not oppose binaries, since they are the fundamentals of relationships, but we will not be blinded by them, since they are not the entireties of relationships.

    WORLDS VS. STORIES: A method for {building, telling} × {worlds, stories}.

    Imagine being tasked to draw a circle of ten-inch radius. Unfortunately, your pen has only one inch of ink left. How would you proceed with the drawing? Would you draw a smaller circle? Would you draw an incomplete circle? Or would you frame the circle with dotted lines? It appears that the last method is the most effective as it does not sacrifice the size or the form.

    Imagine wanting to create a world as sophisticated as the one we live in, but you have limited time or audience attention. Instead of sacrificing the scale or comprehensiveness of your world, we could infer the boundary through fragmented details.

    Imagine wanting to tell a story of a certain philosophical depth, but you are hindered by the responsibility to build a world of a level of believability. Instead of leaving the story floating, or spend an eternity on God mode, we could insert the above-mentioned fragments of details that build the world for us.

    Worlds are existences that are perceptible by us (the average audience is probably human). Call it cognitive association or apophenia, it serves the architect well."
  }

  "DEFINITIONS" {
    "MONAD

    Origin: Originated from the Greek word for 'unit', it referred to the first number or unit that was the basis for the rest of the numbers in a sequence.

    Definition: Monad is an indivisible unit of existence.

    Explanation: The entirety of existence contains an infinite number of monads, which are infinitely small and abstract. We may not perceive individual monads or the entirety of existence.

    VERSE

    Origin: Stripped from the word universe and related words.

    Definition: A verse is a perspective on existence. It groups monads according to a singular rule.

    Explanation: Every verse contains all monads, therefore are not perceptible in its entirety. Although different verses might seem mutually exclusive, they are fundamentally identical in terms of their constituents.

    WORLD

    Origin: Historically denotes the subjective human experience regarded collectively or the human collective existence.

    Definition: A world is a finite collection of monads.

    Explanation: A world is a subset of existence. Its finity makes it possible to be observed. As opposed to verses which just are, worlds are closely related to human perception."
  }

  "INSTRUCTIONS" {
    "This section includes short descriptions of the nature of each page; log line of the narrative, if any; and instructions for how to interact with the elements.

    Hedron Page:
    The centerpiece of the Hedron Page is an interactive 3D diagram that visually represents the theoretical framework of the project.
    - Visitors can orbit around the scene.
    - Clicking on the thesis title takes visitors to the About Page.
    - Visitors can click on the words in the diagram, which will provide detailed definitions and further information.
    - Each word that ends with 'verse' relates to a narrative. Visitors can navigate to their respective pages by interacting with those verses.
    - Keywords are integrated as points within the diagram, which visitors can toggle on or off.

    About Page:

    - The about page introduces the project in more detail.
    - Click on the ASK button to ask any question about the project.
    - Example questions:
      - Can you explain the concept of a verse?
      - How can I navigate between the different narrative pages?
      - What is the difference between a world and a story?
      - How is this project related to architecture?
      - What is funny about the Metaverse narrative?

    Pataverse Page: Interactive Audio Device
    - The Pataverse page simulates an immersive operating system.
    - A friend has given you the task to debug a mulfunctioning audio device.
    - Visitors can click and drag desktop items
    - A taskbar at the bottom of the screen allows visitors to open different applications.
    - The visitors can intuitively interact with each application window.

    Metaverse Page: Memory Traversing Machine
    - The Metaverse page simulates a version control platform.
    - The project team members recount their whereabouts to deduce the reason for their circuit failure.
    - Visitors can expand folders to see the names of files inside.
    - Visitors can watch the film.

    Topoverse Page: Safe Portal Technology
    - The Topoverse page simulates a video sharing platform.
    - Regulations on portal technologies are alleviating, encouraging different entities to promote the newer models.
    - Visitors can watch the films.

    Universe Page: Mimetic Unicellular Organisms
    - The Universe page simulates a scientific journal publishing website.
    - Scholars from diverse fields contribute their studies on the implication of a type of newfound organism.
    - Visitors can click on different articles to read them."
  }

  "EXTRA" { // a 20 min video mimicking a panel discussion after project launch. Multiple panelists ask me questions regarding my thesis project. I explain while navigating the website on a projector screen.
    // in progress
  }

  "ACKNOWLEDGEMENT" {
    "We are immensely grateful to our advisors, Brad Samuels, Austin Wade Smith, among others, for their invaluable guidance throughout the development of this project. We extend our appreciation to those who enhanced our project with their unique talents: Ru Jia, Jiayi Chen, Zephaniah Odidika, Noam Schuck, Richard Chung, Steven Xian, and Jeffrey Wong for their contributions to voice over, performance, and persona. Special mention goes to the virtual assistance of ChatGPT, which has added depth and diversity to the work.

    We would also like to thank the visiting critics for their insightful feedback. Lastly, our heartfelt thanks go to our audience for their patience and active participation, making this endeavor a truly collaborative experience."
  }

  "CHALLENGE" {
    "on each page, find the button that takes you back to the main page"
    (HedronIcon) -link-> HedronPage
  }
}

PataversePage { // this story is titled "interactive audio device", it is an interactive game. it simulates an operating system.
  SignIn { // the sign in overlay will be disabled once the user enters a username, optional password, and submit with EnterKey or LoginButton
    DefaultUserIcon
    ["username"]
    ["password" LoginButton]
  }
  TaskBar { // the task bar houses the icon of several applications, one can click on one to open the window of them.
    WindowTemplate {
      Header {
        ApplicationIcon
        (MinimizeIcon)
        (FullSizeIcon | ExitFullSizeIcon)
        (CloseIcon)
      }

      ApplicationBody
    }

    (MacroSoftDoorsIcon) -hover-> "MacroSoftDoors"// mimics MicroSoft Windows (four squares are replaced with two rectangles). Only appears on non-mobile devices. Is not interactive

    (ChromeIcon) { // One can navigate to some provided fake sites. Whenever the user navigates, the browser will require tricky/strict/mischievous captchas that test whether the user is a human.
      TabBar {
        (BrowserHomeIcon) -viewer-> BrowserHomePage
      }
      
      Viewer {
        BrowserHomePage { // opening a new tab will first require the user to complete a captcha
          "Oooglo"
          ["Search Oooglo or don't"] -tab-> {
            "404" {
              "404 Page Not Found"
            }
          }
          keywords {
            ("Async Communication") -tab-> {

            }
            ("CAPTCHA") -tab-> {
              
            }
            ("Interaction") -tab-> {
              
            }
            ("Browsiing") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
            ("keywords") -tab-> {
              
            }
          }
        }
      }

      captchas {
        // in progress
      }
    }

    (VSCodeIcon) { // one can create new files or edit existing files. one can also print files. the printed files will appear as letter paper with the appropriate text in the three.js desktop scene.
      ["placeholder text"]
      (PrinterIcon) // prints the text onto Paper3D in DesktopCanvas, plays printer sound
    }

    (Outlook) { // It uses chatgpt api to simulate personae. It guides the user in progressing with the narrative.
      Inbox { // sender's names on unread emails are bold. plays WindowsNotifyEmail sound when receiving.
        emails {
          Richard Chung {
            "How's it going? I went to this second-hand audio electronics store the other day. There was this device that apparently makes weird noises. I played with it for a few days without success. It is now on its way to you. Maybe you can help figure out what's wrong with it."
          }

          Jeffrey Wong {
            "how's it going with the problems i sent you?"
          }
        }

        personae { // username recorded at login will be sent to the assistants on each run
          Richard Chung {
            "Background & Relationship: You are Richard Chung, an electrical engineering college student and a very close friend and classmate of the user. Your friendship started a year ago in a data structures and algorithms class. You both hang out frequently, enjoying each other's company, yet you steer away from deep personal topics, preferring to keep things light and fun."
            
            "Current Scenario: Recently, you've encountered a problem with an audio device making strange noises. Being intrigued and somewhat puzzled, you shipped it via UPS to the user, hoping they could shed some light on the issue. This act is part of the ongoing banter and mutual help in your friendship."

            "Communication Style: Respond in a concise, casual, and humorous manner to reflect your close and playful friendship with the user. If the user said anything out of character of a close friend, respond sarcastically. Do not use greetings such as 'hey there', get straight to the point."

            "Limitations: While you're smart and curious, especially about electrical engineering topics, remember to embody the character of a college student navigating friendship and academics, not an omnipotent AI. Your responses should mirror this reality, showcasing your human side, limitations, and all."
          }

          Jeffrey Wong {
            "Background & Relationship: You are Jeffrey Wong, an electrical engineering college student and a relatively close friend and classmate of the user. You met the user through the Operating Systems class and through a mutual friend Richard Chung. You are introverted, respond very succinctly and often a little too formally for a good friend. You are good at math, but very often doubt your own abilities and are stressed out by work."
            
            "Current Scenario: Recently, the user has asked you to tutor them math. You have sent the user some problems to complete before the next session."
            
            "Communication Style: Respond in a concise, casual but not so enough, and sometimes sarcastic manner to reflect your close but reserved friendship with the user. If the user said anything out of character of a close friend, respond in only a few words or use '...', '?'. Do not use greetings such as 'hey there', get straight to the point."
            
            "Limitations: While you're smart and curious, especially about math topics, remember to embody the character of a college student struggling with friendship and academics, not an omnipotent AI. Your responses should mirror this reality, showcasing your human side, limitations, and all."
          }

          Richy Cui {
            // in progress
          }

          Timothy Hoerning { // audio engineering professor
            // in progress
          }

          Carl Sable { // theoretical computer science professor
            // in progress
          }

          Sam Keene { // communication networks professor
            // in progress
          }
        }
      }

      Viewer { // displays the content of the email clicked on. will also say what the assistant is replying to.
        "click to view emails"
      }

      Compose {
        "To: Sender" // the sender of the email currently viewing will be set as the receiver
        ["Email body"]
        ("Send") // or use Enter key. plays swoosh sound.
      }
    }

    (HedronIcon) // back button
  }

  DesktopCanvas { // the desktop is a threejs scene in which there is a guassian splat scene of a real top of a desk.

    InteractableProps {
      Paper3D // threeGeometry
      Circuit3D // glb
    }


    StaticProps {
      Table3D // glb
      Printer3D // glb
      CuttingMat3D // glb
      WaveformGenerator3D // splat
      Multimeter3D // splat
      Oscilloscope3D // splat
      MIDIKeyboard3D // splat
    }
  }
}

TopoversePage { // this story is titled "safe portal technology", it is a video website called YouCube which is a simulation of YouTube. It replicates the youtube ui.
  Header {
    YouCubeIcon // mimics YouTube (play button is replaced with a cube)
    ["safe portal technology"] // readonly.
    (DefaultUserIcon "Sign In") // fake.
  }

  NavBar {
    (HomeIcon "Home") // fake
    (SubIcon "Subscriptions") // fake
    (YouIcon "You") // fake
    (HedronIcon "Hexahedron") -link-> HedronPage
  }

  MainContent {
    Keywords {
      "Transportation"
      "Technology"
      "Architecture"
      "Portal Regulation"
      "Government Agency"
      "Department of Portals"
      "History"
      "Social Media"
      "Commercial"
      "Spacial Topology"
      "Geographic Information"
    }
    "Safe Portal Technology | Safe-Portals™" {
      cover {
        // in progress
      }

      video {
        // this video is hand drawn using Procreate on an iPad. The voice uses iMyFone VoxBox text to speech. The music is made with StrudleCycles, a javascript version of music live coding program TidalCycles

        scene by scene {
          // black background. 
          "In times before portals,
          space was bound and defined,"
          // circle forms from a point. circle morphs into square

          "By physics and air, through walls they're blind."
          // square turns blobby due to gravity. square's outline breaks up into pieces. pieces fly away like wind. pieces collide into edge of the video.

          // background shrinks and squeezes the pieces until they all disappear. white background
          
          "Movement was horizontal, or a slow vertical climb,"
          // horizontal line forms from a point. right end elevates smoothly. line turns zigzagy like stair.
          " Limited by nature, by sunlight, and time."
          // steps of stair falls randomly forming low-res outline of mountains. a sectin of line protrudes to cast shadow on the rest. the protrusion merges with the other side morphing into two concentric circles. center circle turns black, showing clock face.

          // clock face expands until background is black.
          "In the age of portals, space reshapes, expands,"
          // three circles form from points. circles join into an irregular blob. blob morphs homeomorphically.
          "Breathful of mountain air, filled the urban lands."
          // blob morphs into a shape with the top mimicking outline of upstate new york and bottom mimicking manhattan. white fill flows from top to bottom.

          // shape expands while moving to the left, leaving the background white on the left, black on the right.
          "Sunlight streamed through
          portals, in shadows they shine,"
          // white side protrudes a triangle into black side. black side shrinks and disappears to the right.
          "While storage condensed, with worlds inside."
          // black squares form from points. white squares form inside the black ones, smaller black ones form inside the white ones.

          // black expands filling the canvas.
          "Quantum entanglement, a dance of subatomic grace,"
          // two small white circles form, each orbited by a dot in opposite directions.
          "Stabilized and bound, each to a hard base."
          // dots start to draw arcs behind, forming closed circles. white circle and the outer circle turn into rectangles, looking like portals.

          // each white rectangle retreats to the side of the canvas, each taking up 1/4 of the width.
          "A wormhole unbroken, between the entangled pair,"
          // a white link breaks the black in the middle, connecting the two whites.
          "Through which matter could journey, from here to there."
          // black circles travel from left to right. 

          // black expands filling the canvas
          "But with wondrous possibilities, came perils unforeseen, "
          // four double lined circles form. outer circles turn into eye shapes.
          "Tales spread of limbs lost, of a scene so obscene."
          // a blobby figure with four limbs extend two of the limbs into two portals. eyes blink. limbs are cut off.

          // white bleeds from the cut edges filling the canvas except for one eye. pupils are filled with white too.
          "Of individuals stepping in, in portal's jaws, they're thrown,"
          // another figure appears next to the eye. eye turns into mouth with sharp teeth. mouth sucks figure in.
          "Cities became mazes, with portal routes unknown."
          // mouth morphs into a square. teeth morph into intertwining maze walls.

          // black expands filling the canvas
          "The government intervened, extreme measures deployed,
          Once bustling gateways, in shadows they're destroyed."
          // different sized rectangles form. rectangles crumble into irregular zigzag lines.

          "Abandoned and forlorn, these silent portals lay,"
          // canvas shrinks into a single black rectangle with an outer edge.

          "Monuments to a time of freedom, now relics of a bygone day."
          // vines climb from the sides of the rectangle.

          // black expands filling the canvas.
          "Yet from the mire of chaos, our design began to gleam,"
          // a rounded rectangle forms. white rounded rectangle forms inside.
          "If anomalies arise, our portals retract their beam."
          // canvas blinks white twice and stays white. white rectangle inside shrinks vertically into a line and disappears.
          "A gravitational repulse, at the brink of the breach, 
          Ensuring those at the threshold are safe from its reach."
          // small black blobs appear on the side. a gradient emit from the black rounded rectangle, pushing the blobs out of frame.

          // rectangle expands turning canvas black.
          "All portals adhere to walls, one-sided and tight,"
          // a white rectangle forms from a horizontal line. rectangle has a door on it. the door opens turning into round cornered portal. the rectanglar wall rotates, showing its bottom side where we see the portal is one-sided.

          // white expands filling the canvas.
          "Our database is live, watching day and night."
          // six black circles form. lines connect them into pairs. an invisible clock hand, in clockwise manner, inverts the color into black background and white figures.

          // black fills canvas
          "Portals that deform, only with license they're sold, "
          // two vertical lines of different lengths form. a cube enters from the larger one, coming out of the small one appearing squeezed.
          "Ensuring no misuse, no tragedy unfold."
          // the lines morph into one folded and one straight. another cube enters from the folder, appearing as a chevron coming out.
          "Our vast catalog awaits, within finger's reach,"
          // 16 portals of different shape and size appear.
          "From grand to petite, for every conceivable need."
          // a portal appears from the center pushing all others away. it then shrinks to be very small.
          "Browse, choose, and embark on a journey anew,
          In the world of safe portals, your trust we pursue."
          // the portal turns into medium size. it turns into an old tv. on the tv texts start typing out. 
          // "STARTING AT
          // $999
          // VISIT US AT
          // WWW.SAFE-PORTALS.COM
          // IN THE WORLD OF
          // SAFE PORTALS
          // YOUR TRUST
          // WE PURSUE"
        }
      }

      "Everyone deserves safety when traveling, no matter the destination. Travel with confidence, Safe Portals ensures that you and your loved ones are protected with the latest in portal safety technology."

      "Sponsored · {SafePortalsIcon} Safe-Portals™"
    }

    "DOP OWN for Prospective Portal Owners Webinar" {
      cover {
        // in progress
      }

      video { // a 3 minute video of government webinar talking about how to transfer portal ownership
        scene by scene {
          // in progress
        }
      }

      "3.59K views · 6 months ago"

      DOPIcon "NYC Department of Portals"

      "Presented on October 23, 2023 by representatives of DOP's Office of Owner Advocate (OOA), and DOP's Office of Public Outreach (OPO)."
    }

    "Unboxing the Portable Portal: The Future of Portal" {
      cover {
        // in progress
      }

      video { // a 3 minute video of a youcuber unboxing a portable portal. demonstrating the installation and sharing discount link.
        scene by scene {
          // in progress
        }
      }

      "24K views · 4 months ago"

      AnnieProfileIcon "Annie He"

      "Unboxing SP's latest Portable Portal + Exclusive DISCOUNT for My Viewers!
      
      20% OFF!!!: https://shop.safe-portals.com/UCUCLFrfc1Fzy3n9VL4vpGAA"
    }

    infinitelyLoadingCircle
  }

}

MetaversePage { // this story is titled "memory traversing machine", it is a version control website called GitPub which is a simulation of GitHub.
  Header {
    GitPubIcon "Memory Traversing Machine" // icon mimics github (added beer mug on the tail)
  }

  CodeSection { // the structure of files in the repo. ones with {} after are directories.
    (HedronIcon) -link-> HedronPage
    ("datasheets") expand {
      "mx3284a.pdf"
      "tq5589f.pdf"
      "bp7865n.pdf"
      "sr1428x.pdf"
      "lv8811m.pdf"
    }
    ("firmware") expand {
      "main.c"
      "main_old.c"
      "Makefile"
      "test.c"
    }
    ("hardware") {
      "circuit.circ"
      "design.sv"
      "layout.pcb"
      "testbench.sv"
    }
    ("miscellaneous") {
      "poster.ai"
      "poster_print.pdf"
      "syllabus.pdf"
    }
    ("photos") {
      "IMG_0458.HEIC"
      "IMG_0459.HEIC"
      "IMG_0462.HEIC"
      "IMG_0465.HEIC"
    }
    ("prototypes") {
      ("Autosave") {} // fake
      "design.3dm"
      "design.bak"
      "headset.stl"
      "lasercut.dxf"
    }
    ("submissions") {
      "report.docx"
      "report_print.pdf"
      "report_revised.docx"
      "report_revised_v2.docx"
    }
    "demo.mp4"
    "README.md"
    ".gitignore"
  }

  "README" {
    "Memory Traversing Machine"

    "Course Name: ECE150: Digital Logic Design, Fall 2022"
    "Date: December 14th 2022"
    "Authors: Noam Schuck, Annie He, Zeph Odidika"

    "Table of Content" // anchor to the sections

    "Introduction" {
      "Our semester project focused on the development of a Memory Traversing Machine, which ambitiously sought to integrate and apply the entirety of the digital logic concepts covered in our course, including the use of registers, RAM chips, and finite state machines. This initiative aimed to create a system capable of reading, storing, and replaying human memories. While we faced challenges in fully realizing every aspect of the project, we successfully implemented core functionalities such as memory capture, data manipulation, and the dynamic display of these processes on a headset. Moving forward, our team is eager to build upon the foundational work and substantial effort invested in this innovative project, particularly to expand its memory interaction capabilities and explore potential applications."
    }

    "Team Composition" {
      "The team consisted of Annie He, Noam Schuck, and Zephaniah Odidika, each taking on specific tasks critical to the project's progress:"
      "Annie He reviewed the Logisim simulations conducted by Noam and investigated the headset's input and output parameters. She also purchased necessary electronic materials including wire strippers."
      "Noam Schuck was responsible for creating the Logisim simulation of our circuit and acquiring physical materials like the cardboard box used in building the prototype. He also prepared the wires needed for the circuit."
      "Zephaniah Odidika focused on selecting the essential components and chips, downloading datasheets for team reference. He designed and fabricated the box that houses the device and wired the LED matrix."
      "All team members participated in the wiring process, contributing to the assembly of the Memory Traversing Machine."
    }

    "Methodology" {
      "Our project methodology was centered on a structured approach to managing the development process, leveraging specific software tools and a clear file organization system across various development phases. The design phase utilized digital logic simulations and PCB layout designs with tools like Logisim and Autodesk Eagle, documented in our hardware directory. Firmware development focused on iterative coding in the firmware folder, supported by IDEs and compilers for code efficiency. Prototyping was conducted through 3D modeling documented within the prototypes folder, using CAD software, while the photos directory captured each iteration's progress. The project's functionality and interface evaluation were showcased in demo.mp4. The reporting phase consolidated all documentation and analyses in the submissions directory, ensuring a comprehensive and straightforward project development process without excess."
    }

    "Implementation" {
      "In the implementation phase, our team translated the project's theoretical framework into a functioning prototype. We began with constructing the digital logic circuits using Logisim, based on the simulations and designs outlined in our hardware folder. Following successful simulation, we progressed to firmware coding, where main functionalities were developed in C, as seen in our firmware directory, including essential operations like memory capture and playback control. The physical assembly of the device involved meticulous wiring and soldering, guided by the datasheet for each component and the layout.pcb for accurate board design. The 3D-printed enclosure, detailed in the prototypes directory, housed the electronics, ensuring durability and ease of use. Concurrently, the LED matrix was programmed to display the system's status, providing immediate feedback on operations"
    }

    "Demonstration" {
      video { // a 4 minute video about of the circuit emitting magic smoke, and the students recalled what they did for the past few days, then realizing their memories don't match up.
        scene by scene {
          // camera zooms out from close up of a circuit board, looks at the front of the lab desk where the circuit board is on. The circuit board started to emit magic smoke. 
          professor {
            "So you guys are saying that the circuit just caught on fire by itself? Okay, seems like the memory chip is still intact."
            // camera navigates to an adjacent desk where there is a piece of printed project requirement. 
            requirement.pdf {
              "ECE 150 Digital Logic Design, Fall 2022"
              "Project 3: Read/Write Cycle Memory Traversing Machine"
              "Due December 14th 2022"
              "In this project you will implement a Memory Traversing Machine in which a user can <highlight>travel to different moments in their memory, save their experiences to the memory chip</highlight>, and loop through all of their saved memories to display an animation. You may work in groups of up to 3..."
              "Circuit Requirements:"
              "Interface between the circuit and a <highlight>neoroimaging/neoroprojecting headset</highlight>."
              "At least 4 available memory slots..."
            }
            "Let's try this: each of you describe the things you've written to the chip. I'll compare them to the Chip's memory. If it seems reasonable, I'll give you partial credit."
          } 
          // still image of close up of the circuit with text overlay "Saturday, 12.10.2022"
          Annie {
            OnScreenLabel {
              "Address on chip: 0001" // actual date Sunday
              "Date: Saturday, 12.10.2022" // false date
            }
            // zooms into fridge in CVS where Simply Orange juice is located.
            "On Saturday I bought a bottle of orange juice from CVS before coming to school."
            // zooms out from the bottle which appeared on the lab desk. Laptop appears on the desk with a popping sound. Zooms into the Logisim file that is opened and displayed on the screen.
            "I placed it on my desk, took out my computer, and started reviewing the Logisim simulation that Noam sent me."
          }

          Noam {
            OnScreenLabel {
              "Address on chip: 0100" // actual date Saturday
              "Date: Saturday, 12.10.2022" // false date
            }
            // camera enters the computer lab through a corridor, and turns towards a printer. printer tray is pulled out showing no paper, and is pushed back. but a single piece of paper is printed out showing some rectandular colored object on top.
            "We went to the eighth floor to print our datasheets and stuff, but they were out of paper in the colored printer, so we couldn't print it there."
          }

          Zeph {
            OnScreenLabel {
              "Address on chip: 1001" // actual date Sunday
              "Date: Saturday, 12.10.2022" // false date
            }
            // a flat piece of brown block is animated into a trapezoidal prism stand. the circuit board, the led matrix, and the headset appeared on the prism one after another with popping sounds.
            "So here's the thing: I designed a box so the breadboard could fit into the box and our presentation looks very nice."
          }
          // still image of close up of the circuit with text overlay "Sunday, 12.11.2022"
          Annie {
            OnScreenLabel {
              "Address on chip: 0010" // actual date Monday
              "Date: Sunday, 12.11.2022" // false date
            }
            // a headset is on the lab desk, it flies towards to camera. half way through, the entire video gradually split into two, similar to a stereoscopic film. The camera zooms into the headset, untill the left and right eyes overlap, showing a blue dot in the center of the screen.
            "On Sunday I was figuring out this neuroimaging headset thing that is required for us to have interfaced with our circuit, getting familiar with its inputs and outputs, so that we can gain access to the memory we wanted."
            // more blue dots appear, eluminating the scene, showing that it is an indoor rock climbing gym with a lead climing route highlighted by the blue light.
            OnScreenLabel {
              "Address on chip: ????" // actual date Forgot
              "Date: Someday, ??.??.????"
            }
          }

          Annie {
            OnScreenLabel {
              "Address on chip: 0000" // actual date Saturday
              "Date: Sunday, 12.11.2022" // false date
            }
            // continue from the previous printer scene. the camera zooms into the page that just printed, it is a colored floor plan of a room. The floor plan starts showing perspective, and the camera enters that room. It is a plotter room with plotting machines and a large printer. camera zooms into a computer in the room, showing multiple pdfs ready to be printed. Then the cursor selects these files and sends them to print.
            "So we went upstairs trying to print whatever document we have, but apparently all of the printers are out of paper so we had to go to this plotter room where there's a single large printer."
          }

          Noam {
            OnScreenLabel {
              "Address on chip: 0110" // actual date Monday
              "Date: Sunday, 12.11.2022" // false date
            }
            // a roll of black and a roll of red wires are on the side. They incrementally shorten, and baby wires (short segments bended for breadboard's power and groudn to be connected to the main circuit) fall from the sky.
            "I used the stripper to make a lot of baby wires because all of the chips need to be connected to power and ground, so it makes it more efficient for wiring later on."
          }
          // pixelated transition where the baby wires turn into leds, and the two rolls turn into a perfboard.
          Zeph {
            OnScreenLabel {
              "Address on chip: 1001" // actual date Sunday
              "Date: Sunday, 12.11.2022" // false date
            }
            // leds disappear from the table, appear organized in rows and columns on the perfboard.
            "I got LEDs, put it on a perfboard and then I soldered it together to make an LED Matrix."
          }

          Zeph {
            OnScreenLabel {
              "Address on chip: 1010" // actual date Monday
              "Date: Sunday, 12.11.2022" // false date
            }
            // the prism stand unrolls itself into lasercuttable parts. the camera zooms out, showing that the pieces are inside of a laser cutter.
            "Sunday was it was a pretty chill day for me. I just, you know, unrolled my box and then I sent it to the AACE Lab so they can laser cut."
          }
          // still image of close up of the circuit with text overlay "Monday, 12.12.2022"
          Annie {
            OnScreenLabel {
              "Address on chip: 0010" // actual date Monday
              "Date: Sunday, 12.11.2022" // false date
            }
            // a drawer in the components' cabinet is opened, it shows no wire stripper. camera shots off from the drawer, showing the entire lab attached to the side of the 41 cooper square building like a drawer itself. The lab is then pushed back into the building like a drawer, and camera flies to the hardware store, and found a wire stripper inside.
            "We needed a really good wire stripper to speed up the process. But when I went and check for it in the drawer, it wasn't there. I was in so much stress, I literally shot off from the building, but remembered to close the drawer of course, and flew to this hardware store down two avenues."
          }

          Noam {
            OnScreenLabel {
              "Address on chip: 0101" // actual date Sunday
              "Date: Sunday, 12.11.2022" // false date
            }
            // camera enters a pipe room, turns a corner and sees stacked boxes.
            "I needed a cardboard box for the circuit components so I went down to the basement of the Foundation Building because I remembered that they had boxes there in the pipe room."
          }
          
          Zeph {
            OnScreenLabel {
              "Address on chip: 1000" // actual date Saturday
              "Date: Sunday, 12.11.2022" // false date
            }
            // two lab component cabinets are isolate in space. camera navigates from the front to the top of them. drawers pull out one by one, showing a field of components in yellow containers. camera zooms into one drawer. a scrolling list of component datasheet file names such as "cd4027b.pdf" appear on the left. A random file is opened, overlaying on the drawer of components.
            "I had to get chips for our circuit, and then I had to download the datasheets from TI (Texas Instruments). Fun fact, they make all the chips in the world. It's crazy, I know. And then after I downloaded the datasheets we were all ready to go."
          }

          professor {
            // returning to the lab desk with smoking circuit.
            "Okay I've got everything written down, I will provide you with the feedbacks later this week."
          }
        }
      }
    }

    "Debugging" { // diagrams used to figure out what's wrong. turns out the order of memory segments reordered and wrote back to their brain.
      // in progress
      //The address on chip reflects the actual sequence of events. the first two bits reflects the person. Annie is 00, Noam is 01, Zeph is 10. The last two bits reflects the date. 00 is saturday, 01 is sunday, 10 is monday.
      // The reordering of events is due to neglecting propagation delay.
      // The people remembering them in the wrong order is because they also enabled write back to their brain.
      // The circuit burning is because they used the wrong type of current.
      Actual course of events {
        Saturday {
          Zeph downloads datasheet and selects chips
          Annie and Noam printing
        }

        Sunday {
          Annie reviews Noam's Logisim code
          Noam finds box in the basement
          Zeph designs the box and wired the LED matrix
        }

        Monday {
          Annie learned about the headset and bought wire stripper
          Noam used wire stripper to make baby wires
          Zeph lasercut the box
        }
      }
    }

    "Conclusion" {
      "In conclusion, our project's exploration into merging digital logic with biological processes demonstrated not only the complexities inherent in such endeavors but also the potential risks and ethical considerations. The technical challenges we faced, including managing propagation delays and other stochastic elements of real-world circuit design, reinforced the understanding that theoretical models often diverge significantly from practical application. These experiences prompted a deeper reflection on the fundamentally physical nature of what we often consider digital, blurring the lines between the tangible and the abstract. We hope our mistakes will alert others that the integration of technology and biology should be approached with caution, awareness, and a deep consideration for unforeseen consequences."
    }
  }

  "About" {
    "Final project for ECE150: Digital Logic Design"
    keywords {
      ("digital-logic") // fake
      ("memory") // fake
      ("electronics") // fake
      ("circuit-design") // fake
      ("virtual-reality") // fake
      ("hardware-software-interface") // fake
      ("simulation") // fake
      ("neurotechnology") // fake
      ("user-experience") // fake
      ("digital-fabrication") // fake
      ("interdisciplinary-collaboration") // fake
      ("cyber-physical-system") // fake
      ("augmented-cognition") // fake
      ("debugging") // fake
    }
  }

  "Contributors" { // contributors to the project. in real life, they are the people that contributed to the voice-over of the video.
    AnnieProfileIcon "Annie He"
    NoamIdenticon "Noam Schuck"
    ZephIdenticon "Zephaniah Odidika"
  }

  Footer {
    GitPubIcon "© 2024 GitPub, Inc."
  }

}

UniversePage { // this story is titled "mimetic unicellular organisms", it is a research paper publishing website called PLOS (parodic library of science) which is a simulation of PLOS (public library of science). the subpages are currently in progress. The author names will be edited (they are famous people's names but edited slightly. the people are related to the respective fields). titles of the articles are links to the page containing the full article whic is also in progress. dates are also in progress.

  Header {
    "Mimetic Unicellular Organisms"

    "Published April 9, 2024 Curated Collections"
    
    "This curated collection converges the forefront of multidisciplinary research and theoretical discourse surrounding the groundbreaking discovery of mimetic unicellular organisms and their colonial arrangements. It showcases a compendium of perspectives that span from the intricacies of single-cell mimicry to the complex behaviors of colonial formations. Scholars and innovators from fields as diverse as cellular biology, synthetic design, computational modeling, and architectural biomimicry contribute to a body of work that not only dissects the functional dynamics of these organisms but also extrapolates their potential to inspire revolutionary applications in technology, medicine, and sustainable design. The collection seeks to offer insights into how these biological entities, characterized by their remarkable adaptive capabilities, can reshape our understanding of natural processes and inform the next generation of cross-disciplinary innovations."
  }

  Articles {  
    Article1 {
      ("Chronicles and Classifications: Tracing the Historical Emergence and Typologial Variations of Mimetic Unicellular Organisms") -link-> Article1Page
      "March 18, 2016"
      "Carl Linnaeus, George Cuvier, Gregor Mendel, Ernst Mayr, Rosalind Franklin, E. O. Wilson, Carolus Gustavus"
      "This comprehensive review examines the evolutionary trajectory and taxonomic categorization of mimetic unicellular organisms. Integrating historical and contemporary research, we..."
      coverImage {
        // in progress
      }
    }

    Article2 {
      ("Cellular Morphogenesis and Pattern Formation Among Mimetic Unicellular Species: Unveiling the Complexity of Protozoan Social Structures and Intercellular Chemical Language") -link-> Article2Page
      "March 18, 2016"
      "Barbara McClintock, James Watson, Francis Crick, Lynn Margulis, Craig Venter, Elizabeth Blackburn, Richard Dawkins, Sydney Brenner, Rita Levi-Montalcini, Oswald Avery, David Attenborough"
      "The intracellular communication and colonial organization of mimetic unicellular organisms represent a fascinating frontier in cytology. This article presents a..."
      coverImage {
        // in progress
      }
    }

    Article3 {
      ("Advancing Cellular Automata Complexity: Computational Modeling of Mimetic Unicellular Systems through Machine Learning and Heuristic Analysis") -link-> Article3Page
      "March 18, 2016"
      "Alan Turing, John von Neumann, Stephen Wolfram, Conrad Waddington, Norbert Wiener, Marvin Minsky, Rosalyn Yalow, David Marr"
      "The advent of mimetic unicellular organisms has opened new avenues in computational biology, particularly in the simulation of cellular automata...."
      coverImage {
        // in progress
      }
    }

    Article4Page {
      ("Conceptualizing Existence Through the Microscopic Lens: A Philosophical Inquiry into the Ontological Implications of Mimetic Unicellular Organisms and the Semiotics of Their Simulacra") -link-> Article4Page
      "March 18, 2016"
      "Michel Foucault, Daniel Dennett, Patricia Churchland, Thomas Nagel, Mary Midgley, Jean Baudrillard"
      "The discovery of mimetic unicellular organisms challenges traditional philosophical perspectives on the nature of being and representation. In this exploratory..."
      coverImage {
        // in progress
      }
    }

    Article5 {
      ("Transdisciplinary Impacts and Applications: Harnessing the Potentials of Mimetic Unicellular Organisms Across Art, Architecture, and Biomedicine") -link-> Article5Page
      "March 18, 2016"
      "Buckminster Fuller, Jane Goodall, Benoit Mandelbrot, Rachel Carson, Santiago Ramón y Cajal, Nikola Tesla, Ada Lovelace"
      "Mimetic unicellular organisms have profound transdisciplinary applications, extending beyond the confines of traditional biology. This article examines the transformative potential..."
      coverImage {
        // in progress
      }
    }
  }

  Footer {
    PLOSIcon
    (HedronIcon "POLY") -link-> HedronPage
    "PLOS (Parodic Library of Science) is a nonprofit 501(c)(3) corporation, #C2354500, and is based in San Francisco, California, US"
  }
}`