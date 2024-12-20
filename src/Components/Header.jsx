import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBed, faCalendarDay, faCalendarDays, faCar, faPerson, faPlane, faTaxi } from '@fortawesome/free-solid-svg-icons'
import { DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css';
import { format } from 'date-fns';
import { useNavigate } from 'react-router-dom';
function Header({type}) {
    const [destination, setDestination] = useState("");
    const [openDate, setOpenDate] = useState(false);
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState({
            adult: 1,
            children: 0,
            room: 1,

        });
        const [open, setOpen] = useState(false);
        const handleOption = (name, operation) => {
            console.log(name, operation);
            setOpenOptions((prev)=>{
                return {
                    ...prev,
                    [name]: operation === "i" ? openOptions[name]+ 1: openOptions[name] - 1
            }
            })
        }
        const navigate = useNavigate();
        const handleSearch = () => {
            navigate("/hotel",{state: {destination, date, openOptions}})
        }
    return (
        <div>
            <div className="header">
                <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
                    <div className="headerList">
                        <div className="headerItems active">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Stays</span>
                        </div>
                        <div className="headerItems">
                            <FontAwesomeIcon icon={faPlane} />
                            <span>Flights</span>
                        </div>
                        <div className="headerItems">
                            <FontAwesomeIcon icon={faTaxi} />
                            <span>Airport Taxi</span>
                        </div>
                        <div className="headerItems">
                            <FontAwesomeIcon icon={faCar} />
                            <span>car rentals</span>
                        </div>
                        <div className="headerItems">
                            <FontAwesomeIcon icon={faBed} />
                            <span>Attraction</span>
                        </div>
                    </div>
                 {
                    type !== "list" && <>
                  <h1 className="headerTitle">
                        A lifetime of discounts? It's Genius.
                    </h1>
                    <p className="headerDesc">
                        Get rewarded for your travels – unlock instant savings of 10% or
                        more with a free Lamabooking account
                    </p>
                    <button className="headerBtn">Sign in / Register</button>
                    <div className="headerSearch">
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faBed} className="headerIcon" />
                            <input
                                type="text"
                                placeholder="Where are you going?"
                                className="headerSearchInput"
                                onChange={(e) => setDestination(e.target.value)}
                            />
                        </div>

                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faCalendarDay} className="headerIcon" />
                            <span
                                onClick={() => setOpenDate(!openDate)}
                                className="headerSearchText">
                                {`${format(date[0].startDate, 'dd/MM/yyyy')} to ${format(date[0].endDate, 'dd/MM/yyyy')}`}</span>
                           { openDate && <DateRange
                                className='headerSearchDate'
                                editableDateInputs={true}
                                onChange={item => setDate([item.selection])}
                                moveRangeOnFirstSelection={false}
                                ranges={date}
                                minDate={new Date()}
                                classNames="date"
                            />}
                        </div>
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                            <span onClick={() => {
                                setOpen(!open )
                             }} className="headerSearchText" >{`${openOptions.adult} adult . ${openOptions.children} children . ${openOptions.room} room` }</span>
                         { open && <div className="options">
                                <div className="optionItem">
                                    <span className="optionText">Adult</span>
                                    <div className="optionCounter">
                                        <button disabled={openOptions.adult <= 1} className="optionCounterBtn" onClick={()=> handleOption("adult", "d")}>-</button>
                                        <span className="optionCounterNumber">{openOptions.adult}</span>
                                        <button className="optionCounterBtn" onClick={()=> handleOption("adult", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Children</span>
                                    <div className="optionCounter">
                                        <button disabled={openOptions.children <= 0} className="optionCounterBtn" onClick={()=> handleOption("children", "d")}>-</button>
                                        <span className="optionCounterNumber">{openOptions.children}</span>
                                        <button className="optionCounterBtn" onClick={()=> handleOption("children", "i")}>+</button>
                                    </div>
                                </div>
                                <div className="optionItem">
                                    <span className="optionText">Room</span>
                                    <div className="optionCounter">
                                        <button disabled={openOptions.room <= 1} className="optionCounterBtn" onClick={()=> handleOption("room", "d")}>-</button>
                                    <span className="optionCounterNumber">{openOptions.room}</span>
                                        <button className="optionCounterBtn" onClick={()=> handleOption("room", "i")}>+</button>
                                    </div>
                                </div>
                            </div>}
                        </div>
                        <div className="headerSearchItem">
                            <button className="headerBtn" onClick={handleSearch}> Search</button>
                        </div>
                    </div>
                    </>}
                </div>

            </div>


        </div>
    )
}

export default Header