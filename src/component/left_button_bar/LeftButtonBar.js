import React, {useState} from 'react';
import './LeftButtonBar.css'
import LeftBarButton from './LeftBarButton';
import AddItemDialog from './AddItemDialog';

const LeftButtonBar = () => {

  const [open, setOpen] = useState(false)
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <div className="left-button-bar">
        <div className="upper-images">
          <img id="logo" src={process.env.PUBLIC_URL + '/svg/' + 'logo' + '.svg'}/>
          <img id="add" src={process.env.PUBLIC_URL + '/svg/' + 'plus_add' + '.svg'} onClick={handleOpen}/>
        </div>
        <div className="bottom-images">
          <div className="help-and-avatar">
            <img id="help" src={process.env.PUBLIC_URL + '/svg/' + 'help' + '.svg'}/>
            <div className="img-and-menu">
              <img id="user-avatar"/>
              <div className="user-popover-menu">
                <LeftBarButton>
                  Profile
                </LeftBarButton>
                <LeftBarButton>
                  Profile Settings
                </LeftBarButton>
                <LeftBarButton>
                  Log Out
                </LeftBarButton>
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
