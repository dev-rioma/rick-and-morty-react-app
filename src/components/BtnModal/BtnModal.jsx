import React, { useState, useContext } from "react";
import { ApiContext } from "../../context/Apicontext";
import GenderModal from "../Filter/Category/Gender/GenderModal";
import SpeciesModal from "../Filter/Category/Species/SpeciesModal";
import StatusModal from "../Filter/Category/Status/StatusModal";
import Modal from "../Modal/Modal";

import iconFilterBtn from '../../assets/filter_list_24px.svg'
import CloseIcon from '../../assets/close_24px.svg'

const BtnModal = () => {
  const { setPage, status, setStatus, gender, setGender, species, setSpecies } = useContext(ApiContext)
  const [ModalActive, setModalActive] = useState(false);
  const [StatusFilter, setStatusFilter] = useState("");
  const [GenderFilter, setGenderFilter] = useState("")
  const [SpeciesFilter, setSpeciesFilter] = useState("")

  
  return (
    <>
      <div className="flex justify-center">
        <button
          className="bg-cyan-100 p-4 flex justify-between gap-16 items-center shadow-lg "
          onClick={() => setModalActive(!ModalActive)}
        >
          <img src={iconFilterBtn} alt="iconS"/>
          <p className="mr-6">ADVANCED FILTERS</p>      
        </button>
      </div>
      <Modal ModalActive={ModalActive} setModalActive={setModalActive}>
        <div className="flex flex-colum gap-2 pb-4">
          {status === "" ? (
            <></>
          ) : (
            <div className="flex gap-4 bg-cyan-100 rounded text-center w-fit p-2">
              {status}
              <img src={CloseIcon} alt="closegap" onClick={()=>{setStatus("")}}/>
            </div>
          )}
          {gender === "" ? (
            <></>
          ) : (
            <div className="flex gap-4 bg-lime-100 rounded text-center w-fit p-2">
              {gender}
              <img src={CloseIcon} alt="closegap" onClick={()=>{setGender("")}}/>
            </div>
          )}
          {species === "" ? (
            <></>
          ) : (
            <div className="flex gap-4 bg-red-300 rounded text-center w-fit p-2">
              {species}
              <img src={CloseIcon} alt="closegap" onClick={()=>{setSpecies("")}}/>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4">
          <StatusModal setStatusFilter={setStatusFilter} />
          <GenderModal setGenderFilter={setGenderFilter}/>
          <SpeciesModal setSpeciesFilter={setSpeciesFilter}/>
          <div className="flex justify-center">
            <button
              className="bg-cyan-100 w-full h-8 rounded text-blue-700 shadow-xl"
              onClick={() => {
                setPage(1);
                setStatus(StatusFilter);
                setGender(GenderFilter);
                setSpecies(SpeciesFilter);
              }}
            >
              APPLY
            </button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default BtnModal;