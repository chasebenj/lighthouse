import { useState } from "react";

export const NoteEditor = ({
    onSave,
} : {
    onSave: (note: { title: string; content: string }) => void;
}) => {
    const [post, setPost] = useState<string>("");
    const [title, setTitle] = useState<string>("");

    return (
        <div className="card mt-5 border border-gray-200 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="card-title">
                    <input 
                        type="text" 
                        placeholder="Note title"
                        className="input-primary input input-med w-full font-bold" 
                        value={title}
                        onChange={(e) => setTitle(e.currentTarget.value)}
                    />
                </h2>
                <input 
                    type="text" 
                    placeholder="Post"
                    className="input-primary input input-med w-full font-bold" 
                    value={post}
                    onChange={(e) => setPost(e.currentTarget.value)}
                />
                <div className="card-actions justify-end">
                    <button 
                        onClick={() => {
                            onSave({
                                title, 
                                content: post,
                            });
                            setPost("");
                            setTitle("");
                        }}
                        className="btn-primary btn"
                        disabled={title.trim().length === 0 || post.trim().length === 0}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};