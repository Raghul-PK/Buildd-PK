import React, {useState, useEffect, useRef} from 'react';

import EditNoteIcon from '@mui/icons-material/EditNote';
import CloseIcon from '@mui/icons-material/Close';

const PopupNote = () => {
    const [noteOpen, setNoteOpen] = useState(false);
    const [noteVal, setNoteVal] = useState("");
    const myTextarea = useRef(null);

    const toggleNoteOpen = () => {
      setNoteOpen(!noteOpen);
    };

    return (
      <>
        {!noteOpen && 
          <div onClick={toggleNoteOpen} className="side-icon">
            <EditNoteIcon style={{ fontSize: '50px'}}/>
            <span class="icon-text">Notes</span>
          </div>}
        {noteOpen && 
        <div className='note-pop'>
          <div onClick={toggleNoteOpen} id="note-close-button">
            <CloseIcon style={{ fontSize: '50px'}}/>
          </div>
          <textarea 
            value={localStorage.getItem('note') === null ? 
              "Note: Clear this space and add your ideas here...\n\n" +
              "- Target Audience: Explore more on this ???\n" +
              "- How do companies reach their target audience?\n\n\n" +
              "- How can I join Buildd?\n" +
              "  - Possible ideas\n" +
              "    - Show them your love for Buildding stuff\n" +
              "    - Show them you are a little consistent" :
              localStorage.getItem('note')}

            ref={myTextarea} 
            name="paragraph_text" 
            placeholder='Enter your ideas here...'
            onChange={(event)=>
              {
                console.log(event.target.value);
                setNoteVal(event.target.value);
                localStorage.setItem('note', event.target.value);
              }}></textarea>
        </div>}
      </>
    );
  }; 

  export default PopupNote;