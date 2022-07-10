import './alert-pop-up.style.scss';

const AlertPopUp = ({ children, isOpen = false, statusAlert }) => {
  const handlerClick = () =>
    statusAlert({
      isOpen: false,
      message: '',
    });

  return isOpen ? (
    <div className="pop-up-container" onClick={handlerClick}>
      <div className="pop-up">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-alert"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        <span>{children}</span>
        <button onClick={handlerClick}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon-close"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  ) : (
    ''
  );
};

export default AlertPopUp;

/*
<div className={`alert-pop-up ${open.isOpen ? 'open' : 'close'}`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon-alert"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
        />
      </svg>
      <span>{children}</span>

      <button onClick={handlerClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="icon-close"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>*/
