import React from 'react';
import '../css/style.css';
import '../css/responsive.css';

class DogTrainingContents extends React.Component {
    render() {
        return (
            <main className="main-content">
                <section className="intro">
                    <h1>Dog Training</h1>
                    <p><strong>Dog Training Courses Offered At the Atlanta Humane Society</strong></p>
                    <p>The Atlanta Humane Society offers a variety of classes for first timers as well as more advanced dog
                    students and their owners. The introductory Basic Obedience Class is a six week course that will
                    give
                    you the knowledge to have a more rewarding relationship with your dog. Classes are held once a week,
                    for
					about one hour per session.</p>
                    <p>AHS also offers Intermediate Obedience Classes that are designed to follow the Basic class, and
                    prepare
                    you for public places with your companion, including cafes, parks and other dog-friendly gathering
                    spots. For a dog who isn’t suitable for class, or for those people whose schedules cannot
                    accommodate a
                    class, we also offer private training lessons at both AHS locations.
				</p>
                    <p>
                        We also offer free behavioral assistance through email for dog and cat owners.
                        If you need something we do not provide, email us and we can probably point you in the right
                        direction.
				</p>
                </section>
                <section className="inner-content">
                    <div className="training-container">
                        <div className="training-menu-ul">
                            <div className="training-menu-li">
                                <a href="#basic">
                                    <i className="fas fa-paw"></i>
								Basic<br />Obedience Classes
							</a>
                            </div>
                            <div className="training-menu-li">
                                <a href="#intermediate">
                                    <i className="fas fa-paw"></i>
								Intermediate<br /> Obedience Classes
							</a>
                            </div>
                            <div className="training-menu-li">
                                <a href="#private">
                                    <i className="fas fa-paw"></i>
								Private<br /> Dog Training
							</a>
                            </div>
                        </div>
                        <div className="training-details">
                            <div id="basic" className="training-detail">
                                <h3>BASIC OBEDIENCE CLASSES</h3>
                                <p>
                                    The Atlanta Humane Society’s Basic Obedience classes give you the knowledge to have a
                                    more
                                    rewarding relationship with your dog by showing you how to teach your dog how best to
                                    behave
                                    in your household. Lessons include: pay attention, sit, stay, walk on leash without
                                    pulling,
                                    lie down, wait, come (all on leash), and more—though classes are NOT just about
                                    “commands.”
							</p>
                                <p>
                                    Classes last six consecutive weeks from the start date, once weekly, for about one hour
                                    per
                                    session, and homework is required. The object is to communicate more effectively with
                                    your
                                    pet and bond with him through rewards such as attention, praise, and treats, and keep
                                    him on
                                    the right track with positive leadership. Though specific “problem behaviors” such as
                                    chewing, excessive digging, or barking are not specifically covered, you will find that
                                    many
                                    of these behaviors disappear once you begin interacting with your dog using the proven
                                    methods we teach. Even dogs who already have a pretty good grasp of these commands can
                                    benefit from the socialization and added distraction of class, as well as our exclusive
                                    Leadership Protocols and Self-Control Exercises. It is never too late to have a great
                                    relationship with your dog!
							</p>
                                <p>
                                    AHS Basic Obedience Classes are a great bargain at only $139 for the full 6-week session
                                    (though they are worth twice that) and include things other classes do not.
							</p>
                            </div>
                            <div id="intermediate" className="training-detail">
                                <h3>Intermediate Obedience Classes</h3>
                                <p>
                                    The Next Step class is a great way to take the foundation of training you and your dog
                                    have
                                    begun with the Atlanta Humane Society to the next level. It is designed to prepare you
                                    to
                                    take your dog out in public and enjoy cafes, parks, picnics, or other dog-friendly
                                    gathering
                                    spots, knowing your pooch will walk nicely next to you and then calmly lie next to your
                                    chair—even as strangers, other dogs, and other distractions surround you. We work on
                                    extended stays with major distractions, on- and off-leash recalls, better leash skills,
                                    a
                                    “place” command, and a “meet and greet” exercise that teaches your dog to control
                                    himself
                                    during human interaction.
							</p>
                                <h4>Prerequisites</h4>
                                <p>
                                    Graduation from the Atlanta Humane Society Basic Obedience Class within the last 24
                                    months;
                                    or completion of at least (4) hours of private instruction via Private Behavior Lessons
                                    at
                                    the Atlanta Humane Society (more may be required depending on homework follow-through,
                                    dog’s
                                    age, and dog’s temperament). Basic Training Classes are not all alike. While we
                                    appreciate
                                    any training you have done with your puppy or dog so far, our Intermediate Class is only
                                    for
                                    dogs trained at the Atlanta Humane Society. It is not suitable as a follow-up to classes
                                    taken elsewhere because it is designed to naturally flow from our Basic Training Class
                                    (or
                                    private lessons), and because we teach protocols in our Basic Class that other places do
                                    not.
							</p>
                                <h4>Cost</h4>
                                <p>
                                    The “Next Step” Intermediate Classes are just $85 for the 4-week session (all including
                                    dogs; this class does not have an orientation). All classes last one hour (pre-class
                                    socialization starts 15 minutes prior to start time for applicable dogs) and take place
                                    at
                                    the Howell Mill Campus, located at 981 Howell Mill Rd. N.W. in Atlanta, or at the
                                    Mansell
                                    Campus, 1565 Mansell Rd., Alpharetta, GA 30009. Classes are taught in the Shelter
                                    parking
                                    lot, though we have a backup area inside in the event of inclement weather. The final
                                    class
                                    (Week 4) moves from the Shelter to a public venue close by for the Graduation ceremony,
                                    so
                                    that your dog can show off his skills in public!
							</p>
                            </div>
                            <div id="private" className="training-detail">
                                <h3>Private Dog Training</h3>
                                <p>
                                    You have a dog. You love your dog, but he has a few…quirks, let’s call them. And you’d
                                    rather he not. You see, dogs don’t have problem behaviors, really. Dogs just have
                                    behaviors.
                                    When we don’t appreciate those behaviors, we label them “problems.” One man’s problem
                                    behavior is another man’s “oh, isn’t that adorable!” (Yeah, it’s adorable when it ain’t
                                    happening to you, buddy.)
							</p>
                                <p>
                                    So before you go labeling Fido’s behavior as “problem,” you need to understand that Fido
                                    has
                                    absolutely no problem whatsoever with anything he does. Everything he does makes perfect
                                    sense to him, even if you have no earthly idea why he does it. He doesn’t label his
                                    behaviors; he just behaves. The problem is not the dog’s…it’s ours.
							</p>
                                <p>
                                    Does that mean you are stuck with Fido’s…quirks? Not typically. Dogs need to know how to
                                    live in our homes safely and happily, and most “problem behaviors” can be solved with
                                    the
                                    right approach and some consistent work from you. We are here to help you!
							</p>
                                <p>
                                    Classes last six consecutive weeks from the start date, once weekly, for about one hour
                                    per
                                    session, and homework is required. The object is to communicate more effectively with
                                    your
                                    pet and bond with him through rewards such as attention, praise, and treats, and keep
                                    him on
                                    the right track with positive leadership. Though specific “problem behaviors” such as
                                    chewing, excessive digging, or barking are not specifically covered, you will find that
                                    many
                                    of these behaviors disappear once you begin interacting with your dog using the proven
                                    methods we teach. Even dogs who already have a pretty good grasp of these commands can
                                    benefit from the socialization and added distraction of class, as well as our exclusive
                                    Leadership Protocols and Self-Control Exercises. It is never too late to have a great
                                    relationship with your dog!
							</p>
                                <div className="training-img">
                                    <img src="https://atlantahumane.org/wp-content/uploads/2012/09/dog_8882.jpg" alt="" />
                                </div>
                                <p className="private-lessons">
                                    All private lessons are held <strong>at the Atlanta Humane Society, either at the Howell
									Mill Campus or the Mansell Campus.</strong> They are taught by our Behavior &
								Training
								Manager Mailey McLaughlin, M.Ed., who has over 30 years of experience working with dogs
								and
								their people. They are by appointment, typically during the day. Most slots (Saturdays
								especially) fill up quickly.
							</p>
                                <p>
                                    <strong>PRIVATE LESSONS</strong> are by appointment and are <strong>1 hour each</strong>
								(approximately) and the cost is <strong>$75</strong> . Don’t let the low price fool you!
								The
								instructor is very knowledgeable and has decades of experience.
							</p>
                                <p>
                                    <strong>ASSESSMENTS</strong> are approximately <strong>35-40 minutes</strong> and the
								cost
								is <strong>$49.</strong> They are by appointment only. The instructor will assess your
								dog
								and give you her recommendations for whether classes, or private lessons, would be best,
								and
								how she would work with you and your dog. NOTE: no instruction is included in the
								assessment, but we do give advice willingly.
							</p>
                                <p>
                                    <strong>Payment</strong> is required to hold a lesson spot, as spots fill quickly. Once
								you
								have arranged a time and date with the instructor, she will send you a link to pre-pay
								online with a credit or debit card.
							</p>
                                <p>
                                    <strong>Lessons and assessments</strong> are done on the following days and begin at the
								times listed. Please email us with your general availability, and we will respond with
								specific dates and times to fit your criteria.
							</p>
                                <p className="training-p-color">
                                    <strong>Typically, Saturdays and Wednesday evenings fill first. If you have daytime
									availability Tuesday-Thursday, you will likely get in sooner.</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        );
    }
}

export default DogTrainingContents;