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
        <div className="container-inner py-8">
            <div className="mb-8">
                <input type="search"
                    placeholder='search here'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-slate-400" />
            </div>
            <div className="grid gap-4">
                {
                    filteredData.length > 0 && filteredData.map((paste) => {
                        return (
                            <div key={paste?._id}
                                className="rounded-lg shadow-sm p-6 border border-slate-200 hover:shadow-md transition-shadow">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-lg font-medium ">
                                        {paste.title}
                                    </h3>
                                    <span className="text-sm text-slate-500 ml-4">
                                        {new Date(paste.createdAt).toLocaleDateString()}
                                    </span>

                                </div>
                                <div className="mb-4">
                                    <p className="text-slate-600 line-clamp-3">
                                        {paste.content}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-3">

                                    <button>
                                        <a href={`/?pasteId=${paste?._id}`}>Edit</a>
                                    </button>


                                    <button>
                                        <a href={`/pastes/${paste?._id}`}>View</a>
                                    </button>

                                    <button onClick={() => handleDelete(paste?._id)}>Delete</button>
                                    <button onClick={() => {
                                        navigator.clipboard.writeText(paste?.content)
                                        toast.success("copied to clipboard")
                                    }}>Copy</button>
                                    <button
                                    onClick={() => {
                                        navigator.clipboard.writeText(`${window.location.origin}/pastes/${paste?._id}`)
                                        toast.success("Paste link copied")
                                      }}>Share</button>

                                </div>
                            </div>

                        )
                    })
                }
            </div>


        </div>

    )
}
