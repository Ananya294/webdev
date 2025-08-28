import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export const ViewPaste = () => {

    const {id} = useParams();

    const allPastes = useSelector((state) => state.paste.pastes);
    const paste = allPastes.filter((p) => p._id === id)[0];
    console.log("final paste",paste);

  return (
    <div className="min-h-screen p-8 flex items-center justify-center">
         <div className="w-full max-w-4xl outline outline-1 outline-gray-50 rounded-lg">
            <div className="p-6 outline outline-1 outline-gray-50 rounded-t-lg">
                <input
                    type="text"
                    placeholder="enter title"
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full text-2xl font-bold bg-transparent outline-none placeholder-gray-50 text-gray-50"
                />

    
            </div>

            <div className="p-6 outline outline-1 outline-gray-200 rounded-b-lg">
                    <textarea 
                    value={paste.content}
                    placeholder='enter content here'
                    disabled
                    onChange={(e) => setValue(e.target.value)}
                    rows={20}
                    className="w-full bg-transparent outline-none placeholder-gray-50 text-gray-50 font-mono resize-none"/>
            </div>

        </div>
    </div>
  )
}
