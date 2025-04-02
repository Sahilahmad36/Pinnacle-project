import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [showDropDown, setShowDropDown] = useState(false);
  const [insuranceDropDown, setInsuranceDropDown] = useState(false);
  const [mobileViewDropDown, setMobileViewDropDown] = useState(false)
  const [mobileViewInsuranceDropDown, setMobileViewInsuranceDropDown] = useState(false)
  const dropdownRef = useRef(null)

  const handleChange = () => {
    setMenu(!menu);
  };

  const closeMenu = () => {
    setMenu(false);
  };
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  /////////////// show drop down condition //////////

  const handleShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropDown(false);
        setInsuranceDropDown(false)
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  /////////// insurance dropdown condition /////////////

  const handleInsuranceDropDown = () => {
    setInsuranceDropDown(!insuranceDropDown)
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 md:bg-opacity-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)] "
    >
      <div>
        <div className="flex flex-row justify-between p-5 px-5 text-white"
          onClick={scrollToTop}
        >
          <nav className="hidden md:flex flex-row items-center justify-center text-lg font-medium gap-8 w-full">
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Home
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/about-us"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              About Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/amenities"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Amenities
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>

            <Link
              to="/floor-plan"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Floor Plans
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/life-style"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Lifestyle
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Contact Us
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            <p
              className="group relative  cursor-pointer gap-1 flex items-center hover:text-brightColor"
              ref={dropdownRef}
              onClick={handleShowDropDown}
              onMouseEnter={() => { setShowDropDown(true), setInsuranceDropDown(false) }}
            >
              Forms & Rules
              <FaChevronDown
                className={`transform transition-transform duration-300 ${showDropDown ? 'rotate-180' : ''}`}
              />
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </p>


            {/* /////////////// dropdown code start //////////////// */}
            {
              showDropDown ?
                <div className={`group2 absolute grid grid-cols-3 gap-2  left-[10vw] top-[100%] px-4 py-5  bg-black   bg-opacity-60 'w-[80vw]'`}
                  ref={dropdownRef}
                >
                  <Link
                    to="/leaseRenewalApplicationForm"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Lease Renewal Application Form
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <Link
                    to="/architecturalModificationForm"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Architectural Modification Form
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <Link
                    to="/commonAreaHallwayModification"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Common-Area Hallway Modification Form
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <Link
                    to="/residentRegistrationForm"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Resident Registration Form
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <Link
                    to="/windMitigationReport"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Wind Mitigation Report
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <Link
                    to="/petRegitrationForm"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Pet Registration Form
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <a
                    href="/CondominiumDocuments.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Condominium Documents
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </a>
                  <Link
                    to="/discipline"
                    spy={true}
                    smooth={true}
                    duration={500}
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Rules & Regulations
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </Link>
                  <a
                    href="/live-sheet.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setShowDropDown(false)}
                  >
                    <span className="md:text-[1rem] relative group hover:text-brightColor cursor-pointer">
                      Lease And Purchase Applications.
                      <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-[auto]"></span>
                    </span>
                  </a>
                </div>
                : null
            }
            {/* /////////////// dropdown code end //////////////// */}
            <Link
              to="/residentsOnly"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Residents Only
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link>
            {/* <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="group relative inline-block cursor-pointer hover:text-brightColor"
            >
              Notices
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
            </Link> */}
            <p
              className="group relative cursor-pointer hover:text-brightColor gap-1 flex items-center"
              onClick={handleInsuranceDropDown}
              onMouseEnter={() => { setInsuranceDropDown(true), setShowDropDown(false) }}
              ref={dropdownRef}
            >
              Insurance
              <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform group-hover:scale-x-100"></span>
              <FaChevronDown
                className={`transform transition-transform duration-300 ${insuranceDropDown ? 'rotate-180' : ''}`}
              />
              {
                insuranceDropDown ?
                  <div className="flex flex-col gap-2 px-4 py-5 bg-black bg-opacity-70 left-[0%] absolute top-[100%] w-[15vw]"
                    ref={dropdownRef}
                  >
                    <a
                      href="/insurancePdf1.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setInsuranceDropDown(false)}
                    >
                      <span className="md:text-[0.8rem] relative hover:text-brightColor cursor-pointer">
                        Property Insurance
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform hover:scale-x-100"></span>
                      </span>
                    </a>
                    <a
                      href="/insuranePdf2.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setInsuranceDropDown(false)}
                    >
                      <span className="md:text-[0.8rem] relative hover:text-brightColor cursor-pointer">
                        Flood Insurance
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform hover:scale-x-100"></span>
                      </span>
                    </a>
                    <a
                      href="/insurancePdf3.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setInsuranceDropDown(false)}
                    >
                      <span className="md:text-[0.8rem] relative hover:text-brightColor cursor-pointer">
                        COI sample for Vendor
                        <span className="absolute inset-x-0 bottom-0 h-0.5 bg-[#e4b077] transform scale-x-0 origin-left transition-transform hover:scale-x-100"></span>
                      </span>
                    </a>
                  </div> : null
              }
            </p>
            {/* /////////////////// insurance dropdown code start /////////////////// */}

            {/* /////////////////// insurance dropdown code end /////////////////// */}
          </nav>
          <div className="md:hidden flex items-center">
            {menu ? (
              <AiOutlineClose
                size={25}
                onClick={handleChange}
                className="text-white"
              />
            ) : (
              <AiOutlineMenuUnfold
                size={25}
                onClick={handleChange}
                className="text-white"
              />
            )}
          </div>
        </div>

        {/* //////////////////////// mobile view navbar ///////////////////// */}

        {
          menu && <div
            onClick={scrollToTop}
            className={`${menu ? "translate-x-0" : "-translate-x-full"
              } flex flex-col relative bg-black bg-opacity-60 text-white left-0  font-semibold text-lg text-center pt-4 pb-4 gap-4 w-full  transition-transform duration-300 ease-in-out z-40 h-[92vh] md:h-[auto] overflow-scroll`}
          >
            <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Home
            </Link>
            <Link
              to="/about-us"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              About Us
            </Link>
            <Link
              to="/amenities"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Amenities
            </Link>
            <Link
              to="/floor-plan"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Floor Plans
            </Link>
            <Link
              to="/life-style"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Lifestyle
            </Link>
            <Link
              to="/contact"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Contact Us
            </Link>
            <p
              onClick={() => setMobileViewDropDown(!mobileViewDropDown)}
              className="hover:text-brightColor transition-all cursor-pointer flex items-center justify-center gap-1"
            >
              Forms & Rules
              <FaChevronDown
                className={`transform transition-transform duration-300 ${mobileViewDropDown ? 'rotate-180' : ''}`}
              />
            </p>

            {/* ///////// new link add /////////// */}
            {
              mobileViewDropDown &&
              <div className="flex flex-col gap-2">
                <Link
                  to="/leaseRenewalApplicationForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Lease Renewal Application Form
                </Link>
                <Link
                  to="/architecturalModificationForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Architectural Modification Form
                </Link>
                <Link
                  to="/commonAreaHallwayModification"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Common-Area Hallway Modification Form
                </Link>
                <Link
                  to="/residentRegistrationForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Resident Registration Form
                </Link>
                <Link
                  to="/windMitigationReport"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Wind Mitigation Report
                </Link>
                <Link
                  to="/petRegitrationForm"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  PET REGISTRATION FORM
                </Link>
                <a
                  href="/CondominiumDocuments.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Condominium Documents
                </a>
                <Link
                  to="/discipline"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Rules & Regulations
                </Link>
                <a
                  href="/live-sheet.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brightColor transition-all cursor-pointer text-sm"
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Lease And Purchase Applications.
                </a>
              </div>
            }

            {/* //////////// */}
            <Link
              to="/residentsOnly"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Residents Only
            </Link>
            {/* <Link
              to="/"
              spy={true}
              smooth={true}
              duration={500}
              className="hover:text-brightColor transition-all cursor-pointer"
              onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
            >
              Notices
            </Link> */}
            <p
              className="hover:text-brightColor transition-all cursor-pointer flex items-center justify-center gap-1"
              onClick={() => setMobileViewInsuranceDropDown(!mobileViewInsuranceDropDown)}
            >
              Insurance
              <FaChevronDown
                className={`transform transition-transform  duration-300 ${mobileViewInsuranceDropDown ? 'rotate-180' : ''}`}
              />
            </p>

            {/* ////////////// new link ////////////// */}
            {
              mobileViewInsuranceDropDown &&
              <div className="flex flex-col gap-2">
                <a
                  href="/insurancePdf1.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brightColor transition-all cursor-pointer text-sm "
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Property Insurance
                </a>
                <a
                  href="/insuranePdf2.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brightColor transition-all cursor-pointer text-sm "
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  Flood Insurance
                </a>
                <a
                  href="/insurancePdf3.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brightColor transition-all cursor-pointer text-sm "
                  onClick={() => { closeMenu(), setMobileViewDropDown(false), setMobileViewInsuranceDropDown(false) }}
                >
                  COI sample for Vendor
                </a>
              </div>
            }
          </div>
        }
      </div>
    </div>
  );
};

export default Navbar;