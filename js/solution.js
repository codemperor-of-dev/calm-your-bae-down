const solutionData = {
  1: {
    text: "Your girlfriend is giving you a chance to buy her food, then she will stop being mad at you. Her choice of food is \"{optional}\"",
    src: "../assests/dating.svg",
  },
  2: {
    text: "Your soulmate wants you to ask her out for a movie date, what you should probably do right now. Her choice of movie is \"{optional}\"",
    src: "../assests/solved.svg",
  },
  3: {
    text: "Your soulmat is willing to get a love gift from you, she assume you would give her \"{optional}\"",
    src: "../assests/solved.svg",
  },
  4: {
    text: "Your soulmate is facing a hard time with her family. Listen her, be with her and take great care of her.",
    src: "../assests/dating.svg",
  },
  5: {
    text: "Your girlfriend is having difficulties dealing with herself, she must have Low self-esteem. So let her know she's enough and take great care of her. ",
    src: "../assests/dating.svg",
  },
  6: {
    text: "Your girlfriend assumes that you are flirting with other girls, so stop flirting with other girls and start prioritizing her presence.",
    src: "../assests/solved.svg",
  },
  7: {
    text: "Your soulmate is having feeling that you don't care about her anymore, she feels lonely without your attention around. We suggest you to text her, contant her often.",
    src: "../assests/solved.svg",
  },
  8: {
    text: "Sometimes good things just need a break. We advise you should break up for a while and reflect your feelings.",
    src: "../assests/missedChance.svg",
  },
};

const params = new URLSearchParams(location.search);
const solutionId = params.get("id");
const optional = params.get("optional");

const solutionText = document.getElementById("solutionText");
const solutionImage = document.getElementById("solutionImage");

solutionText.innerText = solutionData[solutionId].text.replace("{optional}", window.atob(optional));
solutionImage.src = solutionData[solutionId].src;