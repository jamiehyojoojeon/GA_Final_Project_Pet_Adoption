import React from 'react';
import '../css/style.css';
import '../css/responsive.css';

class SprayNeuterContents extends React.Component {
    render() {
        return (
            <main className="main-content">
                <section className="intro">
                    <h1>Spray and Neuter</h1>
                    <p>The Atlanta Humane Society provides affordable spay and neuter services for owned cats and dogs in
                    Georgia thanks to the financial support and subsidization from partners including the Holland M.
                    Ware
                    Charitable Foundation, the Petco Foundation, PetSmart Charities and Georgia Department of
                    Agriculture.
				</p>
                    <div className="vet-info">
                        <p className="vet-service">Low-cost spay/neuter appointments are open to the public and available
                        Wednesday-
						Saturday at the Atlanta Humane Society’s Howell Mill Campus in Atlanta</p>
                        <div className="vet-img">
                            <img src="https://atlantahumane.org/wp-content/uploads/2018/07/petco-foundation-logo-160x50.gif"
                                alt="" />
                            <img src="https://atlantahumane.org/wp-content/uploads/2018/07/PetSmart-Charities-Grantee-Web-Badge-160x160.gif"
                                width="90" height="90" alt="" />
                        </div>
                    </div>

                </section>
                <section className="inner-content">
                    <div className="vet-service-container">
                        <h3>APPOINTMENT TIMES</h3>
                        <p>Check-in and check-out times for our low-cost spay and neuter clinics for all appointment dates
                        are
						as follows.</p>
                        <p>
                            <strong>Check-in</strong><br />
                                Female dogs: 7:00 a.m.<br />
                                    Male dogs: 7:30 a.m.<br />
                                        All cats: 7:30 a.m.
					</p>
                        <p>
                            <strong>Check-out</strong><br />
                                All pets: 3:30 p.m. on the dot! <br />
                                    Please note that there is a late fee if you check-out at 3:45 p.m. or later.
					</p>
                    </div>
                    <div className="vet-service-container">
                        <h3>LOW-COST SPAY/NEUTER COSTS AT OUR HOWELL MILL CAMPUS</h3>
                        <p>Our spay/neuter services are subsidized by generous donors so that we can provide affordable
                        spay/neuter services to our Atlanta community. Appointments are open to all, but we do offer
                        further
						reduced, low-income costs* for those who qualify.</p>
                        <table className="vet-cost">
                            <thead>
                                <tbody>
                                    <tr>
                                        <th>Service</th>
                                        <th>Cost</th>
                                    </tr>
                                    <tr>
                                        <td>Dog Spay/Neuter</td>
                                        <td>$90 ($50 low-income cost*)</td>
                                    </tr>
                                    <tr>
                                        <td>Cat Spay/Neuter</td>
                                        <td>$50 ($40 low-income cost*)</td>
                                    </tr>
                                    <tr>
                                        <td>Rabies Vaccine</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr>
                                        <td>DA2PP Vaccine (Dog)</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr>
                                        <td>FVRCP Vaccine (Cat)</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr>
                                        <td>Nail Trim</td>
                                        <td>$5</td>
                                    </tr>
                                    <tr>
                                        <td>E-Collar</td>
                                        <td>$10</td>
                                    </tr>
                                    <tr>
                                        <td>Hernia Repair</td>
                                        <td>$15</td>
                                    </tr>
                                    <tr>
                                        <td>Cryptorchid (undescended testicles)</td>
                                        <td>$15</td>
                                    </tr>
                                </tbody>
                            </thead>
                        </table>
                        <p>*Low-income cost (limit 3/household per year)
                        This is the cost of spay/neuter and other services available to pet owners who are currently
						receiving government assistance. Clients applying for low-income costs of services must:</p>
                        <ul>
                            <li>register their own pets and bring them in on their scheduled appointment date (family
                            members,
                            friends, neighbors, etc. may not bring pets in for low-income clients)
						</li>
                            <li>present a valid, state issued picture ID and proof (with the same name/address) of any of
                            the
                            following: Social Security Income, Unemployment Benefits, Medicaid/Medicare, Disability
                            Income,
                            or Foodstamp Benefits (EBT card)
						</li>
                        </ul>
                    </div>
                </section>
            </main>
        );
    }
}

export default SprayNeuterContents;