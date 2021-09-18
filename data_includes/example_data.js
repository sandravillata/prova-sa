var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq(startsWith("practice"), startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");

//var shuffleSequence = seq("consent", "instructions", sepWith("sep", seq("practice", startsWith("unannonced.filler"), shuffle(rshuffle(startsWith("test"),startsWith("filler")), startsWith("open_ended_question")))), "exit");


var showProgressBar = false;


var defaults = [
    
    "Separator", {
        transfer: 1000,
        normalMessage: "",
        errorMessage: "",
        ignoreFailure: true,   // if true never displays an error message
    },
    
    "DashedSentence", {
        mode: "self-paced reading",
        blankText: "+",
        display: "in place",
        showAhead: false,
    },
    "AcceptabilityJudgment", {
        as: ["1", "2", "3", "4", "5", "6", "7"],
        presentAsScale: true,
        instructions: "",
        leftComment: "(Very bad)", rightComment: "(Very good)"
    },
    "Question", {
        as: [["f"], ["j"]],
        autoFirstChar:true,
        presentHorizontally: true,
        randomOrder: false,
        showNumbers: false,
    },
    "Message", {
        hideProgressBar: true
    },
    "Form", {
        hideProgressBar: true,
        continueOnReturn: true,
        saveReactionTime: true
    }
];


var items = [

     ["sep", "Separator", { }],
    
    ["consent", "Form", {consentRequired: true, html: {include: "consent.html" }} ],
            
    ["exit", "Form", {consentRequired: false, html: {include: "exit_MTurk.html" }} ],

    ["instructions", "Form", {consentRequired: false, html: {include: "instructions.html" }} ],
      
    ["open_ended_question1", "Form", {consentRequired: false, html: {include: "open_ended_question1.html" }} ],
    ["open_ended_question2", "Form", {consentRequired: false, html: {include: "open_ended_question2.html" }} ],
   
   


// test


// item 17
[["test.adj.nonisl.short.bare.1.17",17], "AcceptabilityJudgment", {s: "Who thought that the man guzzled the cocktail?"}],
[["test.adj.isl.short.bare.2.17",17], "AcceptabilityJudgment", {s: "Who laughed because the man guzzled the cocktail?"}],
[["test.adj.nonisl.long.bare.3.17",17], "AcceptabilityJudgment", {s: "What did you think that the man guzzled?"}],
[["test.adj.isl.long.bare.4.17",17], "AcceptabilityJudgment", {s: "What did you laugh because the man guzzled?"}],


// item 18
[["test.adj.nonisl.short.bare.1.18",18], "AcceptabilityJudgment", {s: "Who thought that the lovebird bought the ring?"}],
[["test.adj.isl.short.bare.2.18",18], "AcceptabilityJudgment", {s: "Who winked because the lovebird bought the ring?"}],
[["test.adj.nonisl.long.bare.3.18",18], "AcceptabilityJudgment", {s: "What did you think that the lovebird bought?"}],
[["test.adj.isl.long.bare.4.18",18], "AcceptabilityJudgment", {s: "What did you wink because the lovebird bought?"}],


// item 19
[["test.adj.nonisl.short.bare.1.19",19], "AcceptabilityJudgment", {s: "Who thought that the attorney revealed the name?"}],
[["test.adj.isl.short.bare.2.19",19], "AcceptabilityJudgment", {s: "Who coughed because the attorney revealed the name?"}],
[["test.adj.nonisl.long.bare.3.19",19], "AcceptabilityJudgment", {s: "What did you think that the attorney revealed?"}],
[["test.adj.isl.long.bare.4.19",19], "AcceptabilityJudgment", {s: "What did you cough because the attorney revealed?"}],


// item 20
[["test.adj.nonisl.short.bare.1.20",20], "AcceptabilityJudgment", {s: "Who thought that the girl accepted the proposition?"}],
[["test.adj.isl.short.bare.2.20",20], "AcceptabilityJudgment", {s: "Who smiled because the girl accepted the proposition?"}],
[["test.adj.nonisl.long.bare.3.20",20], "AcceptabilityJudgment", {s: "What did you think that the girl accepted?"}],
[["test.adj.isl.long.bare.4.20",20], "AcceptabilityJudgment", {s: "What did you smile because the girl accepted?"}],


// item 21
[["test.adj.nonisl.short.bare.1.21",21], "AcceptabilityJudgment", {s: "Who thought that the committee rehashed the policy?"}],
[["test.adj.isl.short.bare.2.21",21], "AcceptabilityJudgment", {s: "Who yawned because the committee rehashed the policy?"}],
[["test.adj.nonisl.long.bare.3.21",21], "AcceptabilityJudgment", {s: "What did you think that the committee rehashed?"}],
[["test.adj.isl.long.bare.4.21",21], "AcceptabilityJudgment", {s: "What did you yawn because the committee rehashed?"}],


// item 22
[["test.adj.nonisl.short.bare.1.22",22], "AcceptabilityJudgment", {s: "Who thought that the actor misread the words?"}],
[["test.adj.isl.short.bare.2.22",22], "AcceptabilityJudgment", {s: "Who laughed because the actor misread the words?"}],
[["test.adj.nonisl.long.bare.3.22",22], "AcceptabilityJudgment", {s: "What did you think that the actor misread?"}],
[["test.adj.isl.long.bare.4.22",22], "AcceptabilityJudgment", {s: "What did you laugh because the actor misread?"}],


// item 23
[["test.adj.nonisl.short.bare.1.23",23], "AcceptabilityJudgment", {s: "Who thought that the preacher mentioned the scandal?"}],
[["test.adj.isl.short.bare.2.23",23], "AcceptabilityJudgment", {s: "Who coughed because the preacher mentioned the scandal?"}],
[["test.adj.nonisl.long.bare.3.23",23], "AcceptabilityJudgment", {s: "What did you think that the preacher mentioned?"}],
[["test.adj.isl.long.bare.4.23",23], "AcceptabilityJudgment", {s: "What did you cough because the preacher mentioned?"}],


// item 24
[["test.adj.nonisl.short.bare.1.24",24], "AcceptabilityJudgment", {s: "Who thought that the agent botched the coverup?"}],
[["test.adj.isl.short.bare.2.24",24], "AcceptabilityJudgment", {s: "Who wavered because the agent botched the coverup?"}],
[["test.adj.nonisl.long.bare.3.24",24], "AcceptabilityJudgment", {s: "What did you think that the agent botched?"}],
[["test.adj.isl.long.bare.4.24",24], "AcceptabilityJudgment", {s: "What did you waver because the agent botched?"}],


// filler
["unannonced.filler.7F.01", "AcceptabilityJudgment", {s: "It seems to me that Robert can't be trusted."}],
["unannonced.filler.1F.01", "AcceptabilityJudgment", {s: "There might mice seem to be in the cupboard."}],
["filler.1F.02", "AcceptabilityJudgment", {s: "Mike prefers tennis because Jon baseball."}],
["filler.1F.03", "AcceptabilityJudgment", {s: "Jenny cleaned her sister the table."}],
["filler.2F.01", "AcceptabilityJudgment", {s: "There had all hung over the fireplace the portraits by Picasso."}],
["filler.2F.02", "AcceptabilityJudgment", {s: "Lily will dance who the king chooses."}],
["filler.3F.01", "AcceptabilityJudgment", {s: "The specimen thawed to study it more closely."}],
["filler.3F.02", "AcceptabilityJudgment", {s: "With that announcement were many citizens denied the opportunity to protest."}],
["filler.4F.01", "AcceptabilityJudgment", {s: "There is likely a river to run down the mountain."}],
["filler.4F.02", "AcceptabilityJudgment", {s: "Richard may have been hiding, but Blake may have done so too."}],
["filler.5F.01", "AcceptabilityJudgment", {s: "The ball perfectly rolled down the hill."}],
["filler.5F.02", "AcceptabilityJudgment", {s: "Lloyd Webber musicals are easy to condemn without even watching."}],
["filler.6F.01", "AcceptabilityJudgment", {s: "There are firemen injured."}],
["filler.6F.02", "AcceptabilityJudgment", {s: "Someone better sing the national anthem."}],
["filler.7F.02", "AcceptabilityJudgment", {s: "Laura is more excited than nervous."}],
["filler.7F.03", "AcceptabilityJudgment", {s: "I hate eating sushi."}],


// practice
["practice.7P", "AcceptabilityJudgment", {s: "She was the winner."}],
["practice.1P", "AcceptabilityJudgment", {s: "Promise to wash, Neal did the car."}],
["practice.4P", "AcceptabilityJudgment", {s: "The brother and sister that were playing all the time had to be sent to bed."}],
["practice.6P", "AcceptabilityJudgment", {s: "The children were cared for by the adults and the teenagers."}],
["practice.2P", "AcceptabilityJudgment", {s: "Ben is hopeful for everyone you do to attend."}],
["practice.5P", "AcceptabilityJudgment", {s: "All the men seem to have all eaten supper."}],
["practice.3P", "AcceptabilityJudgment", {s: "They consider a teacher of Chris geeky."}],

];
