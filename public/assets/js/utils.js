export const radioList = [
  {
    frq: "140.40",
    name: "Meryl Silverburgh",
    text: `A cardboard box? I heard stories from my uncle, but I always though he 
    was pulling my leg...I...I've got no comment.`,
    img: "char/meryl_perfil.png",
  },
  {
    frq: "140.55",
    name: "Roy Campbell",
    text: `Snake, don't forget this is a covert operation. There are lots of bad
    guys and only one of you. If you're spotted, you'll be surrounded 
    before you know it.
  `,
    img: "char/roy_campbell.png",
  },
  {
    frq: "140.60",
    name: "Nastasha Romanenko",
    text: `That is a mine detector. It works by searching for metal objects. It 
    will even find Claymores that are hidden with optic stealth 
    technology. It is set so that the position of the land mines will 
    show up on your radar. All you have to do is equip the mine detector 
    and keep an eye on your radar. Use it carefully.`,
    img: "char/natasha.png",
  },
];

export const formatedNumbers = (values) => {
  const parte1 = values.slice(0, 3);
  const parte2 = values.slice(3, 6);

  const formated = `${parte1}.${parte2} `;
  return formated;
};
