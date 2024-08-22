import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./modal.module.css";

interface ModalProps {
  isOpen?: boolean;
  closable?: boolean;
  headerTitle?: string;
  mainContent?: string;
  hasFooter?: boolean;
  buttonFooter?: string;
  modalSize?: string;
  onClose?: () => void;
}

/**
 * Modal component.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {boolean} props.isOpen - Determines whether the modal is open or not.
 * @param {boolean} props.closable - Determines whether the modal is closable or not.
 * @param {string} props.headerTitle - The title of the modal header.
 * @param {string} props.mainContent - The content of the modal.
 * @param {boolean} props.hasFooter - Determines whether the modal has a footer or not.
 * @param {string} props.buttonFooter - The text of the footer button.
 * @param {string} props.modalSize - The size of the modal.
 * @param {function} props.onClose - The function to be called when the modal is closed.
 * @returns {JSX.Element|null} The rendered modal component.
 */
export function Modal(props: ModalProps) {
  const isOpen = Boolean(props.isOpen);
  const closable = Boolean(props.closable);
  const headerTitle = props.headerTitle === undefined ? "" : props.headerTitle;
  const mainContent = props.mainContent === undefined ? "" : props.mainContent;
  const hasFooter = Boolean(props.hasFooter);
  const buttonFooter =
    props.buttonFooter === undefined ? "Close" : props.buttonFooter;
  const modalSize = props.modalSize === undefined ? "medium" : props.modalSize;

  const addHeader = () => {
    return (
      <header className="m-modal-header">
        <p className="m-modal-header__text">{headerTitle}</p>
        {closable ? (
          <button
            role="button"
            className="m-modal-header__button"
            onClick={props.onClose}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : null}
      </header>
    );
  };

  const addFooter = () => {
    return hasFooter ? (
      <footer className="m-modal-footer">
        <button
          role="button"
          className="m-modal-footer__button"
          onClick={props.onClose}
        >
          {buttonFooter}
        </button>
      </footer>
    ) : null;
  };

  return isOpen ? (
    <dialog className="m-modal">
      <div className={`m-modal-content ${modalSize}`}>
        {addHeader()}
        <section className="m-modal-main">
          <p className="m-modal-main__text">{mainContent}</p>
        </section>
        {addFooter()}
      </div>
    </dialog>
  ) : null;
}
