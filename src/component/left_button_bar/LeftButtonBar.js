import React, {useState} from 'react';
import './LeftButtonBar.css'
import LeftBarButton from './LeftBarButton';
import AddItemDialog from './AddItemDialog';

/**
 * Left (blue) bar with logo and bottom img
 * */
const LeftButtonBar = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCloseProject = () => {
    localStorage.removeItem("project")
    localStorage.removeItem("projectGoal")
    localStorage.removeItem("projectId")
    window.location.reload()
  }

  return (
    <div>
      <div className="left-button-bar">
        <div className="upper-images">
          <img id="logo" src={process.env.PUBLIC_URL + '/svg/' + 'logo' + '.svg'} onClick={() => window.location.replace("/")}/>
          <img id="add" src={process.env.PUBLIC_URL + '/svg/' + 'plus_add' + '.svg'} onClick={handleOpen}/>
        </div>
        <div className="bottom-images">
          <div className="help-and-avatar">
            <div className="img-and-menu">
              <img id="user-avatar"/>
              <div className="user-popover-menu">
                <LeftBarButton children={"Close project"} action={handleCloseProject} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <AddItemDialog open={open} handleClose={handleClose}/>
    </div>
  )
}

export default LeftButtonBar
