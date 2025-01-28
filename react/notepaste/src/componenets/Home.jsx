import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

export const Home = () => {

    const [title, setTitle] = useState("");
    const [value, setValue] = useState('');
    const [searchParams, setSearchParams] = useSearchParams();
    const pasteId = searchParams.get("pasteId");
    const dispatch = useDispatch();
    const allPastes = useSelector((state) => state.paste.pastes);

    useEffect(() => {
        if(pasteId){
          const paste = allPastes.find((p) => p._id === pasteId);
          setTitle(paste.title);
          setValue(paste.content);
        }
    
      }, [pasteId])

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId ||
            Date.now().toString(36),
            createdAt:new Date().toISOString(),
        }   


        if(pasteId){
            //update
            dispatch(updateToPastes(paste));
        }
        else{
            //create
            dispatch(addToPastes(paste));
        }

        //after creation or updation clear
        setTitle('');
        setValue('');
        setSearchParams({});

    }



    return (
        <div>
            <div>
                <input
                    type="text"
                    placeholder="enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} />


                <button onClick={createPaste}>
                    {
                        pasteId ? "Update paste" : "Create My Paste"
                    }
                </button>
            </div>

            <div>
                    <textarea 
                    value={value}
                    placeholder='enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}/>
            </div>

        </div>
    )
}
