import React from "react";
import "./index.scss";

export default class PopupModule extends React.PureComponent {
  componentDidMount() {}
  render() {
    const { title, boby, close } = this.props;
    return (
      <div className="popupModule-wrap">
        <div className="popupModule-mask"></div>
        <div className="popupModule-box" onClick={close}>
          <div
            className="popupModule"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="popupModule-content">
              <div className="popupModule-body">
                <div className="popupModule-header">
                  {close ? (
                    <svg
                      className="ico svg-icon"
                      aria-hidden="true"
                      onClick={close}
                    >
                      <use xlinkHref="#iconxia_down"></use>
                    </svg>
                  ) : null}
                  <span>{title || "详情"}</span>
                </div>
                <div className="popupModule-main">{boby}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
