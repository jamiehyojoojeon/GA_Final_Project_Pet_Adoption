import React from 'react';
import '../css/style.css';
import '../css/responsive.css';

class AdoptionProcess extends React.Component {


    ListHowToAdopt = [
        "The adoption interview and paperwork usually takes about an hour to complete (including waiting time) and you will take your adopted animal with you when the adoption paperwork is completed.Please do not try to adopt in a hurry.",
        "Adoptions are cut off every day about 30 minutes prior to closing and possibly earlier if volume is high.Weekends are busy and you may have to wait more than an hour (especially in the afternoons) so please be prepared.",
        "AHS does not hold animals and all adoptions are done on a first come, first served basis.Certain exceptions may apply.",
        "AHS accepts debit cards, credit cards and cash for adoption fees; we do not accept personal checks."
    ]

    ListRequirements = [
        "Adopters will be asked to complete a preliminary adoption questionnaire.",
        "Adopters must be 18 years old with a valid picture I.D.",
        "If you lease or rent, get permission from your landlord or the primary resident prior to adoption. AHS reserves the right to contact your landlord for verification.",
        "Meet and greets are not required of all animals but may be deemed necessary by AHS staff."
    ]

    ListAdoptionFees = [
        "The cost for AHS to care for our animals prior to adoption almost always exceeds the adoption fee.",
        "Not all of our adoption pricing is the same. The reason for this is to ensure that AHS has the ability to care for those animals in great need, including who require extensive rehabilitation and/or are in our care for an extended period of time.",
        "What is a Plus One adoption fee? These are animals who are in high demand and whose adoption fee includes that of another harder-to-adopt animal in AHS care. Therefore, people who adopt a Plus One animals are not only directly changing the life of the animal they are taking into their home but also another animal in the shelter who needs extra help in finding that second chance.",
        "The adoption fee for each animal will be listed on their adoptable page on our website.",
        "Our adoption fees are designed to ensure that AHS is able to provide necessary care for all of our animals- especially those who need more time and care before they’re available for adoption.",
        "30 days of PetFirst Pet Insurance",
        "Initial vaccinations and deworming",
        "Spay or neuter",
        "Healthy Start Certificate at VCA Animal Hospitals towards initial exam and health guarantee within 10 days of adoption",
        "An identifying microchip inserted under your pet’s skin with initial registration in the database",
        "A collar and Atlanta Humane Society identification tags",
        "A 4 pound bag of the Purina One dry food the animal has been eating during his or her stay with AHS"
    ]

    ListQustions = [
        "I saw an animal online, is it still available? Our website is updated in real time as animals come and go from the adoption floor. As long as the animal’s information is listed, the animal is currently available for adoption. Please note that there are times when an animal is in the process of being adopted and will be momentarily unavailable but still listed on the website until the adoption is submitted in our system.",
        "I am on the way to adopt that animal, can you hold it for me? Can I pay the adoption fee today and come back later to pick it up? AHS does not hold animals and all adoptions are done on a first-come, first-served basis. Once the adoption is completed and the fee is paid, you must take the animal with you at that time.",
        "What is your return policy? AHS believes in finding permanent, loving homes for animals and does not offer “trial” adoptions. We do, however, understand that sometimes an adopted animal turns out to be a poor match for their new home. Animals adopted from Atlanta Humane Society may be returned at any point during their life to the admissions department which is open 7 days a week from 9am-3pm. Animals adopted from Atlanta Humane Society will be admitted under any circumstances, unless State law or Local ordinances dictate otherwise. The animal must be returned by the person that adopted the animal. I may return the animal, for any reason, within 30 days for a ONE TIME ONLY- EXCHANGE, at AHS’s discretion. AHS will honor this ONE TIME exchange for up to 60 days. If another adoption is not appropriate or the exchange expires, then the adoption fee will be considered a donations. NO REFUND WILL BE GIVEN.",
        "How big will this puppy get? Puppies can be expected to grow to 6-8 times their weight at 8 weeks of age. AHS staff may give you an estimate of your puppy’s adult weight but we are unable to make any guarantees. If size is a large concern, please consider adopting a fully grown adult dog.",
        "What should I bring with me to adopt? Please be sure to bring a photo ID and cash or a credit card for the adoption fee (personal checks are NOT accepted). The primary caregiver is required to be present to go through the adoption process. Any children 5 and under and, in some cases, any existing dogs living in the home will be required to be present and meet the animal prior to adopting. Meet and greets are not required but may be deemed necessary by AHS staff.",
        "I saw an animal that I’m interested in on your website but it doesn’t have any photos. Can you send me some? AHS relies on our volunteers to take photos for us and we post them as soon as we are able to, usually within a few days of the animal coming available for adoption. Highly adoptable animals are frequently adopted before any photos are posted so interested adopters are discouraged from waiting for a photo to come meet any animal they are interested in adopting.",
        "Can you tell me this animal’s history? Is it housebroken? Does it get along with cats, other dogs or children? AHS will share whatever information is available about an animal’s previous home(s) during the adoption process but we rarely know their entire history. Just because an animal was reported to be housebroken and get along with children in the last home, doesn’t necessarily mean they will act the same in their new home. Adopters should be prepared to do some housetraining with any animal adopted from us. Children and other dogs living even part time in the home are encouraged to meet the dog prior to adoption to help determine compatibility.",
        "I’m wanting to adopt a dog, but why do you require my dog to live indoors? Proper socialization of your new pet is essential to his or her new life with you. Pets will need to be a part of your family unit to help prevent behavior and socialization issues which can arise from a lack of interaction. In order to create the proper bonding with your pet, he or she will need to live with you indoors and is a part of our adoption requirements."
    ]

    render() {
        return (
            <main className="main-content">
                <section className="intro">
                    <h1>Adoption Process</h1>
                    <p>Here’s what to expect when adopting a dog or cat from the Atlanta Humane Society</p>
                    <p>We have lots of wonderful animals to fall in love with here at Atlanta Humane Society and when you’re
                    ready, one of our adoption counselors will help you through the process. We are here to help 7 days
                    a week so please call 404-875-5331 or email Howell Mill adoptions or Mansell adoptions with any
					questions you may have.</p>
                </section>
                <section className="inner-content">
                    <div className="process-container">
                        <ToggleList
                            title="How to Adopt"
                            listInfo={this.ListHowToAdopt}
                        />
                        <ToggleList
                            title="Basic Requirements for Adoption"
                            listInfo={this.ListRequirements}
                        />
                        <ToggleList
                            title="Adoption Fees"
                            listInfo={this.ListAdoptionFees}
                        />
                        <ToggleList
                            title="Frequently Asked Adoption Questions"
                            listInfo={this.ListQustions}
                        />
                    </div>
                </section>
            </main>
        )
    }
}

class ToggleList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayInfo: false,
        };
    }

    ToggleDisplay() {
        this.setState({
            isDisplayInfo: !this.state.isDisplayInfo
        });
    }

    render() {
        return (
            <span>
                <div className={this.state.isDisplayInfo ? 'process-list-btn open' : 'process-list-btn'}
                    onClick={() => { this.ToggleDisplay() }}>
                    <i className="fas fa-paw"></i>&nbsp;&nbsp;{this.props.title}
                </div>
                <div className={this.state.isDisplayInfo ? 'process-list process-list-toggle' : 'process-list'}>
                    <ul>
                        {
                            this.props.listInfo.map((currentListItem) => {
                                return (
                                    <li>
                                        {currentListItem}
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </span>
        );
    }
}

export default AdoptionProcess;