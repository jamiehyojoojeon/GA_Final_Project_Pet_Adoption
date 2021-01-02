import nacho1 from '../css/images/nacho1.jpg';
import nacho2 from '../css/images/nacho2.jpg';
import nacho3 from '../css/images/nacho3.jpg';
import willy1 from '../css/images/willy1.jpg';
import willy2 from '../css/images/willy2.jpg';
import willy3 from '../css/images/willy3.jpg';
import hercules1 from '../css/images/hercules1.jpg';
import happy from '../css/images/happy.jpg';
import captain1 from '../css/images/captain1.jpg';
import captain2 from '../css/images/captain2.jpg';
import duncan1 from '../css/images/duncan1.jpg';
import duncan2 from '../css/images/duncan2.jpg';
import jack1 from '../css/images/jack1.jpg';
import jack2 from '../css/images/jack2.jpg';
import jack3 from '../css/images/jack3.jpg';
import milo from '../css/images/milo.jpg';
import frostie from '../css/images/frostie.jpg';
import duke from '../css/images/duke.jpg';

function Pet(name, animalType, breed, lifeStage, gender, location, images, desc) {
    this.name = name;
    this.animalType = animalType;
    this.breed = breed;
    this.lifeStage = lifeStage;
    this.gender = gender;
    this.location = location;
    this.images = images;
    this.desc = desc;
}

const PetInfoList = [
    new Pet("Nacho", "Cat", "Bombay", "Adult", "Male", "Duluth Highway", [nacho1, nacho2, nacho3], "Hello, I'm Nacho! I'm a quiet, handsome man who is in search of the perfect forever home. I don't have any history with other animals or children, but I'm open to new opportunities. I'm a bit nervous here at the shelter, but my nice friends here at AHS are working with me every day to help me come out of my shell. I like to keep to my quiet corner, but I will still reach out for pets and chin scratches! Please come meet me, I'll be waiting for you!"),
    new Pet("Willy", "Dog", "Pit Bull Terrier Mix", "Young", "Male", "Mansell Road", [willy1, willy2, willy3], "Hi, I'm Willy and I'm a cute boy with beautiful black and white markings! I look forward to meeting you soon, and I just know we are going to be best friends. I love to be petted and touched, so you can pet me any time... I may even ask to be petted! I get along well with the other dogs at the shelter and currently in a foster home with a child. Do you think I might be the perfect match for you? I am a big , strong active boy ready for adventures!"),
    new Pet("Hercules", "Dog", "German Shepherd Mix", "Young", "Male", "Howell Mill Road", [hercules1], "I am the absolute biggest snuggle bug! I love to lay down with a good bone and hang out with my people. My foster family took me out to a dog park and I was great at meeting other pups, but I haven't gone through the full playtime experience yet. I generally warm up to guests once I get to know them to them,so I probably need a quieter home or someone who can work with me on this. My foster family says that I am super smart though and that I love to learn new things! I know that I would make the sweetest and most loving addition to your family and I look forward to meeting you."),
    new Pet("Happy", "Cat", "Domestic Short Hair Mix", "Young", "Female", "Mansell Road", [happy], "I look forward to meeting you soon, and I just know we are going to be best friends. My hobbies include purring (a lot!), exploring the world (there's so much to see!), and getting into a little trouble (I'm a kitten after all!). I don't have much life experience yet, but I'm willing to learn if you have the time to teach me. Do you think I might be the perfect match for you? I sure hope so. Love"),
    new Pet("Captain", "Dog", "Pit Bull Terrier Mix", "Young", "Male", "Duluth Highway", [captain1, captain2], "Hello, and I am a sweet, friendly, affectionate, young fella. I love everybody, and everybody loves me! I also LOVE attention, so please feel free to pet me anytime. I love my canine foster sister, and we've become best friends in our short time together. We enjoy playing and cuddling together. I would love to live with an active doggy playmate in my forever home to help me burn off some of my youthful energy, and we would have a blast. If you have a dog(s), I would love to meet them to see if we would get along."),
    new Pet("Duncan", "Dog", "Siberian Husky Mix", "Young", "Male", "Howell Mill Road", [duncan1, duncan2], "I am very friendly, love people of all ages and love to be petted and touched. I have a sweet personality and an adorable, hard-to-resist face I am a big guy with long legs and can be a bit to handle on my leash when walking and getting into the car. I do have moments of walking nicely, and maybe we can work on that together. A small yard or outside space to romp and show you how playful I can be would make me happy. A nice volunteer took me on a Doggie Day Adventure to a nice park, and then we spent the rest of the day at home and with her family. I enjoyed playing with a couple of 5-year old kids, and I also got along well with her dog. If you have a dog(s), I would love to meet them to see if we would get along. "),
    new Pet("Jackie", "Dog", "Cattle Dog Mix", "Adult", "Female", "Duluth Highway", [jack1, jack2, jack3], "Hi, I'm Jackie and I'm a pretty fawn and white girl! I look forward to meeting you soon, and I just know we are going to be best friends. I love to be petted and touched, so you can pet me any time... I may even ask to be petted! I don't have much known history with dogs, cats, or kids, but would love to meet your current dog or children to see if we'd get along! I am pretty low-key - I'm playful but also love a good, long nap! I am mostly housebroken but might require a little bit more training."),
    new Pet("Milo", "Cat", "Domestic Short Hair Mix", "Kitten", "Male", "Duluth Highway", [milo], "Hi,  I am one of the most majestic, stunning kitties. I am extremely sweet and loving, and literally hug you when you let me out of my condo! I'm an athletic boy, so need an adopter who can provide playtime daily (or at least get me some interactive toys). I have quite the personality and promise to keep you entertained with my hilarious antics. I will make the best companion and lifelong side kick. I'd prefer to be an only cat. I may do ok with dogs, we can always test it out with slow introductions!"),
    new Pet("Frostie", "Dog", "Labrador Retriever Mix", "Puppy", "Female", "Howell Mill Road", [frostie], "Hello! I am looking for a new home! I am in a foster home with my brother Anthony. We like to play an snuggle together if you're looking for a pair! Please fill out an application to meet us in foster. "),
    new Pet("Duke", "Dog", "Terrier Mix", "Puppy", "Male", "Duluth Highway", [duke], "Hello I am one of several kittens living in a wonderful foster home, and we love playing together. I am proud to say I am the ring leader of this group, am outspoken yet very affectionate. I love to tumble around with my brothers, and we get along great. We don't pay much attention to the dog, and he doesn't pay much attention to us, so that's fine, too. I have a white spot on my tummy so you can tell me apart from the others. I always use the litter box and am getting to know the scratching post. I hope you are interested in me, and I would like to meet you soon.")
];

export default PetInfoList;