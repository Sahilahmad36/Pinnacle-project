import styl from "../assets/img/rules.jpg";
import img from "../assets/img/rulesimage.png"
import img2 from "../assets/img/rules2image.png"
import graph from "../assets/img/rulesgraph.png"

const Discipline = () => {
    return (
        <>
            <div className="relative h-[40vh] md:min-h-screen flex flex-col justify-center px-4  ">
                <div
                    className="absolute top-0 inset-0 bg-cover bg-center rounded-2xl m-4 mt-20 
                                               h-[100%] sm:h-[100%] md:h-[60%] lg:h-[70%] bg-black "
                    style={{
                        backgroundImage: `url(${styl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        opacity: 0.9,
                        zIndex: -2,
                    }}
                ></div>
                <div
                    className="absolute inset-0 bg-black rounded-2xl m-4 mt-20 
                                               h-[100%] sm:h-[100%] md:h-[60%] lg:h-[70%]"
                    style={{
                        opacity: 0.2,
                        zIndex: -1,
                    }}
                ></div>
                <div
                    className="relative z-10 text-center lg:mb-40 ">
                    <h1 className="text-3xl mb-4 mt-[20%] md:mt-0 text-white lg:text-5xl sm:text-4xl"
                        style={{ fontFamily: "'Stoke', Georgia, Times New Roman, serif" }}
                    >


                        <span className='lg:text-6xl text-4xl'>R</span>ules  & <span className='lg:text-6xl text-4xl'>R</span>egulations
                    </h1>
                    <h2 className="text-sm font-semibold mb-2 text-white lg:text-xl sm:text-lg">
                        The Pinnacle Condominium Association
                    </h2>

                </div>
            </div>


            {/* ////////////// rules details ////////////// */}

            <p className='text-center md:text-[1rem] text-[0.8rem] font-[600] text-[#C2AB92]'>5-Star Oceanfront Condominium</p>
            <h1 className='md:text-[2rem] text-[1rem] text-center mt-4 md:mt-8' >The Pinnacle Condominium <br /> Association</h1>

            <img
                src={img}
                alt=""
                className='h-[17rem] object-contain mx-auto mt-4 md:mt-8 w-[90%] md:w-auto'
            />

            <h1 className='md:text-[2rem] text-[1.5rem] font-[700] text-center  md:mt-4 mt-1'>Effective September 23, 2021</h1>
            <p className='text-[0.9rem] md:text-[1.1rem] w-[96%] md:w-[75%] mx-auto text-center md:mt-8 mt-4 font-[600]'>This document does not contain all the Rules, Regulations and Restrictions of The Pinnacle
                Condominium Association, Inc. Please review the Declaration of Condominium and the
                Bylaws for other Rules, Regulations, and Restrictions of The Pinnacle Condominium
                Association, Inc.</p>

            <p className='w-[96%] md:w-[75%] mx-auto text-[0.9rem] md:text-[1rem] mt-8'>• These rules and regulations shall be cumulative with the covenants, conditions and restrictions set
                forth in the Declaration of Condominium, provided that the provisions of same shall control over
                these rules and regulations in the event of a conflict or a doubt as to whether a specific practice or
                activity is or is not permitted.</p>
            <p className='w-[96%] md:w-[75%] mx-auto text-[0.9rem] md:text-[1rem] mt-2'>• All these rules and regulations shall apply to all Unit Owners, Renters, Residents, their visitors,
                family members, employees, contractors, service professionals, etc., even if not specifically so
                stated in portions hereof.</p>
            <p className='w-[96%] md:w-[75%] mx-auto text-[0.9rem] md:text-[1rem] mt-2'>• These rules and regulations replace and supersede all prior rules and regulations of the
                Association.</p>


            <img
                src={img2}
                alt=""
                className='h-[17rem] object-contain mx-auto mt-4 md:mt-8'
            />

            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 1: EMPLOYEE RESTRICTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 2: CASH PAYMENTS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 3: KEY FOBs</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 4: MOVE-INS, MOVE-OUTS, DELIVERIES, CONTRACTORS & SERVICE WORKERS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 5: VISITORS AND RESIDENTS DEFINITIONS & RESTRICTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 6: PARENTAL RESPONSIBILITIES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 7: RESTRICTIONS ON PETS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 8: SOLICITATION & SURVEILLANCE</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 9: OBSTRUCTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 10: SIGNAGE</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 11: PARKING AND VEHICLE REGISTRATION</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 12: USE OF COMMON AREA FOR PARTIES AND FUNCTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 13: BEACH AND POOL</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 14: RESTRICTED AREAS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 15: DAMAGE RESPONSIBILITY</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 16: ATTIRE</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 17: SMOKING</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 18: BICYCLES, ETC.</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 19: AMENITY RESERVATION, HOURS OF OPERATION & RESTRICTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 20: BEACH/POOL CABANAS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 21: USE OF LUGGAGE CARTS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 22: ADDITIONS, ALTERATIONS, IMPROVEMENTS TO THE EXTERIOR LIMITED COMMON AREA</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 23: CHANGES TO COMMON HALLWAYS BETWEEN APARTMENTS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 24: PERSONAL PROPERTY</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 25: TRASH DISPOSAL & FLAMMABLE MATERIALS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 26: NOISE RESTRICTIONS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 27: UNIT EXTERIOR</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 28: HURRICANE SEASON &HURRICANE SHUTTERS</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 29: INCIDENT AND MAINTENANCE REPORTING</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 30: NUISANCES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 31: SOUND TRANSMISSION BETWEEN FLOORS TO THE APARTMENT BELOW</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 32: ENFORCEMENT OF RULES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 33: NEW RULES OR RULES CHANGES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 34: LEASING RESTRICTIONS & RENTAL PROCEDURES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 35: COMMUNICATING WITH THE BOARD AND DOCUMENT REQUEST PROCEDURES</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 36: IMPACT FEES WHEN REMODELING A UNIT</h4>
            <h4 className='w-[90%] md:w-[80%] mx-auto md:text-[1.2rem] text-[1rem] font-[500] mt-4'>RULE 37: ELECTRIC VEHICLES CHARGING STATIONS & TANKLESS ELECTRIC HOT WATER HEATERS</h4>

            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 1: EMPLOYEE RESTRICTIONS</h1>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'> a) Employees of the Association are not to be sent out by Unit Owners or Residents for personal errands.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'> b) The Board of Directors, through Management, shall be solely responsible for directing and supervising direct and
                indirect employees of the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'> c) Except authorized by Management, employees of the Association are NOT permitted at any time, during or after
                working hours, to perform any work, including minor work, for Residents or to solicit work from the Residents. This
                restriction applies to all persons providing a service to the Pinnacle Condominium. This restriction applies to
                maintenance and housekeeping personnel, front desk/building safety, valet attendants, Management personnel and all
                other staff members. Gathering mail for a Resident or keeping an eye on a Unit is not consider a violation of this rule.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>  d) No direct or indirect employees (including contractors & servicemen) are authorized to use any of the facilities or
                amenities; All direct & indirect employees (including contractors/servicemen) must wear name tags or badges.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Management is responsible for obtaining written acknowledgement from each person or company providing the above
                services to the Pinnacle Condominium, where it will be made clear that any violation of RULE 1 may result in the
                immediate termination of that person or company’s service to the Pinnacle Condominium.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Employees shall only park “head-out” in the parking spaces assigned by Management and must display an
                “Employee Parking” placard on dashboard.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>  g) No employee, Contractor or Service Worker (except upper management) is authorized to use the Resident restrooms
                located on the lobby level.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'> h) All employees are required to immediately report to the front desk any maintenance or housekeeping item that needs
                repair or cleaning.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'> i) All direct and indirect employees must leave the building within 15 minutes after the end of their shift. Employees are
                not permitted on the Association Property unless they are working.</p>

            {/* ///////////// rule 2 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 2: CASH PAYMENTS</h1>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) The Association shall not accept cash payments for maintenance dues, deposits or fees of any kind, as cash payments
                are not accepted at all. All payments must be done by check or by credit card. Any refund will be made in the same way
                it was received.</p>

            {/* ///////////// rule 3 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 3: KEY FOBs</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Active Key FOB shall only be issued to all registered and authorized Residents, over the age of 18 years old (16-18
                years old with parental/guardian approval), subject to limitations. No key FOBS shall be issued to Visitors (see RULE 5
                below for distinction between Residents and Visitors).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) No more than six (6) active Key FOBs will be allowed, at any one time, for Residents of 3-Bedroom Units. No more
                than four (4) active Key FOBs will be allowed, at any one time, for Residents of 2-Bedroom Units. As approved by the
                Board, on March 5, 2020, due to their larger interior living area, the following 2-bedroom units, will be considered
                2-bedroom “premium” units and treated as 3-bedroom units: 206, 2306, 2406, 2506, 2606, 2706, 2804, 2904, 3004,
                3104, 3204, 3302, 3402, 3502, 3602 and 3702.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Key FOBs are not transferrable. Each registered holder of a Key FOB must have his/her picture taken by Management.
                Key FOBs will be deactivated by Management upon confirming that a Key FOB is being used by a person who is not
                the registered user of that Key FOB. The fine for transferring or allowing the use of a key FOB by another is $100 for
                each occurrence.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) All Residents must purchase their own key FOBs from Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) All Unit-Owners’ key FOBs will be deactivated upon leasing their units.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) The cost to activate or re-activate a Key FOB shall be $25. New key FOBs will be issued at a cost of $50. This charge
                also applies to lost or misplaced key FOBs. This fee may be changed by Management without prior notice.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>) Key FOBs of Unit Owners (or their Renters) will be deactivated for access to common area amenities in the event a
                Unit Owner is 90 or more days delinquent in his or her payment of Regular or Special Assessment(s) or any other
                monetary obligation owed to the Association. In addition, reservation of Amenities will be temporarily disabled until
                the account is brought current. Owners’ key FOBs will also be deactivated when owners rent out their units.</p>

            {/* ///////////// rule 4 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 4: MOVE-INS, MOVE-OUTS, DELIVERIES, CONTRACTORS & SERVICE WORKERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Move-ins, Move-outs, and Deliveries must be scheduled through the Management Office.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Receiving hours are the following: Monday through Friday, 9:00AM – 4:00PM.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Contractors, Deliveries, Move-ins or Move-outs are not permitted after hours, weekends or during holidays observed
                by the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Notice for Move-ins and Move outs must be given at least seven (7) days prior to properly schedule a reservation for
                the service elevator. Any other deliveries must be scheduled not less than 24 hours in advance.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Access to the building by a contractor, vendor, or service person is only through receiving area, not the main lobby.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Moving vehicles are permitted to park in designated areas only and must not park on the entrance drive or obstruct
                any parking areas. All moving trucks must check-in with Receiving Officer for Parking Pass and to be shown parking
                area designated for them.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) One service elevator in each tower has been designated for move-ins, move-outs and deliveries. Exclusive use of the
                elevator is not possible.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) All work including cutting, painting, carpentry, etc. must be performed inside of the units being worked on or off the
                premises. The elevator foyers, balconies and hallways are not available as a work area. Tile is to NEVER be cut outside
                on the balcony; it must be done within the interior of apartment or off-site (never in garage or on other common area
                property).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Moving Company must remove all boxes and debris from the Condominium Property after unpacking.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Residents may discard neatly broken-down boxes by the dumpster rooms, located in the north-side of the lower garage
                (service level).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Management reserves the right to demand contractors, service personnel, moving and delivery companies to leave the
                property for violation of the rules of the Association. Future access to the Property many be denied to those who violate
                the rules.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) For move-ins and move-outs, a refundable security deposit of $1,000 is required to protect against damage to the
                Common Elements.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) For Deliveries, a refundable deposit of $1,000.00 may be required in case of damages to the Common Elements.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) The elevator hatch must never be opened, except as authorized by management.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) A person coming to the Pinnacle Condominium to provide services (other than employees and full-time service contractor personnel) must be registered as a Contractor with the Receiving Officer and present a valid government-
                issued picture ID. Contractors are not allowed to use any of the common area facilities or services of the Pinnacle
                <br />
                <br />
                Condominium. All Contractors must register daily with the Receiving Officer and may only access the Pinnacle
                Condominium between the hours of 9:00 AM and 4:00 PM Monday through Friday, except in emergency situations or
                as indicated by Management. Contractors must carry their Pinnacle Contractor’s Badge with them always while at the
                Pinnacle Condominium and must follow the printed rules provided to them by the Receiving Officer or Management.
                All Contractors must be licensed and insured according to federal, state and local regulations and abide by the Pinnacle
                Rules. Contractors must complete all demolition work within ten (10) business days, or the unit owner would face
                a daily fine of $100. All Demolition and construction work must be scheduled with the management office.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) Pinnacle Condominium will close the building to contractors, Receiving Dock deliveries, move-ins/outs and any unit
                construction during these dates: New Year’s Day, Martin Luther King Day, President’s Day, Memorial Day,
                Independence Day, Labor Day, Columbus Day, Thanksgiving Day, the day after Thanksgiving, Christmas Day and
                during the Holiday Black-Out Schedule, which is usually the last 2 weeks of the year. Residents are to check with
                management as to each year’s specific “Holiday Black-Out Schedule”. The Management Office shall also be closed
                during the above days and dates.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>q) All Trainers, Coaches, Instructors and Therapists using the common areas of the Association, must be properly pre-
                registered and approved by Management. They must be properly licensed or certified and carry liability insurance namingThe Pinnacle Condominium as additional insured.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>r) The Association’s staff and package room are not equipped to handle and/or store furnishings and/or any items that
                weights more than 35 pounds or larger than 9 cubic feet, at the most. Residents that send packages exceeding the
                above weight and size restriction will have to pay: a) $25 per extra pound, or fraction thereof, up to 85 pounds,
                plus $50 per extra pound, or fraction thereof, over 85 pounds and b) $25 per extra cubic foot, or fraction thereof.
                When sending packages exceeding these limitations, to avoid the extra charge, Residents must make arrangements to
                have the packages delivered directly to their units by a moving company. Such moving company must have appropriate
                license and insurance, naming the Association as additional insured. Make sure to timely reserve the freight elevator.
                Residents who do not pick-up packages within thirty (30) calendar days will have to pay a storage fee of $5 per
                cubic foot or fraction, for each calendar day beyond thirty (30) calendar days, with a minimum storage charge of
                $5 per day. Management, in its sole discretion, may send packages back to sender.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>s) The acceptance of packages, that come in or leave from the Association in corporate names, will be limited to
                packages for residents who live in the building and who are running their business out of their units.</p>

            {/* ///////////// rule 5 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 5: VISITOR AND RESIDENT DEFINITIONS & RESTRICTIONS</h1>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>) A Visitor is defined as a person that visits a Resident for the day, without overnight stay. To allow access to a Visitor,
                the Resident must authorize the entrance of such visitor(s) and the Resident must physically be in the building and
                accompany the Visitor for as long as the Visitor is in the building. Visitors are not entitled to have key FOBs. Only
                Residents 18 years old and older can authorize a Visitor (Residents age 16 -18 years may authorize Visitors with
                parental/guardian approval). Visitors are not allowed to authorize access to other Visitors. All Visitors must get properly
                registered at the Front Desk and carry the Visitor’s Pass on them while using or transiting through the common areas.
                Except for Special Events that have been pre-approved by Management, each unit can only register up to four
                (4) guests per day, if those guests would be using any of the common areas of the Pinnacle.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) A Resident is a person that resides at the Pinnacle for 24 hours or longer. Only Unit Owners, 18 years old and older,
                can authorize and pre-register another (future) resident.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) All future residents must be properly pre-registered with Management. The Unit Owner must attest that any such
                future resident is not paying rent for the use of the Unit. Upon arrival, all future residents, 18 years old and older, must
                present a valid government-issued picture ID to the front desk personnel. In addition, all Residents, 18 years old and older, must have their picture taken and must sign a statement indicating that they know, understand, and will abide by
                all the Rules and Regulations of the Pinnacle. An Owner must, at all times, occupy his or her Unit while an another
                properly registered resident is residing in his or her unit at The Pinnacle; unless, the other resident consists of immediate
                family; such, as parents, children or siblings, who are 18 years old or older. Management, at its sole discretion, may
                deny a New Resident Registration if Management has reasons to believe or suspects that such new resident is
                paying rent to the unit owner. Management may also void a previously approved New Resident Registration upon
                discovering that such new resident has paid rent to the unit owner or if Management learns that the owner is not
                occupying the unit. Unit owners violating this rule will be subject to a daily fine of $100, up to the maximum
                permitted by law, for each person registered as New Resident, multiplied times the number of days each person
                occupied the unit.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Residents may occupy their Unit on a full-time or part-time basis. The following live-in persons must be listed as
                Residents but are not allowed to use the common area facilities or services of the Pinnacle Condominium: Nurses,
                caretakers, housekeepers, nannies, pet sitters, service providers and employees of Residents.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Residents and Visitors must always obey all the Rules and Regulations of the Pinnacle Condominium.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Owners will be held liable for any damages, actions, noises, nuisances, etc. that may be caused by the Unit Residents,
                Visitors, or Renters.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Valet Parking for Residents and Visitors shall be at no additional cost, except when a special event by a Resident
                requires additional valet attendants. Each Resident must consult with Management as to the then current additional
                parking rates for special events.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Any person at the Pinnacle Condominium, unless an employee or a person or company providing services to the
                Pinnacle Condominium, must be a Visitor or Resident.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Only authorized and properly registered Residents can freely use the Pinnacle facilities, services and amenities, subject
                to the limitations of 5 d) above.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) It is the responsibility of Owners to update the “Resident Directory” with Management.</p>

            {/* ///////////// rule 6 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 6: PARENTAL RESPONSIBILITIES</h1>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Children will be the direct responsibility of their parents or legal guardians, including full supervision of them within
                the Condominium Property and including full compliance by them with these Rules and Regulations and all other rules
                and regulations of the Association. Loud noises will not be tolerated. All persons utilizing the pool and hot tub, who are
                not able to swim must be accompanied and/or supervised by a person who is able to swim.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) There shall be no conduct or behavior permitted in the common areas, including, but not limited to the halls, elevators,
                foyers or lobbies which would interfere with the rights of others to the peaceful enjoyment of the property.</p>

            {/* ///////////// rule 7 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 7: RESTRICTIONS ON PETS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Pets, birds, fish and other animals, reptiles or wildlife shall neither be kept nor maintained in or about the
                Condominium property except in accordance with the following, in addition to the applicable terms of the Declaration.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Dogs and cats shall not be permitted outside of their owner’s Unit unless attended by a responsible person and on a
                leash not more than six (6) feet long, which affords adequate control over the animal. There is one designated area for
                pets to relieve themselves and that is the “Pet Park” located at the south end of the property, accessed through the service
                level of the building. Pets are not permitted to roam freely or relieve themselves, on Pinnacle property, other than in the
                designated “Pet Park” area. Pets are not allowed to be left on balconies or any other common or limited common
                areas.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Fish or caged domestic (household-type) birds may be kept in the Units, subject to the Declaration.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) All residents are required to register their pet(s) with Management, provide veterinary records evidencing proper
                vaccination and a picture of the pet.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) The Pinnacle Condominium Association Board of Directors reserves the right to refuse or order the removal of any
                pet, including birds, dogs, or cats or any other type, which are in violation of the provisions of the Declaration or these
                Rules.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Pets must be carried or crated at all times when passing through the front desk/lobby area.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>) Not more than one (1) domesticated pet (i.e. dog or cat) may be kept in a unit at any one time and then only if such
                pet is (i) permitted to be so kept by applicable laws and regulations, (ii) not left unattended on balconies or in lanai areas,
                and (iii) generally not a nuisance to residents of other units or of neighboring buildings. A violation shall entitle the
                Association to require any pet to be permanently removed from the Condominium Property.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) The first time a complaint is received regarding a pet nuisance, including but not limited to a dog barking on the
                balcony or elsewhere, or a pet being walked in areas, other than the designated grounds (except for purposes of transit
                to the designated pet walking area), a warning letter is to be sent to the Resident. The second time it happens, a $100
                daily fine may be imposed, up to the maximum amount permitted by law. In addition, the Board of Directors may vote
                to have the pet(s) permanently removed from the Unit and the Pinnacle Condominium.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Breeding animals anywhere on the Property or in a Unit is strictly prohibited.
                CITY OF SUNNY ISLES CODE FOR DOGS ON THE BEACH
                Section 5-4 of the City Code of Ordinances deems it unlawful to permit or allow any dog into or upon any Public Park
                or Beach. Violators are subject to an immediate fine from the City of $50.00.</p>
            {/* ///////////// rule 8 /////////////////////// */}

            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 8: SOLICITATION & SURVEILLANCE</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Solicitations by residents for charity or any other purpose must be authorized in advance by the Pinnacle
                Condominium Association Board of Directors.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) For protection, most of the Association’s common areas are being monitored by video cameras.</p>

            {/* ///////////// rule 9 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 9: OBSTRUCTIONS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) The sidewalks, entrances, passages, lobbies and hallways and like portions of the Common Elements shall not be
                obstructed nor used for any purpose other than for ingress and egress to and from the Condominium property; nor shall
                any carts, bicycles, carriages, chairs, tables or any other objects be stored therein, except in areas (if any) designated for
                such purpose.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Personal belongings shall not be left unattended in hallways, elevators, lobbies, stairs or other common areas. The
                Association cannot be responsible for such items.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Residents blocking fire stairs or fire exits will be subject to $100 daily fine.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) A written letter (e-mailed or left on the door) instructing occupants to remove items as indicated in letter from common
                hallway or other areas as determined by Management shall be considered adequate notice of a rule violation, and if not
                properly complied with, may result in $100 daily fine, up to the maximum amount permitted by law.</p>

            {/* ///////////// rule 10 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 10: SIGNAGE</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No sign, advertisement, notice or other graphics or lettering shall be exhibited, displayed, inscribed, painted or affixed
                in, on or upon any part of the Condominium or Association property, except signs used or approved by the Board of
                Directors of the Association. Additionally, no awning, canopy, shutter or other projection shall be attached to or placed
                upon the outside walls or roof of the Building or on the Common Elements, without the prior written consent of the
                Board of Directors of the Association.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Residents may not post signs or other notices on the Pinnacle property. A bulletin board serves for the use of official
                announcements only.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Special or individual announcements or notices may be available through the Association’s website, and such
                announcements or notices are subject to the prior Management approval.</p>

            {/* ///////////// rule 11 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 11: PARKING</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Valet parking is free to all Residents and their Visitors. All Visitors must get their valet parking ticket validated by
                the Front Desk upon ENTRY. Failure to do so will result in a charge to the parking ticket holder of $25 per hour, up to
                $100 per day. When valet service is not available, Residents & Visitors must park in the area specified by front desk
                personnel.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Valet parking is subject to availability. Self-parking is not allowed, except in the garage areas, at the Owner’s
                designated parking space(s). At no time shall any Resident or Visitor self-park on any area of the exterior ground lots
                of the Pinnacle property. These lots are reserved for use of Valet, day-contractors and vendors, and as designated by
                management. Any vehicle found illegally parked in these areas will be tagged by management and may be subject to
                towing by authorized city and county towing company at owner’s sole risk and expense. The Association shall not be
                liable for any damages incurred to your vehicle, nor any missing or stolen items.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Garage Access will only be provided to Residents. Non-commercial, vehicular garage access will be given according
                to the parking spaces owned. The cost to replace a garage access control device is $50.00. An Owner’s garage access
                device will be deactivated during the time Owner’s residence is being leased. The cost to activate or reactive a garage
                access device is $25.00.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Except as otherwise allowed by Management or the Board of Directors, only non- commercial vehicles and
                motorcycles registered and insured in the name of Owners, Residents or Renters are allowed in the parking garages and
                valet areas. No repair of vehicles shall be made on the Condominium Property. Violators will be subject to $100 daily
                fine, up to the maximum amount permitted by law.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Unit Owners who use rental cars may receive, at a cost to the unit owner, one garage access device for each parking
                space owned. Car Rental Agreements must be presented to Management, upon request.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Vehicles parked, in the outside parking areas by Valet, must display a parking ticket on the dashboard. Those vehicles
                must be parked Head-Out.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Contractor vehicles and vans must display a parking pass issued by the Receiving Officer.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Any unauthorized or illegally-parked vehicle is subject to towing with all recovery, towing and storage expenses to
                be the responsibility and risk of the owner of the vehicle.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) All non-assigned parking on Pinnacle Property is subject to availability.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) A Re-Assignment or Lease of parking garage spaces will be considered valid once approved by Management, upon
                written approval of the parking space owner. A parking space can only be re-assigned or leased to another Resident. No
                parking space can be re-assigned if the current parking space owner has his or her vehicle on-site.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) In the event of a hurricane or tropical storm, valet shall temporarily relocate all vehicles inside the parking garages
                and may use all available spaces until the storm passes. The Pinnacle and or Management will not be responsible for any
                cars that are damaged.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) Except for garage parking and parking by Contractors or Service Workers, all vehicles on Pinnacle property must be
                parked by the Pinnacle valet service. The only exceptions are: Pinnacle Employees authorized with a parking pass,
                utility, government, emergency, landscaping, commercial vehicles, moving vans or authorized delivery vehicles (for
                short term parking).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Real estate agents, massage therapists, tennis instructors, and other professionals providing goods or
                services to Residents, must have their vehicles valet parked.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) Employees shall park, head-out, in the parking spaces assigned by Management and must display parking
                placards issued by Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) The speed limit on all access roads and garage areas is (5) miles per hour.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) No repair or washing/detailing of vehicles shall be performed on the Condominium property, except as approved by
                Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>q) Due to space restrictions, jet skis, wave runners, boats, boat trailers, R.V.’s, motor homes, commercial or oversized
                vehicles, including pick-up trucks, are not permitted on the grounds without the prior written authorization of the
                Pinnacle Condominium Association Board of Directors.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>r) To alleviate parking problems, as determined by Management or the Association Board, valets may use owner
                parking spots as overflow parking, if it is reasonably assumed in advance that said owner is out of town and will not
                require the use of his/her parking space(s). These vehicles must clearly display a SEE VALET sign on the vehicle’s
                dashboard, with the car parked Head-Out. Should an owner arrive, the valet will immediately relocate the car. (Owners
                do not have the right to refuse their parking space(s) to be used for overflow parking).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>s) NO OVERNIGHT PARKING OF VANS, MOVING TRUCKS, U-HAUL (OR OTHER RENTAL TRUCK), “POD”
                OR OTHER STORAGE DEVICE OR ANY TYPE OF OTHER STORAGE OR COMMERCIAL VEHICLES IS
                ALLOWED. COMMERCIAL VEHICULAR ACTIVITIES, SUCH AUTO SALES, AUTO LEASING OR AUTO
                STORAGE IS NOT ALLOWED ON ASSOCIATION PROPERTY.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>t) The maximum number of vehicles registered to park on Pinnacle property for a 2-bedroom unit is two (2); for a 3-
                bedroom unit, the maximum is three (3); for combined units, the maximum is five (5). These limits are inclusive of the
                one (1) assigned parking space, inside the parking garage, that is reserved for the exclusive use of the unit. Outside
                parking for registered vehicles on Pinnacle property is not guaranteed and it is subject to availability. As approved by
                the Board, on March 5, 2020, due to their larger interior living area, the following 2-bedroom units, will be
                considered 2-bedroom “premium” units and treated as 3-bedroom units: 206, 2306, 2406, 2506, 2606, 2706, 2804,
                2904, 3004, 3104, 3204, 3302, 3402, 3502, 3602 and 3702.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>u) No vehicle without license plates, with dealer or other commercial plates is allowed. Vehicles with temporary tags
                are allowed, subject to being insured and for the period of validity of temporary tags only.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>v) All Residents leaving town, for a period longer that one week, must provide to the management office a duplicate set
                of the car key(s) for all vehicles parked in the parking garages of the Association. Such key(s) will be stored at a special
                lock-box, under surveillance at the Association’s Management Office. Failure to provide such duplicate key(s) will carry
                a daily fine of $100, up to the maximum amount allowed by law. Vehicles will only be moved by Valet in the event of
                emergency or for garage maintenance.</p>

            {/* ///////////// rule 12 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 12: USE OF COMMON AREA FOR PARTIES AND FUNCTIONS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) The Common Areas available for parties and functions are limited to the Social/Media Room and the Kids Room.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Reservation of these areas can only be done by Residents, upon Management approval and payment of the reservation
                fee to the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) A minimum of 72-hour notice must be provided for all parties and functions. A damage deposit in the amount of
                $1,000.00 shall be placed with the Association at the time the reservation is approved by Management. Residents are
                required to reserve the space in writing and must use the Social Room Reservation Form provided by management. If
                alcohol will be served, the vendor must have a valid license and insurance to serve liquor.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Residents reserving the facility are liable for all damages, if any, beyond the amount of the damage deposit.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Party/Catering companies must provide the Association with insurance certificates naming the Association as
                additional insured. Insurance Coverage must be for at least $1 Million; $5 Million if alcohol is being served.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) No Pinnacle pool or beach service shall be provided to the people attending the event, and no use of Pinnacle towels,
                chaise covers, umbrellas, etc. is allowed.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Management and or the Board of Directors reserve the right to approve or deny a party or function, in their sole and
                absolute discretion. Parties or functions thrown by Management or the Board are exempted from these rules.
            </p>

            {/* ///////////// rule 13 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 13: BEACH AND POOL RULES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Beach chairs, lounge pads, towels, umbrellas and cabana hoods will be available to Residents and registered Visitors
                on a “first come, first served” basis. No advanced reservations will be permitted. Pool & Beach Service is only available
                during hours when an attendant is on duty. BEACH & POOL SERVICE CAN ONLY BE REQUESTED BY
                RESIDENTS.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Beach equipment, including towels, cannot be removed from the Pinnacle pool and the beach areas.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Beach/pool attendants will not be responsible for any items left unattended or removed from chairs.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Persons who are incontinent or not toilet-trained are not allowed in the pool and Hot Tub, unless they are wearing
                adequate waterproof undergarments. Adults must always supervise young children in the pool and Hot Tub.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Physical games such as baseball, soccer, football, ball throwing, water balloons, and water guns, etc. are not permitted
                at the pool deck level or anywhere on Pinnacle property, except for the beach. The one exception is games, in the pool,
                with inflatable beach balls.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) The cushions on beach chairs and the pool lounge chairs must be covered with a Pinnacle assigned chair cover.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) No musical instruments or sound systems, other than headsets, can be used at the pool deck.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Except as authorized by management, each 3-Bedroom Unit shall be provided with up to six (6) beach chairs, up to
                three (3) umbrellas and up to three (3) side tables. Each 2-Bedroom Unit shall be provided with up to four (4) beach
                chairs, up to two (2) umbrellas and up to two (2) side tables. As approved by the Board, on March 5, 2020, due to
                their larger interior living area, the following 2-bedroom units, will be considered 2-bedroom “premium” units
                and treated as 3-bedroom units: 206, 2306, 2406, 2506, 2606, 2706, 2804, 2904, 3004, 3104, 3204, 3302, 3402, 3502,
                3602 and 3702. At their discretion, pool & beach attendants will close the umbrellas when it is not safe to keep them
                opened. Service will be conducted on a first-come, first-serve basis to Residents and their properly registered Visitors
                In order for Visitors to receive service, all Visitors must register at the front desk and carry the Visitor’s pass with them.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Weather permitting, Beach and Pool Service shall begin at 9 AM every day and end approximately one (1/2) hour
                before sunset, or 7:00 PM at the latest; at which time, Beach Service personnel will start to collect unused beach chairs
                and umbrellas. Beach or Pool Service will not be given to anyone walking to the building from the beach unless they are
                Pinnacle Residents. Beach & Pool Service may be closed earlier due to inclement weather.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Pool & Hot Tub hours are from sunrise to 9 PM, daily.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Only Pinnacle-provided towels are allowed on the Pool and Beach.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) No nude swimming or nude sunbathing is allowed on the Property.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) No food or drinks are allowed in the pool or within 3 feet from the pool. No glass containers are allowed anywhere
                on the pool deck and on the beach. The City of Sunny Isles Beach may also impose fines on violators.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) No one is allowed in the pool without proper swim attire. Rinsing is required before entering the pool or Hot Tub to
                remove body sweat or beach sand.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) No pets or animals are allowed to be on the pool deck or in the pool.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) All persons must have adequate swimming ability to use the pool or hot tub or be accompanied by a person with
                adequate swimming ability.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>q) In order to protect the integrity of the umbrellas and avoid bodily injuries that may be caused by blown away umbrellas,
                the use of the umbrellas will be temporarily discontinued when high (or gusty) winds exist. This decision will be at the
                sole discretion of the Pool & Beach attendants.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>r) Residents will be fined $100 for each pool and beach towel taken upstairs to the resident’s unit, including towels
                taken by the Resident’s visitor(s).</p>

            {/* ///////////// rule 14 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 14: RESTRICTED AREAS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No one is permitted access to restricted areas of the property, including the roof, mechanical areas and areas under
                construction or repair; unless, access has been approved by Pinnacle Management and the person is accompanied by a
                designated Pinnacle staff member. No one is allowed in the management offices or package room without permission.
            </p>

            {/* ///////////// rule 15 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 15: DAMAGE RESPONSIBILITY</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Unit Owners and Residents accept financial responsibility for any damage or soiling done by themselves, their
                dependents, Renters, their Visitors or their pets, to any part of the Condominium, or the Pinnacle property. This
                includes marking, engraving, denting, or defacing.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) A person who causes damage or soiling to Association property and fails to report it, shall be fined $100.00.
            </p>

            {/* ///////////// rule 16 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 16: ATTIRE</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) In all Pinnacle common areas, Residents and Visitors must wear appropriate attire that is consistent with common
                decency. To enhance the ambiance of the main lobby, all Unit Owners, Residents and Visitors are prohibited from
                entering the lobby or any area visible from the lobby, in bathing attire, or without shoes, shirt or other appropriate attire.
                Proper gym shoes, tops and bottoms must be worn all times while in the gym. Shirts must be worn by men at all times
                in all areas of the gym with the exception of the locker room.</p>

            {/* ///////////// rule 17 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 17: SMOKING (The Pinnacle Condominium Association, Inc. is a non-smoking building)</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Smoking is not allowed in any common area of The Pinnacle Condominium Association, including, but not limited
                to the pool deck, tennis court and valet area; except, for the Cigar Room and areas designated by the Board, if any.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Smoking is not allowed in any limited common area of The Pinnacle Condominium Association, including parking
                spaces, cabanas, balconies and terraces.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Throwing cigarette or cigarette butts on the floor or grass is a rule violation carrying a $100 fine for each instance.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Smoking is not allowed on any Association furniture, including benches, chairs, tables, pool and beach lounges.
            </p>


            {/* ///////////// rule 18 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 18: BICYCLES, ETC.</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Any conduct that unreasonably disturbs the quiet enjoyment of others or poses a safety risk, such as bicycle use, is
                not allowed in the lobby, hallways, ocean-side pool deck or other Common Areas or Association Property.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Bicycle users must use the receiving or upper garage pedestrian door to enter and depart the building.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c)All Residents must register their bicycles with Management and store bicycles in designated storage areas.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Neither the Association, nor Management, shall be responsible for damaged or stolen bikes.</p>

            {/* ///////////// rule 19 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 19: AMENITY RESERVATION, HOURS OF OPERATION & RESTRICTIONS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) The Tennis Court, Fitness Center and Massage Treatment Room are to be used only by Pinnacle Residents and their
                registered Visitors. Anyone using these facilities will be doing so at their sole risk.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The tennis court is to be used exclusively for playing tennis. Advance reservation, through the Association’s website
                is required.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Failure to reserve an Amenity will forfeit the right of the person using that Amenity.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Only persons with adequate knowledge of the use of the equipment in the Fitness Center may utilize such equipment.
                Any persons without such adequate knowledge must be accompanied by a person possessing such knowledge.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Each person using the Amenities shall do so at his/her own risk. Neither the Association, nor Management, assumes
                any liability.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Sneakers are required in the Tennis Court and Fitness Center. Shirts are required in the Fitness Center. Wet bathing
                suits are not permitted in the Fitness Center.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Food is not permitted in the Fitness Center. Beverages are permitted only in plastic-capped containers.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) The use of any equipment in the Fitness Center shall have a time limit of one hour when someone is waiting to use
                the same equipment.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Music is permitted only with headphones when a second person is present.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) The television is to be left on Fox cable news or CNN when a second person is present.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Refer to Amenity Reservation and Hours of Operation to inquire about reserving the use of an amenity and the times
                that amenities open and close daily.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) The Massage Room can only be used for its intended purpose.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) The Kid’s Room is for children under the age of seven (7) years old, who must always be supervised by an adult.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) Adults must properly dispose of all garbage.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) The Kids Room can be reserved for birthday parties, through Management.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) Amenity reservation through the Association’s website is highly recommended, as a resident with a reservation will
                have priority over anybody using the amenity without reservation.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>q) Front desk personnel are not authorized to make reservations for residents. Contact Management for help accessing
                the Association’s website. Only Residents, and their Visitors, can use the amenities.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>r) Residents using the amenities shall be responsible for any all damages caused to the common areas of the Pinnacle,
                the equipment, and bodily injury to themselves and others.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>s) Once a reservation is made, it must be cancelled if the amenity is not going to be used. The third time a Resident fails
                to cancel a reservation shall cause a suspension of the Resident’s rights to reserve such amenity for a period of 30 days.

                t) It is mandatory to have reservations (through the Association’s website) for the use of the: Tennis Court, Multi-
                Sports Room, Game Room, Library, Social/Media Room, Massage Treatment Room & Cigar Room
                <br /><br />
                THE TABLE BELOW SHOWS THE ALLOWED TIMES OF THE DAY THAT AN AMENITY CAN BE RESERVED.
                <br /><br />
                HE USE OF THE TENNIS COURT, FITNESS CENTER, MULTI-SPORTS ROOM, SWIMMING POOL
                AND ALL OTHER BUILDING AMENITIES IS AT YOUR OWN RISK.</p>

            {/* ///////////// rule 20 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 20: BEACH/POOL CABANAS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No structural changes may be made without the prior written approval of the Board of Directors and the governing
                municipality.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Kitchens or cooking facilities are not allowed inside the cabanas.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Cabanas can never be used as a living space or slept in overnight, except for the cabanas with interior building
                entrances, such as PC-4 and PC-6.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The use of Pool and Beach Cabanas is limited from dawn to dusk with no overnight use.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                Cabanas cannot be rented separate from the condominium unit to which the cabana is appurtenant to. Owners
                relinquish cabana access rights and all common area use rights upon leasing of their unit. <br />
                PINNACLE maximum Back-to-Back <br />
                Amenity Reservation & <br />
                Hours of Operation from to time reservations <br />
                TENNIS COURT 7:00 AM 9:00 PM 1.5 HOURS N O Sunrise Sunset n/a 7 days <br />
                MULTI-SPORTS ROOM 7:00 AM Midnight 1.5 HOURS N O 5:00 AM Midnight 75 7 days <br />
                LIBRARY/CONFERENCE ROOM 7:00 AM Midnight 2.0 HOURS N O 7:00 AM Midnight 72 7 days <br />
                MASSAGE ROOM 7:00 AM Midnight 1.5 HOURS N O 7:00 AM Midnight 75 7 days <br />
                SOCIAL/MEDIA ROOM 7:00 AM Midnight 3.0 HOURS N O 7:00 AM Midnight 72 7 days <br />
                GAME ROOM 7:00 AM Midnight 2.0 HOURS N O 7:00 AM Midnight 72 7 days <br />
                CARD/CIGAR ROOM 7:00 AM Midnight 2.0 HOURS N O 7:00 AM Midnight 72 7 days <br />
                GYM/FITNESS CENTER n/a n/a n/a n 5:00 AM Midnight 70 n/a <br />
                KIDS ROOM n/a n/a n/a n/a 5:00 AM Midnight 72 n/a <br />
                SWIMMING POOL & HOT TUB n/a n/a n/a n/a Sunrise Sunset n/a n/a <br />
                Advance <br />
                Reservation <br /> <br />

                reservation times <br /> <br />

                Amenity <br />
                Opens at <br />
                Amenity <br />
                Closes at <br />
                Room <br />
                Temperature <br />
                in degrees <br />
                Fahrenheit <br />


            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Cabana owners are responsible for maintenance, repairs and security of their own pool or beach cabanas.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Cabana owners are encouraged to carry insurance against all losses and damages to their cabanas and their contents.</p>

            {/* ///////////// rule 21 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 21: USE OF LUGGAGE CARTS</h1>


            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                a) No one, except valet, is permitted to use the valet Bellman (luggage, grocery, dolly) carts.
            </p>

            {/* ///////////// rule 22 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 22: ADDITIONS, ALTERATIONS &IMPROVEMENTS TO EXTERIOR LIMITED COMMON AREA</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) There shall be no additions, alterations, or improvements to the exterior limited common areas, without the expressed
                written approval of the Board of Directors.</p>

            {/* ///////////// rule 23 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 23: CHANGES TO COMMON HALLWAYS (ELEVATOR FOYERS) BETWEEN APARTMENTS</h1>


            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All furniture and/or accessories in the limited common areas on all landings (elevator foyers), between Units, shall be
                supplied by the Association, according to building standards and Board of Directors’ approval. These items are the
                property of the Association.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The wall coverings, carpet, furnishings and accessories on each floor cannot be changed, without Management
                approval.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) A Unit Owner who desires to change anything on his or her elevator foyer must do so at their own cost and expense
                and only after receiving written consent of the other Unit Owner on that floor; And, upon written approval by
                Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The Association shall clean the elevator foyers that have been changed by Unit Owners with the approval of the
                Association, with the following exceptions: polishing or repairing of any flooring, other than carpet installed by the
                Association; i) repairing or replacing damaged wall coverings; and, ii) replacing specialty lights or light bulbs, unless
                those light bulbs are provided to Management by the Unit Owners.</p>

            {/* ///////////// rule 24 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 24: PERSONAL PROPERTY</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All personal property of Unit Owners, Residents or Visitors must be stored in their respective Units, assigned storage
                bins, cabanas, bicycle racks and water-sports storage area. Neither the Association, nor Management, shall be responsible
                of any personal property of Unit Owners, Residents or Visitors.</p>

            {/* ///////////// rule 25 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 25: TRASH DISPOSAL & FLAMMABLE MATERIALS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No garbage, refuse, trash or rubbish shall be left or disposed of in any area, except in areas designated by the
                Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Disposing of any non-biodegradable items in toilets or sinks is strictly prohibited. Residents who use the plumbing
                for such purposes will be held financially responsible for any necessary repairs.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Trash shall be disposed of in trash bags through the trash chute located on each elevator foyer. Trash left in hallways,
                exit stairs or anywhere else in the Common Areas is prohibited.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Boxes and Recyclables must be disposed of in the designated bins located in service level garbage area. Alternatively,
                Residents may contact the front desk to schedule the removal of Boxes and Recyclables by housekeeping.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) No flammable, combustible or explosive fluids, chemicals or substances shall be kept in any Unit, Common Area of
                the Association or disposed of down the trash chute. Residents must alert maintenance if any material they are disposing of is flammable, combustible or explosive.</p>

            {/* ///////////// rule 26 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 26: NOISE RESTRICTIONS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No Resident or Visitor shall make or permit any disturbing noises by himself or his family, servants, employees, pets,
                agents, etc., nor permit any conduct by such persons or pets that will interfere with the rights, comforts or conveniences
                of other Residents or Visitor.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) No Resident or Visitor shall play or permit to be played any musical instrument, nor operate or permit to be operated
                a phonograph, television, radio or sound amplifier within the Unit in such a manner as to unreasonably disturb or annoy
                other Residents or Visitor, regardless of the time of day or night.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) No Unit Owner, Resident or Visitor shall sing or play musical instruments at any time which unreasonably disturbs
                other Unit Owners, Residents or Visitors.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Between the hours of 10:30 PM and 8:00 AM, volume on home entertainment equipment including such items as
                televisions, musical instruments and stereos must be kept at a level which does not unreasonably interfere with or
                otherwise disturb other Owners or Residents. Hallway noises must also be kept to a minimum between these hours.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e)No hard-surface floor covering of any type, except for carpeting, may be installed in any Unit without the prior written
                consent of the Board of Directors. This includes patio and balcony areas.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Construction, assembly, repair or patch work of any type inside or outside units using tools such as hammers, electric
                or battery-driven drills, saws, scrapers, sanders and any other noise-making instruments – are permitted only between
                the hours of 9 A.M. to 4 P.M. on weekdays. No such work is permitted on weekends and holidays, as observed by
                Pinnacle Management, and after 4 P.M. or before 9 A.M. on weekdays. In certain cases, the Board may grant longer
                working hours to accelerate the completion of a project.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) These rules apply to contractors, repairmen, handymen, mechanics, Owners, Residents, their family and Visitors.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) In a bona fide emergency, the all Residents must immediately notify the front desk of the emergency to allow
                Contractors or Service Workers to work outside the (above) posted hours. Front Desk must immediately notify Pinnacle
                Management and/or a member of the Pinnacle Condominium Association Board for immediate evaluation of the
                emergency.</p>

            {/* ///////////// rule 27 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 27: UNIT EXTERIOR</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Except as permitted by law, a Resident shall not cause anything to be affixed or attached to, hung, displayed or placed
                on the exterior walls, doors, balconies or windows of the Building. This includes satellite dishes or antennas of any kind.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                b) Notwithstanding the foregoing, any Resident may display one portable removable United States flag in a respectful
                way during the following days: Inauguration Day, Martin Luther King Jr.’s Birthday, Lincoln’s Birthday, Washington’s
                Birthday, Armed Forces Day, Veteran’s Day, Memorial Day, Flag Day, Independence Day, Labor Day, Constitution
                Day, Columbus Day, Navy Day, Veteran’s Day, Thanksgiving Day, Christmas & New Year’s Day.
            </p>
            <br />
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Curtains and drapes (or linings thereof) which face on exterior windows or glass doors of Units shall be white or off-
                white in color and shall be subject to disapproval by the Board, in which case they shall be removed and replaced with acceptable items. Curtains colored other than white or off-white must first meet the design criteria set forth by the Association. An architectural modification request form can be obtained from the Association manager’s office. Please fill out and await approval prior to any installation.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Outdoors television and radio antennas are not permitted; nor are electrical wiring or machines that protrude through
                the walls of a residence.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) No articles other than patio-type furniture and small plants shall be placed on the balconies, patios or other Common
                Elements. No linens, clothes, clothing, curtains, rugs, mops or laundry of any kind, or other articles shall be shaken or
                hung from any of the windows, doors, balconies, terraces or other portions of the Condominium or Association property.
                When watering plants or cleaning balconies, excess water must not runoff to the unit(s) below; as such, each
                violation carries a daily fine of $100.00.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Furniture, umbrellas and plants visible above the height of the railing from the outside of the building are not permitted.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) No mechanical equipment or air conditioning units may be installed by any Resident, without being first approved by
                Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) No Unit shall have any aluminum foil placed in any window or glass door or any reflective or tinted substance placed
                on any glass, unless approved, in advance by the Board of Directors in writing. No unsightly materials may be placed
                on any wall, window or glass door or be visible through such window or glass door.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Residents shall not enclose, nor cover, nor alter balconies and terraces in any way.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Residents shall not affix, paint or cover the exterior windows, walls or doors in any fashion whatsoever.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Loose items cannot be placed on the ledge of balconies or terraces.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) Cooking devices shall not be used on balconies or terraces.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Upon any extended absence all objects must be removed from your balcony or terrace; especially during Hurricane
                Season.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) No Unit Owner, Resident or Visitor shall permit anything to fall from a balcony, window or door of the Condominium
                or Association Property, nor sweep or throw from the Condominium or Association Property any dirt, water or other
                substance onto any other balcony or elsewhere in the Building or upon the Common Elements.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) No unit owner shall cause or allow improvements or changes to any unit, Limited Common Elements, appurtenant to
                either, Common Elements or Association Property, including but not limited to, painting or other decorating of any
                nature, installing any electrical wiring, television antenna, machinery, or air conditioning units, which in any manner
                change the appearance of any portion of the building or the exterior of said unit, without obtaining the prior consent of
                the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) Management must be informed in advance of a unit owner’s intent to install a satellite television antenna in their unit
                or their balcony. A form must be completed and filed in the Management office, which indemnifies the Pinnacle
                Condominium Association of any liability for damage, or injury that may be caused by the exterior satellite dish antenna.
                If approved, the coaxial cable is required to be run through the top most point of the permanently fixed glass window
                casing, by drilling a 3/8” hole through the casing, making sure to keep away from the glass, pushing the coaxial through
                the holes, then silicone the area as to prevent water penetration. The coaxial located on the exterior shall be secured in
                the track of the casing in a nature specified, and secured around the corner wall, to the satellite dish, with specified
                hardware, as to secure it to the wall and floor. The antenna must be installed upon an area under the exclusive control
                of the Owner, and in a manner such that it can be removed from its mounting in very high winds and during hurricane
                warnings. Those residents leaving the Pinnacle for extended periods of time and during hurricane season must remove
                their dish antenna from the balcony. The antenna must be no larger than 1 meter in diameter, cream color, and cannot
                be attached to the exterior of the building or any portion of the balcony or railing. The one exception is that if you have
                tile, on your balcony, a dish may be permanently installed to the tile by using screws no longer than 2 inches. This
                installation must be under the supervision of the Pinnacle Management. Written permission, with all details, must be
                submitted to Management in advance. The antenna or dish must be mounted in free-standing mounts as described below
                and cannot extend over the edge of the balcony railing or in any manner that would, in the sole opinion of the Association,
                create a safety hazard or threat to the integrity of the building surface or structure. Under no circumstances can the
                satellite extend over the balcony railing. The minimum requirements for installing a freestanding exterior satellite
                antenna are: <br />
                – A pre-poured concrete container with a minimum height of 18” and minimum diameter of 28” will be used on the
                balcony for the freestanding mount. The container must not be attached to the balcony, walls, windows, doors, or railings.
                – Two poles must be sunk into the container using Quick Crete, or a similar cement product. The first, a large pipe, must
                be at least 4” in diameter and 12” in height sunk in concrete inside the container. The second, a 1 5/8” in diameter pole
                that attaches to the antenna, is sunk into the drying concrete inside the larger pipe.
                – The remainder of space in the container should be filled with the cement product (space may be left for decorative
                rocks or another fill). <br />
                – The height/length of the 1 5/8” pipe for mounting of the dish depends upon the positioning of the unit and the angle
                needed to be in proper site of the satellite. <br />
                – The one-meter or smaller dish is then mounted to the 1 5/8” pole.
                – A picture will be made by Management of the final installation and placed in the unit’sfile. <br />
                Failure to comply with the requirements of this rule may result in the Association having the antenna and all supporting
                equipment removed at the unit owner’s expense. <br />
                q) Management must be informed, in advance, when a Unit Owner’ intends to install Film on their windows. Board
                approval is required before a film is installed. <br />
                r) The Pinnacle Management Office must be informed in advance of a Unit Owner’s intent to install Balcony Retractable
                Screen Doors. The installation must be under the supervision of Management. An architectural modification request
                form must be submitted to the Management Office and can be obtained from the Management Office. Once the Unit
                Owner has completed the application and submitted the forms to the Management Office the Office will then forward
                the application to the Architectural and Engineering Committee or the Board for approval. Once approval has been
                granted to the Unit Owner, the Unit Owner may begin the installation. The Management Office will require that a photo
                be taken of the installation once it has been completed. “Balcony Screen Doors” shall mean a Retractable Screen used on
                the balcony sliding glass doors which shall be permanently affixed or attached in a manner consistent with manufactures
                specifications as its main purpose or incidental to its main purpose, as protection against ultraviolet radiation to help maintain <br />
                a stable indoor climate and to prevent insects from flying into theunit, as follows: <br />
                – The style of the Retractable Screens as adopted by the Pinnacle Condominium Board of Directors shall be asfollows:
                – All sliding glass doors (1/4’ tempered glass panels) with access from the balcony are to use retractable Screens also known
                as Sliding Glass DoorScreens. <br />
                – All Retractable screens are to be mounted flush against the sliding glass door frame. <br />
                – Retractable Screens shall be made of vinyl material with one of two colors, clear or a tinted black tone color to conform
                with the natural tint of the existing tint of the sliding glass door. <br />
                – The aluminum frame color of the retractable screens is to be “white” matching the same color of the existing window frames
                and balcony railing. <br />
                – Those residents leaving the Pinnacle for extended periods of time and during hurricane season must leave retractable
                screens in the retracted or open position. <br />
                – All screws used to install screens are to be marine-gradestainless steel. <br />
                – Manufactures installation specifications must be submitted along with architectural modification request form.</p>

            {/* ///////////// rule 28 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'> 28: HURRICANE SEASON & HURRICANE SHUTTERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) In case of a Hurricane Watch, Residents must remove all items from balconies & terraces within 48 hours and firmly
                place dry towels in the tracks of all sliding doors. Upon the Unit Owner’s request, the Association may bring in items
                left on balconies, and/or places dry towels in the tracks of the sliding glass doors, at a cost of $100 per unit. The
                Association shall not be responsible for any damage to the Unit in the process of preparing a Unit for a Hurricane.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) A Resident who plans to be absent during the hurricane season must prepare the Unit prior to departure, by designating
                a responsible firm or individual to care for the Unit should a hurricane threaten the Unit, or should the Unit suffer
                hurricane damage; Therefore, the Association must have on file the names(s) of such firm or individual. Such firm or
                individual shall be subject to the approval of the Association and must abide by the Pinnacle Rules & Regulations.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                c) “Hurricane Shutter” shall mean any device, installation, equipment or appliance, whether permanent or
                temporary, affixed or attached in any manner to any portion of the exterior of a building, used, either directly or indirectly,
                as its main purpose or incidental to its main purpose, as protection against storm damage, water penetration by driven rain or
                rising water, wind damage or damage from physical objects or projectiles carried by wind or storm. <br />
                The style of hurricane shutters shall be as follows: <br />
                – All doors and windows (1/4” tempered glass panels) with access from the balcony are to use Roll-up Style Shutters also
                known as Roll down shutters. <br />
                – All hurricane shutters are to be mounted flush against (alongside touching) the sliding glass door and window frame. <br />
                – All hurricane shutters must beable to be opened from the inside. <br />
                – All hurricane shutters shall be made ofaluminum material. <br />
                – The color of all hurricane shutters is to be “white” matching the same color of the existing window frames and railings. <br />
                – All hurricane shutters must meet the minimum requirements for hurricane protection under the South Florida Building Code. <br />
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) No Hurricane Shutter shall be closed, except during the time necessary to protect the unit from severe storm, water or
                wind damage. At all other times, the Hurricane Shutter shall remain open. Under no circumstances shall a Hurricane Shutter
                be closed for any reason, including, but not limited to, security protection or lighting.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) The Hurricane Shutter shall, always, whether open or closed, must be fastened securely in place in accordance with
                manufacturer, building code and installation requirements.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                ) The very specific details, for the installation of Hurricane Shutters and the application, are available from Management.
                Do not purchase Hurricane shutters unless those are specifically approved by Management or the Board.
            </p>

            {/* ///////////// rule 29 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 29: INCIDENT AND MAINTENANCE REPORTING</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All Residents are encouraged to report common area water leakage, moisture buildup, the presence of mildew,
                equipment not operating properly, burnt-out bulbs, etc. From a personal injury standpoint, these reports can include trip
                and fall hazards or any other possibly unsafe conditions that may have been observed. Our Management welcomes and
                encourages the report of any of these issues to the front desk or Management.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) If at any time your Unit is involved in an incident which involves a leak of any sort you must immediately report this
                incident to the Management Office. As a Unit Owner, Resident or Renter you are responsible to immediately contact an
                insured water restoration company, who is qualified to make all necessary repairs and treatments to the Unit to prevent
                any type of mold or mildew from growing. If the Unit Owner, Resident or Renter fails to follow the proper procedures,
                that Unit Owner, Resident or Renter may be held liable for damages to other units or common areas of the building.</p>

            {/* ///////////// rule 30 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 30: NUISANCES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>
                a) No nuisances shall be allowed on the Condominium or Association property at any time, nor shall any use or practice
                be allowed which is a source of annoyance to occupants of Units or which interferes with the peaceful possession or
                proper use of the Condominium and/or Association property by its Residents, Visitors or family members. No activity
                specifically permitted by the Condominium Documents or these Rules shall be deemed to be a violation of this section.

            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'><b />) Should Management receive a complaint of excessive noise created by the sliding of the balcony doors, Management
                has the right to investigate this matter. If it is determined that the sliding door is defective, thus creating a nuisance, the
                Unit Owner must have this repaired at his or her expense, within 30 calendar days of being provided written notice. If
                the Unit Owner fails to correct the situation, the Association shall repair the rolling mechanism of the sliding glass
                door(s) and back-charge the Unit Owner the actual cost. The acceptable noise level is 40 decibels (dB) or less.</p>

            {/* ///////////// rule 31 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 31: SOUND TRANSMISSION BETWEEN FLOORS TO THE APARTMENT BELOW:</h1>


            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Where floors are not covered with carpet and rugs, protective sound pads, such as felt, must be adhered to the bottoms
                of the legs of all moveable furniture to eliminate this type of sound transmission to the apartment below. The same noise
                restriction applies to moveable balcony furniture.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Association must approve all flooring to be installed within a specific Unit unless it is carpet. The Association’s
                approval of the proposed flooring installation does not constitute an acknowledgement or warranty that the floor is
                properly installed. It is the Unit Owner’s sole responsibility to ensure that the contractor installs the underlayment and
                the floor materials in compliance with the manufacturer’s specifications and that the floor coverings as installed, result
                in a minimum Sound Transmission Classification (S.T.C.) of 52 & a minimum Impact Isolation Classification (I.I.C.)
                of 52.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) If the floor covering, as installed, is found to be in violation of the aforementioned requirements, the violating Unit
                Owner shall be liable for all costs incurred in testing. In addition, the Association shall be entitled to recover from the
                violating Unit Owner all reasonable attorney’s fees and costs (including but not limited to pre-trial, arbitration,
                mediation, trial and appellate) incurred in testing, removal of floor covering, and all other expenses associated with
                curing the violation, obtaining compliance, and all remedies to obtain compliance.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Any resident (complainant) who believes that a neighboring unit has improperly installed flooring shall notify the
                Association that he/she believes a violation exists. The Association shall investigate the source and severity of the noise
                and advise the complainant of its conclusion. The complainant may, at its own expense, retain an expert to determine
                compliance. If such expert determines that the floor is not in compliance, the complainant shall be entitled to
                reimbursement of testing costs and all costs of compliance from the violating Unit Owner. If the expert determines the
                floor complies with the Association’s requirements, then the complainant shall not be reimbursed for any costs, including
                the costs of the expert. If the complainant does not retain an expert, the Association shall be under no obligation to take
                any further action regarding the noise, other than its initial investigation.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Any owner seeking approval for installation of flooring other than carpeting shall execute appropriate documentation
                setting forth the agreement in connection with this rule.</p>

            {/* ///////////// rule 32 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 32: ENFORCEMENT OF RULES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All regulations regarding the common areas, including the beach, shall be enforced by building management; and, if
                necessary, by the Sunny Isles Police Department.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) For the most part, the first time a rule is broken, management shall notify the Resident and/or Owner. For the second
                and subsequent times, a daily fine of $100.00 will be imposed, up to the maximum amount permitted by law for each
                day of a continuing violation. If the problem continues, any other action the Board deems necessary will be taken,
                including, but not limited to legal action. If litigation is necessary to enforce these rules, the Unit Owner shall be liable
                for all legal fees and costs incurred by the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Every Owner, Resident or Guest/Visitor, their relatives, friends, employees, contractors and service worker shall
                comply with these Rules and Regulations as set forth herein, and all rules and regulations which from time to time may
                be adopted, and the provisions of the Declaration, By-Laws and Articles of Incorporation of the Association, as amended
                from time to time. Failure to so comply shall be grounds for action, which may include, without limitation, an action to
                recover sums due for damages, injunctive relief, or any combinations thereof. In addition to all other remedies, in the
                sole discretion of the Board of Directors of the Association, a fine or fines may be imposed upon an Owner for failure, <br /><br />

                to comply with any covenant, restriction, rule or regulation herein or the Declaration, Articles of Incorporation or By-
                Laws, provided the following procedures are adhered to.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d)The party against whom the fine was imposed has the right to a hearing in front of the Grievance Committee (or a
                Member of the Association if a committee does not exist) to dispute the fine. At the hearing, which shall be scheduled
                with at least 14 days’ advanced notice to the owner, the Grievance Committee shall be given a copy of the fine and all
                supporting documentation, if any, in support of the Association claim; including, the provisions of the declaration,
                association bylaws or association rules which have allegedly been violated.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) At the hearing the Unit Owner shall have an opportunity to present evidence to the Grievance Committee who shall hear reasons why penalties should not be imposed. The party against whom the fine may be levied shall have an opportunity to respond, to present evidence, and to provide written and oral argument on all issues involved and shall have an opportunity at the hearing to review, challenge, and respond to any material considered by the committee. A written decision of the Grievance Committee shall be submitted to the Resident following the meeting.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) The Board of Directors may impose fines against the applicable Resident, up to the maximum amount permitted by
                law.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Each separate incident, which is grounds for a fine, shall be the basis of one separate daily fine.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Fines shall be paid not later than thirty (30) days after notice of the imposition thereof unless a lesser period is required
                by law.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Complaints or concerns about violations of the Rules and Regulations of the Pinnacle Condominium Association will
                only be considered in written form and must be filed with Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) The violations of the Rules and Regulations must include: (i) the name of the Resident or Visitor in violation of a rule
                or regulation, (ii) the rule or regulation that was allegedly violated, (iii) a description of the violation including date and
                time it was noticed, (iv) any photographs, videos or witnesses in support of the violation and (v) any communication
                that may have happened with the violating party prior, during or after the violation occurred.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Management will be responsible for investigating a reported violation as well as any violations observed or reported
                by Pinnacle staff.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) If Pinnacle Management or the Board believes a violation has taken place, a warning notice will be sent to the alleged
                violator and the Unit Owner informing them of the alleged violation and requesting that they take corrective action
                within a certain period. If no action is taken within the cure period, a fine will be imposed against the violator or the unit
                owner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) At the Board’s sole discretion, the Association may issue a fine and opportunity for hearing without first sending a
                warning.</p>

            {/* ///////////// rule 33 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 33: NEW RULES OR RULES CHANGES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Proposed rules or rules changes for the Association will only be considered in written form.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Rules & Regulations Proposal Form must include: (i) the printed name and signature of the Unit Owner submitting
                the proposal, (ii) the rule or regulation that is proposed, (iii) a detailed justification for the proposed rule including
                problems it would resolve, (iv) the name, unit number and signature of all Unit Owners who support the new proposed
                rule or regulation and (v) what would be the expense, if any, to the Pinnacle Condominium Association for implementing
                the proposal or developing a system necessary to enforce the proposal.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) The form is to be filed with the Pinnacle Management office and subject to Board approval.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Unit Owners who submit proposals for new rules and regulations will be notified at least 48-hours in advance of the
                Board Meeting date and time, when such rule and/or regulation proposal will be discussed.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Action on proposed rules and regulations will be accordance with the By-Laws of the Pinnacle Condominium
                Association Documents and these rules.</p>

            {/* ///////////// rule 34 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 34: LEASING RESTRICTIONS AND RENTAL PROCEDURES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No lease shall be for less than 6 consecutive months, plus 1 day. No more than 2 persons per bedroom will be allowed
                to lease and occupancy a Unit. The Association requires a Security Deposit from the unit owner, in the amount of
                $5,000.00. The Security Deposit will be held by the Association and shall be used to offset damages by Renter to any common areas of the building and/or applied towards any fines issued to the Renter or applied against outstanding maintenance dues from the owner. If a tenant moves out before the scheduled lease termination date (except for a valid reason), then the unit owner cannot lease the unit again before the scheduled lease termination date; and
                the security deposit will be refunded within 30 days from the scheduled lease termination date. No more than two
                (2) leases per calendar year will be allowed.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) All prospective Renters shall provide fully completed rental applications and pay the Association a non-refundable
                application fee of $100.00 per adult applicant. Officially married couples, and a parent with a child or children, count as
                one (1) person for application purposes. Criminal background checks and financial background checks will be run on all
                prospective adult Renters, at their expense. The Association reserves the right to disapprove any lease, in the event the
                prospective Renter (including officers, managers, directors and shareholders of a prospective corporate Renter) has a
                criminal record, or for any other reason. A lease will not be renewed if Renter acquires a criminal record during the term
                of the lease or if Renter has caused damages to the Association or has violated any of the rules and regulations.
                International prospective Renters must provide an “All Clear Letter” from the police department in their home city,
                indicating that the prospective Renters do not have a criminal record involving any felony conviction or registered sex
                offender status. Those letters must be professionally translated into the English language, at the prospective Renter’s
                expense, by an US-certified professional translator. All background criminal checks will be run through Interpol as well.
                All leases are further subject to the Screening Guidelines of the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) It is strictly prohibited to advertise Units for lease on Airbnb or any similar website or publication that promotes daily,
                weekly, or monthly rentals, unless such listing is for a period of at least six (6) consecutive months, plus 1 day. A fine
                of $100 per day, up to the maximum permitted by law, for each occurrence, will be imposed to any Unit Owner, whose
                Unit is being promoted for daily, weekly or monthly lease, regardless of who placed the ad, or if the Unit is being leased
                for less than 6 months or if the Unit is being leased without following proper procedures as indicated herein.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Leases will not be approved if owner is not current with regular condominium dues or special assessment dues. If a
                lease is approved and afterwards the unit-owner falls behind in payment of regular condominium dues or special
                assessment dues, upon demand, Renters shall be required to immediately pay the Association all rental amounts due to
                the Owner and deduct those payments from the rent payments due to Owner. Failure of a Renter to pay the Association,
                as indicated herein above, will result in deactivation of Renter’s key FOBs, and potential eviction action.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Owners are not allowed to use any of the building amenities or garage parking space(s) while their units are being
                leased, including using their cabanas, storages or any other limited common elements of the Unit.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) All Renters are required to sign an acknowledgment of having received, read and understood all of the Rules,
                Regulations and Restrictions of the Pinnacle.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) The Unit Owner will be responsible and accepts total responsibility and liability for all actions of his/her renters or
                lessees (and their Visitors).
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) The Association reserves the right to interview prospective renters before approving (or disapproving) any Lease.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) After receipt of the complete lease application, the Association, within fourteen (14) calendar days, must either approve
                or disapprove the lease transaction. If approved, the approval shall be stated in a certificate executed by any officer of
                the Association. If rejected, the tenancy or occupancy pursuant to the lease shall not take place.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Only the individual(s) listed on the lease will be processed as applicant(s).
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Sub-Leasing of Units is totally prohibited.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) It is mandatory for renters to obtain Renter’s Insurance, naming the Association as co-insured, with a minimum liability
                coverage of $300,000.00.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Renter’s Visitor(s) are not allowed to stay overnight. Renters are not allowed to register new residents.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) All lease renewals are subject to the Association’s approval. Applications for lease renewals must be made 30 days,
                or more, prior to the expiration date of the current lease. Applicants will be subject to new background checks, at their
                expense.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) Renters are not allowed to have pets of any kind, except for properly licensed service animals.</p>

            {/* ///////////// rule 35 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 35: COMMUNICATION WITH THE BOARD & DOCUMENT REQUEST PROCEDURE</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Every Unit Owner, who desires to speak at a Board Meeting, may do so provided that the Unit Owner has filed a
                written request with the Secretary of the Association not less than 24 hours prior to the scheduled time for
                commencement of the Meeting. A Unit Owner does not have the right to speak with respect to items not specifically
                designated on the Agenda.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Concerns and/or suggestions can be given to the Board in writing. To be included on the agenda the next Board
                Meeting, a written request must be submitted to Management no less than 48 hours prior to the scheduled time of the
                Meeting. <br /> Meeting minutes, contracts and other important documents may be found on the Association’s website. Unit Owner can
                request documents from Management as follows:</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) No more than one (1) written request per 30-day period shall be allowed by any Unit to inspect the official books and
                records of the Pinnacle Condominium, as defined by the Florida Condominium Act, as amended from time to time. All
                written requests must be sent to the Association’s Office by Certified Mail, Return Receipt Requested.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Management shall respond within to all record requests within the time allotted for response within Florida Statutes
                as amended from time to time.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Records can only be inspected during normal business hours. Management shall designate the place for the inspection
                of records within 45 miles from the Association property. Such inspection may be recorded by management and shall
                be conducted under management’s supervision.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Photocopies of records shall be made by a person designated by Management, subject to the availability of the copy
                machine, at a cost to the Unit Owner of $.15 per page for black & white copes or $0.50 per page for color copies. If more
                than 20 copies are requested to be copied, the Association may use an outside copy service, at the expense of the
                requesting Owner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Management shall not copy any records for mailing them to a Unit Owner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Unit Owners inspecting records shall conduct themselves in a businesslike manner.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) No more than one (1) Unit Owner shall be allowed to inspect records at any one time. Third-party agents, such as
                accountants or lawyers, are not allowed to be present during the inspection of records.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Management has the right to suspend the inspection process should any of these rules be in violation by the Unit
                Owner.</p>


            {/* ///////////// rule 36 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 36: IMPACT FEES WHEN REMODELING A UNIT</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) When making any improvements to the Unit, Unit Owners must pay the Association an Impact Fee of one percent
                (1%) of the total value of the improvements to be made to the Unit (including all labor, material, equipment, fixtures
                and appliances), with a minimum of $250 and a maximum of $5,000. All Impact Fees are non-refundable.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Association must approve the improvements before those are made.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) The Sunny Isles Building Department will not issue permits without the Association’s approval.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The Association’s approval may be withheld at its sole and absolute discretion.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) The Association’s approval will not be granted unless the Impact Fee is paid to the Association.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) As a condition of the approval, the Owner shall replace all fire sprinkler heads and RC Connectors, when the
                remodeling cost of the Unit exceeds $100,000.00.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) No work shall commence in any Unit without first obtaining the appropriate building permits from the Authority
                Having Jurisdiction.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Every contractor must be licensed & insured with General Liability (of at least $1 Million) and Workman’s
                Compensation Insurance, naming the Pinnacle Condominium as additional insured/loss payee.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Workman’s Compensation Insurance Exemption shall only be allowed for the owner of the contracting company
                when the work being done is carried out by such owner directly and no one else.</p>

            {/* ///////////// rule 37 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 37: ELECTRIC VEHICLES CHARGING STATIONS & TANKLESS HOT WATER HEATERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Residents that require electric vehicle charging stations within the boundaries of their parking spaces must make a
                written request to Management and pay the total cost to install such station. The electricity for such charging station
                must be separately metered and payable by the Unit Owner. The Unit Owner is responsible for the operation,
                maintenance, and repair of such charging station; as well as liable for damages caused by it. The Association may
                enforce payment of such costs in the same manner as an assessment. If a Unit Owner, or his or her successor, determines
                that the charging station is no longer needed, such unit owner shall be responsible for the costs of removing same. The
                Association may enforce payment of these costs in the same manner as an assessment. There will be a fine of $100 per
                day, for any Electric Vehicle Charging Station installed by a Resident without Board approval. The Association shall
                charge $0.12 per kWh for a metered charger. If a charger is not metered, the charge will be $60 per month. For hybrid
                cars the charge will be $30 per month unless there is a meter.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Tankless Electric Hot Water Heaters are allowed at the sole discretion of the Board. A Unit Owner who desires to
                install a new Tankless Electric Hot Water Heater in his or her unit, must first obtain approval by the Board before
                applying to the City of Sunny Isles Beach for a Building Permit. Installation of Tankless Electric Water Heaters without
                Board authorization or a building permit is not allowed, and it will carry a fine of $100 per day.</p>

            {/* ///////////// rule 37 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 37: ELECTRIC VEHICLES CHARGING STATIONS & TANKLESS HOT WATER HEATERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Residents that require electric vehicle charging stations within the boundaries of their parking spaces must make a
                written request to Management and pay the total cost to install such station. The electricity for such charging station
                must be separately metered and payable by the Unit Owner. The Unit Owner is responsible for the operation,
                maintenance, and repair of such charging station; as well as liable for damages caused by it. The Association may
                enforce payment of such costs in the same manner as an assessment. If a Unit Owner, or his or her successor, determines
                that the charging station is no longer needed, such unit owner shall be responsible for the costs of removing same. The
                Association may enforce payment of these costs in the same manner as an assessment. There will be a fine of $100 per
                day, for any Electric Vehicle Charging Station installed by a Resident without Board approval. The Association shall
                charge $0.12 per kWh for a metered charger. If a charger is not metered, the charge will be $60 per month. For hybrid
                cars the charge will be $30 per month unless there is a meter.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Tankless Electric Hot Water Heaters are allowed at the sole discretion of the Board. A Unit Owner who desires to
                install a new Tankless Electric Hot Water Heater in his or her unit, must first obtain approval by the Board before
                applying to the City of Sunny Isles Beach for a Building Permit. Installation of Tankless Electric Water Heaters without
                Board authorization or a building permit is not allowed, and it will carry a fine of $100 per day.</p>


            {/* ///////////// rule 38 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 38: ONLINE VOTING & COMMUNICATION</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) To the extent permitted by law, all matters that require a vote of the Owners shall be conducted on-line. Owners,
                who wish to cast a physical vote/ballot, instead of voting on-line, will be directed on how to complete this process.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Email is the preferred mode of communication between the Association and the Unit Owners/Residents. Anyone
                who changes his or her email address, or who does not have an email account, must notify the Association, in writing.
                Unless notified, the Association will go on the assumption that Owners & Residents are receiving all electronic mail.</p>

            <img
                src={graph}
                alt=""
                className='md:h-[30rem] mx-auto mt-4 bg-contain h-[auto] w-[95%] md:w-[auto]'
            />

            {/* ///////////// rule 20 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 20: BEACH/POOL CABANAS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No structural changes may be made without the prior written approval of the Board of Directors and the governing municipality.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Kitchens or cooking facilities are not allowed inside the cabanas.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Cabanas can never be used as a living space or slept in overnight, except for the cabanas with interior building entrances.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The use of Pool and Beach Cabanas is limited from dawn to dusk with no overnight use.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Cabanas cannot be rented separate from the condominium unit to which the cabana is appurtenant to. Owners relinquish cabana access rights and all common area use rights upon leasing of their unit.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Cabana owners are responsible for maintenance and repairs of their cabana.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Cabana owners are encouraged to carry insurance against all losses and damages in their cabanas.</p>

            {/* ///////////// rule 21 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 21: USE OF LUGGAGE CARTS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No one, except valet, is permitted to use the valet Bellman (luggage and grocery) carts.</p>

            {/* ///////////// rule 22 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>   RULE 22: ADDITIONS, ALTERATIONS &IMPROVEMENTS TO EXTERIOR LIMITED COMMON AREA</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) There shall be no additions, alterations, or improvements to the exterior limited common areas, without the expressed written approval of the Board of Directors.</p>

            {/* ///////////// rule 23 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 23: CHANGES TO COMMON HALLWAYS (ELEVATOR FOYERS) BETWEEN APARTMENTS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All furniture and/or accessories in the limited common areas on all landings (elevator foyers), between Units, shall be supplied by the Association, according to building standards and Board of Directors’ approval. These items are the property of the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The wall coverings, carpet, furnishings and accessories on each floor cannot be changed, without Management approval.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) A Unit Owner who desires to change anything on his or her elevator foyer must do so at their own cost and expense and only after receiving written consent of the other Unit Owner on that floor; And, upon written approval by Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The Association shall clean the elevator foyers that have been changed by Unit Owners with the approval of the Association, with the following exceptions: polishing or repairing of any flooring, other than carpet installed by the Association; i) repairing or replacing damaged wall coverings; and, ii) replacing specialty lights or light bulbs, unless those light bulbs are provided to Management by the Unit Owners.</p>

            {/* ///////////// rule 24 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 24: PERSONAL PROPERTY</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All personal property of Unit Owners, Residents or Visitors must be stored in their respective Units, assigned storage bins, cabanas, bicycle racks and water-sports storage area. Neither the Association, nor Management, shall be responsible of any personal property of Unit Owners, Residents or Visitors.</p>

            {/* ///////////// rule 25 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 25: TRASH DISPOSAL & FLAMMABLE MATERIALS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No garbage, refuse, trash or rubbish shall be left or disposed of in any area, except in areas designated by the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Disposing of any non-biodegradable items in toilets or sinks is strictly prohibited. Residents who use the plumbing for such purposes will be held financially responsible for any necessary repairs.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Trash shall be disposed of in trash bags through the trash chute located on each elevator foyer. Trash left in hallways, exit stairs or anywhere else in the Common Areas is prohibited.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Boxes and Recyclables must be disposed of in the designated bins located in service level garbage area. Alternatively, Residents may contact the front desk to schedule the removal of Boxes and Recyclables by housekeeping.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) No flammable, combustible or explosive fluids, chemicals or substances shall be kept in any Unit, Common Area of the Association or disposed of down the trash chute. Residents must alert maintenance if any material they are disposing of is flammable, combustible or explosive.</p>

            {/* ///////////// rule 26 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 26: NOISE RESTRICTIONS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No Resident or Visitor shall make or permit any disturbing noises by himself or his family, servants, employees, pets, agents, etc., nor permit any conduct by such persons or pets that will interfere with the rights, comforts or conveniences of other Residents or Visitor.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) No Resident or Visitor shall play or permit to be played any musical instrument, nor operate or permit to be operated a phonograph, television, radio or sound amplifier within the Unit in such a manner as to unreasonably disturb or annoy other Residents or Visitor, regardless of the time of day or night.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) No Unit Owner, Resident or Visitor shall sing or play musical instruments at any time which unreasonably disturbs other Unit Owners, Residents or Visitors.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Between the hours of 10:30 PM and 8:00 AM, volume on home entertainment equipment including such items as televisions, musical instruments and stereos must be kept at a level which does not unreasonably interfere with or otherwise disturb other Owners or Residents. Hallway noises must also be kept to a minimum between these hours.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) No hard-surface floor covering of any type, except for carpeting, may be installed in any Unit without the prior written consent of the Board of Directors. This includes patio and balcony areas.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Construction, assembly, repair or patch work of any type inside or outside units using tools such as hammers, electric or battery-driven drills, saws, scrapers, sanders and any other noise-making instruments – are permitted only between the hours of 9 A.M. to 5 P.M. on weekdays. No such work is permitted on weekends and holidays, as observed by Pinnacle Management, and after 5 P.M. or before 9 A.M. on weekdays. Demolition work is limited to 10 business days for work within a 2-Bedroom Units and 15 business days for work within a 3-bedroom unit. In certain cases, the Board may grant longer working hours to accelerate the completion of a project.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) These rules apply to contractors, repairmen, handymen, mechanics, Owners, Residents, their family and Visitors.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) In a bona fide emergency, the all Residents must immediately notify the front desk of the emergency to allow Contractors or Service Workers to work outside the (above) posted hours. Front Desk must immediately notify Pinnacle Management and/or a member of the Pinnacle Condominium Association Board for immediate evaluation of the emergency.</p>

            {/* ///////////// rule 27 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 27: UNIT EXTERIOR</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Except as permitted by law, a Resident shall not cause anything to be affixed or attached to, hung, displayed or placed on the exterior walls, doors, balconies or windows of the Building. This includes satellite dishes or antennas of any kind.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Notwithstanding the foregoing, any Resident may display one portable removable United States flag in a respectful way.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Curtains and drapes (or linings thereof) which face on exterior windows or glass doors of Units shall be white or off-white in color and shall be subject to disapproval by the Board, in which case they shall be removed and replaced with acceptable items. Curtains colored other than white or off-white must first meet the design criteria set forth by the Association. An architectural modification request form can be obtained from the Association manager’s office. Please fill out and await approval prior to any installation.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Outdoors television and radio antennas are not permitted; nor are electrical wiring or machines that protrude through the walls of a residence.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) No articles other than patio-type furniture and small plants shall be placed on the balconies, patios or other Common Elements. No linens, clothes, clothing, curtains, rugs, mops or laundry of any kind, or other articles shall be shaken or hung from any of the windows, doors, balconies, terraces or other portions of the Condominium or Association property. When watering plants or cleaning balconies, excess water must not runoff to the unit(s) below.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Furniture, umbrellas and plants visible above the height of the railing from the outside of the building are not permitted.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) No mechanical equipment or air conditioning units may be installed by any Resident, without being first approved by Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) No Unit shall have any aluminum foil placed in any window or glass door or any reflective or tinted substance placed on any glass, unless approved, in advance by the Board of Directors in writing. No unsightly materials may be placed on any window or glass door or be visible through such window or glass door.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Residents shall not enclose, nor cover, nor alter balconies and terraces in any way.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Residents shall not affix, paint or cover the exterior windows, walls or doors in any fashion whatsoever.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Loose items cannot be placed on the ledge of balconies or terraces.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) Cooking devices shall not be used on balconies or terraces.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Upon any extended absence all objects must be removed from your balcony or terrace; especially during Hurricane Season.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) No Unit Owner, Resident or Visitor shall permit anything to fall from a window or door of the Condominium or Association Property, nor sweep or throw from the Condominium or Association Property any dirt, water or other substance onto any other balcony or elsewhere in the Building or upon the Common Elements. SMOKERS MUST NEVER throw cigarette butts off their balcony. Please use a heavy, wind-proof container (or 5-gallon bucket of sand filled ½ way with beach sand and a kitty litter scooper) and empty these containers often.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) No unit owner shall cause or allow improvements or changes to any unit, Limited Common Elements, appurtenant to either, Common Elements or Association Property, including but not limited to, painting or other decorating of any nature, installing any electrical wiring, television antenna, machinery, or air conditioning units, which in any manner change the appearance of any portion of the building or the exterior of said unit, without obtaining the prior consent of the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>p) Management must be informed in advance of a unit owner’s intent to install a satellite television antenna in their unit or their balcony. A form must be completed and filed in the Management office, which indemnifies the Pinnacle Condominium Association of any liability for damage, or injury that may be caused by the exterior satellite dish antenna. If approved, the coaxial cable is required to be run through the top most point of the permanently fixed glass window casing, by drilling a 3/8” hole through the casing, making sure to keep away from the glass, pushing the coaxial through the holes, then silicone the area as to prevent water penetration. The coaxial located on the exterior shall be secured in the track of the casing in a nature specified, and secured around the corner wall, to the satellite dish, with specified hardware, as to secure it to the wall and floor. The antenna must be installed upon an area under the exclusive control of the Owner, and in a manner such that it can be removed from its mounting in very high winds and during hurricane warnings. Those residents leaving the Pinnacle for extended periods of time and during hurricane season must remove their dish antenna from the balcony. The antenna must be no larger than 1 meter in diameter, cream color, and cannot be attached to the exterior of the building or any portion of the balcony or railing. The one exception is that if you have tile, on your balcony, a dish may be permanently installed to the tile by using screws no longer than 2 inches. This installation must be under the supervision of the Pinnacle Management. Written permission, with all details, must be submitted to Management in advance.
                The antenna or dish must be mounted in free-standing mounts as described below and cannot extend over the edge of the balcony railing or in any manner that would, in the sole opinion of the Association, create a safety hazard or threat to the integrity of the building surface or structure. Under no circumstances can the satellite extend over the balcony railing. <br /><br />

                The minimum requirements for installing a freestanding exterior satellite antenna are:<br /><br />

                – A pre-poured concrete container with a minimum height of 18” and minimum diameter of 28” will be used on the balcony for the freestanding mount. The container must not be attached to the balcony, walls, windows, doors, or railings.<br />
                – Two poles must be sunk into the container using Quick Crete, or a similar cement product. The first, a large pipe, must be at least 4” in diameter and 12” in height sunk in concrete inside the container. The second, a 1 5/8” in diameter pole that attaches to the antenna, is sunk into the drying concrete inside the larger pipe.<br />
                – The remainder of space in the container should be filled with the cement product (space may be left for decorative rocks or another fill).<br />
                – The height/length of the 1 5/8” pipe for mounting of the dish depends upon the positioning of the unit and the angle needed to be in proper site of the satellite.<br />
                – The one-meter or smaller dish is then mounted to the 1 5/8” pole.<br />
                – A picture will be made by Management of the final installation and placed in the unit’s file.<br /><br />

                Failure to comply with the requirements of this rule may result in the Association having the antenna and all supporting equipment removed at the unit owner’s expense.
            </p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>q) Management must be informed, in advance, when a Unit Owner’ intends to install Film on their windows. Board approval is required before a film is installed.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>r) The Pinnacle Management Office must be informed in advance of a Unit Owner’s intent to install Balcony Retractable Screen Doors. The installation must be under the supervision of Management. An architectural modification request form must be submitted to the Management Office and can be obtained from the Management Office. Once the Unit Owner has completed the application and submitted the forms to the Management Office the Office will then forward the application to the Architectural and Engineering Committee or the Board for approval. Once approval has been granted to the Unit
                Owner, the Unit Owner may begin the installation. The Management Office will require that a photo be taken of the installation once it has been completed. “Balcony Screen Doors” shall mean a Retractable Screen used on the balcony sliding glass doors which shall be permanently affixed or attached in a manner consistent with manufactures specifications as its main purpose or incidental to its main purpose, as protection against ultraviolet radiation to help maintain a stable indoor climate and to prevent insects from flying into the unit, as follows: <br /> <br />

                – The style of the Retractable Screens as adopted by the Pinnacle Condominium Board of Directors shall be as follows:<br /><br />

                – All sliding glass doors (1/4’ tempered glass panels) with access from the balcony are to use retractable Screens also known as Sliding Glass Door Screens.<br /><br />

                – All Retractable screens are to be mounted flush against the sliding glass door frame.<br />
                – Retractable Screens shall be made of vinyl material with one of two colors, clear or a tinted black tone color to conform with the natural tint of the existing tint of the sliding glass door.<br />
                – The aluminum frame color of the retractable screens is to be “white” matching the same color of the existing window frames and balcony railing.<br />
                – Those residents leaving the Pinnacle for extended periods of time and during hurricane season must leave retractable screens in the retracted or open position.<br />
                – All screws used to install screens are to be marine-grade stainless steel.<br />
                – Manufactures installation specifications must be submitted along with architectural modification request form.
            </p>

            {/* ///////////// rule 28 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 28: HURRICANE SEASON & HURRICANE SHUTTERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) In case of a Hurricane Watch, Residents must remove all items from balconies & terraces within 48 hours and firmly place dry towels in the tracks of all sliding doors. Unit Owners will be charged $100 each time an Owner fails to prepare a Unit, if the Association brought in items left on balconies and/or placed dry towels in the tracks of the sliding glass doors. The Association shall not be responsible for any damage to the Unit in the process of preparing a Unit for a Hurricane.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) A Resident who plans to be absent during the hurricane season must prepare the Unit prior to departure, by designating a responsible firm or individual to care for the Unit should a hurricane threaten the Unit, or should the Unit suffer hurricane damage; Therefore, the Association must have on file the names(s) of such firm or individual. Such firm or individual shall be subject to the approval of the Association and must abide by the Pinnacle Rules & Regulations.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) “Hurricane Shutter” shall mean any device, installation, equipment or appliance, whether permanent or <br />
                temporary, affixed or attached in any manner to any portion of the exterior of a building, used, either directly or indirectly, as its main purpose or incidental to its main purpose, as protection against storm damage, water penetration by driven rain or rising water, wind damage or damage from physical objects or projectiles carried by wind or storm.
                The style of hurricane shutters shall be as follows: <br /><br />
                – All doors and windows (1/4” tempered glass panels) with access from the balcony are to use Roll-up Style Shutters also known as Roll down shutters.<br />
                – All hurricane shutters are to be mounted flush against (alongside touching) the sliding glass door and window frame.
                – All hurricane shutters must be able to be opened from the inside.<br />
                – All hurricane shutters shall be made of aluminum material.<br />
                – The color of all hurricane shutters is to be “white” matching the same color of the existing window frames and balcony railing.<br />
                – All hurricane shutters must meet the minimum requirements for hurricane protection under the South Florida Building Code.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) No Hurricane Shutter shall be closed, except during the time necessary to protect the unit from severe storm, water or wind damage. At all other times, the Hurricane Shutter shall remain open. Under no circumstances shall a Hurricane Shutter be closed for any reason, including, but not limited to, security protection or lighting.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) The Hurricane Shutter shall, always, whether open or closed, must be fastened securely in place in accordance with manufacturer, building code and installation requirements.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) The very specific details, for the installation of Hurricane Shutters and the application, are available from Management. Do not purchase Hurricane shutters unless those are specifically approved by Management or the Board.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) In case of hurricane warnings, it is mandatory that hurricane shutters be installed on all pool and beach level cabanas. <br /> <br />

                Because cabanas do not pay a maintenance fee to the Association, the installation and removal of the shutters shall be at the expense of the owner, at a cost of $100 per occurrence, or as otherwise approved by the Board.</p>

            {/* ///////////// rule 29 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 29: INCIDENT AND MAINTENANCE REPORTING</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All Residents are encouraged to report common area water leakage, moisture buildup, the presence of mildew, equipment not operating properly, burnt-out bulbs, etc. From a personal injury standpoint, these reports can include trip and fall hazards or any other possibly unsafe conditions that may have been observed. Our Management welcomes and encourages the report of any of these issues to the front desk or Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) If at any time your Unit is involved in an incident which involves a leak of any sort you must immediately report this incident to the Management Office. As a Unit Owner, Resident or Renter you are responsible to immediately contact an insured water restoration company, who is qualified to make all necessary repairs and treatments to the Unit to prevent any type of mold or mildew from growing. If the Unit Owner, Resident or Renter fails to follow the proper procedures, that Unit Owner, Resident or Renter may be held liable for damages to other units or common areas of the building.</p>

            {/* ///////////// rule 30 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 30: NUISANCES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No nuisances shall be allowed on the Condominium or Association property at any time, nor shall any use or practice be allowed which is a source of annoyance to occupants of Units or which interferes with the peaceful possession or proper use of the Condominium and/or Association property by its Residents, Visitors or family members. No activity specifically permitted by the Condominium Documents or these Rules shall be deemed to be a violation of this section.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Should Management receive a complaint of excessive noise created by the sliding of the balcony doors, Management has the right to investigate this matter. If it is determined that the sliding door is defective, thus creating a nuisance, the Unit Owner must have this repaired at his or her expense, within 30 calendar days of being provided written notice. If the Unit Owner fails to correct the situation, the Association shall repair the rolling mechanism of the sliding glass door(s) and back-charge the Unit Owner the actual cost. The acceptable noise level is 40 decibels (dB) or less.</p>

            {/* ///////////// rule 31 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 31: SOUND TRANSMISSION BETWEEN FLOORS TO THE APARTMENT BELOW:</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Where floors are not covered with carpet and rugs, protective sound pads, such as felt, must be adhered to the bottoms of the legs of all moveable furniture to eliminate this type of sound transmission to the apartment below. The same noise restriction applies to moveable balcony furniture.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Association must approve all flooring to be installed within a specific Unit unless it is carpet. The Association’s approval of the proposed flooring installation does not constitute an acknowledgement or warranty that the floor is properly installed. It is the Unit Owner’s sole responsibility to ensure that the contractor installs the underlayment and the floor materials in compliance with the manufacturer’s specifications and that the floor coverings as installed, result in a minimum Sound Transmission Classification (S.T.C.) of 52 & a minimum Impact Isolation Classification (I.I.C.) of 52.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) If the floor covering, as installed, is found to be in violation of the aforementioned requirements, the violating Unit Owner shall be liable for all costs incurred in testing. In addition, the Association shall be entitled to recover from the violating Unit Owner all reasonable attorney’s fees and costs (including but not limited to pre-trial, arbitration, mediation, trial and appellate) incurred in testing, removal of floor covering, and all other expenses associated with curing the violation, obtaining compliance, and all remedies to obtain compliance.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Any resident (complainant) who believes that a neighboring unit has improperly installed flooring shall notify the Association that he/she believes a violation exists. The Association shall investigate the source and severity of the noise and advise the complainant of its conclusion. The complainant may, at its own expense, retain an expert to determine compliance. If such expert determines that the floor is not in compliance, the complainant shall be entitled to reimbursement of testing costs and all costs of compliance from the violating Unit Owner. If the expert determines the floor complies with the Association’s requirements, then the complainant shall not be reimbursed for any costs, including the costs of the expert. If the complainant does not retain an expert, the Association shall be under no obligation to take any further action regarding the noise, other than its initial investigation.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Any owner seeking approval for installation of flooring other than carpeting shall execute appropriate documentation setting forth the agreement in connection with this rule.</p>

            {/* ///////////// rule 32 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 32: ENFORCEMENT OF RULES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) All regulations regarding the common areas, including the beach, shall be enforced by Building Safety Officers/Courtesy Officers/Hospitality Staff/Front Desk and/or management; and, if necessary, by the Sunny Isles Police Department.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) For the first offense, there will be a written warning to the Resident and/or Owner. For the second offense, a fine will be imposed in the highest amount permitted by law for each day of a continuing violation. If the problem continues, any other action the Board deems necessary will be taken, including, but not limited to legal action. If litigation is necessary to enforce these rules, the Unit Owner shall be liable for all legal fees and costs incurred by the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) Every Owner, Resident or Guest/Visitor, their relatives, friends, employees, contractors and service worker shall comply with these Rules and Regulations as set forth herein, and all rules and regulations which from time to time may be adopted, and the provisions of the Declaration, By-Laws and Articles of Incorporation of the Association, as amended from time to time. Failure to so comply shall be grounds for action, which may include, without limitation, an action to recover sums due for damages, injunctive relief, or any combinations thereof. In addition to all other remedies, in the sole discretion of the Board of Directors of the Association, a fine or fines may be imposed upon an Owner for failure, to comply with any covenant, restriction, rule or regulation herein or the Declaration, Articles of Incorporation or By-Laws, provided the following procedures are adhered to.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d)The party against whom the fine was imposed has the right to a hearing in front of the Grievance Committee (or a Member of the Association if a committee does not exist) to dispute the fine. At the hearing, which shall be scheduled with at least 14 days’ advanced notice to the owner, the Grievance Committee shall be given a copy of the fine and all supporting documentation, if any, in support of the Association claim; including, the provisions of the declaration, association by-laws or association rules which have allegedly been violated.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) At the hearing the Unit Owner shall have an opportunity to present evidence to the Grievance Committee who shall hear reasons why penalties should not be imposed. The party against whom the fine may be levied shall have an opportunity to respond, to present evidence, and to provide written and oral argument on all issues involved and shall have an opportunity at the hearing to review, challenge, and respond to any material considered by the committee. A written decision of the Grievance Committee shall be submitted to the Resident following the meeting.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) The Board of Directors may impose fines against the applicable Resident, up to the maximum amount permitted by law.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Each separate incident, which is grounds for a fine, shall be the basis of one separate fine.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Fines shall be paid not later than thirty (30) days after notice of the imposition thereof unless a lesser period is required by law.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) Complaints or concerns about violations of the Rules and Regulations of the Pinnacle Condominium Association will only be considered in written form and must be filed with Management.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) The violations of the Rules and Regulations must include: (i) the name of the Resident or Visitor in violation of a rule or regulation, (ii) the rule or regulation that was allegedly violated, (iii) a description of the violation including date and time it was noticed, (iv) any photographs, videos or witnesses in support of the violation and (v) any communication that may have happened with the violating party prior, during or after the violation occurred.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Management will be responsible for investigating a reported violation as well as any violations observed or reported by Pinnacle staff.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) If Pinnacle Management or the Board believes a violation has taken place, a warning notice will be sent to the alleged violator and the Unit Owner informing them of the alleged violation and requesting that they take corrective action within a certain period. If no action is taken within the cure period or the alleged violator disputes, in writing, the charge, then the alleged violator will be notified, in writing, of his or her rights under the Pinnacle Condominium Association Documents and these rules. At the Board’s sole discretion, the Association may issue a fine and opportunity for hearing without first sending a warning.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Valid violation reports will be recorded at the meetings of the Rules, Regulations and Communications Committee.</p>

            {/* ///////////// rule 33 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 33: NEW RULES OR RULES CHANGES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Proposed rules or rules changes for the Pinnacle Condominium Association will only be considered in written form.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Rules and Regulations Proposal form will include: (i) the printed name and signature of the Unit Owner or individual submitting the proposal, (ii) the rule or regulation that is proposed, (iii) a detailed justification for the proposed rule or regulation including problems it would resolve, (iv) the printed name and signature of any other Unit Owner or Owners who support the proposed rule or regulation and (v) what would be the expense, if any, to the Pinnacle Condominium Association for implementing the proposal or developing a system necessary to enforce the proposal.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) The form is to be filed with the Pinnacle Management office.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Pinnacle Management will immediately copy the Rules and Regulations Proposal form and deliver it to the Chair of the Rules, Regulations and Communications committee to be included on the agenda for the next possible meeting of the committee.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Management will be responsible for researching and reporting to the Rules, Regulations and Communications committee the feasibility and impact of any proposed rule placed on the agenda for a meeting.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Unit Owners who submit proposals for rules and regulations will be notified at least 48-hours in advance of the first meeting of the Rules, Regulations and Communications committee which will discuss, consider or act on their proposal.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Notwithstanding the above procedure, new proposals for rules and regulations which are first brought to any official meeting of the Rules, Regulations and Communications committee by committee members or, subject to the committee approval, Unit Owners, may be discussed, considered, rejected or passed to the Board of Directors for approval without notification prior to the committee meeting.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Action on proposed rules and regulations will be accordance with the By-Laws of the Pinnacle Condominium Association Documents and these rules.</p>

            {/* ///////////// rule 34 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 34: LEASING RESTRICTIONS AND RENTAL PROCEDURES</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) No lease shall be for less than 6 consecutive months, plus 1 day. No more than 2 persons per bedroom will be allowed to lease and occupancy a Unit. The Association shall require a Security Deposit not to exceed the highest amount permitted by law to be held by the Association, which shall be used in case Renter damages any common areas of the building and/or applied towards any fines issued to the Renter. No more than two (2) leases per calendar year will be allowed.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) All prospective Renters shall provide fully completed rental applications and pay the Association a non-refundable application fee of $100.00 per adult applicant. Officially married couples, and a parent with a child or children, count as one (1) person for application purposes. Criminal background checks and financial background checks will be run on all prospective adult Renters, at their expense. The Association reserves the right to disapprove any lease, in the event the prospective Renter (including officers, managers, directors and shareholders of a prospective corporate Renter) has a criminal record, or for any other reason. A lease will not be renewed if Renter acquires a criminal record during the term of the lease or if Renter has caused damages to the Association or has violated any of the rules and regulations. International prospective Renters must provide an “All Clear Letter” from the police department in their home city, indicating that the prospective Renters do not have a criminal record involving any felony conviction or registered sex offender status. Those letters must be professionally translated into the English language, at the prospective Renter’s expense, by an US-certified professional translator. All background criminal checks will be run through Interpol as well.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) It is strictly prohibited to advertise Units for lease on Airbnb or any similar website or publication that promotes daily, weekly or monthly rentals, unless such listing is for a period of at least 6 consecutive months, plus 1 day. A fine of $100 per day, up to $1000 for each occurrence, will be imposed to any Unit Owner, whose Unit is being promoted for daily, weekly or monthly lease, regardless of who placed the ad, or if the Unit is being leased for less than 3-month terms or if the Unit is being leased without following proper procedures as indicated herein.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Leases will not be approved if owner is not current with regular condominium dues or special assessment dues. If a lease is approved and afterwards the unit-owner falls behind in payment of regular condominium dues or special assessment dues, upon demand, Renters shall be required to immediately pay the Association all rental amounts due to the Owner and deduct those payments from the rent payments due to Owner. Failure of a Renter to pay the Association, as indicated herein above, will result in deactivation of Renter’s key FOBs, and potential eviction action.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Owners are not allowed to use any of the building amenities or garage parking space(s) while their units are being leased, including using their cabanas, storages or any other limited common elements of the Unit.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) All Renters are required to sign an acknowledgment of having received, read and understood all of the Rules, Regulations and Restrictions of the Pinnacle.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) The Unit Owner will be responsible and accepts total responsibility and liability for all actions of his/her renters or lessees (and their Visitors).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) The Association reserves the right to interview prospective renters before approving (or disapproving) any Lease.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) – After receipt of the complete lease application, the Association, within fourteen (14) calendar days, must either approve or disapprove the lease transaction. If approved, the approval shall be stated in a certificate executed by any officer of the Association. If rejected, the tenancy or occupancy pursuant to the lease shall not take place.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Only the individual(s) listed on the lease will be processed as applicant(s).</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>k) Sub-Leasing of Units is totally prohibited.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>l) It is mandatory for renters to obtain Renter’s Insurance, naming the Association as co-insured, with a minimum liability coverage of $300,000.00.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>m) Renter’s Visitor(s) are not allowed to stay overnight.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>n) All lease renewals are subject to the Association’s approval. Applications for lease renewals must be made 30 days, or more, prior to the expiration date of the current lease. Applicants will be subject to new background checks, at their expense.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>o) Renters are not allowed to have pets of any kind.</p>

            {/* ///////////// rule 35/////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 35: COMMUNICATION WITH THE BOARD & DOCUMENT REQUEST PROCEDURER</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Every Unit Owner, who desires to speak at a Board Meeting, may do so provided that the Unit Owner has filed a written request with the Secretary of the Association not less than 24 hours prior to the scheduled time for commencement of the Meeting. A Unit Owner does not have the right to speak with respect to items not specifically designated on the Agenda.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) Concerns and/or suggestions can be given to the Board in writing. To be included on the agenda the next Board Meeting, a written request must be submitted to Management no less than 48 hours prior to the scheduled time of the Meeting.
                Meeting minutes, contracts and other important documents may be found on the Association’s website. Unit Owner can request documents from Management as follows:</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) No more than one (1) written request per 30-day period shall be allowed by any Unit to inspect the official books and records of the Pinnacle Condominium, as defined by the Florida Condominium Act, as amended from time to time. All written requests must be sent to the Association’s Office by Certified Mail, Return Receipt Requested.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) Management shall respond within to all record requests within the time allotted for response within Florida Statutes as amended from time to time.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) Records can only be inspected during normal business hours at the Management office of the Pinnacle Condominium and shall be returned in the same manner as given to the Unit Owner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) Photocopies of records shall be made by a person designated by Management, subject to the availability of the copy machine, at a cost to the Unit Owner of $.15 per page, or in the event of a request for more than 20 copies in total, the Association may use an outside copy service, and the requesting Owner shall be responsible for the actual costs of copying.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>g) Management shall not copy any records for mailing them to a Unit Owner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>h) Unit Owners inspecting records shall conduct themselves in a businesslike manner.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>i) No more than one (1) Unit Owner shall be allowed to inspect records at any one time.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>j) Management has the right to suspend the inspection process should any of these rules be in violation by the Unit Owner.</p>

            {/* ///////////// rule 36/////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 36: IMPACT FEES WHEN REMODELING A UNIT</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) When making any improvements to their Units, all Unit Owners must pay the Association and Impact Fee of one percent (1%) of the total value of intended improvements to be made to the Unit (including all labor, material, equipment, fixtures and appliances), above $10,000.00, with a minimum of $250 and a maximum of $5,000. All Impact Fees are non-refundable.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>b) The Association must approve the improvements before those are made.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>c) The Sunny Isles Building Department will not issue permits without the Association’s approval.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>d) The Association ‘s approval may be withheld at its sole and absolute discretion.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>e) The Association’s approval will not be granted unless the Impact Fee is paid to the Association.</p>
            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>f) As a condition of the approval, the Owner shall replace all fire sprinkler heads and RC Connectors, when the remodeling cost of the Unit exceeds $100,000.00.</p>

            {/* ///////////// rule 37 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 37: ELECTRIC VEHICLES CHARGING STATIONS & TANKLESS HOT WATER HEATERS</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%]'>a) Residents that require electric vehicle charging stations within the boundaries of their parking spaces must make a written request to Management and pay the total cost to install such station. Charging stations must not cause irreparable damage to the Condominium Property, and the electricity for such charging station must be separately metered and payable by the Unit Owner. The Unit Owner installing an electric vehicle charging station is responsible for the costs of installation, operation, maintenance and repair, including, but not limited to, hazard and liability insurance. The Association may enforce payment of such costs in the same manner as an assessment. If a Unit Owner or his or her successor determines that the charging station is no longer needed, such person shall be responsible for the costs of removing same. The Association may enforce payment of these costs in the same manner as an assessment. There will be a fine of $100 per day, up to the maximum permitted by law, for any Electric Vehicle Charging Station installed by a Resident without Board approval. The Association shall charge $0.12 per kWh for a meter charger. If a charger is not metered, the charge will be $60 per month. For hybrid cars the charge will be $30 per month, unless there is a meter; in which case, the cost will be $0.12 per kWh.</p>

            {/* ///////////// rule 38 /////////////////////// */}
            <h1 className='md:mt-8 mt-4 md:text-[1.3rem] text-[1.1rem] font-bold md:w-[80%] w-[90%] mx-auto mb-4 md:mb-8'>RULE 38: ONLINE VOTING</h1>

            <p className='md:text-[1rem] text-[0.8rem] mb-2 md:w-[80%] mx-auto w-[90%] md:mb-8'>a) To the extent permitted by law, all matters that require a vote of the Owners shall be conducted on-line. Owners, who wish to cast a physical vote/ballot, instead of voting on-line, will be directed on how to complete this process.</p>

        </>
    )
}
export default Discipline