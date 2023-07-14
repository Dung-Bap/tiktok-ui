import { createContext, useEffect, useState } from 'react';
import ModalLogin from '~/Modal/ModalLogin/ModalLogin';

export const modalEnvironment = createContext();

function ModalContext({ children }) {
    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
        setShowModal(true);
    };

    useEffect(() => {
        document.body.style.overflow = showModal ? 'hidden' : 'overlay';
    }, [showModal]);

    const value = {
        showModal,
        setShowModal,
        handleShowModal,
    };
    return (
        <modalEnvironment.Provider value={value}>
            {children} <ModalLogin />
        </modalEnvironment.Provider>
    );
}

export default ModalContext;
