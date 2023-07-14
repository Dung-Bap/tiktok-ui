import classNames from 'classnames/bind';
import styles from './ModalLogin.module.scss';
import { useContext, useState } from 'react';
import { modalEnvironment } from '~/context/ModalContext/ModalContext';
import { createPortal } from 'react-dom';
import { FORM_MODAL } from '~/component/Variable/Variable';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ModalLogin() {
    const { setShowModal, showModal } = useContext(modalEnvironment);
    const [hideModal, setHideModal] = useState(false);
    const [history, setHistory] = useState([{ data: FORM_MODAL }]);
    const [show, setShow] = useState(true);
    const current = history[history.length - 1];

    const handleHideModal = () => {
        setHideModal(true);
        setTimeout(() => {
            setShowModal(false);
            setHideModal(false);
            setShow(true);
            if (!show) setHistory((prev) => prev.splice(0, prev.length - 1));
        }, 400);
    };
    return (
        <>
            {showModal &&
                createPortal(
                    <div className={cx('background')}>
                        <div className={cx('wrapper', hideModal ? 'hide' : '')}>
                            <div className={cx('login_container')}>
                                <div className={cx('content')}>
                                    {show && <h2 className={cx('header')}>Log in to TikTok</h2>}
                                    {current.data?.map((item, index) => {
                                        const isParent = !!item.children;
                                        return show ? (
                                            <div
                                                onClick={() => {
                                                    if (isParent) {
                                                        setHistory((prev) => [...prev, item.children]);
                                                        setShow(false);
                                                    }
                                                }}
                                                key={index}
                                                className={cx('container')}
                                            >
                                                <div className={cx('icon')}>{item.icon}</div>
                                                <p className={cx('title')}>{item.title}</p>
                                            </div>
                                        ) : (
                                            'ahihi'
                                        );
                                    })}
                                </div>
                            </div>
                            {show && (
                                <div className={cx('policy')}>
                                    By continuing, you agree to TikTok’s Terms of Service and confirm that you have read
                                    TikTok’s Privacy Policy.
                                </div>
                            )}
                            <div className={cx('footer')}>
                                <span className={cx('text')}>Don’t have an account?</span>
                                <span className={cx('btn')}>Sign up</span>
                            </div>
                            <FontAwesomeIcon className={cx('close_btn')} onClick={handleHideModal} icon={faClose} />
                        </div>
                    </div>,
                    document.body,
                )}
        </>
    );
}

export default ModalLogin;
