import React, { useState, useContext } from "react";
import { AppContext } from "../../context/AppContext";
import EditBudget from "../EditBudget/EditBudget";
import ViewBudget from "../ViewBudget/ViewBudget";

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    dispatch({
      type: "CHANGE_BUDGET",
      payload: value,
    });
    setIsEditing(false);
  };

  return (
    <div class="alert alert-secondary p-3 d-flex align-items-center justify-content-between">
      {isEditing ? (
        <EditBudget handleSaveClick={handleSaveClick} budget={budget} />
      ) : (
        <ViewBudget handleEditClick={handleEditClick} budget={budget} />
      )}
    </div>
  );
};

export default Budget;
