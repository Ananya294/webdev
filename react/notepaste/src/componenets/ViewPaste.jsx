import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export const ViewPaste = () => {

    const {id} = useParams();

    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
    console.log("final paste",paste);

  return (
    <div>
         <div>
            <div>
                <input
                    type="text"
                    placeholder="enter title"
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)} />


            </div>

            <div>
                    <textarea 
                    value={paste.content}
                    placeholder='enter content here'
                    disabled
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}/>
            </div>

        </div>
    </div>
  )
}
