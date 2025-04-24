//Array of questions grouped by category(25 questions each)

const questions=[
    {
        category:"Programming",
        questions:
        [  
            /*q-1*/ 
            {
                question: "What does HTML stand for?",
                options: ["Hyper Text Pre Processor", "Hyper Text Markup Language", "Hyper Text Multiple Language",
                "Hyper Tool Multi Language"],
                correctAnswer: 1,
            },
            /*q-2*/ 
            {
                question:"How do you write comment in Python?",
                options:["//This is a comment","#This is a comment", "/*This is a comment*/", "<!--This is a comment-->"],
                correctAnswer: 1,
            },
            /*q-3*/ 
            {
                question:"What is CSS?",
                options:["CSS is a style sheet language","CSS is designed to separate the presentation and content, including layout, colors, and fonts",
                     "CSS is the language used to style the HTML documents", "All of the mentioned"],
                correctAnswer: 0,
            },
            /*q-4*/ 
            {
                question:"Which of the following has introduced text, list, box, margin, border, color, and background properties?",
                options:["HTML","PHP","CSS","Ajax"],
                correctAnswer: 2,
            },
            /*q-5*/ 
            {
                question:"Which of the following is a correct way to declare a variable in JavaScript?",
                 options:["var x = 10;","variable x = 10;","int x = 10;","let 10 = x;"],
                correctAnswer: 0,
            },
            /*q-6*/ 
            {
                question: "Who developed Python Programming Language?",
                options: ["Wick van Rossum", "Rasmus Lerdorf", "Guido van Rossum",
                    " Niene Stom"],
                correctAnswer: 2,
            },
            /*q-7*/ 
            {
                 question:"Which of the following is the correct extension of the Python file?",
                 options:[".python", ".pl", ".py",".p"],
                correctAnswer: 2,
            },
            /*q-8*/ 
            {
                question:"What is the data type of (1)?",
                options:["Tuple","Integer","List","Both tuple and integer"],
                correctAnswer: 1,
            },
            /*q-9*/ 
            {
                question:" Which module in Python supports regular expressions?",
                options:["re","regex", "pyregex", "none of the mentioned"],
                correctAnswer: 0,
            },
            /*q-10*/ 
            {
                question:"Which of the following is not a complex number?",
                options:[" k = 2 + 3j","k = complex(2,3)","k = 2 + 3l","k = 2 + 3J"],
                correctAnswer: 2,
            },
            /*q-11*/ 
            {
                question: "Which feature of OOP indicates code reusability?",
                options: ["Abstraction","Polymorphism","Encapsulation","Inheritance"],
                correctAnswer: 3,
            },
            /*q-12*/ 
            {
                question:"Who is the father of C language?",
                options:["Steve Jobs","James Gosling", "Dennis Ritchie", "Rasmus Lerdorf"],
                correctAnswer: 2,
            },
            /*q-13*/ 
            {
                question:"What is the result of logical or relational expression in C?",
                options:["True or False","0 or 1","0 if an expression is false and any positive number if an expression is true",
                     "None of the mentioned"],
                correctAnswer: 1,
            },
            /*q-14*/ 
            {
                question:"What does PHP stand for?",
                options:["PHP stands for Preprocessor Home Page","PHP stands for Pretext Hypertext Processor","PHP stands for Hypertext Preprocessor","PHP stands for Personal Hyper Processor"],
                correctAnswer: 2,
            },
            /*q-15*/ 
            {
                question:"Who is the father of PHP?",
                options:["Drek Kolkevi","Rasmus Lerdorf","Willam Makepiece","List Barely"],
                correctAnswer: 1,
            },
            /*q-16*/ 
            {
                question: "How to define a function in PHP?",
                options: [" functionName(parameters) {function body}","function {function body}",
                    "function functionName(parameters) {function body}","data type functionName(parameters) {function body}"],
                correctAnswer: 2,
            },
            /*q-17*/ 
            {
                question:" Which of the following is the correct syntax to write a PHP code?",
                options:["<?php ?>","< php >","< ? php ?>","<? ?>"],
                correctAnswer: 0,
            },
            /*q-18*/ 
            {
                question:"Which of the following is a type of polymorphism in Java Programming?",
                options:["Multiple polymorphism","Compile time polymorphism","Multilevel polymorphism"," Execution time polymorphism"],
                correctAnswer: 1,
            },
            /*q-19*/ 
            {
                question:"Which environment variable is used to set the java path?",
                options:["MAVEN_Path"," JavaPATH", "JAVA", "JAVA_HOME"],
                correctAnswer: 3,
            },
            /*q-20*/ 
            {
                question:"What is #include <stdio.h>?",
                options:["Preprocessor directive","Inclusion directive","File inclusion directive","None of the mentioned"],
                correctAnswer: 0,
            },
            /*q-21*/ 
            {
                question:"What is DOM in HTML?",
                options:["Language dependent application programming"," Hierarchy of objects in ASP.NET",
                "Application programming interface","Convention for representing and interacting with objects in html documents"],
                correctAnswer: 3,
            },
            /*q-22*/ 
            {
                question:"Which of the following tag is used for inserting the largest heading in HTML?",
                options:["head","<h1>","<h6>","heading"],
                correctAnswer: 1,
            },
            /*q-23*/ 
           {
                question:"Which element is used to get highlighted text in HTML5?",
                options:["<u>","<mark>","<highlight>","None of the mentioned"],
                correctAnswer: 1,
           },
           /*q-24*/ 
           {
                question:"Which HTML attribute is used to define inline styles?",
                options:["class","font", "style", "styles"],
                correctAnswer: 2,
           },
           /*q-25*/ 
           {
                question:"How do you insert a comment in a CSS file?",
                options:["//this is a comment//","<!-- this is a comment-->","/*this is a comment*/","'this is a comment'"],
                correctAnswer: 2,
           },
        ]
    },

    {
        category:"Mathematics",
        questions:
        [/*q-1*/ 
            {
                question: "Scores that differ greatly from the measures of central tendency are called:",
                options: ["Raw scores", "The best scores", "Extreme scores","Z-scores"],
                correctAnswer: 2,
            },
            /*q-2*/ 
            {
                question:"The sum of the squares fo the deviations about mean is:",
                options:["Zero","Maximum", "Minimum", "All of the above"],
                correctAnswer: 0,
            },
            /*q-3*/ 
            {
                question:"For a certain distribution, if ∑(X -20) = 25, ∑(X- 25) =0, and ∑(X-35) = -25, then is equal to:",
                options:["20","25","-25","35"],
                correctAnswer: 0,
            },
            /*q-4*/ 
            {
                question:"If X1, X2, X3, ... Xn, be n observations having arithmetic mean and if Y =4X ± 2, then is equal to:",
                options:["4X","4","4±2","4±2"],
                correctAnswer: 2,
            },
            /*q-5*/ 
            {
                question:"If the arithmetic mean of 20 values is 10, then sum of these 20 values is:",
                options:["10","20","200","20+10"],
                correctAnswer: 2,
            },
            /*q-6*/ 
            {
                question:"If the arithmetic mean of the two numbers X1 and X2 is 5 if X1=3, then X2 is:",
                options: ["3", "5", "7","10"],
                correctAnswer: 2,
            },
            /*q-7*/ 
            {
                question:"Which of the following average cannot be calculated for the observations 2, 2, 4, 4, 6, 6, 8, 8, 10, 10 ?",
                options:["Mean", "Median", "Mode","All of the above"],
                correctAnswer: 2,
            },
            /*q-8*/ 
            {
                question:"Which technique is used in finding a solution for optimizing a given objective, such as profit maximization or cost reduction under certain constraints? ",
                options:["Qualing theory","Waiting Line","Both A and","Linear Programming"],
                correctAnswer: 3,
            },
            /*q-9*/ 
            {
                question:"Given U = {1,2,3,4,5,6}, A = {2,3}, and B = {3,4,5}, what is A' ∩ B'?",
                options:["{2,3,4,5}","{1,4,5,6}", "{1,2,6}", "{1,6}"],
                correctAnswer: 3,
            },
            /*q-10*/ 
            {
                question:" For sets A = {1,2,3,6} and B = {2,4,6,8}, what is (A ∩ B)?",
                options:["{2,6}","{1,2,6}","{2,4}","{6,8}"],
                correctAnswer: 0,
            },
            /*q-11*/ 
            {
                question:" According to De Morgan's Law, what is the complement of the intersection of two sets X and Y?",
                options: ["X ∪ Y","X' ∪ Y'","X ∩ Y","X' ∩ Y"],
                correctAnswer: 1,
            },
            /*q-12*/ 
            {
                question:"Which shape is typically used to represent a universal set in a Venn diagram?",
                options:["Circle","Rectangle","Triangle","Oval"],
                correctAnswer: 1,
            },
            /*q-13*/ 
            {
                question:"Which of the following best describes the relationship between a universal set and a subset in a Venn diagram?",
                options:["The subset is represented by a circle inside the universal set's rectangle",
                        "The universal set is represented by a circle inside the subset's rectangle",
                        "The universal set and subset are represented by two overlapping circles",
                        "The subset is represented by a square inside the universal set's circle"],
                correctAnswer: 0,
            },
            /*q-14*/ 
            {
                question:"Which of the following is true for a commutative binary operation?",
                options:["a o b = b o a for every pair of elements a, b ∈ G","a o b ≠ b o a for some pairs of elements","a o (b o c) = (a o b) o c","The operation distributes over addition"],
                correctAnswer: 0,
            },
            /*q-15*/ 
            {
                question:"In operations research, the are prepared for situations",
                options:["Mathematical models","Physical models diagrammatic","Diagrammatic models", "Both B and C"],
                correctAnswer: 0,
            },
            /*q-16*/ 
            {
                question: "What is a star tree?",
                options: [" A tree having a single internal vertex and n-1 leaves","A tree having n vertices arranged in a line","A tree which has 0 or more connected subtrees","A tree which contains n vertices and n-1 cycles"],
                correctAnswer: 0,
            },
            /*q-17*/ 
            {
                question:"The determinant of identity matrix is? ",
                options:["1","0","Depends on the matrix","None of the mentioned"],
                correctAnswer: 0,
            },
            /*q-18*/ 
            {
                question:"Consider the binary relation, A = {(a,b) | b = a – 1 and a, b belong to {1, 2, 3}}. The reflexive transitive closure of A is?",
                options:["{(a,b) | a >= b and a, b belong to {1, 2, 3}}","{(a,b) | a > b and a, b belong to {1, 2, 3}}","{(a,b) | a <= b and a, b belong to {1, 2, 3}}","{(a,b) | a = b and a, b belong to {1, 2, 3}}"],
                correctAnswer: 0,
            },
            /*q-19*/ 
            {
                question:"Determine the characteristics of the relation aRb if a2 = b2.",
                options:["Transitive and symmetric","Reflexive and asymmetry","Trichotomy, antisymmetry, and irreflexive","Symmetric, Reflexive, and transitive"],
                correctAnswer: 3,
            },
            /*q-20*/ 
            {
                question:"What is the base case for the inequality 7n > n3, where n = 3?",
                options:["652 > 189","42 < 132","343 > 27","42 <= 431"],
                correctAnswer: 2,
            }, 

            /*q-21*/ 
            {
                question:"Which of the following is the base case for 4n+1 > (n+1)2 where n = 2?",
                options:["64 > 9","16 > 2","27 < 91","54 > 8"],
                correctAnswer: 3,
            },
            /*q-22*/ 
            {
                question:"In a group of 267 people how many friends are there who have an identical number of friends in that group?",
                options:[" 266","2","138","202"],
                correctAnswer: 1,
            },
            /*q-23*/ 
            {
                question:"How many numbers must be selected from the set {1, 2, 3, 4} to guarantee that at least one pair of these numbers add up to 7?",
                options:["14","5","9","24"],
                correctAnswer: 1,
            },
            /*q-24*/ 
            {
                question:"In how many ways can 8 different dolls be packed in 5 identical gift boxes such that no box is empty if any of the boxes hold all of the toys?",
                options:["2351","365","2740","1260"],
                correctAnswer: 3,
            }, 
            /*q-25*/ 
            {
                question:"A bag contains 25 balls such as 10 balls are red, 7 are white and 8 are blue. What is the minimum number of balls that must be picked up from the bag blindfolded (without replacing any of it) to be assured of picking at least one ball of each colour?",
                options:["10","18","63","35"],
                correctAnswer: 1,
            }, 
        ]
    },

    {
        category:"English",
        questions:
        [
            /*q-1*/ 
            {
                question:"Our sir teaches Mathematics______ English.",
                options: ["across","besides","beside","both"],
                correctAnswer: 1,
            },
                /*q-2*/ 
            {
                question:"Please, come_____ the bathroom.",
                options: ["out of","over","on","in"],
                correctAnswer: 0,
            },
                /*q-3*/ 
            {
                question:"Please, don't laugh_____those beggars.",
                options: ["for","against","at","from"],
                correctAnswer: 2,
            },
                /*q-4*/ 
            {
                question:"Please,stop______so many mistakes.",
                options: ["to make","make","making","makes"],
                correctAnswer: 2,
            },
                /*q-5*/ 
            {
                question:"She______ her husband for 15 minutes.",
                options: ["is beating","has been beating","has been beaten","beats"],
                correctAnswer: 1,
            },
                /*q-6*/ 
            {
                question:"The English ______ English",
                options: ["speak","spoke","spoken","is spoken"],
                correctAnswer: 0,
            },
                /*q-7*/ 
            {
                question:"The rain comes______the clouds.",
                options: ["in","near","from","under"],
                correctAnswer: 2,
            },
                /*q-8*/ 
            {
                question:"The ship_____,Robinson arrived on the island",
                options: ["had been broken","having been broken","having broken","has broken"],
                correctAnswer: 1,
            },
                /*q-9*/ 
            {
                question:"The stars_______counted.",
                options: ["can","can be","cannot be","must"],
                correctAnswer: 2,
            },
                /*q-10*/ 
            {
                question:"Traffic ____ by the school boys now",
                options: ["is being controlled","is controlled","is controlling","controlled"],
                correctAnswer: 0,
            },
                /*q-11*/ 
            {
                question:"_______off the light,I went to bed.",
                options: ["Before","switched","Having switched","Switching"],
                correctAnswer: 2,
            },
                /*q-12*/ 
            {
                question:"they are______ brothers but neither of them takes care of their parents.",
                options: ["few","some","many","two"],
                correctAnswer: 3,
            },
                /*q-13*/ 
            {
                question:"The abstract nount of'young' is______.",
                options: ["Youngster","Youth","Younger","Younker"],
                correctAnswer: 1,
            },
                /*q-14*/ 
            {
                question: "China has______people than canada.",
                options: ["few","fewer","some","more"],
                correctAnswer: 1,
            },
                /*q-15*/ 
            {
                question: "Opposite of 'Professional' is______.",
                options: ["Amateur","Tradesman","Labour","Customer"],
                correctAnswer: 0,
            },
                /*q-16*/ 
            {
                question:"He has lost______rupees in gambling.Now, he lives like a beggar.",
                options: ["a little","a few","a some","all"],
                correctAnswer: 0,
            },
                /*q-17*/ 
            {
                question:"the boys are______their home task?",
                options: ["none","doing","do","both A and B"],
                correctAnswer: 1,
            },
                /*q-18*/ 
            {
                question:"He _____ robbed as he was walking out of the bank",
                options: ["had","did","were","got"],
                correctAnswer: 3,
            },
                /*q-19*/ 
            {
                question:"You ______ not worry about me?",
                options: ["would","need","could","shall"],
                correctAnswer: 1,
            },
                /*q-20*/ 
            {
                question:"I ______ now quite hale hearty?",
                options: ["is","am","are","has"],
                correctAnswer: 1,
            }, 
               /*q-21*/ 
               {
                question:"Sana! Please________ tea.",
                options: ["taken","drank","have","put"],
                correctAnswer: 2,
            },
                /*q-22*/ 
            {
                question:"I'd like_______ information,please.",
                options: ["an","some","piece","a piece"],
                correctAnswer: 1,
            }, 
               /*q-23*/ 
               {
                question:"We need to do______ of work before the event starts.",
                options: ["much","more","some","a lot"],
                correctAnswer: 3,
            },
                /*q-24*/ 
            {
                question:"He has _______ experience than his brother.",
                options: ["many","more","much","some"],
                correctAnswer: 1,
            }, 
               /*q-25*/ 
            {
                question:"What is the antonym of Brave?",
                options: ["Strong","Fearful","Confident","Courageous"],
                correctAnswer: 1,
            }
        ]
                 
           

        
    },
    
    {
        category:"Cyber Security",
        questions:
        [/*q-1*/ 
            {
                question:"What is Cyber Security?",
                options: ["Cyber Security provides security against malware","Cyber Security provides security against cyber-terrorists",
                    "Cyber Security protects a system from cyber attacks","All of the mentioned"],
                correctAnswer: 3,
            },
                /*q-2*/ 
            {
                question:"What does cyber security protect?",
                options: ["a) Cyber security protects criminals","Cyber security protects internet-connected systems",
                    "Cyber security protects hackers","None of the mentioned"],
                correctAnswer: 1,
            },
                /*q-3*/ 
            {
                question:"Which of the following is defined as an attempt to steal, spy, damage or destroy computer systems, networks, or their associated information?",
                options: ["a) Cyber attack","Computer security","Cryptography","Digital hacking"],
                correctAnswer: 0,
            },
                /*q-4*/ 
            {
                question:"Which of the following is an objective of network security?",
                options: ["Confidentiality","Integrity","Availability","All of the above"],
                correctAnswer: 3,
            },
                /*q-5*/ 
            {
                question:"Which of the following is not a cybercrime?",
                options: ["Denial of Service","Man in the Middle","Malware"," AES"],
                correctAnswer: 3,
            },
                /*q-6*/ 
            {
                question:"In which year has hacking become a practical crime and a matter of concern in the field of cyber technology?",
                options: ["1991","1983","1970","1964"],
                correctAnswer: 2,
            },
                /*q-7*/ 
            {
                question:"Which of the following actions compromise cyber security?",
                options: ["Vulnerability","Attack","Threat","Exploit"],
                correctAnswer: 2,
            },
                /*q-8*/ 
            {
                question:"Where did the term “hacker” originate?",
                options: ["MIT","New York University","Harvard University","Bell's Lab"],
                correctAnswer: 0,
            },
                /*q-9*/ 
            {
                question:"Which of the following is not an email-related hacking tool?",
                options: ["Mail Password", "Email Finder Pro","Mail PassView","Sendinc"],
                correctAnswer: 3,
            },
                /*q-10*/ 
            {
                question:"They are nefarious hackers, and their main motive is to gain financial profit by doing cyber crimes. Who are “they” referred to here?",
                options: ["White Hat Hackers","Black Hat Hackers","Hactivists","Gray Hat Hackers"],
                correctAnswer: 1,
            },
                /*q-11*/ 
            {
                question:"Which of the following is a Stuxnet?",
                options: ["Trojan","Antivirus","Worm","Virus"],
                correctAnswer: 2,
            },
                /*q-12*/ 
            {
                question:"Which is the legal form of hacking based on which jobs are provided in IT industries and firms?",
                options: ["Cracking","Non ethical Hacking","Ethical hacking","Hactivism"],
                correctAnswer: 2,
            },
                /*q-13*/ 
            {
                question:"Which of the following DDoS in mobile systems wait for the owner to trigger the cyber attack?",
                options: ["botnets","programs","virus","worms"],
                correctAnswer: 0,
            },
                /*q-14*/ 
            {
                question:"Which of the following is not a type of peer-to-peer cyber-crime?",
                options: ["Phishing","Injecting Trojans to a target victim","MiTM",
                    "Credit card details leak in deep web"],
                correctAnswer: 3,
            },
                /*q-15*/ 
            {
                question:"Which of the following can diminish the chance of data leakage?",
                options: ["Steganography","Chorography","Cryptography","Authentication"],
                correctAnswer: 0,
            },
                /*q-16*/ 
            {
                question:"Which of the following ethical hacking technique is used for determining which operating system (OS) is running on a remote computer?",
                options: ["Operating System fingerprinting","Operating System penetration testing","Digital-printing","Machine printing"],
                correctAnswer: 0,
            },
                /*q-17*/ 
            {
                question:" Which of the following is the least strong security encryption standard?",
                options: ["  WPA3","WPA2","WPA","WEP"],
                correctAnswer: 3,
            },
                /*q-18*/ 
            {
                question:"What is the existence of weakness in a system or network is known as?",
                options: ["Attack","Exploit","ulnerability","Threat"],
                correctAnswer: 2,
            },
                /*q-19*/ 
            {
                question:" Which of the following do Cyber attackers commonly target for fetching IP address of a target or victim user?",
                options: ["ip tracker","emails","websites","web pages"],
                correctAnswer: 2,
            },
                /*q-20*/ 
            {
                question:"Stateful Multilayer Inspection firewall cannot perform which of the following?",
                options: ["Filter network layer packets","Check for legitimate session","Scans for illicit data packets at the presentation layer","Evaluate packets at application lager"],
                correctAnswer: 2,
            }, 
               /*q-21*/ 
               {
                question:"Which of the following is a disadvantage of Circuit-level gateway firewalls?",
                options: ["They’re expensive","They’re complex in architecture",
                      "They do not filter individual packets","They’re complex to setup"],
                correctAnswer: 2,
            }, 
               /*q-22*/ 
               {
                question:" Malware stands for ?",
                options: ["Multipurpose software","Malfunctioned software","Malicious software","malfunctioning of security"],
                correctAnswer: 2,
            }, 
               /*q-23*/ 
               {
                question: "PCT stands for___",
                options: ["Private Communication Technique","Private connecting Technology","Personal communication Technology","Private communication Technology"],
                correctAnswer: 3,
            }, 
               /*q-24*/ 
               {
                question:"Total types of scaning in cyber security is?",
                options: ["1","2","3","4"],
                correctAnswer: 2,
            }, 
               /*q-25*/ 
               {
                question:"What is CIA triad also known as?",
                options: ["AIC","NIC","AIN","ANC"],
                correctAnswer: 0,
            }, 

        ]
    },
    
];
