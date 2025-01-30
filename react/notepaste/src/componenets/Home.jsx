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
        <div className="container mx-auto px-4 py-8 max-w-3xl">
            <div className="flex gap-4 mb-4">
                <input
                    type="text"
                    placeholder="enter title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)} 
                    className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300"
                    />


                <button onClick={createPaste}
                className={`px-6 py-2 rounded-lg font-medium text-white transition-colors duration-300 ${
                    pasteId 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-blue-600 hover:bg-blue-700'
                }`}>
                    {
                        pasteId ? "Update paste" : "Create My Paste"
                    }
                </button>
            </div>

            <div className="mb-6">
                    <textarea 
                    value={value}
                    placeholder='enter content here'
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-300 placeholder-gray-400 font-mono"/>
            </div>

        </div>
    )
}
