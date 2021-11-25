import { Popup } from "reactjs-popup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faEllipsisV, faTrash } from "@fortawesome/free-solid-svg-icons";

const Menu = (props) => {
  const deleteUser = async (id) => {
    const password = props.password
    if (password === "") {
      alert("Enter the secret password. Or we will send in the clown gang");
      return;
    }

    const res = await fetch('/api/user/delete', {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        password,
        id,
      })
    })

    const resText = await res.text();
    if (resText.startsWith("SHAME")) {
      alert("SHAME. BEGONE BEFORE I SEND IN A POLICE ASSAULT");
      return;
    } else {
      alert("SUCCESS. A ROBBER LEFT THE HEIST");
      res.redirect(200, '/')
      return;
    }
  };

  return (
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
          <p
            onClick={() => deleteUser(props.id)}
            className="text-black-700 text-lg bg-white cursor-pointer"
          >
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
};

export default Menu;
