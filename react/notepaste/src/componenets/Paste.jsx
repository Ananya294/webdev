import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
export const Paste = () => {

    const pastes = useSelector((state) => state.paste.pastes);

    const [searchTerm, setSearchTerm] = useState('');
    const dispatch = useDispatch();

    const filteredData = pastes.filter(
        (paste) => paste.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    function handleDelete(pasteId) {
        dispatch(removeFromPastes(pasteId));
    }

    return (
        <div>
            <input type="search"
                placeholder='search here'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} />

            <div>
                {
                    filteredData.length > 0 && filteredData.map((paste) => {
                        return (
                            <div key={paste?._id}>
                                <div>
                                    {paste.title}
                                </div>
                                <div>
                                    {paste.content}
                                </div>
                                <div>
                                    
                                    <button>
                                    <a href={`/?pasteId=${paste?._id}`}>edit</a>                                        
                                    </button>
                                   
                                    
                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>view</a>
                                    </button>

                                    <button onClick={() => handleDelete(paste?._id)}>delete</button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste?.content)
                                        toast.success("copied to clipboard")
                                    }}>copy</button>
                                    <button>share</button>

                                </div>
                                <div>{paste.createdAt}</div>
                            </div>

                        )
                    })
                }
            </div>


        </div>
    )
}
