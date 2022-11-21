import './Modal.css'
import CloseIcon from '../../assets/close_24px.svg'


const Modal = ({ children, ModalActive, setModalActive }) => {
  return (  
  <> 
    { ModalActive &&  
    <div className="Overlay w-screen h-screen flex justify-center items-center top-0 left-0 fixed">
      <div className='w-9/12 h-6/12 bg-white relative rounded shadow-black p-6'>
        <div className='modal-header flex flex-column justify-between pb-6'>
          <h1 className='title-filter font-bold text-lg'>Filtros</h1>
          <button onClick={() => setModalActive(false)}>
            <img src={CloseIcon} alt="close" />
          </button>
        </div>
        <div>
         {children}
        </div>
      </div>
    </div>
    } 
  </>  
  );
}

export default Modal;