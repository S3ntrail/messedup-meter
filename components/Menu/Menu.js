import { Popup } from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";

const Menu = () => (
  <div>
    <Popup
      trigger={
        <button type="button" className="bg-gray-900">
          <FontAwesomeIcon icon={faEllipsisV} className="bg-gray-900" />
        </button>
      }
      closeOnDocumentClick
      keepTooltipInside={true}
      overlayStyle={{ position: "relative" }}
      contentStyle={{ backgroundColor: "white", borderRadius: "20px" }}
      arrow={false}
    >
      <div className="m-4">
        <p className="text-black-700 text-lg bg-white">
          <FontAwesomeIcon
            icon={faTrash}
            className="text-black bg-white mr-2"
          />
          Delete
        </p>
      </div>
    </Popup>
  </div>
);

export default Menu;
